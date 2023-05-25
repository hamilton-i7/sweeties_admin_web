from rest_framework import serializers
from .models import Category
from utils import constants, errors


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CreateCategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length=constants.NAME_MAX_LENGTH,
        error_messages={
            "max_length": errors.MAX_LENGTH_ERROR,
        },
    )

    class Meta:
        model = Category
        fields = ["name"]
