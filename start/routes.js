'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('pages.home')
Route.on('/kevinyern').render('pages.kevin')
Route.on('/flushacorp').render('pages.flushacorp')
