'use strict'

// const getPostOld = (undefined, callback) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data)
//         } else if (e.target.readyState === 4) {
//             callback('Something went Wrong...')
//         }
//     })

//     request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
//     request.send()
// }

const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Something went Wrong...')
    }
}

