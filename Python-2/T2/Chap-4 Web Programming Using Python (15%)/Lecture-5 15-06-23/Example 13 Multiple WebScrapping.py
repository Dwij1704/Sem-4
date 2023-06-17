import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movies_letter-N"
root = "https://subslikescript.com/"
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
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
    print(website)
    result = requests.get(website)
    content = result.text
    soup = BeautifulSoup(content, "html.parser")
    movie_script = soup.find("div", class_="full-script").get_text(separator="\n")
    # movie_script = soup.find("div", class_="full-script").text.strip()
    try:
        with open(
            "D:\\Github\\Sem-4\\Python-2\\T2\\Chap-4 Web Programming Using Python (15%)\\Lecture-5 15-06-23\\Movie Scripts\\"
            + newmovieList[i].replace(" ", "_").rstrip(".")
            + ".txt",
            "w",
            encoding="utf-8",
        ) as file:
            file.write(movie_script)
    except Exception as e:
        print(e)
