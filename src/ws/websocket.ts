// export const ws = new WebSocket('ws://ws.piexgo.co/dev');
export const ws = new WebSocket('ws://devws.piexgo.co/market'); // 新建ws

export const ws_open = (callBack: Function) => {
  if(!callBack) return;
  if(ws.readyState === 1) {
    callBack();
  } else {
    ws.onopen = _ => callBack();
  }
};

export const ws_message = (callBack: Function) => ws.addEventListener("message", e => callBack(JSON.parse(e.data)));                       // 接受消息
export const send_market = () => ws.send(JSON.stringify({sub: "market.overview", unsub: "", pong: 0}));                                            // 订阅市场
export const send_mine = () => ws.send(JSON.stringify({sub: "mine.overview", unsub: "", pong: 0}));                                                // 订阅在线人数
export const send_depth = (symbol: string) => ws.send(JSON.stringify({sub: (`depth.${symbol}`).toLowerCase(), unsub: "", pong: 0}));                        // 订阅深度
export const send_dealinfo = (symbol: string) => ws.send(JSON.stringify({sub: (`dealinfo.${symbol}`).toLowerCase(), unsub: "", pong: 0}));                  // 订阅实时成交
