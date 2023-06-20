import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

df = pd.read_csv("ML csv's\Book1.csv")
print(df.head())
x = df.iloc[:, 0:1]
y = df.iloc[:, -1]
print(x)
print(y)
# print(type(x)) Dataframe
# print(type(y)) Series
