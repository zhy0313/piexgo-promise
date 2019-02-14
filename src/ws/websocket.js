// export const ws = new WebSocket('ws://ws.piexgo.co/dev');
export var ws = new WebSocket('ws://devws.piexgo.co/market'); // 新建ws
export var ws_open = function (callBack) {
    if (!callBack)
        return;
    if (ws.readyState === 1) {
        callBack();
    }
    else {
        ws.onopen = function (_) { return callBack(); };
    }
};
export var ws_message = function (callBack) { return ws.addEventListener("message", function (e) { return callBack(JSON.parse(e.data)); }); }; // 接受消息
export var send_market = function () { return ws.send(JSON.stringify({ sub: "market.overview", unsub: "", pong: 0 })); }; // 订阅市场
export var send_mine = function () { return ws.send(JSON.stringify({ sub: "mine.overview", unsub: "", pong: 0 })); }; // 订阅在线人数
export var send_depth = function (symbol) { return ws.send(JSON.stringify({ sub: ("depth." + symbol).toLowerCase(), unsub: "", pong: 0 })); }; // 订阅深度
export var send_dealinfo = function (symbol) { return ws.send(JSON.stringify({ sub: ("dealinfo." + symbol).toLowerCase(), unsub: "", pong: 0 })); }; // 订阅实时成交
