from django.db import models
from utils.abstract_models import UUIDModel, TimestampModel
from utils import constants
from json import dumps


class Category(UUIDModel, TimestampModel):
    name = models.CharField(max_length=constants.TEXT_MAX_LENGTH)
    active = models.BooleanField(default=False)

    # Add str representation


class Product(UUIDModel, TimestampModel):
    name = models.CharField(max_length=constants.TEXT_MAX_LENGTH)
    description = models.CharField(max_length=constants.LONG_TEXT_MAX_LENGTH)
    price = models.DecimalField(
        max_digits=constants.PRICE_MAX_DIGITS,
        decimal_places=constants.PRICE_DECIMAL_PLACES,
    )
    recommended = models.BooleanField(default=False)
    active = models.BooleanField(default=False)
    img_path = models.CharField(max_length=constants.TEXT_MAX_LENGTH)
    img_url = models.CharField(max_length=constants.LONG_TEXT_MAX_LENGTH)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return dumps(
            {
                "name": self.name,
                "description": self.description,
                "price": self.price,
                "recommended": self.recommended,
                "active": self.active,
                "img_path": self.img_path,
                "img_url": self.img_url,
                "category": self.category.id,
            }
        )
