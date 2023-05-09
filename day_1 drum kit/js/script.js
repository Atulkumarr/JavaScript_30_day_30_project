
// on pressing the key
window.addEventListener('keydown', function(e){
    
    let key = document.querySelector(`.key[data-key="${e.keyCode}"] `)
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"] `)
    // if is use for if some one press wrong key then its stop running
    if(!audio) return
    
    // used for playing
    audio.play() 
    audio.currentTime = 0
key.classList.add('playing')
})

// here we will remove the class after completing the transition
let keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(function(items){
    items.addEventListener('transitionend', function(e){
    items.classList.remove('playing')
    } )
})


