let arr=[23,45,67]
//Map is used to create a new array with some modifications.
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)


//filter method
let arr2=[45,23,31,0,3,5]
let a2=arr2.filter((a)=>{
    return a<10
})

console.log(a2)
console.log(arr2)


//Array reduce method
let arr3=[1,2,3,4,2,1]
let newarr3=arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(newarr3)



