const bulbContainer = document.querySelector('#bulbContainer');


const bulb = document.createElement('img');
bulb.src = 'src/bulb-off.png';
bulb.alt = 'Bulb Off';

function turnOn() {
    bulb.src = 'src/bulb-on.png';
}

function turnOff() {
    bulb.src = 'src/bulb-off.png';
}

bulb.addEventListener('mouseover', turnOn);

bulb.addEventListener('mouseout', turnOff);

bulbContainer.appendChild(bulb);


