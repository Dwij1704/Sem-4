import requests, json


def getCoordinates(apiKey):
    city = input("Enter a city")
    req = "q=" + city + "&appid=" + apiKey
    url = "https://api.openweathermap.org/geo/1.0/direct?" + req
