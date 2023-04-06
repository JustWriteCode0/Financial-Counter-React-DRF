from django.urls import path, include
from .views import EntryViewSet, EntryCategoryViewSet
from rest_framework import routers

EntryRouter = routers.DefaultRouter()
EntryRouter.register(r'entry', EntryViewSet, basename='entry')

CategoryRouter = routers.DefaultRouter()
CategoryRouter.register(r'category', EntryCategoryViewSet, basename='category')

urlpatterns = [
    path('', include(EntryRouter.urls)),
    path('', include(CategoryRouter.urls))
]