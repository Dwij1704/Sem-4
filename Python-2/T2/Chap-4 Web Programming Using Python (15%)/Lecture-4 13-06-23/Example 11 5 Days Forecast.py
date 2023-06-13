import requests, json
import pandas as pd


def getForecast(apiKey):
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
    url = "https://api.openweathermap.org/data/2.5/forecast?" + req
    response = requests.get(url)
    Forecast = response.json()
    # print(json.dumps(Forecast, indent=5))
    return Forecast
    # print("\nAir Forecast:")
    # print(
    #     "Current Air Quality: ",
    #     Forecast["list"][0]["main"]["aqi"],
    # )
    # quality = {1: "Very Bad", 2: "Bad", 3: "Moderate", 4: "Good", 5: "Very Good"}
    # print("The Quality of air is", quality[Forecast["list"][0]["main"]["aqi"]])


allForecast = getForecast("9ef8e21f1c5d7bea97133bd4ad1880dd")
forecastDict = {}
print(allForecast["list"][0]["dt_txt"])
for i in allForecast["list"]:
    forecastDict[i["dt_txt"]] = {}
    forecastDict[i["dt_txt"]]["date_time"] = i["dt_txt"]
    forecastDict[i["dt_txt"]]["temp"] = i["main"]["temp"]
    forecastDict[i["dt_txt"]]["pressure"] = i["main"]["pressure"]
    forecastDict[i["dt_txt"]]["humidity"] = i["main"]["humidity"]
    forecastDict[i["dt_txt"]]["weather"] = i["weather"][0]["main"]
    forecastDict[i["dt_txt"]]["weather_description"] = i["weather"][0]["description"]
print(forecastDict)
df = pd.DataFrame(forecastDict)
print(df)
df.to_csv("Weather Forecast.csv")
# for i in forecastDict:
#     print("\nWeather on ", i, ":")
#     for j in forecastDict[i]:
#         print(j, ":", forecastDict[i][j])
