import requests, json


def getCoordinates(apiKey):
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
    url = "https://api.openweathermap.org/data/2.5/weather?" + req
    response = requests.get(url)
    weather = response.json()
    print(json.dumps(weather, indent=5))
    print("\nWeather\n")
    print(
        "Longitude: ",
        weather["coord"]["lon"],
        "\nLatitude: ",
        weather["coord"]["lat"],
        "\nWeather: ",
        weather["weather"][0]["main"],
        "\nDescription: ",
        weather["weather"][0]["description"],
        "\nTemperature: ",
        weather["main"]["temp"],
        "\nPressure: ",
        weather["main"]["pressure"],
        "\nHumidity: ",
        weather["main"]["humidity"],
        "\nHumidity: ",
        weather["wind"]["speed"],
        "\nVisibility: ",
        weather["visibility"],
    )


getCoordinates("9ef8e21f1c5d7bea97133bd4ad1880dd")
