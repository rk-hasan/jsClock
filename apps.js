function digitalClock()
{
	var date = new Date();
	var hours = date.getHours();
	var minites = date.getMinutes();
	var secounds = date.getSeconds();
	var timeformate = "AM";


	if(hours === 0){
		hours = 12;
	}

	if(hours > 12){
		hours = hours -12;
		timeformate = 'PM';
	}

	hours = hours < 10 ? '0' + hours : hours;

	minites = minites < 10 ? '0' + minites : minites;
	
	secounds = secounds < 10 ? '0' + secounds : secounds;

	var finalTime = `${hours}: ${minites}: ${secounds}`;

	document.getElementById('Clock').innerText = finalTime; 

	document.querySelector('small').innerText = timeformate;

	setInterval(digitalClock, 1000);
}

digitalClock();

