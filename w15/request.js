'use strict'

const getPost = (undefined, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data)
        } else if (e.target.readyState === 4) {
            callback('Something went Wrong...')
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    request.send()
}