# ABOUT

React > 16.8

Webpack > 4.

## Use Tricks

    React Hook > 16.8

## List config includes:

       Webpack, Images, Fonts, Css, Sass, Jest, Label, FontAwesome , Bootstrap

## Structure

    App => Component A => Component B and Component C

## Usage

- Clone Project

- npm install

- npm run start

## Start

    npm run start

## Test

    npm run test

## Build

    npm run build

## Extended information

learn config **Scripts** in **package.json**

**npm install --save-dev ~ npm i -D** : all package in devDependencies will not install and run in production

**npm install --save ~ npm i** : all packages in dependencies will install and run in production

**file-loader** and **url-loader**

> file-loader => use image => webpack build => image => take time (x ms) when call image in browser

> ulr-loader => use image => webpack build => BASE64 => not take time (0 ms) when call image in browser

    Whichever you like, choose that one ^^^^^

    ulr-loader seems a bit better

**MiniCssExtractPlugin**

> customize css to min.css some thing like this

**HtmlWebPackPlugin**

> read your html file and handle it

**TerserPlugin**

> read your javascript file and handle it

**LINK**

> [research icon in font awesome](https://fontawesome.com/icons?d=gallery&m=free)

**resolve**

> import Utility from '../../utilities/utility'; after configuration import Utility from 'Utilities/utility'; very cool
