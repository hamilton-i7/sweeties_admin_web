from rest_framework import serializers
from .models import Category, Product
from utils import constants, errors
from utils.abstract_models import TimestampModel


class TimestampSerializer(serializers.ModelSerializer):
    createdAt = serializers.DateTimeField(source="created_at")
    lastModified = serializers.DateTimeField(source="last_modified")

    class Meta:
        model = TimestampModel
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CreateCategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length=constants.TEXT_MAX_LENGTH,
        error_messages={
            "max_length": errors.MAX_LENGTH_ERROR,
        },
    )

    class Meta:
        model = Category
        fields = ["name"]


class ProductSerializer(TimestampSerializer):
    class Meta:
        model = Product
        exclude = ("created_at", "last_modified")


class CreateProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length=constants.TEXT_MAX_LENGTH,
        error_messages={
            "max_length": errors.MAX_LENGTH_ERROR,
        },
    )
    description = serializers.CharField(
        required=False,
        max_length=constants.LONG_TEXT_MAX_LENGTH,
        error_messages={"max_length": errors.MAX_LENGTH_ERROR},
    )
    price = serializers.DecimalField(
        max_digits=constants.PRICE_MAX_DIGITS,
        decimal_places=constants.PRICE_DECIMAL_PLACES,
        required=False,
    )
    recommended = serializers.BooleanField(required=False)
    imgPath = serializers.CharField(
        required=False,
        max_length=constants.TEXT_MAX_LENGTH,
        error_messages={"max_length": errors.MAX_LENGTH_ERROR},
        source="img_path",
    )
    imgUrl = serializers.CharField(
        required=False,
        max_length=constants.LONG_TEXT_MAX_LENGTH,
        error_messages={"max_length": errors.MAX_LENGTH_ERROR},
        source="img_url",
    )
    category = serializers.UUIDField()

    class Meta:
        model = Product
        fields = (
            "name",
            "description",
            "price",
            "category",
            "recommended",
            "imgPath",
            "imgUrl",
            "category",
        )
