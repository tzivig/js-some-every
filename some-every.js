
function hasOddNumber(arr){
    return arr.some(function(value){
      return value % 2 != 0
    });
  }
  
  function hasAZero(num){
    return Array.from(String(num), Number)
      .some(function(value){
   return value === 0
    });
  }
  
  function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
      return value %2 !=0
    })
  }
  
  function hasNoDuplicates(arr){
    return arr.every(function(value, index){
     return arr.indexOf(value) === arr.lastIndexOf(value)
    })
  }
  
  function hasCertainKey(arr,key){
    return arr.every(function(value){
      return key in value
    })
  }
  
  
  function hasCertainValue(arr,key, value){
    return arr.every(function(val){
      return val[key] == value
    })
  }