import urllib.request
from bs4 import BeautifulSoup 

search_text = input("검색어를 입력하세요 :  ").ecode("utf-8")
search_text = str(search_text)[2:-1].replace('\\x', '%')

list_url = ""