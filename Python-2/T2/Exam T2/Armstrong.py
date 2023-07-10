import socket as sk
server=sk.socket(type=sk.SOCK_DGRAM)
server.bind(('localhost',8080))
while True:
    data,addr=server.recvfrom(1024)
    num=int(data)
    arm=0
    nlen=len(str(num))
    if not data:
        break
    for i in range(nlen):
        n=num%10
        print(n,num)
        arm=arm+(n**nlen)
        num=num//10
    server.sendto(str(arm).encode(),addr)
server.close()