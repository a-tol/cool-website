from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("weathercards_ajax.js", views.ajax, name="ajax_file"),
    path("weathercards_css.css", views.css, name="css file")
]