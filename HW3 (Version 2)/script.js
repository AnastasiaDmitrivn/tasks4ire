let arr = [1, [], true, '', null, undefined, {}, function () {}],
    data = [];
    dataType = typeof(data);
// number, string, boolean, null, undefined, object

function filterBy () {
  console.log (arr, dataType)
  console.log (newArr);
  return newArr
}

let newArr = arr.filter(function(item){
  if (data === null) {
    return item !== null
  } else if (data!==null && item === null) {
    return item===null
  }
  return typeof(item) != dataType
});

filterBy ();