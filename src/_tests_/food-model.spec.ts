import { FoodModel } from '../models/food-model'

describe('FoodModel', () => {
  it('Class Food model', () => {
    const foodModel = new FoodModel('Guiso', 'Un rico guiso con arroz y pollo', 12)

    expect(foodModel.getName()).toEqual('Guiso')
    expect(foodModel.getDescription()).toEqual('Un rico guiso con arroz y pollo')
    expect(foodModel.getPrice()).toBe(12)
  })
})
