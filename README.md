
# Figured Inventory Cost Calculator Front End App

**Basic VueJs** created as a step to test my coding skills for Figured. Powered by Laravel API as the back end which can be found here https://github.com/ameyaaklekar/figured

## Overview
This Basic UI accepts the user input to calculate the price of the quantity entered. It uses the Vuex Store for the state management by **Committing Mutations**

## Project setup
```
npm install
```

```
copy the content of example.env file .env
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
``` 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage
Once the server is up and running, you can run the following URL in the browser http://localhost:8080/ 

The port 8080 may not be the same for some users, in that case copy the URL mentioned below the command from the terminal

```
  App running at:
  - Local:   http://localhost:YOUR-PORT/ 
  - Network: http://192.168.1.90:YOUR-PORT/
```

Once the App is opened in the browser, enter the quantity in the textbox and it will return you the price for that quantity.
If incorrect quantity is entered, it return you the error.