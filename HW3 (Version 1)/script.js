let arr = [1, [], true, '', null, undefined, {}, function () {}];
// number, string, boolean, null, undefined, object
let dataType = 'object';

function filterBy (arr, dataType) {
  let newArr = [];
  console.log (arr);
  console.log (dataType);

  if (dataType!='number' && dataType!='string' && dataType!='boolean' && dataType!='null' && dataType!='undefined' && dataType!='object') {
    console.log ('Enter valid dataType ("string", "number", "boolean", "null", "undefined", "object").')
    return 'Enter valid dataType ("string", "number", "boolean", "null", "undefined", "object").'
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) !== typeof(1) && dataType == 'number'){
      newArr.push(arr[i])
    } else if (typeof(arr[i]) !== typeof('1') && dataType == 'string'){
      newArr.push(arr[i])
    } else if (typeof(arr[i]) !== typeof(true) && dataType == 'boolean'){
      newArr.push(arr[i])
    } else if (arr[i] !== null && dataType == 'null'){
      newArr.push(arr[i])
    } else if (typeof(arr[i]) !== typeof(undefined) && dataType == 'undefined'){
      newArr.push(arr[i])
    } else if (arr[i] === null && dataType == 'object') {
      newArr.push(arr[i])
    } else if (typeof(arr[i]) !== typeof({}) && dataType == 'object' && typeof(arr[i]) !== typeof(function () {})) {
      newArr.push(arr[i])
    }
  }
  console.log (newArr);
  return newArr;
}

filterBy (arr,dataType);