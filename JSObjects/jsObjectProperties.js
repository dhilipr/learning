
'use strict'

module.exports=function objproperties(){
  console.log("JAVASCRIPT OBJECT PROPERTIES")

var cat = {
  name:"Fluffy",
  color:"White"
}

//property descriptor
console.log(Object.getOwnPropertyDescriptor(cat, 'name'))
  //   Object{
  //   value:Fluffy
  //   writable: true
  //   enumerable: true
  //   configurable: true
  // }

//writable
Object.defineProperty(cat, 'name', {writable:false})
//cat.name='Scratchy' //error(in strict mode)- cannot assign to read only property of Object

var dog = {
    name: {first:'Fluffy', last: 'doggy'},
    color: 'White'
}
Object.defineProperty(dog, 'name', {writable:false})
dog.name.first= 'Scratchy'
console.log(dog.name) //Object {first: Scratchy last: doggy}

Object.freeze(dog.name)
//dog.name.first = 'july' - error

//enumerable- properties can be looped over
//if enumerable false
Object.defineProperty(dog, 'name', {enumerable:false})
console.log(Object.keys(dog)) //Array{0:color}
console.log(JSON.stringify(dog)) //{"color":"White"}

console.log(dog['name']) //Object {first: Scratchylast: doggy}


//configurable -prevents attributes from being changed or deleted

Object.defineProperty(dog, 'name', {configurable:false})

// delete dog.name -throws werror

//Property getters and setters
Object.defineProperty(dog, 'fullName',
  {
    get: function(){
      return this.name.first + '' + this.name.last
    },
    set: function(value){
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
  })
  
  //dog.fullName = 'Jango Warrior'
  console.log(dog.fullName)
  console.log(dog.name.first)
  console.log(dog.name.last)
  
}