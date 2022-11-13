from django.urls import path
from . import views

#prorities: client and diet functionality

urlpatterns = [
    path('clients/', view=views.clientsList),
    path('clients/<int:id>', views.specificClients),
    path('diet-templates/', views.dietTemplates),
    path('diet-templates/<int:id>', views.specificDietTemplates)
]