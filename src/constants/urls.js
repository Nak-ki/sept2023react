const baseURL = 'https://jsonplaceholder.typicode.com'

const comments = "/comments"
const albums = '/albums'
const todos = '/todos'
const posts = '/posts'

const urls = {
    todos: {
        base: todos,
        byId: (id) => `${todos}/${id}`
    },
    albums: {
        base: albums,
        byId: (id) => `${albums}/${id}`
    },
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    },
    posts:{
        base:posts,
        byId: (id) => `${posts}/${id}`
    }

}

export {baseURL,
urls}