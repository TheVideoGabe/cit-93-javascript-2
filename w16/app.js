'use strict'

const posts = []
const postsDropdown = document.querySelector('#howMany')
let output = document.getElementById('output');

const displayOnPage = (selection) => {
    let postEl = document.createElement('h2')
    const hr = document.createElement('hr');
    document.querySelector('#output').appendChild(hr);
    postEl.textContent = selection
    output.appendChild(postEl)
}


postsDropdown.addEventListener('change', () => {
    const howManyChosen = postsDropdown.value
    output.innerHTML = ''
    for (let listOfPosts = 0; listOfPosts < howManyChosen; listOfPosts++) {
        displayOnPage(posts[listOfPosts])
    }
})


// oldGetPost(undefined, (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         data.forEach((post) => {
//             posts.push(`Post: #${post.id}       
//             TITLE: ${post.title}        
//             ARTICLE: ${post.body}`)
//         })
//     }
// })

getPost().then((data) => {
    data.forEach((post) => {
        posts.push(`Post: #${post.id}       
        TITLE: ${post.title}        
        ARTICLE: ${post.body}`)
    })
}).catch((err) => {
    console.log(err)
})