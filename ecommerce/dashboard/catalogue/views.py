from oscar.core.loading import get_model, get_class
from oscar.apps.dashboard.catalogue import views
from ecommerce.core.models import Seo

ProductClass = get_model('catalogue', 'ProductClass')
Product = get_model('catalogue', 'Product')
ProductAttributeValue = get_model('catalogue', 'ProductAttributeValue')
# LinkFormSet = get_class('dashboard.catalogue.forms', 'LinkFormSet')


class ProductCreateUpdateView(views.ProductCreateUpdateView):

    def clean(self, form, formsets):
        """
        Perform any cross-form/formset validation. If there are errors, attach
        errors to a form or a form field so that they are displayed to the user
        and return False. If everything is valid, return True. This method will
        be called regardless of whether the individual forms are valid.
        """
        cleaned_data = form.cleaned_data
        title = cleaned_data['title']
        og_description = cleaned_data['seo_description']
        og_image = cleaned_data['banner_image']
        prod = self.object

        # if '<p>' in og_description:
        #     og_description = og_description.replace('<p>', '')
        # if '</p>' in og_description:
        #     og_description = og_description.replace('</p>', '')
        # if '<ul>' in og_description:
        #     og_description = og_description.replace('<ul>', '')
        #     og_description = og_description.replace('<li>', '')
        #     og_description = og_description.replace('</ul>', '')
        #     og_description = og_description.replace('<li>', '')
        #     og_description = og_description.replace('</li>', '')
        # if '<ol>' in og_description:
        #     og_description = og_description.replace('<ol>', '')
        #     og_description = og_description.replace('<li>', '')
        #     og_description = og_description.replace('</ol>', '')
        #     og_description = og_description.replace('</li>', '')

        seo = Seo.objects.filter(product=prod).first()
        if seo is not None:
            seo.title = title
            seo.description = og_description
            seo.og_image = og_image
            seo.og_title=title
            seo.og_description=og_description
            seo.save()
        else:
            seo = Seo(
                product=prod,
                title=title,
                og_title=title,
                og_image=og_image,
                description=og_description,
                og_description=og_description,

            )
            seo.save()
        return True
