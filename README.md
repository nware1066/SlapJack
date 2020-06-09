# SlapJack
## Mod 1 Solo project by Naomi Ware
Turing's 2005FE final Mod 1 project

## the link to my project is :
https://github.com/nware1066/SLAPJACK

## Learning Goals

- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - localStorage to persist data
  - event delegation to handle similar event listeners
  - Understand the difference between the data model and how the data is displayed on the DOM
  - Use a personal problem solving process to break down large problems, solve things step by step, and not rely on an outside “answer” to a logical challenge

## Project Overview:
I have designed a webpage from the ground up, using HTML5, CSS and plain Javascript to recreate a popular cardgame called SlapJack. The app performs as follows:
- When the window loads, the deck is shuffled and split between the two players
- Players will altenate turns, with neither player being able to place a card if it is not their turn.
- Players place a turn by pressing the key associated with that player's turn.
- When the cards being played reveal a Jack, two cards of the same value in a row, or two cards of the same value separated by a different card, players have the opportunity to gain cards by pressing the key associated with that player's "slap".
- If a player slaps at any other time, a card is removed from that player's hand and placed in the other player's hand.
- When one player is out of cards, the alternating play restriction is removed and the player who has cards will place cards one at a time until the game ends. If the player runs out of cards before a winner is declared, the center pile will go into that player's hand and shuffle for continued play.
- During the final mode of gameplay, if the current player slaps a Jack, the game is over and that player wins, which will be displayed on screen. If the other player slaps on a Jack, the cards in the center pile are placed in that player's hand and gameplay resumes.
- A banner will appear above the cards to inform the players of slaps and wins.

## WINS
- I was able to approach the challenge with confidince, I broke the problems down into pieces and was able to identify strategies to complete those pieces.
- In the past, I have struggled with confidence in my ability to write my own code, but that has been easier for me over the last few projects. With this project, I was able to begin with a sense of anticipation and to really enjoy the process of creating the game.
- I have gotten better at using the Dev Tools in Google Chrome on this project, since I was using them extensively.

## CHALLENGES
- I was without power for part of one entire day, which slowed my progress.
- This is the first project that I have attempted to create without updating the DOM at the same time that I created the Data Model. As a result, manipulating the DOM was a little challenging, since I usually build event listeners and data queries as I go.
- There were elements that only revealed themselves as I played through the game, such as if the player with cards slaps a card that is not a Jack during the Sudden Death phase, the other player then has a card and normal gameplay should resume.


# I can be found on Github at:
https://github.com/nware1066 - Naomi Ware


## The project spec and rubric can be found at
https://frontend.turing.io/projects/module-1/slapjack.html
