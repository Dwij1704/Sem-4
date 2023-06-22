import pandas as pd

dataset = pd.read_csv("ML csv's\Advertising.csv")
print(dataset.head())
print(dataset.isna().sum())
x = dataset[["TV", "Radio", "Newspaper"]]
# >> m1x1+m2x2+m3x3+c  m1=TV, m2=Radio, m3=Newspaper
y = dataset["Sales"]
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.1, random_state=2)
from sklearn.linear_model import LinearRegression

lr = LinearRegression()
lr.fit(x_train, y_train)
y_pred = lr.predict(x_test)
d = pd.DataFrame({"Actual": y_test, "Predicted": y_pred})
print(d)

print(lr.coef_)
print(lr.intercept_)
from sklearn import metrics

print("MAR", metrics.mean_absolute_error(y_test, y_pred))
print("MSE", metrics.mean_squared_error(y_test, y_pred))
print("R2 Score", metrics.r2_score(y_test, y_pred))
salesPredict = lr.predict([[230.1, 37.8, 69.2]])
print("Predicted Sales for given data is:", salesPredict)
