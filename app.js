// c209502a735f4eee8e742c8d5742885a

const aboutSegment = document.querySelector('#aboutSeg');
const topicSegment = document.querySelector('#topicSeg');
const quantitySegment = document.querySelector('#quantitySeg');
const trafficSegment = document.querySelector('#trafficSeg');
const aboutBtn = document.querySelector('#aboutBtn');
const topicBtn = document.querySelector('#topicBtn');
const quantityBtn = document.querySelector('#quantityBtn');
const trafficBtn = document.querySelector('#trafficBtn');

aboutBtn.addEventListener('click', showAbout);
topicBtn.addEventListener('click', showTopic);
quantityBtn.addEventListener('click', showQuantity);
trafficBtn.addEventListener('click', showTraffic);

function showAbout() {
	removeActive();
	aboutBtn.classList.add('active');
	aboutSegment.style.display = 'block';
	topicSegment.style.display = 'none';
	quantitySegment.style.display = 'none';
	trafficSegment.style.display = 'none';
}
function showTopic() {
	removeActive();
	topicBtn.classList.add('active');
	aboutSegment.style.display = 'none';
	topicSegment.style.display = 'block';
	quantitySegment.style.display = 'none';
	trafficSegment.style.display = 'none';
}
function showQuantity() {
	removeActive();
	quantityBtn.classList.add('active');
	aboutSegment.style.display = 'none';
	topicSegment.style.display = 'none';
	quantitySegment.style.display = 'block';
	trafficSegment.style.display = 'none';
}
function showTraffic() {
	removeActive();
	trafficBtn.classList.add('active');
	aboutSegment.style.display = 'none';
	topicSegment.style.display = 'none';
	quantitySegment.style.display = 'none';
	trafficSegment.style.display = 'block';
}
function removeActive() {
	if (aboutBtn.classList.contains('active')) {
		aboutBtn.classList.remove('active');
	}
	if (topicBtn.classList.contains('active')) {
		topicBtn.classList.remove('active');
	}
	if (quantityBtn.classList.contains('active')) {
		quantityBtn.classList.remove('active');
	}
	if (trafficBtn.classList.contains('active')) {
		trafficBtn.classList.remove('active');
	}
}
