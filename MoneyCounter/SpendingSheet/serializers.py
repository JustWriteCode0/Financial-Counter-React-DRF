from .models import Entry, EntryCategory
from rest_framework import serializers


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'entry_status', 'content']


class EntryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EntryCategory
        fields = ['name', 'describe']