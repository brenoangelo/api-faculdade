const express = require('express')
const persons = require('./personsRoute.js')
const categories = require('./categoriesRoute.js')
const courses = require('./coursesRoute.js')

module.exports = app => {
  app.use(
    express.json(),
    persons,
    categories,
    courses
  )
}