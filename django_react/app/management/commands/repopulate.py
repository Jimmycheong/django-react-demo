from django.core.management.base import BaseCommand
from app.models import TVShow
from datetime import datetime
from django.utils import timezone

class Command(BaseCommand):
    def handle(self, *args, **options):
        TVShow.objects.all().delete()

        show_1 = TVShow(
            title="Mr. Robot",
            category="drama",
            seasons=2,
            episodes=24,
        )
        show_1.save()

        show_2 = TVShow(
            title="Stranger Things",
            category="Fantasy",
            seasons=1,
            episodes=8,
        )
        show_2.save()
