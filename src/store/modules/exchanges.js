import { axios } from '@/common'

const state = () => ({
    exchanges: [],
    exchange: null,
    exchangeMarkets: [],
    test: null
})

const getters = {}

const mutations = {
    SET_EXCHANGES: (state, payload) => {
        state.exchanges = payload
    },
    SET_EXCHANGE: (state, payload) => {
        state.exchange = payload
    },
    SET_EXCHANGE_MARKETS: (state, payload) => {
        state.exchangeMarkets = payload
    },
    UPDATE_EXCHANGE: (state, payload) => {
        const objIndex = state.exchangeMarkets.findIndex(obj => (
            obj.baseId === payload.base && obj.quoteId === payload.quote
        ));
        if (objIndex !== -1) {
            console.log('Before', objIndex, state.exchangeMarkets[objIndex])
            state.exchangeMarkets[objIndex] = {...state.exchangeMarkets[objIndex], priceUsd: payload.priceUsd.toString()}
            console.log('After', objIndex, state.exchangeMarkets[objIndex])
        }
    }
}

const actions = {
    async getExchanges({ commit }) {
        await axios.get('/exchanges')
            .then(res => commit('SET_EXCHANGES', res.data.data))
    },
    async getSingleExchange({ commit }, exchangeId) {
        await axios.get(`/exchanges/${exchangeId}`)
            .then(res => commit('SET_EXCHANGE', res.data.data))
    },
    async getExchangeMarkets({ commit }, exchangeId) {
        await axios.get('/markets', { params: {exchangeId}})
            .then(res => commit('SET_EXCHANGE_MARKETS', res.data.data))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}