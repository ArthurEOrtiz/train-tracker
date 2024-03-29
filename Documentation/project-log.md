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

    - Got the API to display the map, but I'm having trouble having the key to work in the .env. The example I'm following along with is using typescript and next.js and i think there is something that i have to retool for things to work properly. Also what is odd is that when i console.log the API key it will log the key twice.
    
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

  ### 20221114
  - 1900
    - Slowly building static site with some CSS
    - Got the header and station list table complete without any errors 

  ### 20221115
    - 1900
      - Getting my app built out a bit more 

  ### 20221118
    - 1800
      - Working on the txt file parsing. 
      - Gonna have to get back into studying React in general to help grasp importing this txt file. 

  ### 20221119
    - 0730
      - Working on diffrent data sets. Found a station list in JSON, working on decoding data. 

  ### 20221120

    - 1800
      - Been working on this for a few hours without documenting in the log...
      - I have found a data a set that already comes in JSON, is reposneive to changes and does not require a modification to my CORS policy. 
      - Looking to trim the data down to something useful to me. I think that maybe using several function. Although Im not sure I should put this into some class style component or something. 

    - 1900
      - Trying to edit down the data. The problem is that if there is a station with multiple lines then things get a little blurry
        - using Clark and Lake as an example ( "station_name": "Clark/Lake"). I know that it services the Blue, Pink, Green, Brown, Orange, and Purple Lines. Not the Red or Yellow Lines. 
        - If I query its map_id 40380, the api returns 4 results. 
            - Blue to Forest Park
            - Blue to O'Hare
            - Green, Brown ( Outer Loop )
            - Green, Purple Express, Pink, Orange ( Inner Loop )
        - The query would have to return 1 marker *if* there are multiple "stop_id"'s
            - explore the use of filter
                - filter down to line, then find duplicate "map_id"'s 
                - was able to filter all blue line stops, now I think I can reduce them into managable markers
            - explore reduce
                - i want to iterate through each element of the array and if they have the same map_id it should combine them as one 

        - Ending the night with a new approach.
            - Will find each unique Map Id with reduce, then filter from there. 

  ### 20221124

      - 0946 
        - Okay what do I need from stop data to be actually useful. 
            - station_name : string 
            - latitude : int
            - longitude : int 
            - stops: {stop_id: string, stop_name: string, lines: array}

        - So i just need to station to identify weather it is just one line or several. diffrent stops in the same station can serve many lines. 

      - 1626 
        - got to display every station on the map, now i  need more conditionals to show lines then add arrival times. 


  ### 20221128

    - 1900 
      - Have the data process to what I want, I will have to re-do that code smell later.

  ### 20221203 

    - 1100
      - Looking into how to best manage state for this application. 
      - Going to work through React's game tutorial, maybe some other for a refresher of fundementals.

  ### 20221204

    - 1130
      - Main Bug: The Markers will not display on initial load. 
        - Will display if I re-render map component 
        - useEffect is causing ArrivalControl to render twice. 
        - My expensive calculation runs too  much. 

      - Found [this resource at github](https://github.com/JustFly1984/react-google-maps-api/issues/2978) and solved the issue by using a diffrent marker component within the google map api called MarkerF. Currently researching the diffrence between the two. 

### 20221205
  - 1000
    - Working with the CTA arrivals API now and Im running into some issue 
      - CORS policy change
        - Will have to research how to change that but for right now I hae a chrome extention that is a work around. 
        - The CTA api threw and error and my code did not catch it. 
        - ``` 
          {
            TimeStamp : "2022-12-05T10:56:55"
                errCd : "100"
                errNm : "Required parameter 'mapid or stpid or stnid' is missing."
                 tmst : "2022-12-05T10:56:55"
          }
          ```
        - intentionally breaking the link to the API renders this raw response
          - ````
            Response {type: 'cors', url: 'http://lapi.transitchicago.com/api/1.0/ttarrivals.(MY_API_KEY_GOES_HERE)mapid=40830&outputType=JSON', redirected: false, status: 200, ok: true, …}body: (...)bodyUsed: trueheaders: Headers[[Prototype]]: Headersappend: ƒ append()delete: ƒ delete()entries: ƒ entries()forEach: ƒ forEach()get: ƒ ()has: ƒ has()keys: ƒ keys()set: ƒ ()values: ƒ values()constructor: ƒ Headers()Symbol(Symbol.iterator): ƒ entries()Symbol(Symbol.toStringTag): "Headers"[[Prototype]]: Objectok: trueredirected: falsestatus: 200statusText: "OK"type: "cors"url: "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=(MY_API_KEY_GOES_HERE)mapid=40830&outputType=JSON"[[Prototype]]: Response

          ````

        - So I get a 200 response if there is some sort of error and the actual error will live in the returned json object 

      - refactoring this api call to work with props.
      - will have to refactor code to move the CTA API call to to Arival Control 

### 20221207 

  - Spending time researching API's and Fetch within the REACT frame work. 

### 20221210

  - The fetch that I have written returns the entire HTTP response. I need to extract that actual JSON object. 

      

  


