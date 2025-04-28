function renderHistory() {
	const history = JSON.parse(localStorage.getItem('queryHistory') || '[]');
	const historyList = document.getElementById('history-list');
	historyList.innerHTML = history.map(record => `
		<div class="history-item">
			<p><strong>Query Time：</strong>${record.time}</p>
			<p><strong>IP Address：</strong>${record.ip}</p>
			<p><strong>IP Location：</strong>${record.location}</p>
		</div>
	`).join('');
}
function clearHistory() {
	showLoading('loading',500);
	localStorage.removeItem('queryHistory');
	showOK('OK',2500);
	renderHistory();
}
renderHistory();