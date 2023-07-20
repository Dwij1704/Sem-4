from bs4 import BeautifulSoup
soup=BeautifulSoup(open("html_doc.html",
                        "r",
                        encoding="utf-8"))
aTag=soup.find("a").text.strip()
print("text of first <a> tag is",aTag)