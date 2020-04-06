from django.urls import path

from api.views import products, product, categories, category, category_products


urlpatterns = [
    path('products', products),
    path('products/<int:product_id>/', product),
    path('category/', categories),
    path('category/<int:category_id>/', category),
    path('category/<int:category_id>/products', category_products)
]
