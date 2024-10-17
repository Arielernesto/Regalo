import confetti from './confetti.module.mjs'
        
const HTML = `
<div>
<img src="cake.gif" alt="" class=" image">
</div>
<h2>Feliz Cumpleaños Amanda</h2>
`
const div = document.getElementById('main')
function SwitchCase() {
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
})
div.innerHTML = HTML    
}

div.addEventListener('click', SwitchCase)