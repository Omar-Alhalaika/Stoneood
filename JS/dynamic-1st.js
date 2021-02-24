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
       { alert("Great job! \n " + color + " is one of the most relaxing colors");
        
    } else { alert("Try again \nyou may think about sky, grass ..!");
    //color = '';
    color =prompt("Can you give me one of the most \n Relaxing Colors! ");

popup()
    }
};




popup();

//console.log(color)
//var User2= parseInt()
// document.write('<h1>'+"Welcome " + UserName + " to Stoneood; The world of art"+'</h1>');

alert ("Welcome " + UserName + " to Stoneood \nThe world of art ");

var i= prompt("chose from (1) to (3) to show you some of our art");

function TextToUser(params) {
    var counter=parseInt(i)
    alert( UserName + " you will enjoy a " + i + " of our special art \nat the bottom of the page")

};
var counter=i;

 while (counter<=3) {
     if (counter==1) {
        document.write(`<img src="https://i.ibb.co/7KMXgdM/Omar-Alhalaika-1.jpg" width=20% height=20% alt="">`)      
     }else if (counter==2){
        document.write(`<img src="https://i.ibb.co/7KMXgdM/Omar-Alhalaika-1.jpg" width=20% height=20% alt="">`)      
        document.write(`<img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/134385803_463602761700204_5354315844285297085_o.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_eui2=AeEZSM-eIVek6CW2ObJRPc1DjXcSoZkJmO-NdxKhmQmY77erD_if_YwOeuPScHT8NheTi51RMZCP7EoIdlgYuu3m&_nc_ohc=I6JPMFL9BCoAX_SoN3a&_nc_ht=scontent.famm10-1.fna&oh=d615b751a9082ee90255a7464bddec5c&oe=60590D26" width=20% height=20% alt="">`)      
    }else if (counter==3) {
        document.write(`<img src="https://i.ibb.co/7KMXgdM/Omar-Alhalaika-1.jpg" width=20% height=20% alt="">`)      
        document.write(`<img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/134385803_463602761700204_5354315844285297085_o.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_eui2=AeEZSM-eIVek6CW2ObJRPc1DjXcSoZkJmO-NdxKhmQmY77erD_if_YwOeuPScHT8NheTi51RMZCP7EoIdlgYuu3m&_nc_ohc=I6JPMFL9BCoAX_SoN3a&_nc_ht=scontent.famm10-1.fna&oh=d615b751a9082ee90255a7464bddec5c&oe=60590D26" width=20% height=20% alt="">`) 
       document.write(`<img src="https://i.ibb.co/pbddQr2/Omar-Alhalaika-20.jpg" width=20% height=20% alt="">`)
        
    }
     counter+=1 ;
 }
 TextToUser();

    //TextToUser();    
    //document.write(`<img src="https://i.ibb.co/7KMXgdM/Omar-Alhalaika-1.jpg" width=20% height=20% alt="">`)
   //document.getElementById(`imgForUser`).innerHTML = <img src="https://i.ibb.co/7KMXgdM/Omar-Alhalaika-1.jpg" width=20% height=20% alt="">



document.getElementById('ToUser').innerText ="Welcome " + UserName + " to Stoneood ";
document.getElementById(`AboutColor`).innerText = "( " + color.toUpperCase() + " )"+ " it is a very soothing color that can invite harmony and diffuse anxiety. \n and helpful for stress management because, it can encourage a powerful sense of calm.";
// this one for replacing html command
//document.get
//document.getElementById('ToUser').innerHTML = "Welcome " + UserName + " to Stoneood The world of art";


//document.getElementById('').style.background = "red";
//test