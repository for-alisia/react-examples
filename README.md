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

---

## Widgets App (widgets folder)

This app is a set of 4 different widgets: classic accordion, dropdown, search from Wikipedia and translator (uses Google Translate API). All widgets are built from scratch without any libraries. Functional components. Contstructed navigation without (react-router), using 2 base components - Route and Link.
Live version, deployed in Vercel: [Widgets Examples React App](https://widgets-devwva3r9.vercel.app/)
Note: you can't you translator in live version because of API-key settings (it accepts only requests from localhost:3000)

---

## Color Generator (color-generator folder)

Simple color generator. User can type the color and app shows titnts and shadows for him with their hex-value and possibility to copy to clipboard.

Live version, deployed in Vercel: [Color Generator React App](https://color-generator-eight.vercel.app/).

## Infinity images scroll (infinity folder)

Infinity image gallery. Unsplash API. Get featured photos from the API by default. User can search for the photos he wants. New photos are loaded when user reaches the end of the page.

Live version, deployed in Vercel: [Infinite Image Gallery React App](https://infinity-mauve.vercel.app/). Request's amount is restricted to 50 in an hour by API.

---

## Cart App (cart folder)

Simple example of useReducer() hook. Items are loaded from api, then user can change the quantity of the items, delete them and clear the cart.

Live version, deployed in Vercel: [Cart Example React App](https://cart-tau.vercel.app/)

## Songs App (songs folder)

The main goal of this app is to use Redux inside as a state manager. Just Redux and React-Redux. Without additional libraries, as reselect and others. Basic example of using Redux. No API used.

---

## Posts App (blog folder)

Basic Redux App. Get posts from API, and then get users, who created this posts.

---

## Reviews App (reviews folder)

Simple list of user's review.

---

## Slider App (slider folder)

Simple, but very common slider, especially for reviews.

Live version, deployed in Vercel: [Slider Example React App](https://slider-ochre.vercel.app/)

---

## Next base routing example (next-basic-ex folder)

Example how to use routing and folder structure in NextJS to organize the project structure (dynamic routes and nested routes plus programmatic navigation). No UI. Just a skeleton.

---

## Next Events App (next-events folder)

Example of usage NextJS framework. Includes: dynamic paths, getStaticProps(), SEO, api-routing, Context API to show notifications, connected to MongoDB and uses file system (just as an example)

Live version, deployed via Vercel: [Events NextJS App](https://next-events-pxlej0zyn-for-alisia.vercel.app/)
