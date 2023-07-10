import matplotlib.pyplot as plt
import pandas as pd

dataset = pd.read_csv("Python-2\T2\Chap-5 Introduction to ML using Python(10%)\ML csv's\insurance.csv")
print(dataset.head())
dataset = pd.get_dummies(data=dataset, drop_first=True)
x = dataset[["age", "bmi", "smoker_yes", "children"]]
y = dataset["expenses"]
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)
from sklearn.linear_model import LinearRegression

lr = LinearRegression()
lr.fit(x_train, y_train)
y_pred = lr.predict(x_test)
df = pd.DataFrame({"Actual": y_test, "Predicted": y_pred})
print(df)

from sklearn import metrics

print("MAR", metrics.mean_absolute_error(y_test, y_pred))
print("MSE", metrics.mean_squared_error(y_test, y_pred))
print("R2 Score", metrics.r2_score(y_test, y_pred))
print("Intercept: ", lr.intercept_)
print("Co-Efficient: ", lr.coef_)

# plt.scatter(y_test, y_pred)
# plt.plot(y_test, y_test, color="red")
# plt.xlabel("Actual Expenses")
# plt.ylabel("Predicted Expenses")
# plt.title("Actual vs Predicted Expenses")
# plt.show()
df = pd.concat([x, y], axis=1)

# Define the number of rows and columns for the subplots
num_rows = len(x.columns)
num_cols = len(x.columns)

# Create subplots with the desired number of rows and columns
fig, axes = plt.subplots(nrows=num_rows, ncols=num_cols, figsize=(10, 10))

# Flatten the axes array for easier indexing
axes = axes.flatten()

# Generate scatter plots for each combination of features
for i, feature_x in enumerate(x.columns):
    for j, feature_y in enumerate(x.columns):
        if feature_x != feature_y:
            axes[i*num_cols + j].scatter(df[feature_x], df[feature_y])
            axes[i*num_cols + j].set_xlabel(feature_x)
            axes[i*num_cols + j].set_ylabel(feature_y)

# Adjust spacing between subplots
plt.tight_layout()

# Show the plot
plt.show()