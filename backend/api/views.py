from rest_framework import viewsets, filters
from rest_framework.response import Response
from .models import *
from .serializers import *


class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.filter(approved=True)
    serializer_class = ArtSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ["upload_date", "title"]
    search_fields = ["title"]
