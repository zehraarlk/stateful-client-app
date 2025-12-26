function saveData() {
    const input = document.getElementById("dataInput");
    const value = input.value;

    if (!value) return;

    let data = JSON.parse(localStorage.getItem("stateData")) || [];
    data.push(value);

    localStorage.setItem("stateData", JSON.stringify(data));
    input.value = "";

    renderData();
}

function renderData() {
    const list = document.getElementById("dataList");
    list.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("stateData")) || [];

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

renderData();
