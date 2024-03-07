
const baseURL = 'https://rickandmortyapi.com/api'

const character = '/character'
const episode = '/episode'

const urls = {
    character: {
        base: character,
        byIds:(ids) => `${character}/${ids}`
    },
    episode: {
        base: episode
    }
}

export {
    baseURL,
    urls
}