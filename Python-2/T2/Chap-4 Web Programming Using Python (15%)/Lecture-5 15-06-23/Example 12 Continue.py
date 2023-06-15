import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movie/Avengers_Endgame-4154796"
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
movie_script = soup.find("div", class_="full-script").get_text(separator="\n")
print(movie_script)
with open("Endgame.txt", "w") as file:
    file.write(movie_script)
