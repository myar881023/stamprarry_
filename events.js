f1=0;
f2=0;
f3=0;
f4=0;
f5=0;
f6=0;

document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});


function vanishFunction1(){
   document.getElementById("b1").style.display ="none";
   document.getElementById("b1-2").style.display ="none";
   document.getElementById("b1-3").style.display ="none";
}
function vanishFunction2(){
   document.getElementById("b2").style.display ="none";
   document.getElementById("b2-2").style.display ="none";
   document.getElementById("b2-3").style.display ="none";
}
function vanishFunction3(){
   document.getElementById("b3").style.display ="none";
   document.getElementById("b3-2").style.display ="none";
   document.getElementById("b3-3").style.display ="none";
}

function vanishFunction4(){
   document.getElementById("b4").style.display ="none";
   document.getElementById("b4-2").style.display ="none";
   document.getElementById("b4-3").style.display ="none";
}
function vanishFunction5(){
   document.getElementById("b5").style.display ="none";
   document.getElementById("b5-2").style.display ="none";
   document.getElementById("b5-3").style.display ="none";
}
function vanishFunction6(){
   document.getElementById("b6").style.display ="none";
   document.getElementById("b6-2").style.display ="none";
   document.getElementById("b6-3").style.display ="none";
}



function myFunction() {

   document.getElementById("b1").style.display ="block";
   document.getElementById("b1-2").style.display ="block";
   document.getElementById("b1-3").style.display ="block";
}

function stampFunction1(){
   document.getElementById('box1').style.backgroundImage = 'url("stamp1.jpg")';

}

function myFunction2() {
   
   document.getElementById("b2").style.display="block";
   document.getElementById("b2-2").style.display ="block";
   document.getElementById("b2-3").style.display ="block";
}
function stampFunction2(){
   document.getElementById('box2').style.backgroundImage = 'url("stamp2-1.jpg")';

}

function myFunction3() {
   document.getElementById("b3").style.display="block";
   document.getElementById("b3-2").style.display ="block";
   document.getElementById("b3-3").style.display ="block";
}
function stampFunction3(){
   document.getElementById('box3').style.backgroundImage = 'url("stamp3.jpg")';

}

function myFunction4() {
   document.getElementById("b4").style.display="block";
   document.getElementById("b4-2").style.display ="block";
   document.getElementById("b4-3").style.display ="block";
 }
 function stampFunction4(){
   document.getElementById('box4').style.backgroundImage = 'url("stamp4.jpg")';

}
 
 function myFunction5() {
   document.getElementById("b5").style.display="block";
   document.getElementById("b5-2").style.display ="block";
   document.getElementById("b5-3").style.display ="block";
 }
 function stampFunction5(){
   document.getElementById('box5').style.backgroundImage = 'url("stamp5.jpg")';

}
 
 function myFunction6() {
   document.getElementById("b6").style.display="block";
   document.getElementById("b6-2").style.display ="block";
   document.getElementById("b6-3").style.display ="block";
 }
 function stampFunction6(){
   document.getElementById('box6').style.backgroundImage = 'url("stamp6.jpg")';

}
 

 
function button(){
   document.getElementById("b-final").style.display="block";
}


 function JUMPING(){

   if(f1==1 && f2==1 && f3==1 && f4==1 && f5==1 && f6==1 ){
      setTimeout("button()",2000);
    
}
}




  /* function frameClick() {
      document.location.href = "http://www.ipentec.com";
    
    }*/

   function MoveCheck() {
     res= confirm("LAST AR SPOTに移動してください") ;
     if(res==true)
      {
         ret =confirm("LAST AR SPOTにスマートフォンをかざしてください。ARが表示されますがよろしいでしょうか。");
         if(ret==true){
          window.location.href = "https://myar881023.github.io/ar_/";
         }
      }
  }
  
 






 AFRAME.registerComponent('counthandler', {
   tick: function () {
        if (document.querySelector('#animated-marker').object3D.visible == true)  
        

        {
     myFunction();
   f1=1;
JUMPING();
setTimeout("stampFunction1()",2000);

}
     
           else{vanishFunction1();}

        }

      })

      
 AFRAME.registerComponent('counthandler2', {
   tick: function () {
        if (document.querySelector('#animated-marker2').object3D.visible == true)  

        {
     myFunction2();
   f2=1;
JUMPING();
setTimeout("stampFunction2()",2000);}
     
           else{vanishFunction2();}

        }

      })

      AFRAME.registerComponent('counthandler3', {
         tick: function () {
              if (document.querySelector('#animated-marker3').object3D.visible == true)  
      
              {
           myFunction3();
         f3=1;
      JUMPING();
      setTimeout("stampFunction3()",2000);}
           
                 else{vanishFunction3();}
      
              }
      
            })

            AFRAME.registerComponent('counthandler4', {
               tick: function () {
                    if (document.querySelector('#animated-marker4').object3D.visible == true)  
            
                    {
                 myFunction4();
               f4=1;
            JUMPING();
            setTimeout("stampFunction4()",2000);}
                 
                       else{vanishFunction4();}
            
                    }
            
                  })
            
                  AFRAME.registerComponent('counthandler5', {
                     tick: function () {
                          if (document.querySelector('#animated-marker5').object3D.visible == true)  
                  
                          {
                       myFunction5();
                     f5=1;
                  JUMPING();
                  setTimeout("stampFunction5()",2000);}
                       
                             else{vanishFunction5();}
                  
                          }
                  
                        })
      
                        AFRAME.registerComponent('counthandler6', {
                           tick: function () {
                                if (document.querySelector('#animated-marker6').object3D.visible == true)  
                        
                                {
                             myFunction6();
                           f6=1;
                        JUMPING();
                        setTimeout("stampFunction6()",2000);}
                             
                                   else{vanishFunction6();}
                        
                                }
                        
                              })

                              

                                 