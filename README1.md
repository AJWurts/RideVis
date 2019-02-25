# Data Visualization Assignment 4
Alexaner Wurts

## New Visualization
[New Vis](https://ajwurts.github.io/datavis_4)
![newvis](img/full_new.png)
The visualization looks at three different variables for all of my bicycle rides for a given year aggregated by weeks or months. They can look at the rides through total time, distance, or elevation. At the top of the graph is the summary data for the bar being hovered over. The top left shows the summation. The top right side shows the average. A secondary visual is opened when the user clicks any one of the months or weeks to look at the rides that make up that time period. In the secondary visual the width of the bar represents the length of the ride, and the height is based off which variable they currently have selected. When the user hovers over a bar in the secondary visual a line of text appears with the details for that ride. 

## Original Visualization
![original_im](img/original_monthly.png)

The original visualization is missing a few key features.  
1. Responsive interactivity
    * The original visualization is interactive but it takes 3-5 seconds to load after clicking any column.
2. The user goal for this graph would be comparing previous weeks athletic data. Having a maximum line and a goal threshold would better enable the user to understand their data  
    * Users are able to set a weekly or monthly goal, but this graph doesn't show it.
3. Doesn't visualize the routes within a week effectively. It displays a list of routes instead of utilizing a visual component. When searching for a ride it makes it much more difficult find.


## Technical Achievement
I used the Strava API to download all of my athletic activities for the past 4 years and processed them in Python with the libraries Numpy and Pandas. I transformed the data in 3 data sets: grouped by month, grouped by week, and all rides in a reduced size. Code for the pre-processing is visible in the jupyter notebook.   
When you click on the chart it brings up a smaller chart to visualize the rides that make up the larger chart. On the smaller chart I added hover over that automatically highlights the closest ride to make it more easy to hover over any given ride.

## Design Achievement 
I added a second visualization to better see the rides that make up a given column. I encoded ride length into bar width to add another dimension of data. The width of the ride directly shows the length of the ride. Since the x axis is scaled for a certain period of time it enables the routes to be graphed on when they occured throughout the time period. So if all your rides happened at the very end of a period on the chart you can tell.