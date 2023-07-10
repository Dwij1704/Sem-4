import requests
from bs4 import BeautifulSoup

website = "https://indianexpress.com/"
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
news = soup.findAll(
    "div", class_="content-txt"
)
for i in news:
    print(i.find("h3").text.strip())