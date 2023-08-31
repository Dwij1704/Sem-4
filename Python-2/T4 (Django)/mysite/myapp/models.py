from django.db import models

class Movie(models.Model):
    title=models.CharField(max_length=100)
    descp=models.CharField(max_length=250)