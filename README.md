# Sol

[Sol](https://keginzburg.github.io/sol/) is a 2D data visualization of our solar system's nine planets and their respective characteristics. This includes everything from physical characteristics (size, temperature, gravity) to orbital parameters (lunar bodies). First, Sol presents the user with the nine main planets. After choosing a specific planetary body, it fetches that body's unique data. That unique data is then dynamically rendered to highlight each planetary body's uniqueness. Sol presents all data in a futuristic, yet retro aesthetic, taking inspiration from the 1979 film *Alien* and its setting, the spaceship Nostromo. It aims to replicate an 8-bit desktop interface with outdated vector graphics.

![Sol Interface](./assets/readme/main_interface.png)

## Wireframe:

![Sol Wireframe](./assets/wireframe/final_wireframe.png)

* About Modal and Nav Bar display "SOL" in HTML headings with links to this project's Github repo and my LinkedIn.
* Nav Bar includes clickable planet links that change the visualizations and fetch respective data.
* Orbital, Gravity, and Temperature Visualizations provide dynamic canvas renders of the fetched data.
* Abstract Data Readouts provides D3 and HTML renders of non-visual data.

## Functionality & MVPs:

### In Sol, users are able to:

* Choose between the nine, main planets of our solar system via the planet links in the nav bar. Upon doing so, Sol fetches said planet's data from an API and feeds that data into three distinct simulations: Orbit, Gravity, and Temperature.

### Orbit:
![Jupiter Orbit Sim](./assets/readme/jupiter_orbit.gif)

![Mars Orbit Sim](./assets/readme/mars_orbit.gif)

* Observe the orbital bodies of each respective planet and how they differ. Users can pause and resume orbit simulations and hover over lunar bodies to identify their unique names.

### Temperature:
![Venus Temp Sim](./assets/readme/venus_temp.gif)

![Earth Temp Sim](./assets/readme/earth_temp.gif)

![Pluto Temp Sim](./assets/readme/pluto_temp.gif)

* Observe a temperature visualization for each respective planet.

### Gravity:
![Mercury Gravity Sim](./assets/readme/mercury_grav.gif)

![Jupiter Gravity Sim](./assets/readme/jupiter_grav.gif)

* Initiate a gravity simulation for each respective planet.

### In addition, this project includes:

* An About modal describing the background and structure of the data visualization.
* This production README.

## Technologies, Libraries, APIs:

* This project is be implemented with the following technologies:
* The Solar System OpenData API: https://api.le-systeme-solaire.net/en/.
* The Canvas API to render the planetary/lunar bodies, gravity, and temperature.
* The D3 API to render any non-visual data.
* Webpack to bundle and transpile the source JavaScript code.
* npm to manage project dependencies.


## Implementation Timeline:

* Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Create Planet, Moon, OrbitSim classes and ensure that my data is being fetched properly. Get planet and moon canvas visualizations to show up on the screen and build basic structure for lunar orbits. Write formula functions that adapt orbital data for canvas design. Also begin setting up gravity and temperature canvases and respective classes.

* Monday: Dedicate this day toward implementing the underlying logic of Sol. Apply basic animation and ensure that my Orbit canvas dynamically renders accurate, yet accessible representations of the individual planets and their lunar bodies. Continue to ensure that my data is being fetched properly before creating planet links that fetch orbital, gravity, and temperature data from API. 

* Tuesday: Focus on the gravity and temperature canvases. Create a basic environment for my gravity canvas and  GravitySim and FallingObject classes. Create a visually striking and informative temperature readout out of a canvas rendering and TempSim and Entropy classes.

* Wednesday: Finish implementing data visualization interactivity, and focus on styling, as well as implementing the color scheme and styled nav links. If time, start on bonuses.

* Thursday Morning: Deploy to GitHub pages.


## Future Implementations:

* Add more detail to lunar lander in gravity simulation.
* Add dynamic backgrounds for Orbit canvas.
* Add interactive spaceship avatar that can "fly" through Orbit canvas.
* Add solar system modal.
* Add "Houston, we have a problem!" error functionality.


## CC Licensing:

* Favicon [solar system](https://thenounproject.com/icon/solar-system-1245933/) by [Ralf Schmitzer](https://thenounproject.com/ralfschmitzer/).
* [Volume](https://fontawesome.com/v5.15/icons/volume-up?style=solid) icons were provided by [Font Awesome](https://fontawesome.com/license) and only had colors changes.
* Background wallpaper design from Stanley Kubrick's *The Shining*.
* Music track *Hypersleep* from Jerry Goldsmith's 
Original Motion Picture Soundtrack for *Alien*.