# project-three
## Interactive Visualization Project
-------------------------------------------------------------------------------

## Project Title:
    Tile Here
-------------------------------------------------------------------------------

## Team Members:
* Emily Shewcraft
* Dianna Rivera
* Daniel Meyerowitz
* Louis Ferrante
* Callie Carlton

-------------------------------------------------------------------------------

## Project Description/Outline
### Data Collection and Analyses
1. Import, read, and display the data found in Kaggle
2. Clean and prepare data with ETL functions
3. Compare variables to address research questions
4. Store data in a database and utilize Python Flask API
5. Create interactive visualizations of analyses

### Presentation and Summarization 
4. Create and present a formal visual presentation
5. Draft written analysis of the data
6. Summarize conclusions

-------------------------------------------------------------------------------

## Research Questions-
1. 

-------------------------------------------------------------------------------

## Datasets
Top Hits Spotify from 2000-2019
(https://www.kaggle.com/datasets/paradisejoy/top-hits-spotify-from-20002019)

Slide Deck
(https://docs.google.com/presentation/d/1hY0dfneX7TJAyW7ltHnSdLDUc5m1oHHfoIUvxelOOSQ/edit?pli=1#slide=id.p)

-------------------------------------------------------------------------------

## Task Delineation
* Ryland - Group Lead, Initial Merge (Failed), Question 4, Question 6, Statistics Testing, Helped begin Questions 8 and 9, Further Exploratory Regressions, Slideshow Slide Creation
* Callie - Question 2 , Question 3 , DataSet Investigation, Question Construction, Project Writing, Helped Questions 1 and 5, Further Exploratory Regressions, Slideshow Slide Creation
* Qonesha - Question 8 , Question 9, Further Exploratory Regressions, Slideshow Slide Creation
* Daniel - Lead Presenter, API Investigation, Dataset Outliers, Question 7, Question 10, Helped begin Questions 1 and 5, Further Exploratory Regressions, Slideshow Slide Creation
* Christian 

-------------------------------------------------------------------------------

## Repository Table of Contents
* "Resources" folder containing the original CSV file
* "Output" folder containing png images of the graphs, maps, and summary statistics analyzed for this project
* "Data_Exploration_and_Cleanup" folder containing each participant's code addtions prior to merging
* final_analysis.ipynb - Jupyter Notebook containing final combined analysis

-------------------------------------------------------------------------------

## Analysis
**How does the danceability correlate to popularity?**
* Danceability and popularity do not correlate in this dataset

![popular_danceability_plot](Output/popular_danceability_plot.PNG)

  

**How does energy compare to popularity?**
* Energy and popularity do not correlate in this dataset

![popular_energy_plot](Output/popular_energy_plot.PNG)



**How does Explicit content affect popularity?**
* Explicit content does not negatively affect popularity in this dataset
* In fact, the majority of the most popular songs contained explicit content 

![popular_explicit_pie](Output/popular_explicit_pie.PNG)



**How does key compare to popularity?**
* C# was the most popular song key for this dataset

![popular_keys_pie](Output/popular_keys_pie.png)
![popular_keys_bar](Output/popular_keys_bar.png)


**How does acousticness compare to popularity?**
* Acousticness and popularity do not correlate in this dataset

![popular_acousticness_plot](Output/popular_acousticness_plot.PNG)



**How does liveness compare to popularity?**
* Liveness and popularity do not correlate in this dataset

![popular_liveness_plot](Output/popular_liveness_plot.PNG)



**How does valence compare to popularity?**
* Valence and popularity do not correlate in this dataset

![popular_valence_plot](Output/popular_valence_plot.PNG)



**How does tempo compare to popularity?**
* Tempo and popularity do not correlate in this dataset

![popular_tempo_plot](Output/popular_tempo_plot.PNG)



**How does genre compare to popularity?**
* Pop was by far the most popular genre in this dataset

![popular_genre_bar](Output/popular_genre_bar.PNG)



**How does speechiness compare to popularity?**
* Speechiness and popularity do not correlate in this dataset

![popular_speechiness_plot](Output/popular_speechiness_plot.PNG)



-------------------------------------------------------------------------------

### Conclusion
In choosing a dataset, our focus was on selecting data that enabled our group to discover the perfect formula for writing a song. The first dataset we considered included a large number of intersting metrics and included many songs we found familiar. The second dataset we considered had a larger volume of data, but had far fewer variables to examine. Originally, we considered merging the 2 different datasets on song title, as they initially appeared to have overlapping data. However, once we attempted the merge, it cut down the volume of our dataset significantly-so we decided to move forward with the inital dataset as there were more factors to analyze.

We then began by leveraging each variable present in the dataset against the song's popularity. In this dataset, each song was given a score between 0 and 100 based on its popularity. We wanted to specify a base determinant of popularity, so we dove into the songs with a popularity score greater than 50 and investigated the statistical significance of the popular songs against the dataset as a whole. We conducted a One Sample T-Test and found that the popular songs were statistically significant with a p-value = 1.876245645341364e-227. This gave us confidence to use the popular song specification for later correlation analyses.

When doing statistical testing, we also investigated what we called the "loser" songs-referring to all songs with a popularity between 0 and 10. We ran a T-Test on this dataset as well and the p-value = 2.5527473836321144e-303, proving that this group of songs were also statistically significant. We found this interesting, as they seemed to be outliers when compared to the rest of the data.

Our group members then began attempting to answer the questions we discussed in our brainstorming sessions individually. One of the metrics that we found had a strong correlation to popularity was the key of the song. We created some visualizations about the key of the songs in relation to popularity and learned that C# is the most popular key with the popular songs. We also learned that D# is the least popular key for musicians in this dataset.

Another metric we found that had a strong correlation to popularity is genre. 44% of the songs that were in this dataset were pop songs, which dwarfed hip hop (the second most popular genre) at only 21% of the songs. Both classical and Jazz music were the least used genres in the dataset.

We also found that 2 of the variables outside of popularity did correlate to each other: energy and valence. Energy was measured from 0.0 to 1.0, and represents a perceptual measure of intensity and activity. Valence was measured from 0.0 to 1.0 and describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). We believe that these 2 factors must have been similarly measured when compiling the data.

Unfortunately, most of the variables we analyzed in this dataset did not appear to correlate to each song's popularity metric. We initially expected variables such as tempo, liveness, danceability, and energy to have some weight in making the song popular, but this did not appear to be the case. Other variables, such as explicit content, did not affect the popularity in ways we initially expected-in fact, the majority of the popular songs in this dataset had explicit content. Even though our results are not what we expected, we were able to make a few interesting conclusions about popularity as well as some of the other variables present in our dataset.

We must take time to highlight some factors that potentially skewed our results. This dataset was pulled from a software-generated Spotify playlist, but not from general Spotify data across the software platform as a whole. Additionally, the variables that we tested are not as clearly defined as we would have hoped. For example, the "danceability" variable was defined as "how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity" but the dataset creator did not further explain how the results was measured-this is the case for several of the variables present. Finally, the measure of popularity was not clearly defined outside of "the higher the value the more popular the song is", so we are unsure how this metric was calculated.

Even though we were unable to truly answer our question regarding which factors must be present to make a song popular, we still believe that our analyses of this dataset drew interesting conclusions. Outside of genre and perhaps key, there really did not appear to be a magic formula present for making a song a chart-topper. Whether it was due to the flaws in our dataset, the limitations of our sample size, or some other unknown reason, our analysis shows that popularity is not mutually exclusive to certain necessary variables. We believe this should be inspiring to future music artists, especially in the wake of AI-generated art-there still appears to be some "it" factor present that determines whether or not a song will have broad and lasting popularity.

-------------------------------------------------------------------------------
