from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('posts', views.PostViewset )
router.register('users', views.UserViewset )




urlpatterns = [
    path('',include(router.urls))
]
