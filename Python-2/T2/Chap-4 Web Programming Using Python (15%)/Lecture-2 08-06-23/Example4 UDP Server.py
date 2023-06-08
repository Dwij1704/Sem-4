import socket as sk
host=sk.gethostname()
port=8080
udpServer=sk.socket(type=sk.SOCK_DGRAM)
udpServer.bind((host,port))
while True:
    print("Waiting For Message")
    data,addr=udpServer.recvfrom(1024)
    print(data.decode(),"Received From",addr)
    udpServer.sendto((input("Enter Server Message=>")).encode(),addr)
udpServer.close()