//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const sounds = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3'];

	const buttonContainer = document.getElementById('buttons');

	sounds.forEach((sound, index) => {
		const button = document.createElement('button');
		button.classList.add('btn');
		button.txtContent = 'sound ${index+1}';
		button.addEventListener('click', () => playSound(sound));
		buttonsContainer.appendChild(button);
	});
	
	const stopButton = document.createElement('button');
	stopButton.classList.add('btn', 'stop');
	stopButton.textContent = 'stop';
	stopButton.addEventListener('click', stopSounds);
	buttonContainer.appendChild(stopButton);

	function playSound(sound) {
		const audio = new Audio('sounds/${sound}');
		audio.play();
	}

	function stopSounds() {
		const allAudio = document.querySelectorAll('audio');
		allAudio.forEach(audio => audio.pause());
	}
});
