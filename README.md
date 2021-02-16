# React Applications

This project is a my personal playground with React. There are various scenarios of using this library from the basics concepts to more advanced technics. Class-based component, functional components with hooks, state management and many other features.

## Seasons App (seasons folder)

Small basic application, that gets user's location using browser API and then shows different text based on his hemisphere. Just a few components like Spinner, Warning and Display. State managament through react's state and props, used class-based App component. For styling I used Semantic-UI library.

---

## Pictures App (pics folder)

Image gallery, based on unsplash API. User can search for anything and then app gets related images from unsplash.com. All the images are nicely positioned with grid-css and react refs to adjust the height.
Class-based components, state managament via react state.

---

## Video App (videos folder)

Appication uses youtube API, user can search for anything and then see the related videos from youtube. User can pick any video and watch it. Function-based approach, custom hook for fetching data from youtube API, react state (state passed via props).
Live version, deployed in Vercel: [Video Search React App](https://videos-orpin.vercel.app/)

## Widgets App (widgets folder)

This app is a set of 4 different widgets: classic accordion, dropdown, search from Wikipedia and translator (uses Google Translate API). All widgets are built from scratch without any libraries. Functional components. Contstructed navigation without (react-router), using 2 base components - Route and Link.
Live version, deployed in Vercel: [Widgets Examples React App](https://widgets-devwva3r9.vercel.app/)
Note: you can't you translator in live version because of API-key settings (it accepts only requests from localhost:3000)
