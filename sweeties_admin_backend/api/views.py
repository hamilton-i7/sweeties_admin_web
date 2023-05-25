from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import CategorySerializer, CreateCategorySerializer
from .models import Category


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
