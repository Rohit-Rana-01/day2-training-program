// //print
// console.log("aizen is using js to print !!!")
// //data types

// let ab = 100
// let cd = 89
// console.log(ab+cd)
// // native data type  

// console.log(typeof(ab))
// ab = null
// console.log(typeof(ab))

// // class of datatypes
// let a = new Number(98)
// console.log(a)

// // let var const
// var v = 0
// if(v>=50){
//     var v2 = "it is greater and equal"
//     console.log(v2)
// }else{
//     v2 = "it is smalller"
//     console.log(v2)
// }


// // arrays
// let nums = [4,45,"rohit",true,[83,345,"2nd array"]]
// for(let i = 0  ; i <nums.length; i++){
//     console.log(nums[i])
// }
// //  printing the 3rd element off 2nd array

// console.log(nums[4][2])

//     // let nums2 = new Array()
//     // console.log(nums2);

// let nums= [34,3,23,64,23,90]
// let nums2 = nums;
// console.log(nums)
// console.log(nums2)

// nums[2] =11
// console.log(nums)
// console.log(nums2)


// spred operator

// let nums= [34,3,23,64,23,90]
// let nums2 = [...nums];

// nums[2] =11

// nums.push(98)
// nums2.splice(0,1)
// console.log(nums)
// console.log(nums2.pop())
// console.log(nums2)

// function fun(a,b){
//     return a+b
// }
// console.log(fun(6,9))


// const f = (a,b) => {return a+b}

// console.log(f(5,99))

// call back function 


// // anonimous funtion 
// setTimeout(() =>{
//     console.log("setTimeout()");
// },2000)

// const f = (a,b)=> { 
//     console.log("this is the ans after 1 sec " + a+b)
//     return a +b };

// setTimeout(f(2,5),100)


// //objects .....

let ob = {
    name : "rohit ",
    address :{
        city:"dehradun",
        state:"uk"
    }

}
console.log(ob)