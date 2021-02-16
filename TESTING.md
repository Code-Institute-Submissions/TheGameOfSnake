# Testing

[return to README.md](https://github.com/Dutchie1990/TheGameOfSnake)

# Table of Content 
- [User Story Testing]
- [Feature Testing]
- [Validators]
    - [HTML Validator]
    - [CSS Validator]
    - [Javascript Validator]
- [Further Manual Testing]
    - [Lighthouse]
    - [amiresponsive]

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

- Game mode feature

The game should be played at two game modes which can be selected before starting the game. The following points are tested:

    - selection game mode 

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-selection-1.png)
![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-selection-2.png)

    - game play with different game modes

        - trough the wall

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-1-demo.gif)


        - walls are solid

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-2-demo.gif)

    - showing gamemode in the highscore table

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/game-mode-in-highscore.png)


    - reset of gamemode when returning to start screen

![Browse](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/docs/misc/testing-gamemode/reset-gamemode.gif)



- Game feature

- Control feature

- Game over feature

- Welcome screen feature

- Levels feature

- Scoreboard feature

- Animate screen transition

- Leader board feature

This feature is left to be implemented. For this feature to track scores of different users on different devices, databases are needed. Using this technology is not part of this assignment of Code Institute. 

- Swipe control feature