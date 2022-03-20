# Generated by Django 4.0.3 on 2022-03-13 14:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('category_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('category_title', models.CharField(max_length=50)),
                ('catimage', models.ImageField(upload_to='categories/image')),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cus_name', models.CharField(max_length=50)),
                ('cus_address', models.CharField(max_length=100)),
                ('cus_email', models.EmailField(max_length=254)),
                ('cus_contact_no', models.PositiveIntegerField()),
                ('order_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pro_title', models.CharField(max_length=50)),
                ('pro_price', models.IntegerField()),
                ('pub_date', models.DateField()),
                ('pro_desc', models.TextField()),
                ('pro_qty', models.PositiveIntegerField(default=1)),
                ('pro_image', models.ImageField(upload_to='shop/image')),
            ],
        ),
        migrations.CreateModel(
            name='Orders_Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.PositiveBigIntegerField()),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rubex.orders')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rubex.products')),
            ],
        ),
        migrations.AddField(
            model_name='orders',
            name='products',
            field=models.ManyToManyField(through='rubex.Orders_Product', to='rubex.products'),
        ),
    ]