import re
from urllib import response
from webbrowser import get
from django.http import HttpResponse
from requests import request

from accounts.models import User
from .models import Copassengers, Ride, Ride_Request
from .serializers import GetRiderInfo, RideSerializer,RideRequestSerializers
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from ride import models
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from django.db.models import Q

# Create your views here.

# create ride


class Ride_create(APIView):
    print("Entered create ride")
    permission_classes = [IsAuthenticated]
    serializer_class = RideSerializer

    def post(self, request):
        print('thi is an experiment on request',request.user.id)
        user = User.objects.get(id=request.user.id)
        print('this is user',user)
        create_ride = RideSerializer(data=request.data)
        print(request.data)
        if create_ride.is_valid():
            create_ride.save(user = user)
            print("this is create ride",create_ride)
            data = create_ride.data
            return Response({'data':data,'status':'success'})
        else:
            print('failed to create ride')
            data = create_ride.errors
            return Response({'data':data,'status':'error'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def get_rides(request):
        print("Entered the function=============>")
        print(request.data)
        print(request.user,"This is request user 121212121212121221212")
        get_list = Ride.objects.filter(source_city=request.data["source_city"],destination_city=request.data["destination_city"],date=request.data["date"])
        # get_list = Ride.objects.all()
        new_list = get_list.filter(~Q(user_id=request.user.id),seat__gte = 1)
        print('this is new list',new_list)
        print("This is listed rides",get_list)
        serializer_class = GetRiderInfo(new_list, many=True)
        return Response(serializer_class.data,status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_rides_object(request,id):
        print("Entered the -----Get function=============>")
        print(request.user,"This is request user 10101101010101101010")
        get_list = Ride.objects.get(id=id)
        print(get_list)
        print(get_list.id,"this is id==============-")
        serializer_class = GetRiderInfo(get_list)
        
        return Response(serializer_class.data,status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_ride_request(request, userID):
    print("Send request entered===============>")
    print(request.user,"This is request user 88888888888888888888")
    from_user = request.user
    print(from_user,"From user")
    id_ride = request.data['rid_id']
    ride_iddd = Ride.objects.get(id=id_ride)
    to_user = User.objects.get(id=userID)

    print(to_user,'to user ++++++++++++++++++++>')
    # ride_session = request.session.get('ride_idd')
    # print(ride_session,"This is ride session=======================0")
    # id_ride  = Ride.objects.get(id=ride_session)

    print(id_ride,"this is ride id-------------000000")
    ride_request = Ride_Request.objects.create(from_user=from_user, to_user=to_user,ride_id = ride_iddd)

    
    print(ride_request)
    if ride_request:
        print("request sent===============>")

        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_all_rides(request):
    print("Entered the function")
    print(request.user.id,"This is request user===================:::")
    ride_request = Ride_Request.objects.filter(to_user = request.user.id)
    
    serializer_class = RideRequestSerializers(ride_request, many=True)
    if ride_request:
        print(ride_request,"This is requested rides")

        return Response(serializer_class.data,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def accept_ride_request(request, requestID):
    print("Accept request entered===============>")
    ride_request = Ride_Request.objects.get(id=requestID)
    print(ride_request,'===================////////')   
    print(request.user,'this is request user')
    if ride_request.to_user == request.user:
        print("Entered if condition 0000000000000")
        # ride_request.to_user.add(ride_request.from_user)
        # ride_request.from_user.add(ride_request.to_user)
        
        copassengers = Copassengers.objects.create(passenger_name = ride_request.from_user, ride = ride_request.ride_id )
        print(copassengers,"Copassengers")

        seat_count = Ride.objects.get(id = ride_request.ride_id.id )
        print(seat_count,"This is seat count------------->")
        seat_count.seat =  seat_count.seat -1
        seat_count.save()

        
        ride_request.delete()   
        
        print("request accepted===============>")

        return Response(status=status.HTTP_201_CREATED)
        
    else:
        ride_request.delete() 
        print("Request Rejected")
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def reject_ride_request(request, requestID):
    print("Reject request entered===============>")
    ride_request = Ride_Request.objects.get(id=requestID)
    print(ride_request,'===================////////')
    print(request.user,'this is request user')
    if ride_request.to_user == request.user:
        print("Entered if condition 0000000000000")
        ride_request.delete()   
        print("request rejected===============>")
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

