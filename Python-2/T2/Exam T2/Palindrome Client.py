import socket as sk
client=sk.socket(type=sk.SOCK_STREAM)
port=8080
client.connect(('localhost', port))
while True:
    msg=input("Enter a number: ")
    client.send(msg.encode())
    res=client.recv(1024)
    if not res:
        break
    print(res.decode())
client.close()