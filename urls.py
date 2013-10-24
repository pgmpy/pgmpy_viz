from django.conf.urls import patterns, include, url
from main.views import draw

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^$', draw, name='draw'),
    # url(r'^pgmpy_viz/', include('pgmpy_viz.foo.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
