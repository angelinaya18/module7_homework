function checkProp(prop,obj){
  return prop in obj;
}

let person={
  'name':'Angelina',
  'firstname':'Yamtieva',
  'age':22
}

console.log(checkProp('name',person));