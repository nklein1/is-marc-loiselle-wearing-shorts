(this["webpackJsonpis-marc-loiselle-wearing-shorts"]=this["webpackJsonpis-marc-loiselle-wearing-shorts"]||[]).push([[0],{19:function(e,t,a){e.exports={container:"whypage_container__-AN-b",subContainer:"whypage_subContainer__3YqFC"}},23:function(e,t,a){e.exports={container:"homepage_container__2W7CF"}},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),o=(a(32),a(10)),c=a(8),l=a(11),h=a(12),m=a(15),u=a(13),p=a(16),d=a(49);function w(e,t,a){return fetch("https://api.openweathermap.org/data/2.5/weather"+t,{method:e}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.log("Received the following server error response while fetching Weather: ",e)}))}function g(e){if(e&&e.main&&e.wind){var t=e.main.temp_max,a=e.wind.speed,n=!0;return t<40?n=!1:t<=50&&a>15&&(n=!1),n}return"loading"}function f(e){var t=!0;if(e&&e.dt){var a=new Date,n=new Date(1e3*e.dt);Math.abs(a.getTime()-n.getTime())/36e5<=2&&(t=!1)}return t}var E=function(e){var t=e.isMarkWearingShorts,a=e.pageType;return r.a.createElement("span",null," ",function(){var e=t;return"home"===a?(e="Hell Yeah",!1===t&&(e="Nope Nope Nope")):"why"===a&&(e="is definitely",!1===t&&(e="probably isn't")),e}()," ")},v=a(23),b=a.n(v),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).saveWeatherData=function(e){sessionStorage.setItem("weather",JSON.stringify(e)),a.setState({weather:e})},a.updateForecast=function(){w("GET","?id=4930956&units=imperial&APPID=7edf14d2a1b5c880692392447d6bc828",a.saveWeatherData,a.parseError)},a.state={weather:JSON.parse(sessionStorage.getItem("weather"))||null},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.weather&&!0!==f(this.state.weather)||this.updateForecast()}},{key:"render",value:function(){return r.a.createElement("div",{className:b.a.container},r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,md:12},r.a.createElement("h1",null,"Is Marc Loiselle wearing shorts?")),r.a.createElement(d.a,{item:!0,md:12},r.a.createElement("h1",null,r.a.createElement(E,{isMarkWearingShorts:g(this.state.weather),pageType:"home"}))),r.a.createElement(d.a,{item:!0,md:12},r.a.createElement(o.b,{to:"/why"},"Why?"))))}}]),t}(r.a.Component),S=a(19),O=a.n(S),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).saveWeatherData=function(e){var t=e,n=e.main.temp_max,r=e.wind.speed;sessionStorage.setItem("weather",JSON.stringify(e)),sessionStorage.setItem("temp",JSON.stringify(n)),sessionStorage.setItem("wind",JSON.stringify(r)),a.setState({weather:t,temp:n,wind:r})},a.updateForecast=function(){w("GET","?id=4930956&units=imperial&APPID=7edf14d2a1b5c880692392447d6bc828",a.saveWeatherData,a.errorCallback)},a.renderVerdict=function(){var e="is definitely";return a.state.weather&&!0!==g(a.state.weather)&&(e="probably isn't"),e},a.state={weather:JSON.parse(sessionStorage.getItem("weather"))||null,temp:JSON.parse(sessionStorage.getItem("temp"))||null,wind:JSON.parse(sessionStorage.getItem("wind"))||null},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.weather&&!0!==f(this.state.weather)?this.state.temp||this.saveWeatherData(this.state.weather):this.updateForecast()}},{key:"render",value:function(){return r.a.createElement("div",{className:O.a.container},r.a.createElement(d.a,{container:!0,className:O.a.subContainer},r.a.createElement(d.a,{item:!0,md:10},r.a.createElement("h1",null,"Marc Loiselle is a shorts man. He loves his shorts.")),r.a.createElement(d.a,{item:!0,md:8},r.a.createElement("p",null,"And he wears shorts on nearly any day where the temperature is either higher than ",r.a.createElement("strong",null,"40\xb0F")," OR higher than ",r.a.createElement("strong",null,"50\xb0F")," if the wind speed is ",r.a.createElement("strong",null,"> 15mph"),"."),r.a.createElement("p",null,"Since the high temperature for today is ",r.a.createElement("strong",null,this.state.temp,"\xb0F"),", and the max wind speed is ",r.a.createElement("strong",null,this.state.wind,"mph"),", Marc Loiselle",r.a.createElement("strong",null,r.a.createElement(E,{isMarkWearingShorts:g(this.state.weather),pageType:"why"}),"wearing shorts"),".")),r.a.createElement(d.a,{item:!0,md:6},r.a.createElement("p",null,"Nick Klein found Marc Loiselle's dedication to shorts amusing, so he created this page using React and ",r.a.createElement("a",{href:"https://openweathermap.org/"},"OpenWeatherMap's API"))),r.a.createElement(d.a,{item:!0,md:12},r.a.createElement(o.b,{to:"/"},"Back to Home"))))}}]),t}(r.a.Component),k=(a(38),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/"},r.a.createElement(c.a,{exact:!0,path:"/",component:y}),r.a.createElement(c.a,{path:"/why",component:N})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.da708e28.chunk.js.map