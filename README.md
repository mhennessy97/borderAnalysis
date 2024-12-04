# Border Crossing Analysis and Traffic Prediction
## Overview

This project analyzes the patterns of border crossings at U.S. ports of entry, specifically at the U.S.-Canada and U.S.-Mexico borders. The goal is to explore traffic trends by mode of transport and use machine learning models to predict future border crossing volumes.

We examine crossing data from U.S. Customs and Border Protection from 1996 to 2024, considering multiple modes of transport such as personal vehicles, pedestrians, trucks, and rail. The final model predicts future border crossing traffic, assisting in infrastructure planning and resource allocation.

## Contributors
Javier Reyes,
Michael Hennessy,
Hunter Katigbak,
Jeremy Bentley.

## Contributions:

Javier Reyes:


Michael Hennessy: Used Python and Pandas to analyze the data and determine how to predict increases/decreases in crossings. Attempted to use logistic and linear regression with reduced dataframe but was inaccurate. Revised the dataset being used to include more info and used Random Forest which increased the accuracy of the model. 


Hunter Katigbak: Created a Random Forest regrossor model that predicts the increase of border crossings. Isolated and scaled data for the model to work with. Attempted using different methods such as multiple input lags and using diffrent features to predict other aspects of the dataset. After tuning different features and methods, a final R2 score of 91% was achieved which will be used for our presentation.


Jeremy Bentley:


## Data
The dataset used for this project comes from U.S. Customs and Border Protection, covering border crossings between the U.S. and its neighboring countries (Canada and Mexico) from 1996 to 2024. The primary variables include:

Mode of Transport: Personal vehicles, pedestrians, trucks, and trains.
Count: The total number of crossings for each mode.

## Tools and Technologies Used

Python: For data analysis, cleaning, and machine learning model development.

Pandas: For data manipulation and cleaning.

Matplotlib and hvplot: For data visualization (charts and graphs).

Leaflet.js: For interactive maps.

Scikit-learn: For machine learning model development (Random Forest, Linear Regression, etc.).

Visual Studio Code: For coding and project management.

HTML/JavaScript: For web-based map visualization.

Tableau: Used to create additional interactive maps for visualizing border crossing data.

## Project Workflow

Data Cleaning: The dataset was cleaned to focus on the relevant features such as transport modes and crossing counts.
Data Analysis and Visualization: The data was analyzed using Python/Pandas and visualized using Matplotlib, hvplot, Tableau and Leaflet.js to gain insights into traffic patterns.
Machine Learning: Various machine learning models, including Random Forest, were used to predict future traffic trends based on historical data.
Map Creation: Interactive maps were created using both Leaflet.js and Tableau to visualize the busiest and least used ports of entry.
