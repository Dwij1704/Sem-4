import socket as sk


def createServer():
    serverSocket = sk.socket()
    serverSocket.bind(("python", 8080))
    serverSocket.listen()
    while 1:
        clientSocket, addr = serverSocket.accept()
        rd = clientSocket.recv(512).decode()
        print(rd)
        data = "HTTP/1.1 200 OK\r\n"
        data += "Content-Type:text/html; charset=utf-8\r\n"
        data += "\r\n"
        data += '<html><body><center><h1><a href="https://www.google.com/">Hello World</a></h1></center></body></html>'
        clientSocket.send(data.encode())
    serverSocket.close()


print("Acess http://python:8080")
createServer()
