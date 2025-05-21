from django.contrib import admin
from .models import *
from unfold.admin import ModelAdmin
from unfold.contrib.filters.admin import ChoicesRadioFilter
from rest_framework.authtoken.models import TokenProxy
from django.contrib.auth.models import Group


# Register your models here.
@admin.register(Artwork)
class ArtworkAdmin(ModelAdmin):
    list_display = ("title", "artist", "upload_date", "approved")
    list_display_links = ["title"]
    search_fields = ("title", "artist")
    list_filter = ("approved",)
    # list_filter = [("approved", "ChoicesRadioFilter")]
    ordering = ("-upload_date",)
    actions = ["approve_artwork", "disapprove_artwork"]

    @admin.action(description="Approve artwork")
    def approve_artwork(self, request, queryset):
        queryset.update(approved=True)

    @admin.action(description="Disapprove artwork")
    def disapprove_artwork(self, request, queryset):
        queryset.update(approved=False)


admin.site.unregister(TokenProxy)
admin.site.unregister(Group)
