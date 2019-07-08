<<<<<<< HEAD
# Hour Tracking App

This app is to help you track your hours and generate invoices for clients as a freelancer or consultant.

**Table of Contents**

1. [Requirements](#requirements)
1. [Tech Stack](#tech-stack)
1. [Schema](#schema)
1. [Mockups](#mockups)
1. [Design](#design)
1. [Roadmap](#roadmap)

## Requirements

* Users can keep track of their hours
* Users can select which project they are working on
* Users can see a log of entries when they start the timer and stop the timer
* Users can set their hourly rate and business info in settings
* Users can generate an invoice for a client
* Users can see an overview of how much time they spent on each project over the last week/month/year

## Tech Stack

* Vue.js
* NW.js (desktop application framework for Node.js)
* MongoDB
* Bootstrap

## Schema

**User**

*This app assumes there is only one user for each install. User information is used for generating client invoices.*

* firstName
* lastName
* streetAddress
* streetAddress2
* city
* state
* zip
* country
* phone
* email
* billingDetails? -> this needs to be more thought out

**TimeEntry**

* start: timestamp
* stop: timestamp
* notes: textfield
* project: FK

**Project**

* name: charfield
* description: textfield
* color: charfield
* createdAt: timestamp
* updatedAt: timestamp

**Log**

* text: textfield
* createdAt: timestamp
* updatedAt: timestamp
* project: FK

## Mockups

<img src="Hours Log.png">
<img src="Projects Page.png">
<img src="Project Page.png">
<img src="Exports Page.png">
<img src="Drawer Menu.png">
<img src="Settings.png">

## Design

### Colors

$dark-blue: #0D3B66

$off-white: #FAF0CA

$yellow: #F4D35E

$orange: #EE964B

$peach: #F95738

## Roadmap

### MVP

* Hours log table
* Add new hour entries
* Create new projects (to associate hours with)
* Settings

### Version 1

* Task tracking under projects
* Exports
* Billing Settings
* Notifications
=======
# nw-vue-cli-example

NW.js + Vue-CLI 3 example

![A screenshot of the default app running on Windows](screenshot.png)

* Vue
* Vue-DevTools
* Babel
* ESLint
* Jest
* Nightwatch (not working)


## Running Locally for development

1. `npm install`
1. `npm start`
1. An empty window will pop up while Webpack warm ups
1. Once Webpack is running, refresh the window and you're golden


## Building for distribution

1. `npm run build:clean` will delete your `./dist` and `./dist-vue` folders
1. `npm run build:vue` will build just your Vue app for distribution (`./dist-vue`)
1. `npm run build:nw` will build just your NW.js app (`./dist`)
1. `npm run build` is your all-in-one command. It will clean out the old dist folders and build your Vue and NW.js app


# **IMPORTANT NOTE ABOUT BUILDS!!!**

They take a long time. If you do `npm run build` expect it to take 10-15 minutes. This can be adjusted by changing the build params in the `package.json`. The more platforms and build types, the longer it takes.


## Automated quality enforcment

1. **Linting:** `npm run lint` - Uses rules in `./eslint.json`
1. **Unit tests:** `npm run test:unit` - [Jest](https://jestjs.io).
1. **End-to-end:** `npm run test:e2e` - Accepting PR to make tests run in NW.js. - [Nightwatch](https://nightwatchjs.org).


### Customize configuration

See [Vue-CLI documentation](https://cli.vuejs.org/config).
>>>>>>> 620b4f3... Mostly set up
