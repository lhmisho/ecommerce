from oscar.apps.shipping import repository, methods
from constance import config
from decimal import Decimal


class Repository(repository.Repository):

    def get_available_shipping_methods(
            self, basket, shipping_addr=None, **kwargs):
        return [
            methods.FixedPrice(
                charge_excl_tax=Decimal(config.STANDARD_SHIPPING_CHARGE),
                charge_incl_tax=Decimal(config.STANDARD_SHIPPING_CHARGE)
            )
        ]
