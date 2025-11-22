// console.log("welcome ");

// let a="sarath";
// console.log(a);
// let b="king"
// console.log(b)
// b=10;
// console.log(b);
// const success="Disciplane"
// console.log(success);
// let x=10000
// {
//     let x = 100;
//     x=10;
//     const s=1000;   
//     console.log(x)
//     console.log(s)
// }
// console.log(x)
// let age=24;
// let name="sarath" 
// // let isright="true"
// let price=10.050
// isfollow=true
// let s=null
// let r= BigInt("123")
// let t=Symbol("hello!")\


// const student = {
//     age: 19,
//     name: "sarath",
//     cgpa: 9.2,
//     id: 2300030250,
//     ispass: true,
// };

// student.age = 23;

// console.log(student); 
// a=25;
// a=a+1;
// let mern={
//     fullname:"sarath",

//     age:19,
//     course : "MernStack",

// }
// console.log(mern.fullname);

// arthamatic operator 
// let a=10
// let b=5
// let c=a+b
// console.log("addition="+a+b)
// console.log("subractionn =",a-b)
// console.log("multiplication=",a*b)
// console.log("divison=",a/b)
// console.log("modulus",a%b)
// console.log("power",a**b)

// //unary operator
// console.log("increment",a++)
// console.log("decrement",a--)
// console.log("incre",a=a+1);
// console.log("decre",a=a-1);

// console.log("a = ",a,"b = ",b)

// let a=2;
// let b=3;
//  b+=a

//  console.log(b)
//  console.log("sarath")
// let a=10;
// let b=12;
// console.log("is equals to ",a==b); //looose comparing 
// console.log("is equals to ",a!=b)
// console.log("a===b",a===b);  //strict comparing

// a=10
// b="10"
// console.log(a==b);
// console.log(a===b);
// console.log(a>=b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a<b);


// let a=10;
// let b=5;

// let cond = a === b||a < b;

// console.log(cond);
// // console.log(cond2)

// trinary 
// a=18;
//  let result = a>=16 ? console.log("true") : console.log("false") ;
// alert("hello");
//  let  NO =prompt("hi akshay");
// console.log(NO);
// if(NO%5==0){
//     console.log("the number is multiple by 5 ");
// }
// let a=100;
// let b=70;
// let c=60;
// let d=50;
// let f=0;
//     if(a>=b)
//     {
//         console.log("A grade");
//     }else if(b>=c)
//     {
//         console.log("B grade");

//     } else if(c>=d)
//     {
//         console.log("C grade");
//     }else if(d>=f)
// //     {
// //         console.log("d grade");
// //     }else{
// //         console.log("f grage ");
// //     }
// // let s=0;
// // s=s+4;
// // console.log(s)
// // while(s==0)
// // {
// //     console.log("")
// // }
// // for(let i=1;i>=0;i++)
// //     console.log()
//  let str= "sarath chandra";
//  let size=0;
// for(let i of str ){// itarator character....
//     console.log("i",i);
//     size++
// // }
// // console.log("Sring size=",size)
// // let student={
// //  fullname:"Sarath chandra",
// //  age:21,
// //  cgpa:9.2,
// //  ispass:true,
// // }
// // for(let i in student ){
// //     console.log("i",i ,"value",student[i])
// // }
// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log("i",i);
//     }
// }
// let div=document.querySelector("div")
// console.log(div.getAttribute("class"));
// console.log(b)
// let d=document.querySelector("div")
// console.dir(d)
// let s=d.getAttribute("class")
// console.dir(s)
// let a=document.getElementById("hell");
// console.dir(a);
// let b=document.getElementsByClassName("box")
// console.log(b);
// let c= document.getElementsByTagName("div");
// console.dir(c);
// let e=document.querySelector("h1")
// console.log(e)
// e.setAttribute("class","newclass")
// let f= document.querySelector("h1");
// console.log(f)
// f.style.backgroundColor="red"
// f.style.backgroundColor="green"
// f.style.fontSize="56px"
// f.innerText="Sarath chandra"
// let b =document.createElement("button");
// b.innerText="click me"
// console.log(b);
// let s=document.querySelector("h1");
// s.append(b);
// s.remove(b);
// EVENTS IN JS
// let butt =document.querySelector("#butt")
// console.log(butt) 
// butt.onclick = (e) => {
//     console.log(e);
// };
// butt.onclick=()=>{
//     console.log("HANDLER");
//     let a=25;
//     a++
//     console.log(a);
// };
// butt.onclick=()=>{
//     console.log("HANDLER2");
// }
// let div = document.querySelector("div")
// div.onmouseover=()=>
// {
// console.log("you are in div")
// };
// let butt =document.querySelector("#butt")
// console.log(butt) 
// butt.onclick = (e) => {
//     console.log(e);
// };
// butt.addEventListener("click", ()=>{
// console.log("button --1")
// });

