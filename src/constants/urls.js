const baseURL = 'https://jsonplaceholder.typicode.com'

const comments = '/comments'

let urls = {
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    }
}

export {
    baseURL,
    urls
}
