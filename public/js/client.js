var getImages = document.getElementById('go');
  getImages.addEventListener('click', function(event){
  event.preventDefault();
  var category = document.getElementById('category');
  var dataRequest = new XMLHttpRequest();
  dataRequest.open('GET', "https://api.gettyimages.com/v3/search/images?phrase="+ category.value);
  dataRequest.responseType = 'json';
  dataRequest.setRequestHeader("Api-Key", apiKey);
  dataRequest.addEventListener('load', loadImages);
  dataRequest.send();
});


function loadImages () {
  var content = document.getElementById('content');
  var photo = this.response.images;
  console.log(photo);
  photo.forEach(function (image) {
    var pic = document.createElement('div');
    pic.setAttribute('class', 'pic');
    pic.style.backgroundImage = photo;
    pic.style.backgroundSize = 'cover';
    content.appendChild(pic);

    var images = document.createElement('img');
    console.log('poop');
    var displayImage = image.display_sizes[0].uri;
    images.setAttribute('src', displayImage);
    pic.appendChild(images);
    // console.log(image.title);

    var title = document.createElement('h1');
    title.id = "title";
    title.innerHTML = image.title;
    pic.appendChild(title);
  });
}



