from django.db import models
from utils.abstract_models import UUIDModel, TimestampModel
from utils import constants


class Category(UUIDModel, TimestampModel):
    name = models.CharField(max_length=constants.NAME_MAX_LENGTH)
    active = models.BooleanField(default=False)
