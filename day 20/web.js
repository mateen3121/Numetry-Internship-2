/*variable hoisting
console.log(ma3);
var ma3
ma3 = 5;
*

/* function hoisting
printcc();
function printcc() {
  console.log("Hello Mateen!");
}




function outerFunctionimplementation() {
  var outerVariable = "I am from outer function";
  
  function innerFunctionimplementation() {
    console.log(outerVariable);
  }
  
  return innerFunctionimplementation;
}

var innerFunc = outerFunctionimplementation();
innerFunc(); // Corrected function invocation

function createFunctions() {
  var result = [];
  
  for (var i = 0; i < 5; i++) {
    // Use a closure to capture the current value of i
    // by passing it as an argument to an immediately invoked function expression
    (function(i) {
      result.push(function() {
        console.log(i);
      });
    })(i);
  }
  
  return result;
}

var functions = createFunctions();
functions[0](); // Output: 0
functions[1](); // Output: 1
// Output will be 2, 3, 4 for subsequent calls since each function captures its own value of i at the time of creation.

function createFunctions() {
    var result = [];
    
    for (var i = 0; i < 5; i++) {
      (function(num) {
        result.push(function() {
          console.log(num);
        });
      })(i);
    }
    
    return result;
  }
  
  var functions = createFunctions();
  functions[2](); 
  functions[3](); 
  
   output will be 2 & 3*/
   function outerFunctionimplementation() {
    var outerVariable = "I am from outer function";
    
    function innerFunctionimplementation() {
      console.log(outerVariable);
    }
    
    return innerFunctionimplementation;
  }
  
  var innerFunc = outerFunctionimplementation();
  innerFunc(); 
  
  function createFunctions() {
    var result = [];
    
    for (var i = 0; i < 5; i++) {
      
      (function(i) {
        result.push(function() {
          console.log(i);
        });
      })(i);
    }
    
    return result;
  }
  
  var functions = createFunctions();
  functions[0](); // Output: 0
  functions[1](); // Output: 1
  // Output will be 2, 3, 4 for subsequent calls since each function captures its own value of i at the time of creation.
  
  
  