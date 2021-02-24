confirm ("Are You ready to start \nan OUTSTANDING EXPERIENCE! ");

// to welcome the guest
var UserName= prompt("Kindly enter your name") ;
var age= prompt("How old are you dear?");
if (age>=18) {alert("welcome here");  
}
else alert("you need your parents to continue!");

var color = prompt("Can you give me one of the most \n Relaxing Colors! ");
function popup() {
    if (color.toLowerCase() == "blue"||color.toLowerCase() == "violet"||color.toLowerCase() == "purple"||color.toLowerCase() == "green") 
        alert("Great job! \n " + color + " is one of the most relaxing colors")
        
    } else { alert("Try again \nyou may think about sky, grass ..!")
    //color = '';
    color =prompt("Can you give me one of the most \n Relaxing Colors! ");

popup()
};
    

console.log(color)

popup()


//var User2= parseInt()
// document.write('<h1>'+"Welcome " + UserName + " to Stoneood; The world of art"+'</h1>');

alert ("Welcome " + UserName + " to Stoneood \nThe world of art ");

//function TextToUser(params) {}
    

document.getElementById('ToUser').innerText ="Welcome " + UserName + " to Stoneood ";
document.getElementById(`AboutColor`).innerText = "( " + color.toUpperCase() + " )"+ " is a soothing color that can invite harmony and diffuse anxiety. \n and helpful for stress management because it can encourage a powerful sense of calm.";
// this one for replacing html command
//document.get
//document.getElementById('ToUser').innerHTML = "Welcome " + UserName + " to Stoneood The world of art";


//document.getElementById('').style.background = "red";
