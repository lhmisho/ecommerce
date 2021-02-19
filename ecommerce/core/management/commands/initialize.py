from django.core.management.base import BaseCommand, CommandError
from oscar.core.loading import get_model
from django.core.management import call_command


class Command(BaseCommand):
    help = 'Initializes An E-Commerce Project'

    def handle(self, *args, **options):
        call_command("rebuild_index", "--noinput")
        call_command("populate_email_templates", "EMAIL_CHANGED", "ORDER_PLACED", "PASSWORD_CHANGED", "PASSWORD_RESET", "PRODUCT_ALERT", "REGISTRATION")
