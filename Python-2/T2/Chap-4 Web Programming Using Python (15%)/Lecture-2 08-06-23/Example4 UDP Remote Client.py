import socket as sk
host="192.168.69.119"
port=9999
udpClientSocket=sk.socket(type=sk.SOCK_DGRAM)
message="Connected"
print(message)
while message!="":
    message=input("Enter your message=>")
    print("Waiting For Message")
    udpClientSocket.sendto(message.encode(),(host,port))
    data,addr=udpClientSocket.recvfrom(1024)
    if not data:
        break
    print(data.decode())
udpClientSocket.close()