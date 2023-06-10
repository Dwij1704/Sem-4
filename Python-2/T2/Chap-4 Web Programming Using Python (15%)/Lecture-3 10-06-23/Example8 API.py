import requests


def getCoordinates(apiKey):
    city = input("Enter a city: ")
    req = "q=" + city + "&appid=" + apiKey
    url = "https://api.openweathermap.org/geo/1.0/direct?" + req
    response = requests.get(url)
    cordinates = response.json()
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
    # print(cordinates)


getCoordinates("9ef8e21f1c5d7bea97133bd4ad1880dd")
