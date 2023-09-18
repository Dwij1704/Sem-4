from django.db import models

# Create your models here.
class user(models.Model):
    username=models.CharField(max_length=100)
    def __str__(self):
        return self.username
class article(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField()
    def __str__(self):
        return self.title