# sendemail/views.py
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect, HttpRequest
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.conf import settings
import json

def emailView(request):
    x = json.loads(HttpRequest.read(request))
    if request.method == 'GET':
        return
    else:
        settings.EMAIL_HOST_PASSWORD='raionzo@25'
        settings.EMAIL_HOST_USER = 'raionzouser@gmail.com'
        name = x['data']['Name']
        from_email = x['data']['Email']
        var_email = x['data']['Email']
        mobile_no = x['data']['MobileNo']
        messages = x['data']['Query']
        try:
            send_mail(from_email, "Name :" +  name + " " + "Mobile :" + mobile_no + " "+ "Message :" + messages, var_email, ['raionzoiarc@gmail.com'])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return redirect('success')

def successView(request):
    return HttpResponse('Success! Thank you for your message.')
