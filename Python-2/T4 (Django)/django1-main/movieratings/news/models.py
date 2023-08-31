from django.db import models

# Create your models here.
class new(models.Model):
    headline=models.CharField(max_length=150)
    descp=models.TextField()
    date=models.DateField()
    def __str__(self):
        return self.headline