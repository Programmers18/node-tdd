import { Food } from '../models/food-model'

describe('FoodModel', () => {
  it('Class Food model', () => {
    const food = new Food({
      name: 'Guiso',
      description: 'Un rico guiso con arroz y pollo',
      price: 12,
      inventory: 240
    })

    expect(food.getName()).toEqual('Guiso')
    expect(food.getDescription()).toEqual('Un rico guiso con arroz y pollo')
    expect(food.getPrice()).toBe(12)
    expect(food.getInventory()).toBe(240)
  })
})
