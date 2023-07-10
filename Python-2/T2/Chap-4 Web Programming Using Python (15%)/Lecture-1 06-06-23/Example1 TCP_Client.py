import socket as sk

host = sk.gethostname()
port = 8080
client_sk = sk.socket()
client_sk.connect(('localhost', port))
while input("Do you want to continue?(Y/N)") != "N":
    message = input("Enter Your request=>").encode()
    client_sk.send(message)
    # Receiving message from server
    msg = client_sk.recv(1024)
    print(msg.decode())
# Closing socket
# client_sk.close()
