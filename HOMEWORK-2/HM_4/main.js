const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const div = document.createElement('div')
            div.innerHTML = people.name
            document.body.append(div)
            const span = document.createElement('span')
            span.innerHTML = people.age
            document.body.append(span)
        } )
    })
})
