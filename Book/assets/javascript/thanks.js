var count = 6; //countdown will initialise at 6s
var redirect = "/index.html" //Page of redirection   
function countDown(){
    var timer = document.getElementById("timer"); //from my <p><span> tag
    if(count > 0){ 
        count--;
        timer.innerHTML = "You will be redirected in "+count+" seconds."; //span through this string until 0s
        setTimeout("countDown()", 1000);
        }else{
        window.location.href = redirect; 
    }
}
countDown(); 

