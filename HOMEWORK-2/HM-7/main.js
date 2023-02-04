

const main = document.querySelector('.main .container')

// function getData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            const div = document.createElement('div')
            data.forEach((data) => {
                 const div = document.createElement('div')
                    div.innerHTML += `
                        <div class="main__card">
                            <div class="image">
                                <img src="images/work-img.jpg" alt="logo"/>
                             </div>
                            <div class="card">
                                <h2>${data.title}</h2>
                                <p>${data.body}</p>
                            </div>
                        </div>
                `

                main.append(div)
                div.setAttribute('class', 'main__inner')
            })
        })
// }
// getData()
