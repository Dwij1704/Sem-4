from django.contrib import admin
from django.urls import path
from app import views
urlpatterns = [
    path('',views.navbar,name='base'),
    path('home/',views.home, name='home'),
    path('news/',views.news),
    path('detail/<int:id>/',views.detail),
    path('delete/<int:id>/',views.delete),
    path('signup/',views.signup),
    path('login/',views.logIn),
    path('logout/',views.logOut)
]
