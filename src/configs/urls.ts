const BASE_URL = process.env.backend_link

const urls = {
    users: {
        user: '/users',
        activate: '/users/activate',
        deactivate: '/users/deactivate',
    },
    animals: {
        animals: 'animals',
        approve: '/animals/approve',
        reject: '/animal/reject,'
    }
}

export {
    BASE_URL,
    urls
}