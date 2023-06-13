import requests, json


def getPollution(apiKey):
    city = input("Enter a city: ")
    req = "q=" + city + "&appid=" + apiKey
    url = "https://api.openweathermap.org/geo/1.0/direct?" + req
    response = requests.get(url)
    cordinates = response.json()
    # print(json.dumps(cordinates, indent=5)) GENERATES Output in JSON format
    print(
        "Longitude: ",
        cordinates[0]["lon"],
        "\nLatitude: ",
        cordinates[0]["lat"],
        "\nState: ",
        cordinates[0]["state"],
        "\nCountry: ",
        cordinates[0]["country"],
    )
    req = (
        "lat="
        + str(cordinates[0]["lat"])
        + "&lon="
        + str(cordinates[0]["lon"])
        + "&appid="
        + apiKey
    )
    url = "https://api.openweathermap.org/data/2.5/air_pollution?" + req
    response = requests.get(url)
    pollution = response.json()
    # print(json.dumps(pollution, indent=5))
    print("\nAir Pollution:")
    print(
        "Current Air Quality: ",
        pollution["list"][0]["main"]["aqi"],
    )
    quality = {1: "Very Bad", 2: "Bad", 3: "Moderate", 4: "Good", 5: "Very Good"}
    print(quality[pollution["list"][0]["main"]["aqi"]])


getPollution("9ef8e21f1c5d7bea97133bd4ad1880dd")
