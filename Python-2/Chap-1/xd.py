import threading
def task_1():
    for i in range(5):
        print("Task 1 is running")
def task_2():
    for i in range(5):
        print("Task 2 is running")
t1=threading.Thread(target=task_1)
t2=threading.Thread(target=task_2)
t1.start()
t2.start()
print("All Task Done")