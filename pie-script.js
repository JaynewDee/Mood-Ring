$(document).ready(function () {
  var previous = document.getElementById("menu8");
  var original = "menu";
  var toOpen = "";
  var float;
  var pageColor = $('#page');
  var insideColor = $('#circle-middle')
  var option = $(".option");
  console.log(pageColor)
  var searchTerm;

  
// color variables 
  

//   API key for GIPHY ================================================================================================================
   gifApi = "etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g";
   var grey = document.querySelector('#meh');
   var circle = document.getElementsByClassName('circle');
   var greyData = grey.dataset.parent;
   // var colorData = button.value;
   var red = document.querySelector('#lovey-dovey');
   var orange = document.querySelector('#enthusiasm');
   var yellow = document.querySelector('#energetic');
   var green = document.querySelector('#envious');
   var blue = document.querySelector('#relaxing');
   var purple = document.querySelector('#rich');

   var feedbackArea = $("#feelings-feedback");
//  SEARCH ::
//  https://api.giphy.com/v1/gifs/search?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&q=&limit=25&offset=0&rating=g&lang=en


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
    insideColor.removeClass(pageColor.attr("class")).attr("class", $(this).attr("value"));
    pageColor.removeClass(pageColor.attr("class")).attr("class", $(this).attr("value"));

    // fetch data
    getGiphy(event.target);

  });

    function getGiphy(el) {
        console.log('click element', el);
        var moodData = $(el).parent().data('parent');
        if(moodData) {
            let giphyAPI = 'https://api.giphy.com/v1/gifs/search?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&q=' + moodData + '&limit=1&lang=en';
            // console.log(colorData);
            console.log('API URL', giphyAPI);
    
            fetch(giphyAPI)
            .then(response => {
                return response.json();
            })
            .then(json => {
                var imageUrl = json.data[0].images.original.url;
                console.log('IMAGE FROM GIPHY:', imageUrl);
                feedbackArea.text('').append($('<img src="' + imageUrl + '">'));
                // createImg();
            })
            .catch(err => console.log(err));
        }
        
        // promise.all - look up    
        // showGiphyData = (giphy) => {
            // document.getElementById('meh').innerText = 
            // `${giphy.results[0].name.title}`;
        //   console.log(document.getElementById('meh').innerText);
        // }
        // fetchedData = (apiData) => {
        //   console.log(apiData)
        // }
    }








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