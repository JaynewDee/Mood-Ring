$(document).ready(function() {
     var previous = document.getElementById("menu8"); 
     var original = "menu";
     var toOpen = "";
     var over;
   
     var delay = function (elem, callback) { 
       var timeout = null;
       timeout = setTimeout(function() { 
         if(over) {
           callback(elem);
         }
       }, 150);
   
       $(elem).mouseout(function() {
         over = false; 
         clearTimeout(timeout); 
       });
     };
   
     $(".over").mouseenter(function(event) { 
       over = true; 
       delay(document.getElementById(event.target.id), function(context) {
         toOpen = document.getElementById(original.concat(context.id));
         openMenu(toOpen); 
         previous = toOpen;
       });
     });
   
     $(".clicky").click(function() {
       openMenu(document.getElementById("menu8"));
       previous = document.getElementById("menu8");
     });
   
     function openMenu(context) { 
       closeMenu(previous);
       $(context).toggleClass("visible"); 
       $(context).toggleClass("hidden");
     }
   
     function closeMenu(context) {
       $(context).toggleClass("visible");
       $(context).toggleClass("hidden");
     }
   });