
// ===========| Preloader Part |===========
// var preload = document.getElementById('preloader');
var preload = document.querySelector('#preloader');
window.addEventListener("load", function(){
    preload.style.display = 'none';
})
// ===========| Post Part |===========
// Profile Account
var img = document.querySelectorAll('.acc');
img.forEach(function(img){
    img.src= './img/31.jpg'
})
// Reaction box
var reaction = document.querySelectorAll('.reaction');
reaction.forEach(function(reaction){
    reaction.style.paddingLeft= '2rem';
    reaction.style.paddingRight= '2rem';
    reaction.style.paddingTop= '0.3rem';
    reaction.style.paddingBottom= '0.3rem';
});
// Reacted
var reacted = document.querySelectorAll('.reacted');
reacted.forEach(function(reacted){
    reacted.innerHTML= '<svg width="19" height="20" style="display:inline-block;" viewBox="0 0 1497.8 1500" id="facebook-love"><path fill="#fff" d="M541.7 1092.6H376.6c-13 0-23.6-10.6-23.6-23.6V689.9c0-13 10.6-23.6 23.6-23.6h165.1c13 0 23.6 10.6 23.6 23.6V1069c-.1 13-10.7 23.6-23.6 23.6zM622.9 1003.5V731.9c0-66.3 18.9-132.9 54.1-189.2 21.5-34.4 69.7-89.5 96.7-118 6-6.4 27.8-25.2 27.8-35.5 0-13.2 1.5-34.5 2-74.2.3-25.2 20.8-45.9 46-45.7h1.1c44.1.8 58.2 41.6 58.2 41.6s37.7 74.4 2.5 165.4c-29.7 76.9-35.7 83.1-35.7 83.1s-9.6 13.9 20.8 13.3c0 0 185.6-.8 192-.8 13.7 0 57.4 12.5 54.9 68.2-1.8 41.2-27.4 55.6-40.5 60.3-2.6.9-2.9 4.5-.5 5.9 13.4 7.8 40.8 27.5 40.2 57.7-.8 36.6-15.5 50.1-46.1 58.5-2.8.8-3.3 4.5-.8 5.9 11.6 6.6 31.5 22.7 30.3 55.3-1.2 33.2-25.2 44.9-38.3 48.9-2.6.8-3.1 4.2-.8 5.8 8.3 5.7 20.6 18.6 20 45.1-.3 14-5 24.2-10.9 31.5-9.3 11.5-23.9 17.5-38.7 17.6l-411.8.8c-.1.1-22.5.1-22.5-29.9z"></path><ellipse cx="748.9" cy="750" fill="#ed5168" rx="748.9" ry="750"></ellipse><path fill="#fff" d="M748.9 541.9C715.4 338.7 318.4 323.2 318.4 628c0 270.1 430.5 519.1 430.5 519.1s430.5-252.3 430.5-519.1c0-304.8-397-289.3-430.5-86.1z"></path></svg>'
});
// Viewed
var viewed = document.querySelectorAll('.viewed');
viewed.forEach(function(viewed){
    viewed.innerHTML= '<i class="fa-solid fa-eye">'
});



// var caption = document.querySelectorAll('p');
// // console.log(caption);
// if (caption.style.overflow == 'hidden'){
//     caption.innerHTML= '<h1>lskfhkrw</h1>'
// }

