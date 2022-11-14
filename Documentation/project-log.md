### 20221029

- 1739 
  - Initial Commits, researching google and CTA APIs. 
  - The minimal viable product reports train arrival times to the user. 

### 20221030
- 1200 
    - Researching using the HTML area and map tag to make CTA Map interactive. 
    - Successfully added a test and map tag. 
    - The pixel coordinates change with the scalling of the image so far. I'm unsure if this is the right approach, I will be researching to see if someone else has built something similar. 


### 20221031
- 1800
    - Trying to get the Google maps API to render a map, so far no luck. 
    - Using [this repo](https://github.com/leighhalliday/google-maps-react-crash-course) as an example 

### 20221101
- 1800 

    - Got the API to display the map, but I'm having trouble having the key to work in the .env. The example I'm followig along with is using typescript and next.js and i think there is something that i have to retool for things to work properly. Also whats is odd is that when i console.log the API key it will log the key twice.
    
    - Restarting my computer seemed to get things going and now I have some wierd glitches with git hub.

### 20221105
- 1700 
  - Researching Youtube tutorials to better understand Google API's
  - [Google Maps & Google Places In React](https://www.youtube.com/watch?v=WZcxJGmLbSo) - This YouTube tutorial is 2 years old but uses plain javascript in React. 

- 1924 
  - Trying to figure out how to deploy markers, knowing that the CTA API will provide the lat and lng information required. 

### 20221106
- 1057
  - Exploring Google markers some more to display train stations 
  - Got the key to work, it needs a key as well as a position. 
  
- 1342 
  - got the icons to display in the color i wanted 
  - switching to explore the CTA API in order to display all the train stations on my map

### 20221107
- 1947
  - Looking into the CTA API documentation. there is a txt file that has all the stations and their lat lng values. Im going to merge this google API branch into main then start a new one that focuses on first parsing this data then displaying them on the map as markers. 

### 20221108
- 1900
  - I can no longer continue to build this app without more knowdlge about React and how to build components and use hooks and what not. Im going to find more online resources to round out my knowdgle 

### 2022113
- 1900
  - Thinking about what components I am actually gonne need when I rebuild this one. 
    - Station List : List of Stations 
    - Station : Holds train times for arrivals 
    - Arrivals : the estimated arrival time of all trains
    - CTA Map : 
      - map of the city displaying the Station Board information in a Heads up Display fasion.
      - Utlizes Google API components



