from bs4 import BeautifulSoup
import pandas as pd

soup = BeautifulSoup(
    open(
        "Web Scrapping\\top250.html",
        "r",
        encoding="utf-8",
    )
)
nameYearList = soup.find_all("td", class_="titleColumn")
ratingList = soup.find_all("td", class_="imdbRating")
data = {"Title": [], "Year": [], "Rating": []}
for i in range(len(nameYearList)):
    data["Title"].append(nameYearList[i].find("a").text.strip())
    data["Year"].append(nameYearList[i].find("span").text.strip()[1:-1])
    data["Rating"].append(ratingList[i].find("strong").text.strip())
df = pd.DataFrame(data)
print(df)
