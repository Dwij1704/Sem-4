import socket as sk
client=sk.socket(type=sk.SOCK_DGRAM)
addr=('localhost',8080)
while True:
    client.sendto("153".encode(),addr)
    data,addr=client.recvfrom(1024)
    if not data:
        break
    print(data.decode())
client.close()