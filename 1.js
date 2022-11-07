function getOwnProps(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
     console.log(`${key}: ${obj[key]}`);
    }
  }
}

let student={
  'schoolName':'Skillfactory'
}

let person=Object.create(student);
    
person.name='Angelina';
person.firstname='Yamtieva';

getOwnProps(person);