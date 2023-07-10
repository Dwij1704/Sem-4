import requests, json


def getCoordinates(apiKey):
    city = input("Enter a city: ")
    req = "q=" + city + "&appid=" + apiKey
    url = "https://api.openweathermap.org/geo/1.0/direct"
    response = requests.get(url,params={"appid": apiKey, "q": city})
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


getCoordinates("9ef8e21f1c5d7bea97133bd4ad1880dd")
