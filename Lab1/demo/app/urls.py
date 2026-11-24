from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('loading/', views.loading, name='loading'),
    path('register/', views.register_view, name='register'),
    path('galerie/', views.galerie, name='galerie'),
    path('bootstrap-gallery/', views.bootstrap_gallery, name='bootstrap-gallery'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('universities/', views.universities, name='universities')
]