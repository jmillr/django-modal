from django.conf import settings

def get_base(request):
    return 'base.html' if not request.is_ajax else 'modal/modal.html'

def modal_vars(request):
    """ Add context variables needed for Modal windows """
    return {
        'media_url': settings.MEDIA_URL,
        'extend_from': get_base(request),
        'is_ajax': request.is_ajax,
    }
