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

- Game feature

- Control feature

- Game over feature

### Nice To Have
Nevertheless, more features can be added to the minimum viable product to make the game more attractive to the users.

- Welcome screen feature

- Levels feature

- Scoreboard feature

- Animate screen transition

- Leader board feature

- Swipe control feature

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

### Technologies and frameworks
-   HTML5
-   CSS
-   JavaScript
-   GSAP

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



 

 
 


