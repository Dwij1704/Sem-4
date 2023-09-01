
from django.contrib import admin
from django.urls import path,include
from movie import views
urlpatterns = [
    path('',views.home,name='home'),
    path('about/',views.about),
    path('signup/',views.signup),
    path('<int:movie_id>',views.detail,name='detail'),
]