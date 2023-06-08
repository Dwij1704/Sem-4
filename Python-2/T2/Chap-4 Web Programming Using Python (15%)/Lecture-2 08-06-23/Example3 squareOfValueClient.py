import socket as sk

host = sk.gethostname()
port = 8080
client_sk = sk.socket()
client_sk.connect((host, port))
while input("Do you want to continue?(Y/N)") != "N":
    message = input("Enter a number to get the square=>").encode()
    client_sk.send(message)
    msg = client_sk.recv(1024)
    print(msg.decode())
