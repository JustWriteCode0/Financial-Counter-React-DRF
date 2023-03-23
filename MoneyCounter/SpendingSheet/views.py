from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Entry, EntryCategory
from .serializers import EntrySerializer, EntryCategorySerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer