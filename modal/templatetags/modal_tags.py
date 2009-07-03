# -*- coding: utf-8 -*-

from os.path import join

from django.conf import settings
from django.template import Library

register = Library()

@register.inclusion_tag('modal/modal_head.html')
def modal_html():
    return {
        'modal_media_url': join(settings.MEDIA_URL, 'modal')
    }
