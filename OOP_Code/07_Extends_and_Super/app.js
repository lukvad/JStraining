class Pet {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	eat() {
		return `${this.name} is eating!`
	}
}

class Cat extends Pet {
	constructor(name, age, lifesLeft = 9) {
		super(name, age)
		this.lifesLeft = lifesLeft
	}
	meow() {
		return 'MEOW!'
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOFF!'
	}
}