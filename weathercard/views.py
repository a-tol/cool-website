from django.shortcuts import render

# Create your views here.
def css(request):
    return render(request, "weathercards_css.css", content_type="text/css")

def ajax(request):
    return render(request, "weathercards_ajax.js", content_type="text/javascript")

def index(request):
    return render(request, "weathercards.html", content_type="text/html")
