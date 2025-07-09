import express, { Express } from 'express'
import { persons } from './personsRoute'
import { categories } from './categoriesRoute'
import { courses } from './coursesRoute'

export function routes(app: Express) {
  app.use(
    express.json(),
    persons,
    categories,
    courses
  )
}