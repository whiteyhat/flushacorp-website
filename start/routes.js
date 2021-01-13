'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('pages.home')
Route.on('/kevinyern').render('pages.kevin')
Route.on('/terms').render('pages.terms')
Route.on('/privacy').render('pages.privacy')
