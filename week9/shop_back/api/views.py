from django.shortcuts import render

from django.http import JsonResponse, HttpResponse
from api.models import Product, Category
# Create your views here.

def products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    out = {
        'products': products_json
    }
    return JsonResponse(out)

def product(request, product_id):
    try:
        product = Product.objects.get(id = product_id).to_json()
    except Product.DoesNotExist as e:
        return JsonResponse({'error':str(e)})
    return JsonResponse(product)


def categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    out = {
        'categories': categories_json
    }
    return JsonResponse(out)

def category(request, category_id):
    try:
        category = Category.objects.get(id=category_id).to_json()
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(category)

def category_products(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    products = category.product_set.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False)

