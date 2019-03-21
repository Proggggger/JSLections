 /*window.onbeforeunload = function(e) {
    playAudio();
     return 'test';
}*/
function alert_title(){
    let title = document.title;
    alert("Your title is: "+title);
}
function welcome(){
 alert("Glad to see you on our page!!!");
}

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
} 

function set_title(title){    

    document.title = title;
    
}    
function title_from_prompt(){
    set_title(prompt("please type a new  title","defaultText"));
}
document.getElementById('chng').addEventListener('click',title_from_prompt);
function title_from_input(){
    set_title(document.getElementById('tt').value);
}
document.getElementById('ask').addEventListener('click',title_from_input);
function conf(){
    if (confirm(" ")){
    document.getElementById('confirmed').innerHTML = "<h2>confirmed</h2>";
    }else{
        document.getElementById('confirmed').innerHTML = "not confirmed";
    }
}
document.getElementById('conf').addEventListener('click',conf);