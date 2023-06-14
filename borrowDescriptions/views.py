from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def css(request):
	return render(request, "myfirsthtml_css_options.css", content_type="text/css")

def ajax(request):
	return render(request, "myfirsthtml_ajax_scripts.js", content_type="text/javascript")

def index(request):
	#begin building http response body
	# h = HttpResponse("")
	# #html contents
	# f = open("C:/Users/there/OneDrive/Desktop/DjangoWebAppThatDoesSomething/dndDescriptionBorrower/dndDescriptionBorrower/templates/myfirsthtml.html", "rt")
	# h.write(f.read())
	return render(request, "myfirsthtml.html")

	#accessing api and retrieving json object
	# host = "www.dnd5eapi.co"
	# c = http.client.HTTPSConnection(host, 443)
	# c.request('GET', 'https://www.dnd5eapi.co/api/ability-scores/str')
	# response = c.getresponse()
	# jObject = json.loads(response.read())
	
	# for x in list(jObject):
	# 	h.write(str(x) + ": " + str(jObject[x]) + "<br>")

	# f.close()
	# return h