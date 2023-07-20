import requests, json
# 9ef8e21f1c5d7bea97133bd4ad1880dd
apiKey=input('Enter Key')
url = "https://api.openweathermap.org/data/2.5/air_pollution"
response = requests.get(url,params={"appid": apiKey, "lon": 72.5797, "lat": 23.0216})
data = response.json()
print(data)