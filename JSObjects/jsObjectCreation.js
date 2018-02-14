'use strict'

 module.exports= function objectCreation() {

  console.log("JAVASCRIPT OBJECT CREATION")
  //object literal
  var cat = {
    name: "Fluffy",
    color: "White"
  }
  cat.age = 3
  cat['Eye Color'] = 'green'
  console.log(cat['Eye Color'])


  cat.speak = function () {
    console.log("maeoow")
  }
  console.log(cat)


  //constructor function
  function Cat(name, color) {
    this.name = name
    this.color = color
  }

  var cat1 = new Cat("Fluffy", "white");

  console.log(cat1)
  //Object.create

  var cat2 = Object.create(Object.prototype,
    {
      name: {
        value: "Fluffy"
      },
      color: {
        value: "White"
      }
    })
  console.log(cat2)
  console.log(cat2.name)

  //Using ES6 class

  class Catt {
    constructor(name, color) {
      this.name = name
      this.color = color
    }

    speak() {
      console.log('meeoow')
    }

  }

  var cat4 = new Catt('Fluffy', 'White')
  console.log(cat4)

}

