# React-Redux-Api-Starter

**This project is still heavily WIP!**

This starter project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Plays best with [node-mongoose-starter](https://github.com/florianwittmann/node-mongoose-starter).

## Features:
- User Signup / Login
- Password Forget Flow
- Internal Dashboard for signedin users
- actions and reducers are part of the corresponding Module (for example Header component)
- global data folder for global apis.

##  run local
- `yarn`
- `yarn dev`
(user login only works with fitting server - see [node-mongoose-starter](https://github.com/florianwittmann/node-mongoose-starter))

## TODO:
- More tests missing, especially testing of the scenes folder
- Split inprogress and error redux state for the different user forms (login, signup, ..)
- Split API calls out of actions in extra api folder
- Add some example resource api with fitting forms to do CRUD operations on it