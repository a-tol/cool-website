from django.shortcuts import render

def index(request):
    return render(request, "index.html", content_type="text/html")

def css(request):
    return render(request, "index.css", content_type="text/css")
