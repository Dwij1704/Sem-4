import requests
from bs4 import BeautifulSoup
import pandas
website="https://www.politifact.com/factchecks/"
result=requests.get(website)
content=result.text
soup=BeautifulSoup(content,"html.parser")
statement=soup.findAll("div",class_="m-statement__quote")
dateSource=soup.findAll("footer",class_="m-statement__footer")
dict={"statement":[],"date":[],"source":[]}
for i in range(len(statement)):
    dict["statement"].append(statement[i].text.strip())
    dict["date"].append(dateSource[i].text[-15:-1])
    dict["source"].append(dateSource[i].text[:-16].lstrip())
pd=pandas.DataFrame(dict)
print(pd.head())