# Spotify playlists generator

Using the public API from Spotify, I've built a playlists generator. So, the user can create playlists based on a song search engine.

## Demo

Insert gif or link to demo

## Tech Stack

React, Typescript, Router, Styled components

## Features

-   Login with spotify
-   Playlist creating
-   Song search
-   Playlist CRUD

## Installation

### Pre-requisites

-   A spotify account is needed to log in
-   Complete the .env.example with your API info

Install my-project with yarn or npm

```bash
  npm install
```

or

```bash
  yarn install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_CLIENT_ID`

`REACT_APP_CLIENT_SECRET`

`REACT_APP_HOST`

## Optimizations

### Linters

The code is constantly being reviewed by ESLINT + PRETTIER to ensure that best practices are applied.

### Husky

Pre-commit hook is run by Husky to avoid committing bad code.
