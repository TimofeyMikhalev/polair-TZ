//слайдер
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    initialSlide: 2,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
  });
  
  
  //слайдер для брендов в моб версии
  var swiper = new Swiper(".brand__body", {
    spaceBetween: 7,
    initialSlide: 3,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
  });
  
  
  //паралакс
  let bg = document.querySelectorAll('.slider__img');
  for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;     
      bg[i].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    });    
  }
  let imgCold = document.querySelectorAll('.inner__img_move');
  for (let i = 0; i < imgCold.length; i++){
    window.addEventListener('mousemove', function(e) { 
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;     
      imgCold[0].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
      imgCold[1].style.transform = 'translate(+' + x * 15 + 'px, +' + y * 15 + 'px)';
    });    
  }
  
  
  //открытие блока с ссылками в футере
  let array = document.getElementById('array');
  function toggle(el){
      el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  
      if(el.style.display == 'none'){
        array.style.transform = 'rotate(0deg)';
  
      } else {
        array.style.transform = 'rotate(180deg)';
      }
    
    event.preventDefault();
  }
  
  
  AOS.init();