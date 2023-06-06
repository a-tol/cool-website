from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("myfirsthtml_css_options.css", views.css, name="css_file"),
    path("myfirsthtml_ajax_scripts.js", views.ajax, name="ajax_file")
]