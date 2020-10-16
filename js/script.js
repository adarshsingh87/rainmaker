// ! navbar
const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navLinks = document.querySelectorAll('.nav-links li')
	// Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active')
		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.3
				}s`
			}
		})
		//burger animation
		burger.classList.toggle('toggle')
	})
}

navSlide()

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
const links = document.querySelectorAll('.tablinks')
links[0].click()
// var clickVar = 1
// setInterval(() => {
// 	links[clickVar].click();
// 	if (clickVar < links.length - 1) {
// 		clickVar++
// 	} else {
// 		clickVar = 0
// 	}
// }, 2000) 

// ! form submit

function submmitit() {
	var xhttp = new XMLHttpRequest();
	var formDataPair = []
	var formData = ''
	formDataPair.push('content1' + '=' + document.getElementById('fname').value);
	formDataPair.push('content2' + '=' + document.getElementById('lname').value);
	formDataPair.push('content3' + '=' + document.getElementById('phnumber').value);
	formDataPair.push('content4' + '=' + document.getElementById('email').value);
	formDataPair.push('content5' + '=' + document.getElementById('message').value);
	formData = formDataPair.join( '&' ).replace( /%20/g, '+' );
  xhttp.open( 'POST', 'https://rainmakerba.com/phpmailer/index.php' );
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(formData);
	console.log('submitted')
}
