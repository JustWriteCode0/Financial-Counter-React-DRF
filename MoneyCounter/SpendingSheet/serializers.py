from .models import Entry, EntryCategory
from rest_framework import serializers


class EntryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EntryCategory
        fields = ['id', 'title', 'describe', 'color']

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'category' ,'spent', 'content']