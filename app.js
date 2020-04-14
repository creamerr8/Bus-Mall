'use strict'


var allProducts = [];

function Products(name, imgSrc){
  this.name = name;
  this.imgSrc = imgSrc;
  this.counter = 0;
  allProducts.push(this);
}


Products.prototype.render = function(){
  var target = document.getElementById('productImg');
  var newLi = document.createElement('li');
  var newP = document.createElement('p');
  newP.textContent = 'clicks: ' + this.counter
  var newImg = document.createElement('img');
  newImg.src = this.imgSrc
  newImg.id = this.name

  newLi.appendChild(newImg);
  newLi.appendChild(newP);
  target.appendChild(newLi);
}


var clicks = 0;

function clickHandler (eventClicks){
  if (clicks < 25){
    clicks++;
    
    console.log(eventClicks.target);
    console.log(eventClicks.target.imgSrc);

    for (var i = 0; i < allProducts.length; i++){
      if (eventClicks.target.id === allProducts[i].name){
        allProducts[i].counter++
      }
    }

    newImgRender();
  }
}

function newImgRender(){
  var target = document.getElementById('productImg');
  target.innerHTML = '';

  for (var i = 0; i < 3; i++){
    var randomImg = Math.floor(Math.random() * allProducts.length)
    allProducts[randomImg].render();
  }

}

var ulEl = document.getElementById('productImg');
ulEl.addEventListener('click', clickHandler);



new Products('bag', 'img/bag.jpg')
new Products('banana', 'img/banana.jpg')
new Products('bathroom', 'img/bathroom.jpg')
new Products('boots', 'img/boots.jpg')
new Products('breakfast', 'img/breakfast.jpg')
new Products('bubblegum', 'img/bubblegum.jpg')
new Products('chair', 'img/chair.jpg')
new Products('cthulhu', 'img/cthulhu.jpg')
new Products('dog-duck', 'img/dog-duck.jpg')
new Products('dragon', 'img/dragon.jpg')
new Products('pen', 'img/pen.jpg')
new Products('pet-sweep', 'img/pet-sweep.jpg')
new Products('scissors', 'img/scissors.jpg')
new Products('shark', 'img/shark.jpg')
new Products('sweep', 'img/sweep.png')
new Products('tauntaun', 'img/tauntaun.jpg')
new Products('unicorn', 'img/unicorn.jpg')
new Products('usb', 'img/usb.gif')
new Products('water-can', 'img/water-can.jpg')
new Products('wine-glass', 'img/wine-glass.jpg')

newImgRender();
    