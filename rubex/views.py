from ast import Return
from itertools import product
from re import X
from unicodedata import category
from urllib import request

from django.http import HttpResponse
from .serializers import CategoriesSerializer, ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Category, Products

@api_view(['GET'])
def get_products(request):
    products = Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_category(request):
    categories = Category.objects.all()
    serializer = CategoriesSerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_products_by_id(request,pk):
    products = Products.objects.get(id=pk)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def get_category_by_name(request,catname):
    if '-' in catname:
        catname = catname.replace('-',' ')
    category = Category.objects.filter(category_title__iexact=catname)
    for star in category.iterator():
        id = star.category_id
    productsbycat = Products.objects.filter(pro_cat=id)
    serializer = ProductSerializer(productsbycat, many=True)
    return Response(serializer.data)

