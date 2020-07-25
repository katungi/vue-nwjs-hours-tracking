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

<img src="mockups/Hours Log.png">
<img src="mockups/Projects Page.png">
<img src="mockups/Project Page.png">
<img src="mockups/Exports Page.png">
<img src="mockups/Drawer Menu.png">
<img src="mockups/Settings.png">

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

# nw-vue-cli-example

[![Build Status](https://travis-ci.org/nwutils/nw-vue-cli-example.svg?branch=master)](https://travis-ci.org/nwutils/nw-vue-cli-example)

NW.js + Vue-CLI 4 example

![A screenshot of the default app running on Windows](mockups/screenshot.png)

* NW.js 0.47.0
  * Chrome 84
  * Node 14.5.0
* Vue-CLI 4.4.6
* Vue 2.6.11
* Vue-DevTools (latest)
* Babel
* ESLint
  * Vue Linting
  * A11Y Linting
  * Jest Linting
* Jest (100% test coverage)
* Jest Serializer Vue (TJW)

*Why not include Vue-Router or Vuex?*

Those are both very easily added from the Vue-CLI. There is also no custom styling libraries (Bulma, Bootstrap, etc), or meta-languages (Sass, TS, Pug, etc), or component libraries (Vuetify, Inkline, etc). This repo is meant to be the "go to" option for building all desktop apps with Vue. So it avoids pushing any particular choices on to you. With the exception of testing being set up for Jest, and Linting being set up to ensure minumum quality of this boilerplate repo itself. Both of which can be easily modified, ignored, or removed.


## Running Locally for development

1. `npm install`
1. `npm start`
1. Once Webpack finishes starting up your app will appear in a window

## Building for distribution

1. `npm run build:clean` will delete your `./dist` and `./dist-vue` folders
1. `npm run build:vue` will build just your Vue app for distribution (`./dist-vue`)
1. `npm run build:nw` will build just your NW.js app (`./dist`)
1. `npm run build` is your all-in-one command. It will clean out the old dist folders and build your Vue and NW.js app

# **IMPORTANT NOTE ABOUT BUILDS!!!**

They take a long time. If you do `npm run build` expect it to take 10-30 minutes. This can be adjusted by changing the build params in the `package.json`. The more platforms and build types, the longer it takes. You can also remove the `--concurrent` from the `build:nw` script to see a status of what has been completed. This will allow individual pieces to finish faster, but the entire build will take longer.

## Automated quality enforcment

1. **Linting:** `npm run lint` - Uses rules in `./eslint.json`
1. **Unit tests:** `npm run test:unit` - [Jest](https://jestjs.io).
1. **End-to-end:** `npm run test:e2e` - Accepting PR to make tests run in NW.js. - [Nightwatch](https://nightwatchjs.org).

### Customize configuration

See [Vue-CLI documentation](https://cli.vuejs.org/config).

Want Vue-Router? Vuex? Use the Vue-CLI to add them:

* [Vue-CLI documentation](https://cli.vuejs.org/config).

* * *

## Updating Vue-DevTools

To update your version of Vue-DevTools run `npm run update:vue-devtools`.

This will download the source code for the latest version of Vue-DevTools and do a custom build for NW.js. This ensures you always have the latest version.

* * *

## Alternatives

* [nwjs-vue](https://github.com/elegantweb/nwjs-vue) - Uses Vue-CLI 2
* [vue-desktop-basic](https://github.com/TheJaredWilcurt/vue-desktop-basic) - Does not use a build system at all, all `.vue` files run directly in the browser context

* * *

## Maintainence of this repo

This is not for those *using* this repo, but for those *maintaining* it.

1. When updating the version of NW.js devDependency, also update these:
   * `package.json` devDeps, build nwVersion
   * `tests/unit/setup.js`
   * `tests/unit/components/__snapshots__/HelloWorld.test.js.snap`
   * `.browserslistrc`
1. Update the version numbers at the top of the README
1. Bump the version number, and all the npm scripts that reference the version number
1. Run `npm run regression` after updating dependencies or other major changes to verify builds still work correctly
