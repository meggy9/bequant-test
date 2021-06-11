export function initExchangeSocket(id, func) {
    const tradeWs = new WebSocket(`wss://ws.coincap.io/trades/${id}`)
    tradeWs.onmessage = function (msg) {
        func(JSON.parse(msg.data))
    }
    return tradeWs;
}

/*
    Here will be initMarketSocket function
*/

export function closeConnection(connection) {
    connection.close()
}