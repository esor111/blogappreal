// setTimeout(function(){
// console.log("timesss")
// }, 5000)

// function x(y){
// console.log("x")
// y()
// }


// x(function y(){
// console.log("y")
// })

 function x(){
let count = 0
document.getElementById("clickme").addEventListener('click', function xyz(){
    console.log("clicked", ++count)
})
}
x()