# CarBid Api

An api to serve data for a carbid site

## Prompt

E-Commerce Store

## Tech

Express

## Installation

Clone the code off of Github into a repository. Then install all dependencies to prevent errors. Use npm start and run alongside client
for functional app.

commands:
git clone https://github.com/jadenRuplal/project-4-carbid-api.git
npm install (add all names from dependency in package.json)
npm start (after install)

### Authentication

| Verb   | URI Pattern          | Controller#Action         |
| ------ | -------------------- | ------------------------- |
| POST   | `/sign-up`           | `users#signup`            |
| POST   | `/sign-in`           | `users#signin`            |
| PATCH  | `/change-password/`  | `users#changepw`          |
| DELETE | `/sign-out/`         | `users#signout`           |
| POST   | `/listing`           | `users#createlisting`     |
| PATCH  | `/listing/:id`       | `users#editlisting`       |
| DELETE | `/listing/:id`       | `users#deleteslist`       |
| GET    | `/cars`              | `GetListings`             |
| GET    | `/cars/:id`          | `show#cars`               |
| POST   | `/cars/:id/comments` | `users#addcommentstocars` |
| DELETE | `/cars/:id/comments` | `users#deletescomments`   |
| PATCH  | `/cars/:id`          | `users#updatescurrentbid` |
| GET    | `/myCars/`           | `showYour#cars`           |
| GET    | `/bid/`              | `showyour#bids`           |

## About

This api updates everything a user does on the front end from logging in to purchasing vehicles or creating post.

## ERD

![ERD](resource/images/Erd.png)

## Client

https://github.com/jadenRuplal/project-4-carbid-client
