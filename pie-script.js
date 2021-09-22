$(document).ready(function () {
  var previous = document.getElementById("menu8");
  var original = "menu";
  var toOpen = "";
  var float;
  var pageColor = $('#page');
  var insideColor = $('#circle-middle')
  var option = $(".option");
  console.log(pageColor)

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

  // $(".over").mouseenter(function (event) {
  //   float = true;
  //   delay(document.getElementById(event.target.id), function (context) {
  //     toOpen = document.getElementById(original.concat(context.id));
  //     openMenu(toOpen);
  //     previous = toOpen;
  //   });
  // });

  // $(".clicky").click(function () {
  //   openMenu(document.getElementById("menu8"));
  //   previous = document.getElementById("menu8");
  // });

  option.click(function (event) {
    console.log(pageColor.attr("class"))
    // insideColor.removeClass(pageColor.attr("class")).attr("class", $(this).attr("value"));
    pageColor.removeClass(pageColor.attr("class")).attr("class", $(this).attr("value"));


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

// fetch('')