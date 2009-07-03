# -*- coding: utf-8 -*-

from django.http import HttpResponseRedirect

class HttpResponseRedirectReq(HttpResponseRedirect):
    """
    Use this subclass of HttpResponseRedirect to persist the is_ajax
    status through the 302 redirects.
    It could possibly persist all the GET params ...

    It will apend a is_ajax GET parameter to the redirected page
    """
    def __init__(self, redirect_to, request=None):
        if request is not None and request.is_ajax:
            redirect_to += ('&', '?')[redirect_to[-1] is '/'] + 'is_ajax=1'
        HttpResponseRedirect.__init__(self, redirect_to)

