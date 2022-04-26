function a(){
    let x=100

    b()
    function b(){
       console.log(x) 
    }

}

a() 


// b has access to lexcial exvironment of his parent