async function uploadFile() {

    const file = document.getElementById("fileInput").files[0];

    const response = await fetch("https://dq5e50h0z9.execute-api.eu-west-1.amazonaws.com/dev/upload-url");
    const data = await response.json();

    const uploadURL = data.uploadURL;

    await fetch(uploadURL, {
        method: "PUT",
        body: file
    });

    document.getElementById("status").innerText = "Upload complete!";
}

async function loadStats() {

    const response = await fetch("https://cq48u7klna.execute-api.eu-west-1.amazonaws.com/dev/stats");

    const data = await response.json();

    const list = document.getElementById("statsList");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.programme + ": " + item.studentCount;
        list.appendChild(li);
    });
}
