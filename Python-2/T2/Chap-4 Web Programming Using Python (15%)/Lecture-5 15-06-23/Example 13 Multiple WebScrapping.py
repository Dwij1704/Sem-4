import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movies"
root = "https://subslikescript.com/"
result = requests.get(website)
content = result.text
print(result)
soup = BeautifulSoup(content, "html.parser")
print(soup.prettify())
# Get Movie Names:
movieList = soup.find("ul", class_="scripts-list").text.strip().split("\n")
newmovieList = []
for x in movieList:
    if x != "":
        newmovieList.append(x)
print(newmovieList)
# Movie Names are now stored in newMovieList
# Get Movie Links:
aTag = soup.find("ul", class_="scripts-list")
links = []
for link in aTag.find_all("a", href=True):
    links.append(link["href"])
print(links)
# Movie Links are now in links
for i in range(len(links)):
    website = root + links[i]
    result = requests.get(website)
    content = result.text
    soup = BeautifulSoup(content, "html.parser")
    print(website)
    # movie_script = soup.find("div", class_="full-script").text.strip()
    movie_script = soup.find("div", class_="full-script").get_text(separator="\n")
    print(movie_script)
    with open(
        "D:\\Github\\Sem-4\\Python-2\\T2\\Chap-4 Web Programming Using Python (15%)\\Lecture-5 15-06-23\\Movie Scripts\\"
        + newmovieList[i]
        + ".txt",
        "w",
    ) as file:
        file.write(movie_script)
