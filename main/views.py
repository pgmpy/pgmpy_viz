# Create your views here.
from django.views.generic import TemplateView

class DrawGraphView(TemplateView):
    template_name = "index.html"