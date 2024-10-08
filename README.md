# Celestron
Celestron is a web based procedurally generated tower defense game made by [IroncladDev](https://github.com/IroncladDev), [JDOG787](https://github.com/jdog787) and myself for the [2022 #madewithreplit gamejam](https://blog.replit.com/mwr-winners). As of the the [2024 Replit changes](https://blog.replit.com/transitioning-replit-core) Replit no longer provides free hosting as such the game can be found hosted [here](https://spotandjake.github.io/Celestron) through github pages.

# Building
To install the dependencies run:
```
yarn install --immutable
```
after that run:
```
yarn build
```
which will output the project to `./dist/` you can run `yarn host` to run the server and host the project.

# Development
In order to develop on the project you can run:
```
yarn dev
```
to start a development server.


# Notes
We currently hold all our planning documents at `./plans/READmE.md` the project is built using typescript and was built in under a week, as such there are some minor bugs the most notable bugs are:
### Worldgen
The world generation is powered by a custom algorithm similar to wave function collapse but a lot simpler, the algorithm is slightly naive and as such the path can wrap back in on itself preventing future map generation. The best way I have thought of to fix this is to rework the world generation algorithm to generation chunks with a set entrance and exit side, we can then generate the entire chunk in on a stage using a pathfinding algorithm with random obstacles to create some more unique patterns and show the subcells in between. We would generate these outer cells in a spiral like pattern allowing for a really interesting shape.
### Pathfinding
Currently there is an issue with pathfinding where the enemies can dissapear of certain tiles in certain world states, this is an interesting bug but as it only happens under certain conditions it is not major and can make the game more interesting.
### Leaderboard
It is unlikely that the leaderboard will still work as it relied on replit db and a hosted server.