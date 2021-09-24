var greySelect = document.querySelector('#meh');

function handleColorSelector(event) {
    event.preventDefault();

    var grey = document.querySelector('#meh').value; 
}

greySelect.addEventListener('click', handleColorSelector);