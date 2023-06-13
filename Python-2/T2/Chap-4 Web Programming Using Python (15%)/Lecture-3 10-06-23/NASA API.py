import requests, json
import urllib.request
from PIL import Image


def getPictureOfTheDay(apiKey):
    date = str(input("Enter a date in YYYY-MM-DD: "))
    req = "?api_key=" + apiKey + "&date=" + date
    url = "https://api.nasa.gov/planetary/apod" + req
    response = requests.get(url)
    picture = response.json()
    # print(json.dumps(picture, indent=5))
    print("Title: ", picture["title"], "\Description: ", picture["explanation"])
    urllib.request.urlretrieve(
        picture["hdurl"],
        "APOD.png",
    )

    img = Image.open("APOD.png")
    img.show()


getPictureOfTheDay("G3Lby7kMpcFJsg7bmCe5BhVsYk7wRvuciWjr5foX")
