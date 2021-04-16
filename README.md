# star-wars-planet-generator

# What I learned: # 
* ##### In this project, I learned how to dynamically add React Components based on API data utilizing conditional rendering. 


```<App />```
------------------
1. Utilizing the ```componentDidMount()``` function, when the app mounts, it then shows the welcome screen as well as buttons to generate and to reset.
2. When the generate button is clicked it then uses the ```setState()``` function to update the state with ```<Planet />``` Component
3. When the reset button is clicked the ```setState()``` function is called again and updates the state with the ```<Generate />``` component


```<Planet />```
----------------
1. On mount, the component genertates a random number and appends that number to a base url. 
2. After the random url is created, it then uses the ```fetch()``` function to access an open source API and format the response data into JSON. 
3. With the converted data, the program then updates the current state using the ```setState()``` function and then uses the ```map()``` function to create an array of ```<Resident />``` components within the state.
4. Using JSX syntax, then render each ```<Resident />``` component.
5. If there are no residents, a prompt will show "There are no residents"  

```<Resident />```
------------------
1. When the component mounts, the system utilizes provided ```props``` to fetch the resident's data from the url and sets the state's data to the response. 
2. Because the species is also an additional url, it must be fetched, therfore, the ```setState()``` function calls an internal function called ```getSpecies()``` which sets the ```species``` value to the retrieved species name.

```<Generate />```
------------------
1. This component simply shows an introduction message prompting the user on what to do. 
