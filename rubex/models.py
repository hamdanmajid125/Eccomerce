from distutils.command.upload import upload
from email.mime import image
from email.policy import default
from statistics import mode
from unicodedata import category
from django import forms
from django.db import models
from datetime import datetime


class Category(models.Model):
    category_id = models.CharField(max_length=20, primary_key=True)
    category_title = models.CharField(max_length=50)
    catimage = models.ImageField(upload_to='categories/image')
    def __str__(self) -> str:
        return self.category_title


class Products(models.Model):
    catlst = []
    catgories = Category.objects.all()
    for i in catgories.iterator():
        catlst.append((i.category_id,(i.category_title)))
    catlst = tuple(catlst)
    pro_title = models.CharField(max_length=50)
    pro_cat = models.CharField(
        default="None", choices=catlst, max_length=50)
    pro_price = models.IntegerField()
    pub_date = models.DateField()
    pro_desc = models.TextField()
    pro_qty = models.PositiveIntegerField(default=1)
    pro_image = models.ImageField(upload_to="shop/image")

    def __str__(self) -> str:
        return self.pro_title


class Orders(models.Model):
    products = models.ManyToManyField(Products, through='Orders_Product')
    cus_name = models.CharField(max_length=50)
    cus_address = models.CharField(max_length=100)
    cus_email = models.EmailField()
    cus_contact_no = models.PositiveIntegerField()
    order_date = models.DateField()


class Orders_Product(models.Model):
    order_id = models.ForeignKey(Orders, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    qty = models.PositiveBigIntegerField()
