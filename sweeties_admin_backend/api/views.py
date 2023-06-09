from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import (
    CategorySerializer,
    CreateCategorySerializer,
    ProductSerializer,
    CreateProductSerializer,
    ActivitySerializer,
    CreateActivitySerializer,
)
from .models import Category, Product, Activity
from profiles.models import User
from utils import errors


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def create(self, request):
        serializer = CreateCategorySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        category = Category(name=serializer.data.get("name"))
        category.save()
        return Response(
            CategorySerializer(category).data, status=status.HTTP_201_CREATED
        )


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def create(self, request):
        serializer = CreateProductSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            category_id = serializer.data.get("category")
            category = get_object_or_404(Category, id=category_id)
            product = Product(
                name=serializer.data.get("name"),
                description=serializer.data.get("description", ""),
                price=serializer.data.get("price"),
                recommended=serializer.data.get("recommended", False),
                img_path=serializer.data.get("img_path", ""),
                img_url=serializer.data.get("img_url", ""),
                category=category,
            )
            product.save()
            return Response(
                ProductSerializer(product).data, status=status.HTTP_201_CREATED
            )
        except:
            return Response(
                {"detail": errors.CATEGORY_NOT_FOUND}, status=status.HTTP_404_NOT_FOUND
            )


class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()

    def create(self, request):
        serializer = CreateActivitySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_id = serializer.data.get("user")
            user = get_object_or_404(User, id=user_id)
            activity = Activity(
                message=serializer.data.get("message"),
                date=serializer.data.get("date"),
                user=user,
            )
            activity.save()
            return Response(
                ActivitySerializer(activity).data, status=status.HTTP_201_CREATED
            )
        except:
            return Response(
                {"detail": errors.USER_NOT_FOUND}, status=status.HTTP_404_NOT_FOUND
            )
