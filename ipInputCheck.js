const ipInput = document.getElementById('ip-input');
ipInput.addEventListener('input', (event) => {
	const value = event.target.value;
	const filteredValue = value.replace(/[^0-9a-fA-F.:]/g, '');
	event.target.value = filteredValue;
});