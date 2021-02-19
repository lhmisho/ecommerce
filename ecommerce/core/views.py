import json
import threading
from django.conf import settings
from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.template.loader import get_template
from django.views import generic
from haystack.query import SearchQuerySet

from dit_email_addon.api import DitEmailAddon

from .models import CustomForm, CustomFormData

"""Email method for email send operations"""
def send_email_async(data):
    contact_email = getattr(settings, 'CONTACT_EMAIL', 'lokman@divine-it.net')
    DitEmailAddon().send_email_default('lokman@divine-it.net', 'CONTACT_EMAIL', data)
    DitEmailAddon().send_email_default(data['email'], 'REGISTRATION_COMPLETE', data)

def autocomplete(request):
    sqs = SearchQuerySet().autocomplete(title=request.GET.get('q', ''))[:5]
    suggestions = [result.title for result in sqs]
    # Make sure you return a JSON object, not a bare list.
    # Otherwise, you could be vulnerable to an XSS attack.
    the_data = json.dumps({
        'results': suggestions
    })
    return HttpResponse(the_data, content_type='application/json')


class CustomFormDataSubmit(generic.View):

    def post(self, request, *args, **kwargs):
        custom_form_pk = kwargs.get('pk')
        custom_form_obj = get_object_or_404(CustomForm, pk=custom_form_pk)
        user = request.user
        """
        @simple tricks to make a POST data to dict it's also avoid the incoming value as array
        let's say dict(request.POST.dict()) --> efficient way --> request.POST.dict()
        """
        frm_data = request.POST.dict()
        form_data = json.dumps({k: v for k, v in frm_data.items() if k != 'csrfmiddlewaretoken'})
        try:
            CustomFormData.objects.get_or_create(form=custom_form_obj, user=user, form_data=form_data)
            threading.Thread(target=send_email_async, args=[frm_data]).start()
        except:
            raise ValueError("Value Error")
        return HttpResponseRedirect('/')
