import socket as sk

host = sk.gethostname()
port = 8080
addr = (host, port)
server_sk = sk.socket()
# server_sk = sk.socket(type=sk.SOCK_STREAM)
server_sk.bind(addr)
server_sk.listen()
print("Server is listening at port", port)
client_sk, client_addr = server_sk.accept()
print("Client connected at", client_addr)
while True:
    data = client_sk.recv(1024)
    if not data:
        break
    client_sk.send(
        (
            "The square of " + str(data.decode()) + " is " + str(int(data) * int(data))
        ).encode()
    )
server_sk.close()
client_sk.close()
