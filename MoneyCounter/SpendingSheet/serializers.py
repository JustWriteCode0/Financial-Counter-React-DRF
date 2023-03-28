from .models import Entry, EntryCategory
from rest_framework import serializers


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'spent', 'category', 'content']


class EntryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EntryCategory
        fields = ['name', 'describe']