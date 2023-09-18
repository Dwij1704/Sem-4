from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.db import IntegrityError
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from app.models import *
def home(request):
    if request.GET.get("name"):
        name=request.GET.get("name")
        user(username=name).save()
        name=user.objects.all()
        return render(request,'home.html',{'names':name})
    else:
        name=user.objects.all()
        return render(request,'home.html',{'names':name})
def navbar(request):
    return render(request,'navbar.html')
def delete(request,id):
    data=get_object_or_404(article,id=id)
    data.delete()
    return render('/news/')
def detail(request,id):
    if request.method=='GET':
        data=get_object_or_404(article,id=id)
        return render(request,'detail.html',{'data':data})
@login_required
def news(request):
    if request.GET.get("searchTitle"):
        searchTitle=request.GET.get("searchTitle")
        data=article.objects.filter(title__icontains=searchTitle)
        return render(request,'news.html',{'data':data})
    elif request.GET.get("title") and request.GET.get("news"):
        title=request.GET.get("title")
        content=request.GET.get("news")
        article(title=title,content=content).save()
        data=article.objects.all()
        return render(request,'news.html',{'data':data})
    else:
        data=article.objects.all()
        return render(request,'news.html',{'data':data})
def signup(request):
    if request.method == "GET":
        return render(request, "signup.html", {"form": UserCreationForm})
    else:
        if request.POST["password1"] == request.POST["password2"]:
            try:
                user = User.objects.create_user(
                    username=request.POST["username"],
                    password=request.POST["password1"],
                )
                user.save()
                login(request, user)
                return redirect("base")
            except IntegrityError:
                return render(
                    request,
                    "signup.html",
                    {"form": UserCreationForm, "error": "Username already taken"},
                )
        else:
            return render(
                request,
                "signup.html",
                {"form": UserCreationForm, "error": "Password didn't match"},
            )
def logIn(request):
    if request.method=="GET":
        return render(request,'login.html',{'form':AuthenticationForm})
    else:
        user=authenticate(request,username=request.POST['username'],password=request.POST['password'])
        if user is None:
            return render(request,'login.html',{'form':AuthenticationForm,'error':'Invalid credentials'})
        else:
            login(request,user)
            return redirect('base')
def logOut(request):
    logout(request)
    return redirect('base')