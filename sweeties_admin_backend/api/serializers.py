from rest_framework import serializers
from .models import Category, Product, Activity
from utils import constants, errors
from utils.abstract_models import TimestampModel


class TimestampSerializer(serializers.ModelSerializer):
    createdAt = serializers.DateTimeField(source="created_at")
    lastModified = serializers.DateTimeField(source="last_modified")

    class Meta:
        model = TimestampModel
        fields = "__all__"


class CategorySerializer(TimestampSerializer):
    class Meta:
        model = Category
        exclude = ("created_at", "last_modified")


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
    imgPath = serializers.CharField(
        max_length=constants.TEXT_MAX_LENGTH, required=False, source="img_path"
    )
    imgUrl = serializers.CharField(
        max_length=constants.LONG_TEXT_MAX_LENGTH, required=False, source="img_url"
    )

    class Meta:
        model = Product
        exclude = ("created_at", "last_modified", "img_path", "img_url")


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


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = "__all__"


class CreateActivitySerializer(serializers.ModelSerializer):
    message = serializers.CharField(
        max_length=constants.TEXT_MAX_LENGTH,
        error_messages={"max_length": errors.MAX_LENGTH_ERROR},
    )
    date = serializers.DateTimeField(required=False)
    user = serializers.UUIDField()

    class Meta:
        model = Activity
        fields = "__all__"
