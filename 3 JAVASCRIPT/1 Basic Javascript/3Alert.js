// Alert in browser javascript- Does not return anything
//alert("This is a message")

let myname=prompt("What is your name","Guest")
console.log(myname);

let deletePost=confirm("Do you really want to delete this post ? ");
console.log(deletePost);

if(deletePost){
    //code to delete post
    console.log("Your post has been deleted successfully");
}
else{
    //code to cancel deletion of the post
    console.log("Your post has not been deleted ");
}










let a = prompt("Hey whats you age ? ");
a = Number.parseInt(a); // Converting string to number

if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18 ");
} else {
  alert("You can now drive as you are above 18 ");
}
console.log("Done");