// butt.addEventListener("click", ()=>{
//     console.log("button --2")
//     });

//    let button_3=()=>{
//     console.log("button--3")
//    }
//     butt.addEventListener("click",button_3
//         );

//         butt.addEventListener("click", ()=>{
//             console.log("button --4")
//             });
// butt.removeEventListener("click",button_3);
        
// let a =document.querySelector("#ch")
// let curr="light";
// a.addEventListener("click",()=>{
// if(curr==="light"){
//    curr="dark";
//    document.querySelector("body").style.backgroundColor ="black";

// }else{
//      curr="light"
//      document.querySelector("body").style.backgroundColor ="white";
     
// }
// // console.log(curr);
// }
// );
// setInterval(()=>{
//     if(curr==="light"){
//         curr="dark";
//         document.querySelector("body").style.backgroundColor ="black";
     
//      }else{
//           curr="light"
//           document.querySelector("body").style.backgroundColor ="yellow";
          
//      }}45u43);
// let student={
//  name:"sarath",
//  age:19,
//  marks:94,
//  printmarks:function(){
//     console.log("the marks are:",this.marks);
//  }
// };
// console.log(student)
// const emp={
    // caltax(){
//         console.log("tax rate is 10%");

//     }
// };
// const sarath={
//     salary:10000000000,
//     caltax(){
//         console.log("tax rate is 10%");

//     }
// };
// sarath.__proto__=emp
// class
// class toy{
//     constructor(brand,price){
//         this.brand=brand
//         this.price=price;
//     }
//     robo(){
//         console.log("hello world");
//     }
//     cat(){
//         return "meoew";

//     }
// }
//   let toystore=new toy("berberry",100);  
//   let cindrilla=new toy("disney",200);

// class child extends toy{
//     constructor(brand ,price){
//         super(brand,price)
//         this.brand=brand;
//         this.price=price;
//     }
//     hello(){
//         super.robo();
//         console.log("hello");
//     }
// }
// let obj=new child("sarath",100);
// class user{
//     constructor(name,age){
//         this.name=name;
// //         this.age=age;

//     }
//     data(){
//      console.log("DATA=hello ")
//     }
// }

// class admin extends user{
//     editdata(){
//      console.log("hi there");
//     }
//      }


// stud =new user("sarath" ,19);
// stud2=new user("akshay",18);

// stud3=new admin("vamsi",19)
// asycnchronues
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(()=>
// {console.log("hello")

// },4000);
// console.log(4);
// console.log(5);
// console.log(6);
// set




// function getdata(dataId , getnextdata){
//     setTimeout(()=>{
// console.log("data=",dataId);
//  if(getnextdata){
//     getnextdata();
//  }
//     },2000)

// }
// getdata(1, ()=>{
//     getdata(2,()=>{
// getdata(3,()=>{
//    getdata(4)
// });

//     },);

// },);
// const getpromise=()=>
// {
//   return new Promise((resolve,reject)=>{
//     console.log("this is promise");
//     // resolve("successfull");
//    reject("error")
// });
// };

//  let promise=getpromise();
//  promise.then((res)=>{
//     console.log("promise is success");
//  });
 
//  promise.catch((err)=>
// {
//   console.log("this is error");
// });




// })
// function getdata(dataid,getnextdata){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data=",dataid);
//             resolve("success");
//              if(getnextdata){
//                 getnextdata();
//              }
//                 },2000);
//     });
// }
// function ff (){
// return new Promise((resolve,reject)=>
// {
// setTimeout(() => {
//     console.log("data")
//     resolve("sucess");
// }, 2000);
// });
// }

// function ff1 (){
//     return new Promise((resolve,reject)=>
//     {
//     setTimeout(() => {
//         console.log("data1")
//         resolve("sucess1");
//     }, 4000);
    
// });
// }  

// console.log("data is fetching");
// let f=ff();
// f.then((res)=>{
// console.log(res);

// console.log("data two  is fetching");
// let f=ff1();
// f.then((res)=>{
// console.log(res)
// });
// })


//  async function hello(){

// }


// const  URL="https://cat-fact.herokuapp.com/facts"
// let f=document.querySelector("#fact");
// const get=async()=>{
// let promise= await fetch(URL)
// console.log(promise);
// let data =await promise.json();
// f.innerText=data[1].text;
// }
