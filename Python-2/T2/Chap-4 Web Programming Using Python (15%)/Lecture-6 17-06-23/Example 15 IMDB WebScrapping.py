# Title,Year,Rating
import requests
from bs4 import BeautifulSoup
import pandas as pd

website = "https://www.imdb.com/search/title/?release_date=2018-01-01,2018-12-31"
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
nameYearList = soup.find_all("h3", class_="lister-item-header")
ratingList = soup.find_all("div", class_="ratings-imdb-rating")
data = {"Title": [], "Year": [], "Rating": []}
for i in range(len(nameYearList)):
    data["Title"].append(nameYearList[i].find("a").text.strip())
    data["Year"].append(
        nameYearList[i].find("span", class_="lister-item-year").text.strip()
    )
    data["Rating"].append(ratingList[i].find("strong").text.strip())
df = pd.DataFrame(data)
print(df)
