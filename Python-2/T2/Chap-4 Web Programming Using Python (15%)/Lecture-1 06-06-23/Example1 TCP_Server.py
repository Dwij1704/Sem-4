import socket as sk
host=sk.gethostname()
port=8080
addr=(host,port) #Creating tuple consisting host and port
#Creating socket
server_sk=sk.socket()
#Binding socket to address
server_sk.bind(addr)
#Listening to socket
server_sk.listen()
print("Server is listening at port",port)
while True:
    #Accepting connection from client
    client_sk,client_addr=server_sk.accept()
    print("Client connected at",client_addr)
    while True:
        #Receiving data from client
        data=client_sk.recv(1024)
        # data=client_sk.recv(1024).decode ->Converts recieved data from byte to readable
        if not data:
            break
        if data
        #Sending data to client
        client_sk.send(b"Mera Naam Anil hai")
        #Closing connection with client
        client_sk.close()
        print("Client disconnected")
        #Closing connection with server
        server_sk.close()
        break
    break