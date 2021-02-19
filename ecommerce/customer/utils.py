from oscar.apps.customer import utils
from dit_email_addon.api import DitEmailAddon


class Dispatcher(utils.Dispatcher):

    def send_email_messages(self, recipient, messages):
        DitEmailAddon().send_email_raw(recipient, messages['subject'], messages.get('html', messages.get('body')))

