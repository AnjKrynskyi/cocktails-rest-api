const button = document.getElementById('slice');

const request = async (page = null) => {
  if (page) {
    const res = await fetch(`http://localhost:8081/recipes?page=${page}`);
    const d = await res.json();
    console.log(d);
    return;
  }

  const res = await fetch('http://localhost:8081/recipes');
  const d = await res.json();
  console.log(d);
}

let page = 1;

request();
button.onclick = () => request(page++);