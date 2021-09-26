$(document).ready(function () {

  var float;
  var pageColor = $('#page');
  var insideColor = $('#circle-middle')
  var option = $(".option");
  console.log(pageColor)
  var musicPlayer = $("#musicPlayer")


  // color variables   
  //   API key for GIPHY ================================================================================================================
  gifApi = "etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g";

  var circle = document.getElementsByClassName('circle');
  var grey = document.querySelector('#meh');
  var red = document.querySelector('#lovey-dovey');
  var orange = document.querySelector('#enthusiasm');
  var yellow = document.querySelector('#energetic');
  var green = document.querySelector('#envious');
  var blue = document.querySelector('#relaxing');
  var purple = document.querySelector('#rich');

  var feedbackArea = $("#feelings-feedback");

  // option ON CLICK METHOD----------------------------------- GIPHY 

  option.onclick = () => {
    giphyGen(feels)
  }
  // =========================================================================================================================================

  // MouseOver Animation
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


  //   COLOR CHANGER -----------------------------------------------------------------------------------
  option.click(function (event) {
    console.log(pageColor.attr("class"))
    insideColor.removeClass(pageColor.attr("class")).attr("class", $(this).attr("value"));
    pageColor.removeClass(pageColor.attr("class")).attr("class", $(this).attr("value"));
    musicPlayer.removeClass(musicPlayer.attr("src")).attr("src", $(this).attr("data"));

    // fetch data
    getGiphy(event.target);

  });

  function getGiphy(el) {
    console.log('click element', el);
    var moodData = $(el).parent().data('parent'); {
      if (moodData) {
        let giphyAPI = 'https://api.giphy.com/v1/gifs/search?api_key=etR9QZS3cGJt8xC6rDCi9TJ9ro9Wh08g&q=' + moodData + '&limit=2&lang=en';
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
    }

  }


});