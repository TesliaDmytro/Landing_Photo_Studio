'use strict'

		// HomeTask      //ЗАМІНА КНОПОК У PRODUCT CARDS, СТИЛІЗАЦІЯ

const buyCard = document.querySelectorAll('.cardBorder'); // задано блок з кнопками

buyCard.forEach((el, i) => {					// перебір, для кожного з блоків:
	const newBtn = document.createElement('a'); // створено блок-посилання
	el.appendChild(newBtn);						// вставлено останнім елементом	
	switch (i) {
		case 0: 					 	  //відровідно ітерації:
			newBtn.className = 'bgGrey'; // присвоєно класи,
			newBtn.href = '#link1';		// адреси
			break;
		case 1:
			newBtn.className = 'bgGreen'
			newBtn.href = '#link2'
			break;
		default:
			newBtn.className = 'bgBlue'
			newBtn.href = '#link3'
	}
	newBtn.insertAdjacentHTML('afterbegin', '<h3>Sign Up');  // вставлено у посилання заголовок
	newBtn.style.cssText = `								
		display: block;
		background-color: #494b4d;
		text-align: center;
		border-radius: 0 0 5px 5px;
		`													//загальні css
	newBtn.addEventListener('mouseenter', function() {
	newBtn.firstChild.style.color = "#9dfacd";
	newBtn.parentNode.style.boxShadow = '0px 0px 20px #9dfacd';
	});																//Події (hover)

	newBtn.addEventListener('mouseleave', function() {
	newBtn.firstChild.style.color = "#fff";
	newBtn.parentNode.style.boxShadow = 'none';
	});
});

document.querySelector('.bgGreen').style.background = "#45ba58";	//особисті CSS
document.querySelector('.bgBlue').style.background = "#4dbdae";

document.querySelectorAll('.cardSign').forEach(e => e.remove());	//видалення старих кнопок

		// HomeTask








// Video screen non-buttons Play/Pause function

const video = document.getElementById("myVideo");
const btn = document.getElementById("myBtn");

function myFunction() {
  		if (video.paused) {
    		video.play();
    		btn.innerHTML = "";
  		} 
  		else {
  			video.pause();
   			btn.innerHTML = "";
  		}
}

// Video Play/Pause function



