from rest_framework import serializers
from todos import models


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'userId',
            'id',
            'title',
            'description',
        )
        model = models.Todo