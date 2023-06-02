from rest_framework.routers import DefaultRouter
from api.views import CategoryViewSet, ProductViewSet, ActivityViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r"categories", CategoryViewSet, basename="category")
router.register(r"products", ProductViewSet, basename="product")
router.register(r"activities", ActivityViewSet, basename="activity")

urlpatterns = [path("api/", include(list(router.urls)))]
