# _HungryCows_

#### _A game of multiplying cows!, Feb 15th, 2020_

#### By _**Kristina Hengster Tintor and Stephanie Podolak**_

## Description

_A Web application modeled after the childehood favorite Tamagotchi game. When starting the application, a cow is born, initiating timers that promt the user to feed, sleep or sun the cow. Additionally, if a cow is kept alive for long enough, a new cow is born. Soon the user will have to manage multiple cows. Written in JavaScript._

## Setup/Installation Requirements

1. Clone this repository to your desktop. If using Git Bash you can do this by typing "git clone https://github.com/spodolak/HungryCows.git" into your command line while in desktop directory.
2. Navigate inside project directory by entering "cd epicodus_HungryCows" in Git Bash.
3. Open index.html file in your browser of choice by entering "open index.html" in the terminal.

## Project Specifications

| Behavior   |      Input      |  Output |
|------------|:---------------:|--------:|
|**When game starts, an animal is born/created**| Push Start | Animal appears with vital signs |
|**All timers starts immediately when animal is created**| cow is born | sun: 10, sleep: 10, food: 10 |
|**Every 6 seconds "sun" level drops by 1 level**| sun: 8 and 1 second passes | sun:7 |
|**Every 12 seconds "sleep" level drops by 1 level**| sleep: 6 and 1 second passes | sleep:5 |
|**Every 3 seconds "food" level drops by 1 level**| food: 5 and 1 second passes | food:4 |
|**If sun, sleep or food level drops to 0 then animal dies** | food:0 | animal dies |
|**If sun, sleep or food button is pressed then the respective health meters increase by 1 level**| sleep:4 and sleep button is clicked | sleep:5
|**If any health meter falls below 5, program informs user**| sun: 4 | user messsage: "I need sun!"
|**If 2 minutes pass without an animal dying, a new animal is born**| if cow object = true | instantiate new cow 

## Known Bugs

_No known bugs at this time_

## Support and contact details

_For any questions or comments please contact:_ Stephanie Podolak

## Technologies Used
* JavaScript
* jQuery-3.4.1
* Jest
* Babel 
* HTML
* CSS
* Bootstrap-4.4.1
* Google Fonts

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Stephanie Podolak_**
