[![Version](https://img.shields.io/npm/v/heroku-keep-awake.svg)](https://npmjs.org/package/heroku-keep-awake)

# heroku-keep-awake

Simple lightweight utility to help keep Heroku apps awake by pinging the Dynos at a set interval.

***Disclaimer:** This utility will only work with Heroku until you run out of "Free Dyno Hours" for the month. I'd suggest upgrading to a paid tier if you're hosting an app on Heroku whose uptime is important* 🙂 *(https://devcenter.heroku.com/articles/free-dyno-hours#managing-your-free-dyno-usage)*

## Installation

If using yarn:

```
yarn add heroku-keep-awake
```

If using npm:

```
npm i heroku-keep-awake
```

## Usage

This utility works by periodically pinging the URL of the Heroku application you want to keep awake. For example, `https://my-app.herokuapp.com`

By default, Heroku apps on the free tier will sleep after **30 minutes** of inactivity.

The examples below will show how you can keep your apps awake by using this utility within a **Node.js** application.

There are two different functions that can be imported:

```
const { wakeDyno, wakeDynos } = require('heroku-keep-awake');
```

Simply place the desired function call wherever your application starts, to initalize it.

```
const express = require('express');
const { wakeDyno, wakeDynos } = require('heroku-keep-awake');


const PORT = process.env.PORT || 3000
const DYNO_URL = 'https://my-app.herokuapp.com';
const DYNO_URLS = ['https://my-app.herokuapp.com', https://my-other-app.herokuapp.com]

const app = express();

app.listen(PORT, () => {
    wakeDyno(DYNO_URL); // Use this function when only needing to wake a single Heroku app.

    wakeDynos(DYNO_URLS); // Use this function when needing to wake multiple Heroku apps passed as an Array of URLs.
})
```

The functions also accept an optional options object for setting a desired interval (in minutes), disabling logging, or specifying stop times when dynos shouldn't be kept awake.

```
const DYNO_URL = 'https://my-app.herokuapp.com';

const opts = {
    interval: 29,
    logging: false,
    stopTimes: { start: '00:00', end: '06:00' }
}

wakeDyno(DYNO_URL, opts);
```

## Stop Times

Stop Times is a feature that prevents the utility from pinging the Heroku applications during a specific timeframe. This is useful when wanting to allow apps to sleep and not use up the Free Dyno Hours.

The `stopTimes` object must include both a `stop` and `end` time property. These times should be specified in 24 Hour Time (Military Time) format.

```
// Examples:

stopTimes = { start: '00:00', end: '06:00' } // 12am to 6am
stopTimes = { start: '12:00', end: '18:00' } // 12pm to 6pm
```

## Documentation

| Name      | Description                                                                 | Default | Type    |
| --------- | --------------------------------------------------------------------------- | ------- | ------- |
| interval  | Interval, in minutes, that the Heroku Dyno should be pinged.                | 29      | Number  |
| logging   | Turn off the logging that logs whether the calls were successful or not.    | true    | Boolean |
| stopTimes | Object used to specify a start/end time to not ping the Heroku applications | {}      | Object  |

## Contributing

Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author

Colby Miller | [https://colbymillerdev.com](https://colbymillerdev.com)

## License

[MIT](./LICENSE)
