from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import login
# Create your views here.
def signup(request):
    return render(request,'usersignup.html',{'form':UserCreationForm})