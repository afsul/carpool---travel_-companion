from . import views
from django.urls import path


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path("signup/",views.SignupView.as_view(),name="signup"),
    path('userslist/',views.UserList.as_view()),
    path("user_details/<int:pk>/",views.UserProfileInfo.as_view(),name="user_details"),
    path("user_vehicles/<int:user_id>/",views.UserVehicleList.as_view()),
    path("login/", views.LoginView.as_view(), name="login"),
    path('jwt/create/', views.Mytoken_view.as_view(), name='token_obtain_pair'),
    path('jwt/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('jwt/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('otp_send/',views.otp_send,name="otp_send"),
    path('otp_verify/',views.otp_verify,name = "otp_verify"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


]   