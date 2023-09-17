from django.contrib import admin
from django.urls import path
from app import views
urlpatterns = [
    path('', views.home, name='lasan'),
    path('about/', views.about, name='about'),
]
