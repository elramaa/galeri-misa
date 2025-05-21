from rest_framework import serializers
from .models import *


class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = "__all__"
        read_only_fields = ["id", "created_at", "approved"]
