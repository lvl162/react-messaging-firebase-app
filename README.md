# About
A social media platform with some basic features such as Messaging, Posting, Sign In, Sign Up, Profile, Shoot a like to post...
The project did base on React and serverless base on Firebase (Firestore, Firebase Auth).
The UI was created by `styled-components` with css only, a little `Redux Persist` on store `auth state` and mainly using `react-firebase-hooks` on consuming the `Firestore and Firebase Auth`.
# Firestore Model
- users -> doc(user id) -> posts, audit, user-info
- messages -> chat(uidA__uidB) -> messages, chatroom info, last-message
# Feature
### 1. Auth
- Login using Google
- Sign up with your email, and need to verify email after sign up to activate account.
## Messaging
- 1vs1 realtime messaging, include chat history and better custome UI.
## 2. Posting
- Realtime like and unlike update.
- Save all the uids who liked a post.
- Have updating and deleting post features.
### 3. Profile
- Have user avatar and all the post that user had posted.
# How to run
- first install all the dependencies
``` npm install ```
- then ``` npm start ``` and check all results at `localhost:3000` 
# Deploy 
### 1. Add gh-pages
```npm i -D gh-pages```
### 2. Commit changes to `main` branch
```
git add .
git commit -m "its a message"
git push origin -u main // or using pull requset
```
### 2. Add `run scripts` to `package.json/scripts`
```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
```
### 3. Add `homepage` url to `package.json`
```
"homepage": "http://[github_username].github.io/[respository_name]"
```
example: ```"homepage": "http://lvl162.github.io/react-messaging-firebase-app"```
### 4. Deploy
```npm run deploy```
# Demo
Check [**live demo**](https://lvl162.github.io/react-messaging-firebase-app)
