import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Error in the: name')
      }
    }

    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('Error in the: model')
      }
    }
  }
}
