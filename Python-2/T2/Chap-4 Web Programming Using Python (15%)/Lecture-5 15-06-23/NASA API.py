import requests, json

# Libraries to Open the image
# import urllib.request
# from PIL import Image


def getPictureOfTheDay(apiKey):
    date = str(input("Enter a date in YYYY-MM-DD: "))
    req = "?api_key=" + apiKey + "&date=" + date
    url = "https://api.nasa.gov/planetary/apod"
    response = requests.get(url, params={"api_key": apiKey, "date": date})  #'count':10
    picture = response.json()
    # print(json.dumps(picture, indent=5))
    if "msg" in picture:
        print("Error Code: ", picture["code"], "\nMessage: ", picture["msg"])
    if type(picture) == list:
        for i in picture:
            print(
                "\n\nDate: ",
                i["date"],
                "\nTitle: ",
                i["title"],
                "\nDescription: ",
                i["explanation"],
                "\nURL:",
                i["hdurl"],
            )
    else:
        print(
            "Title: ",
            picture["title"],
            "\nDescription: ",
            picture["explanation"],
            "\nURL:",
            picture["hdurl"],
        )
        # Code to Open the image
        # urllib.request.urlretrieve(
        #     picture["hdurl"],
        #     "dL4gyzezY9i6U2nedpTFwLbAfXALlvgVcBI9FPcT.png",
        #     "G3Lby7kMpcFJsg7bmCe5BhVsYk7wRvuciWjr5foX.png",
        # )
        # img = Image.open("APOD.png")
        # img.show()


getPictureOfTheDay(input("Enter You API:"))
