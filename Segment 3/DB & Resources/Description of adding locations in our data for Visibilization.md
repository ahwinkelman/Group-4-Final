# Description of adding locations in our data for Visibilization
## yelp.com
## kaggle.com
## data.sfgov.org/Geographic-Locations-and-Boundaries/SF-Find-Neighborhoods/
#### According to Yelp site, it is platform with trusted local business information, photos and review content, that provides a one-stop local platform for consumers to discover, connect and transact with local businesses of all sizes by making it easy to request a quote, and make an appointment or purchase,from Kaggle we are downloading the yelp review data set.
# ERD
### We are joining the yelp_reviews and Ph_businesses dataframes using the ID and business_id as the matching field to get as many reviews per restaurant as possible
![ERD diagram](https://github.com/ahwinkelman/Group-4-Final/blob/Rubina-Shrivastava/ERD.jpg)
### We are joining our data file with The geojson file which we got from https://data.sfgov.org/Geographic-Locations-and-Boundaries/SF-Find-Neighborhoods/ ,in that we have geometry as column we break them in longitude and latitude 
### locations_gdf = gpd.GeoDataFrame(locations,geometry=gpd.points_from_xy(locations.Longitude, locations.Latitude))
### and make table Location and join them with SF data 
![ERD diagram](https://github.com/ahwinkelman/Group-4-Final/blob/Rubina_segment_3/ERD1.png)
# RDBMS
## We are using Microsoft Azure Plateform as a cloud service, in this we created Microsoft SQL Server, connect this with SQL Server Managment Studio for importing data files.
![RDBMS](https://github.com/ahwinkelman/Group-4-Final/blob/Rubina-Shrivastava/RDMS_Philadephis.png)
=======
