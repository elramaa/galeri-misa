from django.db import models


class Artwork(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    upload_date = models.DateTimeField(auto_now_add=True)
    caption = models.TextField(blank=True, null=True)
    image = models.ImageField()
    contact = models.CharField(max_length=20, blank=True, null=True)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} by {self.artist}"
