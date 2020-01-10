export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stocksId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stocksId)
            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stocksId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stocksId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stocksId)
            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        }
    }
}