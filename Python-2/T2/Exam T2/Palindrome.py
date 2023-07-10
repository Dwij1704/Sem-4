import socket as sk
server=sk.socket()
server.bind(('localhost',8080))
server.listen()
conn,addr=server.accept()
while 1:
    msg=conn.recv(1024)
    if not msg:
        break
    rev=0
    num=int(msg)
    for i in range(len(str(num))):
        n=num%10
        rev=(rev*10)+n
        num=num//10
    conn.send(str(rev).encode())
conn.close()
server.close()