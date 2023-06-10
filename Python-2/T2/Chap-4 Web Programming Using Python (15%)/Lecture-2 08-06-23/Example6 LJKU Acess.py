import socket as sk
tcpServer=sk.socket(type=sk.SOCK_STREAM) #TCP
tcpServer.connect(('www.ljku.edu.in',80))
cmd='GET https://www.ljku.edu.in/lju-at-a-glance HTTP/1.0\r\n\r\n'
# tcpServer.connect(('data.pr4e.org',80)) #https 443 and http port is 80
tcpServer.send(cmd.encode())
while True:
    data,addr=tcpServer.recvfrom(512) #1024 also works
    if len(data)<1:
        break
    print(data.decode(),end="")    
tcpServer.close()