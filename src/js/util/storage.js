export default {
    get: k => {
        try {
            return JSON.parse(localStorage.getItem(k))
        } catch(e) {
            return {}
        }
    },
    set: (k, v) => {
        localStorage.setItem(k, JSON.stringify(v))
    }
}
