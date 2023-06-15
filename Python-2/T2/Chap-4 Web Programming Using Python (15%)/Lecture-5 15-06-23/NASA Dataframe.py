import requests, json
import pandas as pd


def getPictureOfTheDay(apiKey):
    url = "https://api.nasa.gov/planetary/apod"
    response = requests.get(url, params={"api_key": apiKey, "count": 10})  #'count':10
    picture = response.json()
    # print(json.dumps(picture, indent=5))
    df = {"Date": [], "url": []}
    for i in range(len(picture)):
        df["Date"].append(picture[i]["date"])
        df["url"].append(picture[i]["url"])
    df = pd.DataFrame(df)
    print(df)
    # urllib.request.urlretrieve(
    #     picture["hdurl"],
    #     "dL4gyzezY9i6U2nedpTFwLbAfXALlvgVcBI9FPcT.png",
    #     "G3Lby7kMpcFJsg7bmCe5BhVsYk7wRvuciWjr5foX.png",
    # )
    # img = Image.open("APOD.png")
    # img.show()


getPictureOfTheDay(input("Enter You API:"))
