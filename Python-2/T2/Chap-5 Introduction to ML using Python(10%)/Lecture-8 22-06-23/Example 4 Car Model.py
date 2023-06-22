import pandas as pd

df = pd.read_csv("ML csv's\car data.csv")
df["Age"] = 2023 - df["Year"]
df.drop("Year", axis=1, inplace=True)
# inplace necessary, that upadtes your existing data set,   Axis=1 defines col and Axis=0 defines row
dfSorted = pd.get_dummies(
    data=df[["Fuel_Type", "Seller_Type", "Transmission"]], drop_first=True
)
finalDf = pd.concat([df, dfSorted], axis=1)
print(finalDf.columns)
x = finalDf[
    [
        "Kms_Driven",
        "Present_Price",
        "Fuel_Type_Diesel",
        "Fuel_Type_Petrol",
        "Seller_Type_Individual",
        "Transmission_Manual",
        "Age",
        "Owner",
    ]
]
y = finalDf["Selling_Price"]
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)
from sklearn.linear_model import LinearRegression

lr = LinearRegression()
lr.fit(x_train, y_train)
y_pred = lr.predict(x_test)
df = pd.DataFrame({"Actual Selling Price": y_test, "Predicted Selling Price": y_pred})
print(df)

from sklearn import metrics

print("MAR", metrics.mean_absolute_error(y_test, y_pred))
print("MSE", metrics.mean_squared_error(y_test, y_pred))
print("R2 Score", metrics.r2_score(y_test, y_pred))
print("Intercept: ", lr.intercept_)
print("Co-Efficient: ", lr.coef_)
