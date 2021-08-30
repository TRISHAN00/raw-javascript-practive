if (true) {
  var varVariable = 'This is var'
}
console.log(varVariable)

if (true) {
  let letVariable = 'This is let'
  console.log(letVariable) //it will be error
}

//var is a function scope but function it self is a block scope
// let is a block scope

/*

   When we declare a variable (var) if the opportunity will be accessible anywhere from the outside. Because, after declaring the console out of scope, it points to the window object.

   but, let when we use let variable into into any scope it will not accessible from the outout side of scope.

*/
