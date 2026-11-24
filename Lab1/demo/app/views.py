from django.shortcuts import render

def loading(request):
    return render(request, "HTML/loading.html")

def home(request):
    return render(request, "HTML/home.html")

def login_view(request):
    return render(request, "HTML/login.html")

def register_view(request):
    return render(request, "HTML/register.html")

def galerie(request):
    return render(request, "HTML/galerie.html")

def bootstrap_gallery(request):
    return render(request, "HTML/bootstrap-gallery.html")

def chatbot(request):
    return render(request, "HTML/chatbot.html")

def universities(request):
    return render(request, "HTML/universities.html")