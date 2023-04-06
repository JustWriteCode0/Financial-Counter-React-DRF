from django.contrib import admin
from .models import Entry, EntryCategory


admin.site.register(Entry)
admin.site.register(EntryCategory)