import socket as sk
host="192.168.69.119"
port=9999
#Creating socket
#Connecting to server
#Sending message to server
client_sk=sk.socket()
client_sk.connect((host,port))
while input('Do you want to continue?(Y/N)')!="N":
    message=input('Enter Your request=>').encode()
    client_sk.send(message)
    #Receiving message from server
    print("Waiting for response...")
    msg=client_sk.recv(1024)
    print(msg.decode())
#Closing socket
client_sk.close()