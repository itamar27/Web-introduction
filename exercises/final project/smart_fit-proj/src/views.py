import os
import json

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, logout
from django.http import JsonResponse
from django.conf import settings

from .forms import UserRegisterForm, WorkoutForm


def registration(request):
    if(request.method == 'POST'):
        _form = UserRegisterForm(request.POST)
        if _form.is_valid():
          _form.save()
          return redirect('home')
    else:
        _form = UserRegisterForm()
        return render(request, 'SF/registration.html', {'form': _form})


def home_page(request):
    return render(request, 'SF/index.html')  
    

def worksouts_excercises(request):
    with open(os.path.join(settings.BASE_DIR, 'src', 'static', 'SmartFit', 'js', 'exercises.json')) as json_file:
        return JsonResponse(json.load(json_file), safe=False)

    
def workouts_new(request):
    if request.method == 'POST':
        _form = WorkoutForm(request.POST)
        if _form.is_valid():
            _form.save()
            return redirect('home')
        else:
            print(_form)
    else:
        _form = WorkoutForm()

    return render(request, 'worksouts/new.html', {'form': _form})
    
    
    # if request.method == 'POST':
    #     form = UserRegisterForm(request.POST)
    #     if form.is_valid():
    #        form.save()
    #     return redirect('homePage')
    # else:
    #     form = UserRegisterForm()
