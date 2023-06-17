import requests
from bs4 import BeautifulSoup
import pandas as pd

website = "https://www.politifact.com/factchecks/"
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
authorList = soup.find_all("a", class_="m-statement__name")
sourceDateList = soup.find_all("div", class_="m-statement__desc")
authorDateList = soup.find_all("footer", class_="m-statement__footer")
StatementList = soup.find_all("div", class_="m-statement__quote")
data = {"author": [], "sourceDate": [], "link": [], "statement": []}
for i in range(len(authorList)):
    data["author"].append(authorDateList[i].text.strip()[3:-15])
    data["sourceDate"].append(authorDateList[i].text.strip()[-14:])
    data["statement"].append(StatementList[i].text.strip())
    data["link"].append(
        "https://www.politifact.com/" + StatementList[i].find("a", href=True)["href"]
    )
df = pd.DataFrame(data)
print(df)
df.to_csv("Data.csv")
