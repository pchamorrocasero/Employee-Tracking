let employeeRecords = [];
        
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

function clockIn() {
    let name = document.getElementById('employeeName').value;
    if (!name) {
        alert('Please enter your name.');
        return;
    }
    let timeIn = new Date().toLocaleTimeString();
    employeeRecords.push({ name, timeIn, timeOut: "" });
    updateHistory();
}
        
function clockOut() {
    let name = document.getElementById('employeeName').value;
    let record = employeeRecords.find(emp => emp.name === name && emp.timeOut === "");
    if (!record) {
        alert('No clock-in record found!');
        return;
    }
    record.timeOut = new Date().toLocaleTimeString();
    updateHistory();
}

document.getElementById("checkout").addEventListener("click", function() {
    checkoutDone = true;
    alert("Thanks for work today!");
});
function updateHistory() {
    let historyTable = document.getElementById('history');
    historyTable.innerHTML = "";
    employeeRecords.forEach(record => {
        let row = `<tr>
            <td>${record.name}</td>
            <td>${record.timeIn}</td>
            <td>${record.timeOut}</td>
        </tr>`;
        historyTable.innerHTML += row;
    });
}
