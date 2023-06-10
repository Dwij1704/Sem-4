import requests


def getCoordinates(apiKey):
    # date = input("Enter a date in YYYY-MM-DD: ")
    req = "api_key=" + apiKey
    url = "https://api.nasa.gov/planetary/apod?" + req
    response = requests.get(url)
    print(response.json())
    # cordinates = response.json()
    # print(
    #     "Longitude: ",
    #     cordinates[0]["lon"],
    #     "\nLatitude: ",
    #     cordinates[0]["lat"],
    #     "\nState: ",
    #     cordinates[0]["state"],
    #     "\nCountry: ",
    #     cordinates[0]["country"],
    # )


getCoordinates("G3Lby7kMpcFJsg7bmCe5BhVsYk7wRvuciWjr5foX")
