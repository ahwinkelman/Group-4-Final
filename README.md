# Thai-Indian fusion

## Purpose
The purpose of this analysis is to predict if a Thai-Indian fusion restaurant would be successful in the San Francisco, CA area.

## Reason
The resturant business can be hit or miss. With a model to help predict the success rate of a new restaurants based of the success of others could help future restaurants stay in business. 

## Data Description
The data we are using has restaurants locations, ratings , and pricing from all over the greater San Francisco area. That data bank has been preprocessed and cleaned in preparation for the machine learning analysis of the San Francisco area restaurants. 
The original data came from  an API call with Yelp along with a GeoJSON file from the city of San Francisco's government data website. 

## Data Exploration
After finding our data set, we wanted to see the make up of our data.
The data was processed to display several graphs to show:
- ratings by names
- Reviews by names
- the number of restaurants for each rating

![Image 1](https://user-images.githubusercontent.com/105830665/199869754-4154c899-7f55-41e8-9acb-99f0b1610b81.png)

We also called the following:
- The columns in the data 
- The count for the rows
- The Data types for the columns 

## Database
Below is the ERD of our data to begin answering our question.

![ERD](https://github.com/ahwinkelman/Group-4-Final/blob/Rubina_segment_3/ERD1.png)

## Data Analysis
### Machine Learning Model
During Segment 2 we narrowed our focus on the machine learning model to a logistic regression model.

##### Description of preliminary data preprocessing:
-	Drop columns that are not relevant to the model, are too noisy, will confuse the model, or contribute no information to the model
    o	The columns we chose to drop are:    'ID', 'Image', 'Url', 'Latitude', 'Longitude', 'Address',  'City', 'State', 'Country', 'Phone', 'Name', 'Review'
-	Convert the 'Rating' column from a 0-5 scale to a binary score (we chose to make this conversion in order to set the data up for a binary classification model)
-	Convert the 'Price' column from $ - $$$$ to numeric 1 ??? 4
-	Use get_dummies to convert categorical data to numeric (the only column that the get_dummies applied to is the 'Category' column.
-	We utilized the StandardScaler() method from the sklearn module to scale the training and testing sets in order to make sure that all the data is scaled appropriately for the model.
-	During pre-processing, we created some initial charts to look at the data:
    o	Barplot of ???Rating??? and ???Name??? columns
    o	Barplot of ???Review_count??? and ???Name??? columns
    o	Countplot of the ???Rating??? column
-	We used geopandas to bin the restaurant locations by neighborhood.  The San Francisco neighborhood data came in the form of the GeoJSON file from the San Francisco city government data website.

##### Description of preliminary feature engineering and preliminary feature selection, including decision-making process: 
The features for the machine learning model are the 'Review_count', 'Category', 'Neighborhood' and 'Price' columns.  All other columns were eliminated due to being not relevant, too noisy, confusing, or not contributing any information (as discussed above).  Lastly, the 'Rating binary' column is the target.
During the data preprocessing, the 'Category' and the 'Neighborhood' columns both underwent some binning to reduce the number of total values each contained.  The 'Category' column was reduced to about 20 different cuisine categories and the 'Neighborhood' category was reduced to about 30 different neighborhoods.  The purpose for this binning was to reduce the amount of noise each of the columns fed into the model, in order to boost effectiveness within the model.

##### Description of how data was split into training and testing sets:
Data was split into training and testing sets using the train_test_split method in sklearn.  We assigned random_state=42 to make the data reproducible and opted to stratify the data in order to divide the dataset proportionally and so that the data in both the training and testing datasets will be representative of the entire dataset.

##### Explanation of model choice, including limitations and benefits:
We chose to use the logistic regression model provided by sklearn.  Since our overall measure of success for the restaurant is whether the rating is greater than or equal to 4 stars, we were able to convert the star rating column into a binary format and use this binary classifier model.  One limitation of this model is that it will not produce a predicted restaurant rating, it will only be able to tell us if the predicted restaurant rating is >= 4, or <4.  Also, the more complex the features are for the input variables, the more a logistic regression model may tend to become overwhelmed.  The biggest benefit of utilizing the logistic regression model is that it is capable of analyzing both continuous and categorical variables, both of which our data contains.  For this type of binary classification, the logistic regression model is straightforward to train and is less prone to overfitting than perhaps other algorithm options available, therefore a logistic regression model is a viable option even with datasets that have only a few features and does not require an enormously large dataset.

##### Explanation of changes in model choice (if any occurred between segment 2 and 3 deliverables):
Between segment 2 and segment 3 the final decision was made to utilize the logistic regression binary classifier for our machine learning model.  Additionally, some additional preprocessing was completed by binning the 'Category' and 'Neighborhood' columns.

##### Description of how we trained the model thus far, and any additional training that will take place:
The model was trained using the .fit() method and the training data set, which consisted of 75% of the data, as it was split by sklearn's train_test_split method.

##### Description of current accuracy score:
The current accuracy score of the logistic regression model is 94.9%.

##### Does the model answer the project question?
Yes, the model predicts with a 94.9% accuracy level that our proposed Thai-Indian fusion restaurant will achieve a 4-star rating or higher.

### Dashboard and Presentation
We are using both JavaScript and Tableau for our dashboard. The JavaScript will serve as the information and starter page for our dashboard. Several drop menus have been created to navigate to different images and websites. This allows for user interactivity on the html page. One specific drop menu links to the second dashboard, Tableau. The Tableau Story will have the graphs and visualizations for our data. This Story breaks down the restaurant makeup in the San Francisco market. The charts support the accuracy of the machine learning by displaying the rating in the area. 

The Tableau dashboard can be seen [at this link](https://public.tableau.com/app/profile/andrew.winkelman6563/viz/GoodEatsGroup4/Group4GoodEats?publish=yes)

To  accompany our dashboards, a presentation was created in Google slides. This presentation gives a brief but descriptive outlook of the project.

The Google slide can accessed using [this link](https://docs.google.com/presentation/d/1tSIwctv72gKRzsV73ysdYYjovjgFx2XRRpjAAnh7xwU/edit#slide=id.p)

## Technologies
The technologies being used are:
1. Writing the code
    - Google Colab
    - Jupyter Notebook
    - VS Code

2. Machine Learning
    - Logistic Regression Model

3. Database housing
    - Miscrosoft azure
    - Microsoft SQL

4. Data scraping
    - Kaggle
    - Zomato
    - yelp 

5. Dashboard
    - JavaScript
    - Tableau
## Questions
The main question we want to answer is:
    Will a new Thai-Indian fusion restaurant be successful in the San Francisco area?
A secondary question would be:
    Is the market saturated with similiar restaurants?

## Week 1 Assignments
1. Presentation: Alexandra Williams
2. GitHub: Andrew Winkelman
3. Maching Learning Model: Michelle Ewers
4. Database: Rubina Shrivastava

## Week 2 Assignments
1. Presentation: Andrew Winkelman
2. GitHub: Alexandra Williams
3. Maching Learning Model: Michelle Ewers
4. Database: Rubina Shrivastava
5. Dashboard: Alexandra Williams / Andrew Winkelman

## Week 3 Assignments
1. Presentation: Andrew Winkelman
2. GitHub: Alexandra Williams
3. Maching Learning Model: Michelle Ewers
4. Database: Rubina Shrivastava
5. Dashboard: Alexandra Williams / Andrew Winkelman

## Week 4: 
1. Presentation: Andrew Winkelman, Rubina Shrivastava, Michelle Ewers, Alexandra Williams
2. GitHub: Alexandra Williams
3. Maching Learning Model: Michelle Ewers
4. Database: Rubina Shrivastava
5. Dashboard: Alexandra Williams / Andrew Winkelman


