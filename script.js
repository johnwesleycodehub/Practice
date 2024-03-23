// var movie ={
//     Title:"Leo",
//     Hero:"Vijay",
//     Heroine:"Trisa",
//     Director:"Lokesh Kanagaraj",
//     Imdbrating:7.5,
//     Budget:500,
//     Cast:["GVM","Arjun","Myskin","Sandy","Janani","Madanona","Sanjay dutt"]
// }
// movie.Languages=["Tamil,Hindi"]
// console.log(movie);

// var person = {
//     name: "rupan",
//     age:15,
//     Gender:"male"
// }
// var b =JSON.stringify(person);
// console.log(b);
// var c = JSON.parse(b)
// console.log(c);

var arr =[{
name: "John Wesley",
Age: 22
},
{
    name: "Wesley",
    Age: 23
}]
for(var i=0;i<arr.length;i=i+1)
{
    console.log(arr[i].name,arr[i].Age);
}

var arr = [
    {
        "name":"rupan",
        "age":"15"
    },
    {
        "name":"chakravarthy",
        "age":"05"
    },
    {
        "name":"John",
        "age":"30"
    },
    {
        "name":"Doe",
        "age":"40"
    }
]
for(var i=0;i<arr.length;i=i+1){
    console.log(arr[i].name,arr[i].age);
    
}