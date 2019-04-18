
function toggleNav() {
  console.log('hello from toggleNav')
  // JavaScript way
  // document.querySelector('.mobile-nav').classList.toggle('open-nav')
  
  // jQuery way
  $('.mobile-nav').toggleClass('open-nav')
}