let baseURL = 'https://jsonplaceholder.typicode.com';

let posts = '/posts';

let urls = {
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}.`
    }
}

export {baseURL, urls}