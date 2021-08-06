# Introduction
A social media platform with some basic features such as Messaging, Posting, Sign In, Sign Up, Profile, Shoot a like to post...
The project base on React and serverless base on Firebase (Firestore, Firebase Auth).
The UI is created by `styled-components` with css only, a little `Redux Persist` on store `auth state` and mainly using `react-firebase-hooks` on consuming the Firestore and Firebase auth.
 # Firestore Model
- users -> doc(user id) -> posts, audit, userinfo
- messages -> chat(uidA__uidB) -> messages, chatroom info
# Feature
## Auth
- Login using Google
- Sign up with your email, and need to verify email after sign up to activate account.
## Messaging
- 1vs1 realtime messaging, include chat history with better custome UI.
## Posting
- Realtime like and unlike update.
- Save all the uids who liked a post.
- Have update and delete post feature.
## Profile
- Have avatar and all the post
# How to run
first install all the dependencies
``` npm install ```
and ``` npm start ``` to check at `localhost:3000`
# Demo
Check [**live demo**](https://lvl162.github.io/react-messaging-firebase-app)
