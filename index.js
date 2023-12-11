let url = "http://localhost:3000";

let append_data = document.getElementById("append-data");

fetch(`${url}/users`)
    .then((res) => res.json())
    .then((data) => console.log(data));