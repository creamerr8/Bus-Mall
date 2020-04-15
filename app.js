'use strict'


Products.allProducts = [];

function Products(name, imgSrc){
  this.name = name;
  this.imgSrc = imgSrc;
  this.counter = 0;
  this.show = 0;
  Products.allProducts.push(this);
}

Products.clicks = 0;
Products.maxClicks = 25;


Products.prototype.render = function(){
  var target = document.getElementById('productImg');
  var newLi = document.createElement('li');
  var newP = document.createElement('p');
  newP.textContent = 'clicks: ' + this.counter + ' shown: ' + this.show;
  var newImg = document.createElement('img');
  newImg.src = this.imgSrc
  newImg.id = this.name

  newLi.appendChild(newImg);
  newLi.appendChild(newP);
  target.appendChild(newLi);
}




function clickHandler (eventClicks){
  if (Products.clicks < Products.maxClicks){
    Products.clicks++;
    
    console.log(eventClicks.target);
    console.log(eventClicks.target.imgSrc);

    for (var i = 0; i < Products.allProducts.length; i++){
      if (eventClicks.target.id === Products.allProducts[i].name){
        Products.allProducts[i].counter++
      }
    }

    newImgRender();
  } else if (Products.clicks === Products.maxClicks){
    makeChart()
  }
}

var displayImgs = 3;

function newImgRender(){
  var target = document.getElementById('productImg');
  target.innerHTML = '';


  var imgArray = [];
  while(imgArray.length < displayImgs){

    var randomImg = Math.floor(Math.random() * Products.allProducts.length)
    if(!imgArray.includes(randomImg)){
      imgArray.push(randomImg);
      Products.allProducts[randomImg].show++;
    }
  
    console.log(imgArray);
    }
    for (var i = 0; i < imgArray.length; i++){
      Products.allProducts[imgArray[i]].render();
      
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

function makeChart(){
  var ctx = document.getElementById('productChart').getContext('2d');

  var productNames = [];

  for (var i = 0; i < Products.allProducts.length; i++){
    productNames.push(Products.allProducts[i].name);
  }
  console.log(productNames);

  var clicked = [];
  
  for (var i = 0; i < Products.allProducts.length; i++){
    clicked.push(Products.allProducts[i].counter);
  }

  var shown = [];
  
  for (var i = 0; i < Products.allProducts.length; i++){
    shown.push(Products.allProducts[i].show);
  }

  var chart = new Chart(ctx, {
      type: 'bar',
  
      data: {
        labels: productNames,
        datasets: [{
          label: 'Times Clicked',
          backgroundColor: 'rgb(255, 99, 132, 0.4)',
          borderColor: 'rgb(255, 99, 132)',
          data: clicked
        },
        {
          label: 'Times Seen',
          backgroundColor: 'rgb(30, 99, 132, 0.4)',
          borderColor: 'rgb(30, 99, 132)',
          data: shown
        }]
      },
  
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  


