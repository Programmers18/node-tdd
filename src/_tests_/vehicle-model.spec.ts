import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class vehicle model', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 300,
      inventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(300)
    expect(vehicleModel.getInventory()).toBe(true)
  })
})
