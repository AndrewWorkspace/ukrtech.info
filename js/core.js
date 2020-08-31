let $counter = document.querySelectorAll('.js-counter');

function counter(item, number) {
	const interval = setInterval(function () {
		if (number <= Number(item.dataset.counter) - 1) {
			number++;
			item.textContent = number;
		} else {
			clearInterval(interval);
		}
	}, 100);
}

$counter.forEach((item) => {
	counter(item, 0);
});