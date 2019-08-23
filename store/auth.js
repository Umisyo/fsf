export const state = () => ({
    user: {
    },
    isAuthenticated: false
})

export const mutations = {
    setUser(state, payload) {
        state.user = payload, 
        state.isAuthenticated = true
    }
}

export const actions = {
    setUser ({ commit }, payload) {
        commit('setUser', payload)
    }
}
