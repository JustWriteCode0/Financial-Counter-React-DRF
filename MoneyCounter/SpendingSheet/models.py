from django.db import models


class Entry(models.Model):
    ENTRY_STATUS = (
        ('without status', '#ffffff'),
        ('can wait', '#52ff33'),
        ('important', '#e6ff40'),
        ('urgently', '#f5bf42'),
    )   
    entry_status = models.CharField(max_length=20, choices=ENTRY_STATUS)
    category = models.ForeignKey('EntryCategory', on_delete=models.PROTECT, null=True, blank=True)
    content = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    period_of_execution = models.DateTimeField(null=True, blank=True)



class EntryCategory(models.Model):
    name = models.CharField(max_length=50)
    describe = models.CharField(max_length=150, null=True, blank=True)