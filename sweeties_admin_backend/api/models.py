from django.db import models
from utils.abstract_models import UUIDModel, TimestampModel
from utils import constants


class Category(UUIDModel, TimestampModel):
    name = models.CharField(max_length=constants.NAME_MAX_LENGTH)
    active = models.BooleanField(default=False)


class Product(UUIDModel, TimestampModel):
    name = models.CharField(max_length=constants.NAME_MAX_LENGTH)
    description = models.CharField(max_length=constants.DESCRIPTION_MAX_LENGTH)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    recommended = models.BooleanField(default=False)
    img_path = models.CharField(max_length=constants.DESCRIPTION_MAX_LENGTH)
    img_url = models.CharField(max_length=constants.DESCRIPTION_MAX_LENGTH)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name
