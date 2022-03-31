from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('getpro/', views.get_products, name="products"),
    path('getcat/', views.get_category, name="category"),
    path('getpro/<str:pk>/', views.get_products_by_id, name="productbyid"),
    path('getcat/<str:catname>/',views.get_category_by_name,name="catbyname")
    
    
]