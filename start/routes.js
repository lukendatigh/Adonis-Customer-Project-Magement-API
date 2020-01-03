'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// Customer routes
Route.get('/customers', 'CustomerController.index')
Route.get('/customers/:id', 'CustomerController.show').middleware(['findCustomer'])
Route.post('/customers', 'CustomerController.store')
Route.patch('/customers/:id', 'CustomerController.update').middleware(['findCustomer'])
Route.delete('/customers/:id', 'CustomerController.delete').middleware(['findCustomer'])


// Project routes
Route.get('/customers/:customerid/projects', 'ProjectController.index')
Route.get('/customers/:customerid/projects/:projectid', 'ProjectController.show')
Route.post('customers/:customerid', 'ProjectControler.store')
Route.patch('customers/:customerid/projects/:projectid', 'ProjectControler.update')
Route.delete('customers/:customerid/projects/:projectid', 'ProjectControler.delete')


// Task routes
