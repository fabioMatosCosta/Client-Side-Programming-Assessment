# Client-Side-Programming-Assessment
## Site Structure: 

![homepage](https://res.cloudinary.com/fabiomatoscosta/image/upload/v1588771794/pxlwidgets%20ass./Home_page_k8zvwf.png)
The home page has a list of breweries and a map with the breweries locations. On the top left there is a dropdown list of the countries where the breweries are, and it filters the breweries by country. All the breweries in the list, and on the map are clickable, and they will open a list of the beer brands each one makes.
![beerspage](https://res.cloudinary.com/fabiomatoscosta/image/upload/v1588771794/pxlwidgets%20ass./beers_page_qi32si.png)

On the beers brand page if you click on a beer it will show some details on the right side of the page. 

![search](https://res.cloudinary.com/fabiomatoscosta/image/upload/v1588771794/pxlwidgets%20ass./search_by_name_lrrimo.png)
There is also a search on this page, accessible by the dropdown menu, there is an option for search by name or by type of beer, and it will render a text input for each search.
Wrapping the pages there is a simple nav bar, to go back to the home page, and a footer.

## About the page

### Site structure

The BreweryDB API has a limited data-set, specially regarding country of origin of beer brands (most of them are from US, but there are two from countries in Europe), so I decided to list breweries first, and with the possibility to filter them by country, and then show the beer brands for each brewery. This way there is less information for the user to go through on the home page. 
On the beer brands page, accessible after clicking a brewery, there is a list of all the beers from that brewery, that can be filtered either by name or by type. I render different search inputs, and the beers can be filtered by name and then by type, or vice versa. On the same page, there is a space on the right to see some info about each beer, so the user doesn’t need to go to another page to see the details and lose the filtering done.
	
### Code 


#### Tech

I built a small NodeJs server where I communicate with the API. I used ReactJs for the front-end and used Bulma for the styling.
	
#### Challenges

- I tried calling the API directly from the front-end, but I was getting a CORS error, so I built a small server to communicate with the API. 
- Getting all the beers from the API seemed a bit tricky, because there were 23 pages of beers and I never dealt with pagination before, I was afraid that I would get some trouble with asynchronicity. Then I noticed that all the locations were related with the breweries, so I decided to use them instead.
- There are many breweries that have different locations, so I just display the main brewery on the home page list, but in the map there are all the locations.


