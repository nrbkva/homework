const blockTitle = document.querySelector('.title')
const blockBody = document.querySelector('.body')

// const URL = 'https://jsonplaceholder.typicode.com/posts'
const bodyTitle = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
                .then(resp => resp.json())
                .then(posts => {
                    blockTitle.innerHTML = posts.title
                    blockBody.innerHTML = posts.body
                })

}