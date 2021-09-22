$(document).ready(function () {
  var previous = document.getElementById("menu8");
  var original = "menu";
  var toOpen = "";
  var float;
  var pageColor = $('#page');
  var insideColor = $('#circle-middle')
  var option = $(".option");
  console.log(pageColor)
  var searchTerm

// color variables 
  

//   API key for GIPHY ================================================================================================================
   gifApi = "etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g";
//  SEARCH ::
//  https://api.giphy.com/v1/gifs/search?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&q=&limit=25&offset=0&rating=g&lang=en
//  TRANSLATE : 
//  https://api.giphy.com/v1/gifs/translate?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&s=


let giphyAPI = 'https:/searchTermiphy.com/v1/gifs/search?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&q=&limit=25&offset=0&rating=g&lang=en';

		function giphyGen (){

			fetch(giphyAPI)
			.then(response => {
				return response.json();
			})
			.then(json => {
				createImg(json.data[0].images.original.url);
			})
      
			.catch(err => console.log(err));

		}
// promise.all - look up 
showGiphyData = (giphy) => {
    document.getElementById('feels').innerText = 
    `${giphy.results[0].name.title}`
}
fetchedData = (apiData) => {
  console.log(apiData)
}
// FETCH METHOD----------------------------------- GIPHY *********************************************** add class - mood_color.onclick ${this} 
// to determine where it is on the dom and to have one function 
option.onclick = () => {
    giphyGen(feels) //pass in giphyGen - data attribute for each feels value - add api call
}
// =========================================================================================================================================

//STRUCTURE - for ref
const apiData = () => {
    fetch(API_URL)
      .then((res) => {
        return res.json()
    }).then((data) => {
        fetchedData(data)
    })
}


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


// -------------------------------------------------------------------------------------


fetchedData = (apiData) => {
  console.log(apiData)
}
var grey = document.querySelector('#meh');
var red = document.querySelector('#lovey-dovey');
var orange = document.querySelector('#enthusiasm');
var yellow = document.querySelector('#energetic');
var green = document.querySelector('#envious');
var blue = document.querySelector('#relaxing');
var purple = document.querySelector('#rich');

console.log(yellow);


// const giphyGe = (searchTerm) => {
    // fetch('https:/searchTermiphy.com/v1/gifs/search?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&q=&limit=25&offset=0&rating=g&lang=en')
    //   .then((res) => {
        // return res.json()
    // }).then((data) => {
        // fetchedData(data)
    // })
// }

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




//   COLOR CHANGER -----------------------------------------------------------------------------------
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