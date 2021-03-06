# Testing

[return to README.md](https://github.com/Dutchie1990/TheGameOfSnake)

# Table of Content 
- [User Story Testing](#User-Story-Testing)
- [Feature Testing](#Feature-Testing)
    - [Game mode feature](#Game-mode-feature)
    - [Game feature](#Game-feature)
    - [Control feature](#Control-feature)
    - [Game over feature](#Game-over-feature)
    - [Welcome screen feature](#Welcome-screen-feature)
    - [Levels feature](#Levels-feature)
    - [Scoreboard feature](#Scoreboard-feature)
    - [Animate screen transition](#Animate-screen-transition)
    - [Leader board feature](#Leader-board-feature)
    - [Swipe control feature](#Swipe-control-feature)
- [Validators](#Validators)
    - [HTML Validator](HTML-Validator)
    - [CSS Validator](#CSS-Validator)
    - [Javascript Validator](#Javascript-Validator)
- [Further Manual Testing](#Further-Manual-Testing)
    - [Lighthouse](#Lighthouse)

# User Story Testing 

- As a site owner, I want my site to perform well so that my users do not have to wait on the game to load.

Please find more information on the performance of the website at the LightHouse section of this file. 

- As a site owner, I want my site to size depended on the device which is played on so my users can play on all devices.

Media queries and JavaScript are used to resize elements of the game depended on users device width and height. The game is playable on mobile devices as well as on tablets and large screen devices.

- As a site owner, I want to give my user the feeling of competition so that my user is triggered to come back and improve their gameplay.

To provide the user an highscore overview, the user is triggered to come improve their gameplay. The 3 highest scores will be shown when a user is gameover. These sores are stored in the local storage on the machine of the user. So when playing the game again on the same device the scores will be rendered again. 

- As a user, I want to select the game mode, that I can make the game more challenging.

To make the game challenging and attractive, 2 gameplays are introduced. In the "Through the Wall" gameplay, the player will appear on the other side of the canvas when hitting the wall. In the "Walls are Solid" gameplay the player will be defeated when hitting the walls. 

- As a user, I want to play the game on all devices, that I can always improve my gameplay whatever the device I use.

To ensure the gameplay at mobile devices and tablets, a control feature has been implemented. Those controls are visible on tablets and mobile devices. On desktops and laptops the arrow keys are used to navigate. 

- As a returning user, I want to see my performance in comparison with the best performance, that I know my standings in the competition.

As a returning user, my performance is stored in the local storage. So my own performances can be compared with current performance. Nevertheless, the performances of other users are not part of the product yet. This is a nice to have feature which is left to be implemented. For more detailed information, please navigate to the features section. 

# Feature Testing

### Game mode feature

The game should be played at two game modes which can be selected before starting the game. The following points are tested:

- selection game mode - OK 

<img src="docs/misc/testing-gamemode/game-mode-selection-1.png"
     alt="game mode selections"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

<img src="docs/misc/testing-gamemode/game-mode-selection-2.png"
     alt="game mode selections"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- game play with different game modes - NOK

    BUG 1: when playing walls are solid game mode, on the right and upper side of the screen the gameover comes 15 pixel to soon. 

The bug was caused by the checkWall function. If the snake hit canvas height 0 or width 0, it should not be game over only if smaller then 0. This bug is resolved by distract the body size from the 0. 

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-1-demo.gif)
![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-2-demo.gif)

- showing gamemode in the highscore table - OK

<img src="docs/misc/testing-gamemode/game-mode-in-highscore.png"
     alt="game mode shown in highscore table"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- reset of gamemode when returning to start screen - OK

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/reset-gamemode.gif)


### Game feature

- when ate food, the score should increase by 1 - OK

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-game/game-play-1.gif)

- when hitting own body, game should be game-over - OK

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-game/game-play-2.gif)

- when food is eaten, new food will be spawned - NOK

    BUG 2: in some cases the food is spawned at the snakes body

The method snake.body.includes(food_position) does not work because it is not possible to use includes a object in an array of objects as it is designed for string comparison. Therefore the method find is used to compare the object within the array of objects. This bug was not fixed after the first bug fix because the isSame boolean was set to false whenever it was true or false and also the draw food function was inside the while loop. This is fixed in the latest bugfix by making a function to either check if the food is spawned on the body and to set the isSame to false first and then check the conditions to set it back to true. Also the draw function moved out the while loop.

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-game/game-play-3.gif)

### Control feature

- at desktop arrow keys must be used as navigation - OK
- at desktop control elements are not visible - OK

<img src="docs\misc\testing-control\desktop-control.png"
     alt="desktop controls"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- at tablets arrows and touchpad are visible - OK

<img src="docs\misc\testing-control\tablet-control.png"
     alt="tablet and mobile devices controls"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- at mobile arrows and touchpad are visible - OK

<img src="docs\misc\testing-control\mobile-control.png"
     alt="controls and mobile devices controls"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- pressing right snake direction should be change to right, when snake moves vertical - OK 
- pressing left snake direction should be change to left, when snake moves vertical - OK
- pressing up snake direction should be change to up, when snake moves horizontal - OK
- pressing down snake direction should be change to down, when snake moves horizontal - OK
- pressing same direction, nothing should change - OK 
- pressing opposite direction, nothing shoul change - OK 

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-control/control-1.gif)

- pressing other keys - NOK

    BUG 3: when you hit a key different then arrows at the first key, reference exception is thrown

This bug was solved by JS validation solution. The variable dir was never initialized. So when another key was hit, the property dir was not set but nevertheless assign to newDirection. This caused the reference excention. 

### Game over feature

- the continue button is clickable to return to start game screen - OK

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-game-over/game-over-1.gif)

- the score and level is presented to the user - OK

<img src="docs\misc\testing-game-over\scores-highscore.png"
     alt="score and level are rendered"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

### Welcome screen feature

- welcome animation is fired when starting the website - OK
- welcome animation is done, and buttons are clickable - OK 

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-welcome-animation/animation-1.gif)

### Levels feature

- after each 3 food eaten, the snake should increase level - OK
- when increase level speed should be increased - OK

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-levels/levels-1.gif)

- score is visible in the game area at smaller screens - OK

<img src="docs\misc\testing-levels\levels-small-screen.png"
     alt="score and highscore and level visible at smaller screens"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

### Scoreboard feature

- 3 highest scores will be shown in the scoreboard - OK

<img src="docs\misc\testing-highscores\highscores-in-table.png"
     alt="highscores shown in table"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- scores will be saved to local storage when leaving the page - OK

<img src="docs\misc\testing-highscores\local-storages.png"
     alt="scores saved in local storage"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

- scores will be loaded into highScores variable when starting the game - OK 

<img src="docs\misc\testing-highscores\loaded-highscores.png"
     alt="scores load into highScores variable from local storage"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

### Animate screen transition

- screen transition will start when hit the continue button - OK
- screen transition will end and all buttons are clickable again - OK 

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-game-over/game-over-1.gif)

### Leader board feature

This feature is left to be implemented. For this feature to track scores of different users on different devices, databases are needed. Using this technology is not part of this assignment of Code Institute. 

### Swipe control feature

- the swipe control can be selected - OK
- swiping right snake direction should be change to right, when snake moves vertical - OK
- swiping left snake direction should be change to left, when snake moves vertical - OK
- swiping up snake direction should be change to up, when snake moves horizontal - OK
- swiping down snake direction should be change to down, when snake moves horizontal - OK
- swipe same direction, nothing should change - OK
- swipe opposite direction, nothing shoul change - OK

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-swipe-control/swipe-control-1.gif)

# Validators
### HTML Validator

<img src="docs\misc\validators\html-validator-1.png"
     alt="first html validate result"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

After fixing the issues: 

<img src="docs\misc\validators\html-validator-2.png"
     alt="second html validate result"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

### CSS Validator

<img src="docs\misc\validators\css-1.png"
     alt="first css validate result"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

### Javascript Validator

<img src="docs\misc\validators\JS-validator.png"
     alt="JS validate result main.js"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

<img src="docs\misc\validators\JS-validator-animate.png"
     alt="JS validate result animate.js"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

When the variable tl and gsap are initialized, the animation will not show anymore. So I accepted this warnings.

# Further Manual Testing
### [Lighthouse]

Mobile report

<img src="docs\misc\validators\Lighthouse-desktop.png"
     alt="lighthouse report mobile"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

Desktop report

<img src="docs\misc\validators\Lighthouse-mobile.png"
     alt="lighthouse report desktop"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

