import DataFeed from "./DataFeed";
import {ws} from "@/ws/websocket";

export default {
  widget: null,
  dataFeed: null,
  dataCache: {},
  resolution: 1,
  start: function() {
    let self = this;
    this.dataCache = {};
    this.dataFeed = new DataFeed(this);
    this.widget = new window.TradingView.widget({
      symbol: "BTC_USDT",
      interval: "60",
      container_id: "tradingview",
      datafeed: this.dataFeed,
      library_path: '/static/custom_scripts/chart_main/',
      disabled_features: [
        'header_chart_type',
        'header_symbol_search',
        'volume_force_overlay',
        'header_resolutions',
        'header_settings',
        'edit_buttons_in_legend',
        'header_compare',
        'header_undo_redo',
        'header_screenshot',
      ],
      enabled_features: [
        "header_fullscreen_button",
        "dont_show_boolean_study_arguments",
        "use_localstorage_for_settings",
        "remove_library_container_border",
        "save_chart_properties_to_local_storage",
        "side_toolbar_in_fullscreen_mode",
        "hide_last_na_study_output",
        "constraint_dialogs_movement",
      ],
      numeric_formatting: {
        decimal_sign: '.'
      },
      timezone: 'Asia/Singapore',
      locale: 'zh',
      debug: false,
      autosize: true,
      toolbar_bg: "#1a2636",
      allow_symbol_change: true,
      drawings_access: {
        type: 'black',
        tools: [
          {name: "Trend Line", grayed: true},
          {name: "Trend Angle", grayed: true}
        ]
      },
      studies_overrides: {
        "volume.volume.color.0": "#E75A5B",
        "volume.volume.color.1": "#38AF75",
        "volume.volume.transparency": "53",
        "volume.volume ma.plottype": "line"
      },
      overrides: {
        "volumePaneSize": "medium",
        "symbolWatermarkProperties.color": "rgba(0,0,0, 0)",
        "paneProperties.background": "#1a2636",
        "paneProperties.vertGridProperties.color": "#243142",
        "paneProperties.horzGridProperties.color": "#243142",
        "paneProperties.crossHairProperties.color": "#4F5E72",
        "paneProperties.crossHairProperties.style": 3,
        "mainSeriesProperties.style": 1,
        "mainSeriesProperties.showCountdown": false,
        "scalesProperties.showSeriesLastValue": true,
        "mainSeriesProperties.visible": true,
        "mainSeriesProperties.showPriceLine": true,
        "mainSeriesProperties.priceLineWidth": 1,
        "mainSeriesProperties.lockScale": false,
        "mainSeriesProperties.minTick": "default",
        "mainSeriesProperties.extendedHours": false,
        editorFontsList: ["Lato", "Arial", "Verdana", "Courier New", "Times New Roman"],
        "paneProperties.topMargin": 10,
        "paneProperties.bottomMargin": 5,
        "paneProperties.leftAxisProperties.autoScale": true,
        "paneProperties.leftAxisProperties.autoScaleDisabled": false,
        "paneProperties.leftAxisProperties.percentage": false,
        "paneProperties.leftAxisProperties.percentageDisabled": false,
        "paneProperties.leftAxisProperties.log": false,
        "paneProperties.leftAxisProperties.logDisabled": false,
        "paneProperties.leftAxisProperties.alignLabels": true,
        "paneProperties.legendProperties.showStudyArguments": true,
        "paneProperties.legendProperties.showStudyTitles": true,
        "paneProperties.legendProperties.showStudyValues": true,
        "paneProperties.legendProperties.showSeriesTitle": true,
        "paneProperties.legendProperties.showSeriesOHLC": true,
        "scalesProperties.showLeftScale": false,
        "scalesProperties.showRightScale": true,
        "scalesProperties.backgroundColor": "#1a2636",
        "scalesProperties.lineColor": "#2E3947",
        "scalesProperties.textColor": "#545D69",
        "scalesProperties.scaleSeriesOnly": true,
        "mainSeriesProperties.priceAxisProperties.autoScale": true,
        "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": false,
        "mainSeriesProperties.priceAxisProperties.percentage": false,
        "mainSeriesProperties.priceAxisProperties.percentageDisabled": false,
        "mainSeriesProperties.priceAxisProperties.log": false,
        "mainSeriesProperties.priceAxisProperties.logDisabled": false,
        "mainSeriesProperties.candleStyle.upColor": "#38AF75",
        "mainSeriesProperties.candleStyle.downColor": "#E75A5B",
        "mainSeriesProperties.candleStyle.drawWick": true,
        "mainSeriesProperties.candleStyle.drawBorder": false,
        "mainSeriesProperties.candleStyle.borderColor": "#38AF75",
        "mainSeriesProperties.candleStyle.borderUpColor":"#38AF75",
        "mainSeriesProperties.candleStyle.borderDownColor": "#E75A5B",
        "mainSeriesProperties.candleStyle.wickColor": "#38AF75",
        "mainSeriesProperties.candleStyle.wickUpColor": "#38AF75",
        "mainSeriesProperties.candleStyle.wickDownColor": "#E75A5B",
        "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
        "mainSeriesProperties.hollowCandleStyle.upColor": "#38AF75",
        "mainSeriesProperties.hollowCandleStyle.downColor": "#E75A5B",
        "mainSeriesProperties.hollowCandleStyle.drawWick": true,
        "mainSeriesProperties.hollowCandleStyle.drawBorder": false,
        "mainSeriesProperties.hollowCandleStyle.borderColor": "#38AF75",
        "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#38AF75",
        "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#E75A5B",
        "mainSeriesProperties.hollowCandleStyle.wickColor": "#38AF75",
        "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#38AF75",
        "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#E75A5B",
        "mainSeriesProperties.haStyle.upColor": "#38AF75",
        "mainSeriesProperties.haStyle.downColor": "#E75A5B",
        "mainSeriesProperties.haStyle.drawWick": true,
        "mainSeriesProperties.haStyle.drawBorder": false,
        "mainSeriesProperties.haStyle.borderColor": "#38AF75",
        "mainSeriesProperties.haStyle.borderUpColor": "#38AF75",
        "mainSeriesProperties.haStyle.borderDownColor": "#E75A5B",
        "mainSeriesProperties.haStyle.wickColor": "#737375",
        "mainSeriesProperties.haStyle.wickUpColor": "#38AF75",
        "mainSeriesProperties.haStyle.wickDownColor": "#E75A5B",
        "mainSeriesProperties.haStyle.barColorsOnPrevClose": true,
        "mainSeriesProperties.barStyle.upColor": "#38AF75",
        "mainSeriesProperties.barStyle.downColor": "#E75A5B",
        "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
        "mainSeriesProperties.barStyle.dontDrawOpen": true,
        "mainSeriesProperties.lineStyle.color": "#0cbef3",
        "mainSeriesProperties.lineStyle.linestyle": 0,
        "mainSeriesProperties.lineStyle.linewidth": 1,
        "mainSeriesProperties.lineStyle.priceSource": "close",
        "mainSeriesProperties.areaStyle.color1": "#0cbef3",
        "mainSeriesProperties.areaStyle.color2": "#0098c4",
        "mainSeriesProperties.areaStyle.linecolor": "#0cbef3",
        "mainSeriesProperties.areaStyle.linestyle": 0,
        "mainSeriesProperties.areaStyle.linewidth": 1,
        "mainSeriesProperties.areaStyle.priceSource": "close",
        "mainSeriesProperties.areaStyle.transparency": 80,
      },
      custom_css_url: "chart.css"
    });


    this.widget.onChartReady(_ => {
      document.querySelector(`#tradingview`).childNodes[0].setAttribute('style', 'display:block;width:100%;height:100%;visibility:visible;');
      this.widget.chart().executeActionById("drawingToolbarAction");

      const btnList = [
        {class: 'resolution_btn', label: "分时", resolution: "1", chartType: 3},
        {class: 'resolution_btn', label: '1m', resolution: "1"},
        {class: 'resolution_btn', label: '5m', resolution: "5"},
        {class: 'resolution_btn', label: '15m', resolution: "15"},
        {class: 'resolution_btn', label: '30m', resolution: "30"},
        {class: 'resolution_btn active', label: '1H', resolution: "60"},
        {class: 'resolution_btn', label: '2H', resolution: "120"},
        {class: 'resolution_btn', label: '4H', resolution: "240"},
        {class: 'resolution_btn', label: '12H', resolution: "720"},
        {class: 'resolution_btn', label: '1D', resolution: "1D"},
        {class: 'resolution_btn', label: "1周", resolution: "1W"},
        {class: 'resolution_btn', label: "1月", resolution: "1M"},
      ];

      btnList.forEach((item) => {
        let button = self.widget.createButton({align: "left"});
        if (item.class.indexOf("active") > 0) self.widget.selectedIntervalButton = button;
        button.attr('class', "button " + item.class).attr("data-type", item.resolution).attr("data-chart-type", !item.chartType ? 1 : item.chartType)
          .on('click', _ => {
            let chartType = +button.attr("data-chart-type");
            if (self.widget.chart().resolution() !== item.resolution) {
              self.widget.chart().setResolution(item.resolution, _ => {
                self.handleCancelSend();
                self.deleteCache(options.symbol);
              });
            }
            if (self.widget.chart().chartType() !== chartType) self.widget.chart().setChartType(chartType);
            self.updateSelectedIntervalButton(button);
          }).append(item.label);
      });
    });
  },
  updateSelectedIntervalButton(button) {
    this.widget.selectedIntervalButton.removeClass("active");
    button.addClass("active");
    this.widget.selectedIntervalButton = button;
  },
  deleteCache(ticker) {
    let item = `${ticker}.${this.resolution}`;
    delete this.dataCache[item];
  },
  handleCancelSend() {
    if(this.cancelSendObj) this.subscribeKline(this.cancelSendObj);
  },
  getBars: function(symbolInfo, resolution, from, to, callBack) {
    if(!callBack) return;
    let data;
    this.resolution = resolution;
    let cacheItem = `${symbolInfo.ticker}.${resolution}`;
    let symbolData = this.dataCache[cacheItem];
    if (symbolData) data = symbolData;
    const requestTitle = `kline.${symbolInfo.ticker.toLowerCase()}.${resolution}`;
    const fetchCacheData = data => {
      let first = data[0].time / 1000;
      to < first ? callBack({bars: [], noData: true}) : callBack({bars: data, noData: false});
      let params = {sub: `kline.${symbolInfo.ticker.toLowerCase()}.${resolution}`, from, to, unsub: "", pong: 0};
      this.subscribeKline(params, this.onUpdateData.bind(this));
      this.cancelSendObj = {unsub: requestTitle, pong: 0};
    };

    const requestKline = _ => {
      const params = {req: requestTitle, from, to, unsub: "", pong: 0};
      this.subscribeKline(params, result => {
        this.onUpdateData(result);
        this.getBars(symbolInfo, resolution, from, to, callBack);
      });
    };

    (data && data.length) ? fetchCacheData(data) : requestKline();
  },
  onUpdateData(result) {
    if(!result.data) return;
    result.symbol = result.symbol.toUpperCase();
    let cacheItem = `${result.symbol}.${result.type}`;

    if(!this.dataCache[cacheItem]) {
      this.dataCache[cacheItem] = [];
    }

    if(result.topic === "kline.req") {
      result.data.forEach(item => item.time = item.time * 1000);
      this.dataCache[cacheItem] = result.data;
    } else if(result.topic === "kline") {
      result.data.time = result.data.time * 1000;
      this.dataFeed.update(result.data);
    }
  },
  subscribeKline(params, callBack) {
    ws.send(JSON.stringify(params));
    ws.onmessage = e => {
      let data = JSON.parse(e.data);
      if (data.topic === "kline.req" || data.topic === "kline") {
        callBack && callBack(data);
      }
    };
  },
  remove() {
    this.widget.remove();
  },
  setSymbol() {
    this.widget.setSymbol("ETH_USDT", 60, () => {});
  },
};
