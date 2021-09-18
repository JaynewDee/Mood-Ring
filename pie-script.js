$(document).ready(function () {
  var previous = document.getElementById("menu8");
  var original = "menu";
  var toOpen = "";
  var float;
  var pageColor = $("#page");
  var option = $(".option");

  var delay = function (elem, callback) {
    var timeout = null;
    timeout = setTimeout(function () {
      if (float) {
        callback(elem);
      }
    }, 150);

    $(elem).mouseout(function () {
      float = false;
      clearTimeout(timeout);
    });
  };

  $(".over").mouseenter(function (event) {
    float = true;
    delay(document.getElementById(event.target.id), function (context) {
      toOpen = document.getElementById(original.concat(context.id));
      openMenu(toOpen);
      previous = toOpen;
    });
  });

  $(".clicky").click(function () {
    openMenu(document.getElementById("menu8"));
    previous = document.getElementById("menu8");
  });

  option.click(function (event) {
      pageColor.setAttribute("style", "background-color: #D0D0D0");
  });

  //  function openMenu(context) { 
  //    closeMenu(previous);
  //    $(context).toggleClass("visible"); 
  //    $(context).toggleClass("hidden");
  //  }

  //  function closeMenu(context) {
  //    $(context).toggleClass("visible");
  //    $(context).toggleClass("hidden");
  //  }
});