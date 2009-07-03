
class CheckAjax(object):
    def process_request(self, request):
        setattr(request, 'is_ajax', 
            'XMLHttpRequest' == request.META.get('HTTP_X_REQUESTED_WITH', '')\
                or request.GET.get('is_ajax', '') == '1')

