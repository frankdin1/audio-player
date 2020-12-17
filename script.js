<<<<<<< HEAD
//now we're listening on the window, but we could also listen 
//on a div or a class or any other element
const pause = document.getElementById('pause');
let audio_keys = document.getElementsByClassName('keys');
function keyPressSound (e){
    // console.log(e);//this gives us the entire keypress object
    console.log(e.keyCode);//this gives us just the ascii character of the key that was pressed
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //const key_2 = document.querySelector(`#${e.target.innerText}`)
    //const key_3 = document.querySelector(`.sound`);

    //console.log(this.key_3);
    if(!audio) return;//this stops the function from running
    //audio.currentTime = 0;//this rewinds the playback to the start every time we hit the key
    //audio.stop();
    audio.play();
    key.classList.add('playing');

    [...audio.parentElement.children].forEach(function (e) {//the spread operator creates an array from the nodelist which we can then loop through
        if(e!== audio) e.classList.remove('tracks');
       })
       audio.classList.add('tracks');
}

function clickPlaySound (e){
    console.log(e.target.innerText)
    const audio_2 = document.querySelector(`audio[id = "${e.target.innerText}"]`)
   const key_2 = document.querySelector(`#${e.target.innerText}`)
   if(!audio_2) return;
   audio_2.play();
   key_2.parentNode.classList.add('playing');
   
   [...audio_2.parentElement.children].forEach(function (el) {//the spread operator creates an array from the nodelist which we can then loop through
    if(el!== audio_2) el.classList.remove('tracks');
   })
   audio_2.classList.add('tracks');
   //console.log(audio_2.parentElement.children);
}
    

 
function clickPauseSound (){
    const audio_3 = document.querySelector('.tracks');
    console.log(audio_3)
    //const key_2 = document.querySelector(`#${e.target.innerText}`)
    audio_3.pause();
//    key_2.parentNode.classList.add('playing');
}

function keyPauseSound (){
    const audio_4 = document.querySelector('.tracks');
    console.log(audio_4)
    //const key_2 = document.querySelector(`#${e.target.innerText}`)
    audio_4.pause();
//    key_2.parentNode.classList.add('playing');
}

for (let i = 0; i < audio_keys.length; i++){
    audio_keys[i].addEventListener('click', clickPlaySound)
}
window.addEventListener('keydown', keyPressSound);
// window.addEventListener('click', clickPlaySound);
pause.addEventListener('click', clickPauseSound);
//tracks.forEach(tracks => tracks.addEventListener('click', clickPauseSound));
// window.addEventListener('click', clickPlaySound);

//the removeTransition function takes an event as parameter
function removeTransition (e){
    if (e.propertyName !== 'transform') return;//this skips the event if it's not a transform event
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

//we use for =Each to listen for an event on each key press
=======
//now we're listening on the window, but we could also listen 
//on a div or a class or any other element
const pause = document.getElementById('pause')
function keyPressSound (e){
    // console.log(e);//this gives us the entire keypress object
    //console.log(e.keyCode);//this gives us just the ascii character of the key that was pressed
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //const key_2 = document.querySelector(`#${e.target.innerText}`)
    //const key_3 = document.querySelector(`.sound`);

    //console.log(this.key_3);
    if(!audio) return;//this stops the function from running
    audio.currentTime = 0;//this rewinds the playback to the start every time we hit the key
    audio.play();
    key.classList.add('playing');
}

function clickPlaySound (e){
    console.log(e.target.innerText)
    const audio_2 = document.querySelector(`audio[id = "${e.target.innerText}"]`)
   const key_2 = document.querySelector(`#${e.target.innerText}`)
   if(!audio_2) return;
   audio_2.play();
   key_2.parentNode.classList.add('playing');
   
   [...audio_2.parentElement.children].forEach(function (el) {//the spread operator creates an array from the nodelist which we can then loop through
    if(el!== audio_2) el.classList.remove('tracks');
   })
   audio_2.classList.add('tracks');
   //console.log(audio_2.parentElement.children);
}
    

 
function clickPauseSound (){
    const audio_3 = document.querySelector('.tracks');
    console.log(audio_3)
    //const key_2 = document.querySelector(`#${e.target.innerText}`)
    audio_3.pause();
//    key_2.parentNode.classList.add('playing');
}

window.addEventListener('keydown', keyPressSound);
window.addEventListener('click', clickPlaySound);
pause.addEventListener('click', clickPauseSound);
//tracks.forEach(tracks => tracks.addEventListener('click', clickPauseSound));
// window.addEventListener('click', clickPlaySound);

//the removeTransition function takes an event as parameter
function removeTransition (e){
    if (e.propertyName !== 'transform') return;//this skips the event if it's not a transform event
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

//we use for =Each to listen for an event on each key press
>>>>>>> 5921f6e1ba8af4fffdda88a25e3d0f313de8e77c
keys.forEach(key => key.addEventListener('transitionend', removeTransition))//the function removeTransition is run when the transition ends