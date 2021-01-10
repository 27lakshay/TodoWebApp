from django.db import models

# Create your models here.


class Todo(models.Model):
    userId = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title