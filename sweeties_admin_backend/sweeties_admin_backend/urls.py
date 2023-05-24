from rest_framework.routers import DefaultRouter
from api.views import CategoryViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r"categories", CategoryViewSet, basename="category")

urlpatterns = [path("api/", include(list(router.urls)))]
