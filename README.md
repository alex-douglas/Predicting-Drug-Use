# Predicting Drug Use

### Goal

Can we predict an individual's use of illicit drugs based on basic demographic and biographical variables? Using the [National Survey on Drug Use and Health](http://datafiles.samhsa.gov/study-dataset/national-survey-drug-use-and-health-2015-nsduh-2015-ds0001-nid16894) from 2015 I try and do just that.

### Reasoning

Drug use can cause many problems for the individual as well as the people around him or her. For manufacturing and other blue-collar firms, hiring drug-free employees can be a major priority, due to substantial risk caused by someone who is high on the job. Because of this, companies will drug test potential employees before officially offering them a job. 

However, this drug testing can come late in the interview process. Oftentimes a candidate has been interviewed multiple times before they are finally asked to take a drug test, and if they test positive all this time spent on the candidate has been a waste. If companies were able to use a questionaire before the hiring process even begun to screen out likely drug users, they could save time and money.

News organizations have begun picking up on this trend (see [here](https://www.nytimes.com/2017/07/24/business/economy/drug-test-labor-hiring.html?_r=2) and [here](https://www.washingtonpost.com/national/rise-of-the-machines/2017/08/05/631e20ba-76df-11e7-8f39-eeb7d3a2d304_story.html?utm_term=.d35a84ee9b2a)). Some companies report rejection rates as high as 25 or 30%, while also reporting decreased productivity from unfilled positions.

I use the National Survey on Drug Use and Health to see if I can accurately classify an individual as a drug user, based on other information about the candidate collected through a pre-employment questionaire.

### Project Process

1. Read in the data from the National Survey on Drug Use and Health 2015.
2. Using the [survey codebook](http://samhda.s3-us-gov-west-1.amazonaws.com/s3fs-public/field-uploads-protected/studies/NSDUH-2015/NSDUH-2015-datasets/NSDUH-2015-DS0001/NSDUH-2015-DS0001-info/NSDUH-2015-DS0001-info-codebook.pdf) as a guide, decide which features will be included, and what will constitute the target
6. Clean the data.
6. Export the data to AWS for faster model analysis (export as a SQL database).
7. Find the best and most appropriate classification model for our data

See 'Predicting Drug Use - Notebook 1 - Alex Douglas' and 'Predicting Drug Use - Notebook 2 - Alex Douglas' in the [Jupyter Notebooks folder](Jupyter%20Notebooks/) for a step-by-step walkthrough of the project.
