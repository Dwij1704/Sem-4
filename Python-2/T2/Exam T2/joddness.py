from bs4 import BeautifulSoup
import pandas as pd

soup = BeautifulSoup(
    open(
        "Python-2\\T2\\Chap-4 Web Programming Using Python (15%)\\Web Scrapping Files\\joddness.html",
        "r",
        encoding="utf-8",
    )
)
jodd = soup.find("html")
print(jodd.text)
