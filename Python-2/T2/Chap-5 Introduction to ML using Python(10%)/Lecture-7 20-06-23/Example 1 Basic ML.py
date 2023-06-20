import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import sklearn as sk
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

df = pd.read_csv("ML csv's\Book1.csv")
print(df.head())
x = df.iloc[:, 0:1]
y = df.iloc[:, -1]
print(x)
print(y)
# print(type(x)) Dataframe
# print(type(y)) Series
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)
print(x_train.shape)
print(x_test.shape)
print(y_train.shape)
print(x_test.shape)
lr = LinearRegression()
lr.fit(x_train, y_train)
y_pred = lr.predict(x_test)
d = pd.DataFrame({"Actual": y_test, "Predicted": y_pred})
print(d)
plt.scatter(df["cgpa"], df["package"])
plt.plot(x_test, y_pred, color="red")
plt.show()
