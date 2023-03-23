from django.urls import path, include
from .views import EntryViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'entry', EntryViewSet, basename='entry')

print(router.urls)

urlpatterns = [
    path('', include(router.urls))
]