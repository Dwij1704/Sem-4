import socket as sk
host=sk.gethostname()
port=8080
addr=(host,port) #Creating tuple consisting host and port
server_sk=sk.socket()
#Creating socket
server_sk.bind(addr)
#Binding socket to address
server_sk.listen()
#Listening to socket
print("Server is listening at port",port)
#Printing message
while True:
    client_sk,client_addr=server_sk.accept()
    #Accepting connection from client
    print("Client connected at",client_addr)
    while True:
        data=client_sk.recv(1024)
        # data=client_sk.recv(1024).decode ->Converts recieved data from byte to readable
        #Receiving data from client
        if not data:
            break
        client_sk.send(data)
        #Sending data to client
        client_sk.close()
        #Closing connection with client
        print("Client disconnected")
        server_sk.close()
        #Closing connection with server
        break
    break