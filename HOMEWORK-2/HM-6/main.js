// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))

const btn = document.querySelector(".btn");
const block = document.querySelector(".block");
const btnPrev = document.querySelector(".btn-prev");
let num = 1;

const button = () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then((response) => response.json())
    .then((todoItem) => {
      console.log(todoItem);
      block.innerHTML = `
            <div class="card">
                <h3>${todoItem.title}</h3>
                <h3>${todoItem.completed}</h3>
                <h3>${todoItem.id}</h3>
            </div>
            `;
    });
};
button()

btn.onclick = () => {
    num++
    button()
}
btnPrev.onclick = () => {
    num--
    button()
}
