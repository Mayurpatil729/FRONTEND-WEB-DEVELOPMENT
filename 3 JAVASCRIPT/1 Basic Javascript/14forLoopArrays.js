let num=[3,34,2,4,5]

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//forEach loop
num.forEach((element ) => {
    console.log(element*element)
})

//Array.from
let name="Mayur"
let arr=Array.from(name)
console.log(arr)

// for...of
for(let i of num){
    console.log(i)
}

// for..in
for(let item in num){
    console.log(item)
}



