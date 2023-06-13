import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movie/Avengers_Endgame-4154796"
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
# print(soup) Unstructured
print(soup.prettify())
movie = soup.find("article", class_="main-article")
print(movie.prettify())
movie_title = movie.find("h1").text.strip()
print(movie_title)
