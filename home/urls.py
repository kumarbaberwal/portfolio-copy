from django.contrib import admin
from django.urls import path, include
from home import views

admin.site.site_header = "Kumar Admin"
admin.site.site_title = "Kumar Admin Portal"
admin.site.index_title = "Welcome to Kumar Portfolio"

urlpatterns = [
    path('', views.home,name='Home'),
    path("__reload__/", include("django_browser_reload.urls")),
]
