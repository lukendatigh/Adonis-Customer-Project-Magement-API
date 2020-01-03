'use strict'

const Customer = use('App/Models/Customer')


class CustomerController {

  async index ({ response }) {
    const customers = await Customer.all()

    response.status(200).json({
      message: 'Here are your customers.',
      data: customers
    })
  }

  async store ({ request, response, params: { id } }) {
    // const { name, description } = request.post()
    // const customer = new Customer()
    // customer.name = name
    // customer.description = description

    // await customer.save()

    const customerData = request.only(['name', 'description'])
    const customer = await Customer.create(customerData)

    response.status(201).json({
      message: 'Successfully created a new customer.',
      data: customer
    })
  }
   
  async show ({ request, response, params: { id } }) {
    const customer = request.post().customer

    response.status(200).json({
      message: 'Here is your customer.',
      data: customer
    })
  }

  async update ({ request, response, params: { id } }) {
    const { name, description, customer } = request.post()
    customer.name = name
    customer.description = description
    await customer.save()

    response.status(200).json({
      message: 'Successfully updated a new customer.',
      data: customer
    })
  }

  async delete ({ request, response, params: { id } }) {
    const customer = request.post().customer
    await customer.delete()

    response.status(200).json({
      message: 'Successfully deleted customer.',
      id
    })

}

module.exports = CustomerController
