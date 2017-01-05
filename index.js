
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	//to stop funtion running all together
	if (!audio) return;
	//setting CurrentTime so that it will rewind to the start
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}
// to remove the transition after 0.07 second. see index.css for more!
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
} 

const keys = Array.from(document.querySelectorAll('.key'));
//keys.addEventListener('transitionend', removeTransition);
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //transitionend not working here. but  working when putting all these code in html file under <script></script>

//adding event listener. It will listen to keydown!
window.addEventListener('keydown', playSound);


