from django.db import models
from django.contrib.auth.models import AbstractUser
from utils.abstract_models import UUIDModel
from utils import constants
from json import dumps


class User(AbstractUser, UUIDModel):
    class Role(models.TextChoices):
        ADMIN = "ADMIN"
        EDITOR = "EDITOR"
        AUTHOR = "AUTHOR"

    username = None
    is_staff = None
    email = models.EmailField(unique=True)
    role = models.CharField(
        max_length=constants.SHORT_TEXT_MAX_LENGTH, choices=Role.choices
    )
    img_path = models.CharField(max_length=constants.TEXT_MAX_LENGTH, blank=True)
    img_url = models.CharField(max_length=constants.LONG_TEXT_MAX_LENGTH, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self) -> str:
        return dumps(
            {
                "email": self.email,
                "role": self.role,
                "date_joined": self.date_joined,
                "is_active": self.is_active,
                "img_path": self.img_path,
                "img_url": self.img_url,
            }
        )
