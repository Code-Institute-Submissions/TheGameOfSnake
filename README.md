# The Game Of Snake

<img src="docs\misc\mockup_finished_product.png"
     alt="Website on different platforms"
     style="float: left; margin-right: 10px; margin-bottom: 10px;" />

#### Access the project
**Live:** Click [here](https://dutchie1990.github.io/TheGameOfSnake/) to access the live website.

**Repository:** Click [here](https://github.com/Dutchie1990/TheGameOfSnake) to access the GitHub project.

# Table Of Contents
- [Project goal](#Project-goal)
- [The Five Planes Of UX Design](#The-Five-Planes-Of-UX-Design) 
    - [Strategy](#Strategy)
        - [Game Concept](#Game-Concept)
        - [User Stories](#User-Stories)
    - [Scope](#Scope)
        - [Minimum Viable Product](#Minimum-Viable-Product)
        - [Nice To Have](#Nice-To-Have)
    - [Structure](#Structure)
    - [Skeleton](#Skeleton) 
        - [Desktop](#Desktop-Design)
        - [Tablet](#Tablet-Design) 
        - [Phone](#Phone-Design)
    - [Surface](#Surface)
        - [Background](#Background) 
        - [Colors](#Colors) 
        - [Typography](#Typography) 
- [Features](#Features) 
    - [Existing Features](#Existing-Features) 
    - [Features Left To Implement](#Features-Left-To-Implement)
- [Technologies & Tools](#Technologies-and-tools)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Credits](#Credits)
    - [Content](#Content)
    - [Acknowledgments](#Acknowledgments)
    - [Used Website](#Used-Websites)

# Project goal
We all got this feeling now and then that technology is going too fast and we are longing for the ‘good old days’. This project aims to create a back in the days feeling. So get sentimental and join us in our time travel to 1988. The days of the Nokia 3310 and the first version of Snake.

# The Five Planes Of UX Design

## Strategy
<hr>
With the game, I want to offer the user an enjoyable and challenging gameplay and let them experience the old days. The game itself is very simple and based on Snake developed and  published by Gremlin in 1976 under the name Blockade.

### Game concept

The player controls a dot which represent a snake. The snake has to eat objects to grow and to increase the players' score. The player loses when the snake runs into itself and, depending on the game mode, runs into the screen border.

The game is mainly known by older generations, so I want to give the website a nineties design  to create correct atmosphere connected with the game.  

The game needs to work on multiple devices and resolutions. The controls of the game should be intuitive and simple.

### User Stories 
- As a site owner, I want my site to perform well so that my users do not have to wait on the game to load

- As a site owner, I want my site to size depended on the device which is played on so my users can play on all devices

- As a site owner, I want to give my user the feeling of competition so that my user is triggered to come back and improve their gameplay

- As a user, I want to select the game mode, that I can make the game more challenging

- As a user, I want to play the game on all devices, that I can always improve my gameplay whatever the device I use.

- As a returning user, I want to see my performance in comparison with the best performance, that I know my standings in the competition

## Scope
In this paragraph the scope of the initial project will be decided as well further improvements will be discussed. The scope is represented in different features. 

### Minimum Viable Product
Within the scope of this project, there are some features needed to make an ‘MVP’, minimum viable product. Those main features are:

- Game mode feature

This feature consist of the 2 gamemodes which should be implemented. First gamemode is 'through the wall' and the second gamemode is 'walls are solid'. The user should be able to choose the gamemode before they start a game. After each game the game mode should be reset and set to 'through the wall'. When the player plays the 'through the wall' gamemode, the snake when hitting the wall should be appear on the opposite side. Whenever the player plays the 'walls are solid' gamemode, the game should be gameover when hitting a wall. 

- Game feature

This feature contains the gameplay. When the user start a game, the game area should appear with the snake in the middle and a random food object should be spawned in the game area. The snake should move in the right direction when the game starts and it should be able to control by the player, see control feature. When the snake eats a food object the snake must grow lenght by 1 block. The game should end when the snake eat his own body and sometimes depended on the game mode hitting the wall. 

- Control feature

During the game the snake should be controlled by the user. At desktop devices, the snake should be controlled by the arrow keys and at mobile devices and tablets control arrows will be shown. When hitting the arrow in the same or opposite direction of the snakes direction, no change should happen. When hitting vertical direction when the snake is going horizontal direction, the snake's direction have to change to up or down depended on the user input and visa versa. 

- Game over feature

When the conditions of gameover are met, the game should stop and the user should see a gameover screen. In this screen the user should be able to continue to start a new game. The game itself is reset as well the gamemode as described in the gamemode feature. 

### Nice To Have
Nevertheless, more features can be added to the minimum viable product to make the game more attractive to the users.

- Welcome screen feature

A welcome page is shown when the user first load the game url. The welcome text should fade away and the screen should split into and transite to left and right like a curtain which open up. When the buttons are visible for the user, they should be able to use right away and the animation should not be blocking any user interaction with the page. 

- Levels feature

When a player eat 3 food objects the level as well as the speed of the snake should be increased. The level and the score are visible above the gamearea for the user at larger screens and are visible in the game area on smaller screens. This score and level values should be updated in real-time. When the game is finished the final score and level should be shown to the user at the gameover page. 

- Scoreboard feature

At the game over page there should be an overview of the best 3 scores in a table. This table consist of the level, score, date and gamemode. When the user ends the game, the scores should be stored at the local storage at the user's machine. Whenever a user come back to play the game, the old scores should be retrived from the local storage and shown to the user. 

- Animate screen transition

When a game finish, the user should see a animation like a curtain close and open again with the gameover page. As soon the game ends, the animation starts and when the curtain is fully closed, the gameover screen should load. When it is loaded the curtain should open again and the gameover page should be able to see for the user. 

- Leader board feature

In this feature a name should be ask from the user and the highest score should be sent to a database. Together with all other users there will be a leaderboard which can be visited via a button on the start screen. Within this leaderboard you can filter on gamemode and should be able to find your name with position in the leaderboard.

- Swipe control feature

At mobile and tablet devices, the user should be able to toggle controls. They are able to choose from the toughpad or the regular arrow controls. When using the toughpad the snake should be controlled by swiping in the designated area. 

## Structure
The site will contain one page which is manipulated by JavaScript.

The structure of the site is slightly different depended on what device is used. On mobile and tablet, the controls will be added as for the desktop the game is controlled by the arrow keys.

Also, the game area height and width is depended on which device the game is played. If the width of the device is lower than 510 pixels, the width of the game area will be 90% of the screen width. Otherwise, the max-width of the game area will be 510 pixels to give the user the same game experience among different screen sizes. As well the max-height will be 510 pixels. If the screen height is lower than 510 pixels, the height of the game area will be 70% of the screen height.

## Skeleton
The wireframes are made to decide how the project must look like on different devices. Further design decisions that are made along the development process will be clarified in a further section.

### Desktop design

- Start page - click [here](docs/wireframes/desktop/Desktop-GameOfSnake-StartPage.png)
- Game page - click [here](docs/wireframes/desktop/Desktop-GameOfSnake-GamePage.png)
- Game over page - click [here](docs/wireframes/desktop/Desktop-GameOfSnake-GameOverPage.png)

### Tablet design

- Start page - click [here](docs/wireframes/tablet/Ipad-GameOfSnake-StartPage.png)
- Game page - click [here](docs/wireframes/tablet/Ipad-GameOfSnake-Gamepage.png)
- Game over page - click [here](docs/wireframes/tablet/Ipad-GameOfSnake-GameOverPage.png) 
### Phone design

- Start page - click [here](docs/wireframes/phone/Phone-GameOfSnake-StartPage.png)
- Game page - click [here](docs/wireframes/phone/Phone-GameOfSnake-GamePage.png)
- Game over page - click [here](docs/wireframes/phone/Phone-GameOfSnake-GameOverPage.png) 

## Surface
The goal of the site is to give the user a relaxing moment to mesmerize about the old days while enjoying the game of snake. The design will be simple with warm colours.

The important content will be always centered in the middle of the screen so the users don’t have to actively look for buttons or content.

Lastly, the contrast is maximized to draw attention to an important aspect of the screen which is the game area.

### Background
As background image a snake drawing is used. This snake will be grayed out when the game is lost.

### Colors
The colours are a combination of yellow, blue, white, and green. The colours are carefully selected to maximize the contrast to make the game visible also for people suffering from colour blindness.

The next pallet is used in the project.

<img src="docs\colors\color-pallete.png">

### Typography
In order to maximize the 1990’s feeling the HachiMaruPop font is used in this project.

HachiMaruPop is a cute font that was popular among young Japanese girls in the 1970s and 1980s. It has an informal handwritten appearance which works well at larger sizes.

# Features 
In this paragraph the features will be discussed. Also is explained which feature has been implemented and what the impements are for not implemented features. 

### Existing Features
Almost all the features discussed in the scope plane are implemented. I had more time to invest in nice to have features leaving only 1 nice to have not implemented. So beside the general gameplay, I implemented some features to make the game more attractive for the players. 

One downside of the game is window resizing. As the window height and width are calculated when the game is initiated, it is not possible to resize the window during the game. Nevertheless, when people are starting the game at mobile or tablet size screen the possibility to extend their screen size are very low. Furthermore, the gameplay is at best at a desktop as it is a browser-based game. For a better experience on mobile or tablet, the game should be developed as a app. 

### Features Left To Implement
The leaderboard feature is left to be implemented. This feature is not possible to build yet with the available technologies used in this project. This feature need to have a database storage to store the usernames with their heighscores. 

Further improvements can be made on the sensibility of the touchpad. When the user is to quick with his swipe, the touchpad does not always detect a valid swipe. 

Also more gamemodes can be implemented such as a party-mode with iterating colors of the snake's body as well object in the playfield which has to be avoid by the player. 

Due to time issues and technical impedements, I decided to leave those features for further improvements. 


# Technologies and Tools

### Tools
-   Moqups 
    - Used to make the mockups and wireframes of the project. 
- Github
    - Used for source control
- Git
    - To make regular commits and pushes to the Github repository 
- Visual Studio Code 
    - Used as IDE
-  Outklip
    - To make gif files for TESTING.md

### Technologies and frameworks
-   HTML5
-   CSS3
-   JavaScript
-   GSAP
-   Googles Fonts

# Testing 

[visit TESTING.md](https://github.com/Dutchie1990/TheGameOfSnake/blob/main/TESTING.md)

# Deployment 

### Publish

1.  Go to your Github page and Login to your profile
2.  Navigate to your repositories and select the one you want to publish
3.  Navigate to the Setting tab
4.  Scroll down to the Github Pages section
5.  Select main branch in the first dropdown
6.  Select /root in the second drowdown
7.  Click save
8.  Wait till the text: "Your site is published at ..." appear and navigate to the published website

### Clone

1. To clone using HTTPS, copy the following link: https://github.com/Dutchie1990/TheGameOfSnake.git
2. Open your terminal and your empty directory 
3. Type: GIT CLONE https://github.com/Dutchie1990/TheGameOfSnake.git
4. Press enter to execute the clone 

additional guidance can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

### Download

The repository can be downloaded as zip. Click [here](https://github.com/Dutchie1990/TheGameOfSnake/archive/main.zip) to start the download

# Credits 

### Content
All the content is written by me. The background image comes from the following website: https://www.huahintoday.com/thailand-news/answering-questions-snakes/

### Acknowledgments
Thanks to my tutors and my mentor Ignatius for valueable tips and tricks and helping me throughout the project. I would also like to thank the community on Slack for valuble input regarding the project.

### Used Websites
- https://coolors.co/ 
- https://www.rgbtohex.net/hextorgb/
- https://attacomsian.com/blog/javascript-copy-array
- https://www.conventionalcommits.org/en/v1.0.0/#summary
- https://en.wikipedia.org/wiki/Snake_(video_game_genre)
- https://www.geeksinux.com/the-elements-of-user-experience-design/ 
- http://www.javascriptkit.com/javatutors/touchevents2.shtml 
- https://www.youtube.com/channel/UCXvIGbH6QsPJYtwzQvwhFyw 
- http://technologies4.me/browse/ 
- https://www.w3schools.com/ 
- https://www.valentinog.com/blog/html-table/


NOTE: 

Thanks for reading my ReadMe.md, I hope you also enjoy the gameplay :)



 

 
 


