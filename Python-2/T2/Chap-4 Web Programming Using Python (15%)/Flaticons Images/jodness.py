import requests
from bs4 import BeautifulSoup
import pandas as pd

  
soup = BeautifulSoup( open(
        "JODNESS\\jodness.html",
        "r",
        encoding="utf-8",
    ), "html.parser")
holders=soup.findAll("div" ,class_="icon--holder")
print(holders)
for i in range(len(holders)):
    url=holders[i].find("img")['data-src']
    title=holders[i].find("a",href=True)['title'][-3:]
    print(title,url)
    data = requests.get(url).content
    f = open("JODNESS/images/"+title+'.jpg','wb')
    f.write(data)
    f.close()