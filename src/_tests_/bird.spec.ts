import { Bird, Eagle, Penguin } from "../models/bird-model";

describe('Bird', () => {

	test('Should Fly Bird', () => {
		const bird = new Bird({
			name: 'Bird',
			age: 25,
			origin: 'North America'
		})

		expect(bird.fly()).toEqual('Bird')
	});

	test('Should Fly Eagle', () => {
		const eagle = new Eagle({
			name: 'Eagle',
			age: 25,
			origin: 'North America'
		})

		expect(eagle.fly()).toEqual('Eagle')
	});

	test('Shouldnt Fly Penguin', () => {
		const penguin = new Penguin({
			name: 'Penguin',
			age: 25,
			origin: 'North America'
		})

		expect(penguin.fly()).toEqual(new Error("I can't fly"))
	});

	test('Should walk and swim Penguin', () => {
		const penguin = new Penguin({
			name: 'Penguin',
			age: 25,
			origin: 'North America'
		})

		expect(penguin.walk()).toEqual('I am Walking')
		expect(penguin.swim()).toEqual('I am swimming')
	});
})