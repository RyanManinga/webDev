const getSecurity = document.querySelectorAll("button-one");
getSecurity.addEventListener("click", function(event){
    console.log(event);
alert("You will be re-directed to a secure page");
});

const preventable = document.getElementById("sub-form");
preventable.addEventListener("click",function(e){
e.preventDefault();
});