const filterEvenNumbers = (numbers : number[]) =>{
    return numbers.filter(n => n % 2 === 0);
}



const reverseString = (str : string) =>{
    return str.split('').reverse().join('');
}



type StringOrNumber = string | number;
const checkType = (value : StringOrNumber) =>{
    if( typeof value === 'string'){
        return "String";
    }
    else{
        return "Number";
    }
}



const getProperty  = <T>(obj:T ,key: keyof T)=>{
  return  obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };



interface Book {
    title : string,
    author : string,
    publishedYear : number
}
const toggleReadStatus = (book : Book) =>{
    return {...book ,
            isRead : true
           }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    grade : string;

    constructor(name: string, age: number, grade : string){
        super(name,age);
        this.grade = grade;
    }
     getDetails() : string{
       return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
 }
}
const student = new Student("Alice", 20, "A");



const getIntersection =(arr1 : number[],arr2 : number[]) : number[] =>{
    return arr1.filter(value => arr2.includes(value));
}

