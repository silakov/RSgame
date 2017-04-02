var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function PointJS(lc,ga,ha,za,Bc){this._logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABcCAYAAACYyxCUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAA10RVh0YXV0aG9yAFNrYW5lcrXlqu8AAAfJSURBVHic7Z1PaBRXHMe/M278GxW6CnalhEQMIlqUgiE2DUguha6g12Ih4sVrD70VevKUiwoKq8XFeOjBgxZ68aAXDYEKhUKpoMiaSCTR4EaINjtJ5vWQmXXcnTfz/r/ZzX7gHZKZ9/v93vvN7/ebNzM7A3To0KE9+A0AEWzfWLC37Wia2IWFBcJLtVqNc9Ata6NqMeqTVigUuCeflT179kSd84vVETfg2DYAwNcAHgGA4zjwfd+octd1QQgJ/7Q+H65F3eNYO0IfeZ4HQohxZwCA7/sghKBWqwEfo8Yato4IAiB6ZGYKx6lPi/H5MR0hBAAhhEg5o1QqwXVdOI4T21zXRalUEjfyo33WI0YXBAApl8vcBbivr0/0VLep7du3j1v/tWvXwv67TUyUiZDkTk+RlKEVQZu0GqczZf0IgIyMjDANvFKp1FOOKUJ9U1NTqfsSQjA8PAy0aAoLa0UqV65cUZaSZFupVGKyGRqdouNwZEpRvu9jw4YNGtTL4/t+aqQG25XPn2qBTM4wmZZkYByHC4URo7KGpDrj3r17LeMMYG3C79+/T90ejNUHMKZMpyI5qc5oJUfEwTC2AQB/yupRMUtt74wQhjFKD1Q2ZT0G1oczgOSxkI8rezkdkv3JenFGFJ2RIhMhZGRkhLqRxxnLy8vK2/T0NK5fv47+/n6JIfKPbWhoCLCweExc+CFh8RXXTFMsFpUsJGnAhkNonDlzJvMOicJra7SdO3cuTa4RyIkTJ2KNmJ+fV3qkmUTEbgCkWq3GyhscHBRyCm/xWQXgEkpREy3iNHmmUW2/SIHnLerKnZElRA8M2tiJwKkwj0Oogm3cC9eF7WjlihCasVm9amsSVVHC6hCqwKtXr7LqahlEo6RcLkvrZk38xPM8dHV1NQtQUDtsp4k4VBb4Wq2GzZs3AwzzzRIhowBinVGpVBi6ry9mZmaa/rdp0yalOsjx48eVnrs3Np1rB1GmpqaUjufo0aMEwK9pk80Sl8HYYzorOtWlyU+DRf+BAwfw5MkTbfLjSJmvRKFpGhcBbItToHLdodMhJuSz6mRxSFoN2VYoFISN6vAp+XweAH5I2iftENCergIlQv1aLUIiMqmCbT793iGGJIf00Ta0w3Ur3YjOUVIvQvsBjWqHtGPKoumVSlnValXKoA7NzM3NAcAXtO2JEWKioAeKhPq1YoQEcj0Ascv3TlG3w0baBm6HrKysyJnSIRFuh1y8eFGHHW3J5cuXuftwO+Tu3bvcStYrd+7c4e7D7ZCnT59yK7HJli1brOl+9uwZd5+2L+ofPnwQ6jc9Pa3YEjZyvB36+/vx5s0bHbZwE1ysa6KrqwvPnz/H1q1bhWX39PQI9w3Zv38/dx9uh5w6dQoTExPcinQwPz9v24RETp8+zd2He2G4srISeztXBtGFm050PiuQdPmEu4bkctxB1XLYvHja9kWdl/fv31vVn+iQhYUFU3Zkhu7ubq3yg4uL39O2t/Tld9WYGJfM5fefsjJRusnlcpm56dbS99RVoMsRnXvqHBSLReMvumEl9Ry2UCjg1atXJmzRgud52Lt3byYWkcGVhb+T9klNWUBicVKCrTt6OtH1oBy183op+CLIzA1TDRkcHBRWYAMSvDOREILDhw/bNgcAcOTIEWWyFkF5ortSqWTu6fcLFy4w7aerzczMJNmaCvMPdmq1GjZubL43b/MHOyk/IwMAvHjxAr29vULyRYgby9LSUnijTFnRox7JpVIpUxFis928eVMqOnjRNjGqHZK0n+d5sbJu376tbRw8DuEJIRJ4pXkDIXBd8TVmnEwWWFJWdL+kdylqfCgOAD4HMMsih2cWqRZneT0QhWan53m6VTM5AxC4dMJ6VGad7u5uOI6DfD4v/aPMlOjQ+moNB0D4QuEm3r59yynOHouLi9i5c6e0ze/evYv9/7Fjx6Tk8vAtEgrY2bNnM1vUfd+PldPb2ytUxM+fP59mmzFYzioy5xAA5PXr17GyTp48qfqs6jO9LmiGDA8Pc08Wz8DSYJUXt09ctKiweWBgwHh0hEwmGcY7QJWNZsfk5CTZsWNH/e/R0VEhexnGLIz0W0mxZiFdgYVT4kZ7QhuS7IzuxyM7pn8XAOHfbMjeMXQihsSSNglZ4dat9C/pMTjjMSScoRLWULaWssbGxqi2ra6uqkhTmTvyUg1/8OCB1RoSbfl8nmzfvj1V1sOHD406oy0/V9GoX9fLOQO5/wEQf8y+AdVPnaTWFADRr6ApI/xApAq5LHKCMf4Dhc4A9DwGxOQUYG3gN27c0GBCxBiO6BgfH2dyaCBzEUA27g8zQgCQoaGhxBwc8vLlS6m64bouU+2Ia7Tbro1EFn1f6po03YuEPwB8B/Cd/orkfMdxuNOVoE1a50z3k4tFRFIY6xtMwxxOCMHBgweZ+6Rx6NChT2SzcOnSJaufYtXJMhhOjVkol8skl8tRU1AulxP6qmgjEZnGsOHx+gBZj1LTRCIiD8DoTR4bD1s7iKQxx3HCT2dbZWlpKfoA9n9Ys9H4Hbcs5MR6mGTgA/d/AfjKqAENZOHnCGHETBBC6kfprl27tCnM5/N1PYEz3MAGq87IMrHFem5ujrswz87O0or/z5bG1haouOj4u3GrBchCDZFlN4AerBXif5HBy+AdWpj/AazZcTP7IXuyAAAAAElFTkSuQmCC";
var g=window,q=this,Aa=!0,fb=!0,Db=!1,ka=!1,Na=!0,r=ga,t=ha,P=r/2,Q=t/2,f={x:0,y:0},u={fillStyle:"black",strokeStyle:"black",globalAlpha:1,font:"sans-serif",textBaseline:"top"},E=function(a){console.log("[PointJS] : ",a)};"undefined"!=typeof POINTJS_USER_LOG&&(E=POINTJS_USER_LOG);var Oa=function(a){var b=decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g,"")),b=b.split(/\n/),b=(""==b[2]?b[0]:b[1]).split("/"),b=b[b.length-1].split(":");console.log('ERROR "'+a.toString()+'" \n in      '+
b[0]+" \n line :   "+b[1]+" \n symbol : "+b[2])},Eb=function(a,b){E('function "'+a+'" is DEPRECATED, use a "'+b+'"')};this.game={};this.levels={};this.camera={};this.keyControl={};this.mouseControl={};this.touchControl={};this.actionControl={};this.system={};this.vector={};this.math={};this.colors={};this.brush={};this.audio={};this.wAudio={};this.dialogs={};this.resources={};this.tiles={};this.OOP={};this.GUI={};this.GL={};this.memory={};this.system.log=E;this.system.consoleLog=function(a){this.log=
!0===a?console.log:E};this.system.setTitle=function(a){g.document.title=a};this.system.setSettings=function(a){Aa=v(a.isShowError)?a.isShowError:!0;fb=v(a.isStopForError)?a.isStopForError:!0;Db=v(a.isAutoClear)?a.isAutoClear:!1;v(a.isZBuffer)};this.system.setDefaultSettings=function(a){for(var b in a)u[b]=a[b];h.save()};this.system.setSmoothing=function(a){Na=a;Fb()};var mc={name:"PointJS",desc:"HTML5 2D Game Engine for JavaScript",author:"Skaner (skaner0@yandex.ru)",version:"0.1.0"};this.system.getInfo=
function(){return mc};var Gb="",Hb="",Ib=function(a,b){var c=k.createShader(a);k.shaderSource(c,b);k.compileShader(c);return k.getShaderParameter(c,k.COMPILE_STATUS)?c:(E("Error shader compilation : "+k.getShaderInfoLog(c)),k.deleteShader(c),null)},U,k=!1,w=!1,nc=function(){w=g.document.createElement("canvas");w.width=l.width;w.height=l.height;w.style.position="fixed";w.style.left=0;w.style.top=0;w.style.zIndex=l.style.zIndex+1;w.id="PointJS-canvas_1";w.style.backgroundColor=za.backgroundColor?za.backgroundColor:
"black";m.attach(w);m.addEvent("onload","hideSourceCanvas",function(){l.style.display="none"});k=w.getContext("webgl")||w.getContext("experimental-webgl");k.viewport(0,0,r,t);k.clearColor(0,0,0,1);k.clear(k.COLOR_BUFFER_BIT)},gb,hb,Jb,Kb,ib,jb,oc=function(){var a=k.createBuffer();k.bindBuffer(k.ARRAY_BUFFER,a);k.bufferData(k.ARRAY_BUFFER,new Float32Array([0,0,r,0,0,t,0,t,r,0,r,t]),k.STATIC_DRAW);hb=k.getAttribLocation(U,"aPosition");Jb=k.getUniformLocation(U,"uResolution");gb=k.getAttribLocation(U,
"aTextCoord");ib=k.getUniformLocation(U,"uInversion");jb=k.getUniformLocation(U,"uMirrorX");k.uniform2f(Jb,r,t);k.enableVertexAttribArray(hb);k.vertexAttribPointer(hb,2,k.FLOAT,!1,0,0);a=k.createBuffer();k.bindBuffer(k.ARRAY_BUFFER,a);k.bufferData(k.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),k.STATIC_DRAW);k.enableVertexAttribArray(gb);k.vertexAttribPointer(gb,2,k.FLOAT,!1,0,0);Kb=k.createTexture();k.bindTexture(k.TEXTURE_2D,Kb);k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE);k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,k.NEAREST);k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,k.NEAREST)};this.GL.filter=function(a,b){if(!k)return E("GL is not inited. Use a initGL() function.");"inversion"==a&&k.uniform1i(ib,1);"mirror-x"==a&&k.uniform1i(jb,1)};var ia=function(a,b){this.x=a||0;this.y=b||0};ia.prototype={abs:function(){return new ia(Math.abs(this.x),Math.abs(this.y))},invert:function(){return new ia(-this.x,
-this.y)},plus:function(a){return new ia(this.x+a.x,this.y+a,y)},minus:function(a){return new ia(this.x-a.x,this.y-a,y)},inc:function(a){return new ia(this.x*a.x,this.y*a,y)},div:function(a){return new ia(this.x/a.x,this.y/a,y)}};var e=function(a,b){return new ia(a,b)},C=function(a,b){return{w:a,h:b}},sa=function(a,b){return{x:a.x+b.x,y:a.y+b.y}},kb=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},O=function(a,b,c){if(0!=c){var d=A(c);c=a.x-b.x;a=a.y-b.y;var n=Math.cos(d),d=Math.sin(d);return e(c*n-a*d+
b.x,c*d+a*n+b.y)}return e(a.x,a.y)},Ba=function(a,b){return 180/Math.PI*Math.atan2(b.y-a.y,b.x-a.x)},la=function(a,b){if(3>b.length)return!1;var c=0,d=b.length-1,n=b[d].y<a.y,e,f;e=0;for(f=b.length;e<f;++e){var h=b[e].y<a.y,d=kb(b[d],a),g=kb(b[e],a),d=d.x*(g.y-d.y)-d.y*(g.x-d.x);h&&!n&&0<d&&(c+=1);!h&&n&&0>d&&(c+=1);d=e;n=h}return 0!=(c&1)};this.vector.point=e;this.vector.v2d=e;this.vector.size=C;this.vector.w2h=C;this.vector.getPointAngle=O;this.vector.isPointIn=la;this.vector.pointMinus=kb;this.vector.pointPlus=
sa;this.vector.pointInc=function(a,b){return{x:a.x*b.x,y:a.y*b.y}};this.vector.pointDiv=function(a,b){return{x:a.x/(0!=b.x?b.x:1),y:a.y/(0!=b.y?b.y:1)}};this.vector.pointAbs=function(a){return{x:Math.abs(a.x),y:Math.abs(a.y)}};this.vector.getMidPoint=function(a,b){return v(b)?e((a.x+b.x)/2,(a.y+b.y)/2):0};this.vector.getDistance=function(a,b){return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))};this.vector.isSame=function(a,b){return v(b)?a.x==b.x&&a.y==b.y:!1};this.vector.getAngle2Points=Ba;
this.vector.newStaticBox=function(a,b,c,d){return{x:a,y:b,w:a+c,h:b+d}};this.vector.newDynamicBoxRect=function(a,b,c,d){return[e(a,b),e(a+c,b),e(a+c,b+d),e(a,b+d)]};var Lb={},lb=function(){var a=(new Date).getTime();Lb[a]&&(a=lb());Lb[a]=!0;return a},A=function(a){return Math.PI/180*a},ba=function(a,b,c){var d=Math.floor(Math.random()*(b-a+1)+a);return c&&0==d?ba(a,b,c):d},mb=function(a){return 0>a?-1:1};this.math.limit=function(a,b){a=Math.abs(a);b=Math.abs(b);return a<b?a*mb(a):b*mb(b)};this.math.sign=
mb;this.math.a2r=A;this.math.random=ba;this.math.toInt=function(a){return a>>0};this.math.uid=lb;var pc=0,m={loaded:!1,events:{onload:[],preLoop:[],postLoop:[],gameBlur:[],gameFocus:[],gameResize:[]},addEvent:function(a,b,c){"onload"==a&&m.loaded?c():m.events[a].push({id:b,func:c})},delEvent:function(a,b){x(m.events[a],function(a,d,n){a.id==b&&n.splice(d,1)})},runEvent:function(a){x(m.events[a],function(a){"function"==typeof a.func&&a.func()})},attach:function(a){var b=function(){g.document.body.appendChild(a)};
m.loaded?b():m.addEvent("onload","attachElement_PointJS"+(pc+=1),b)},getWH:function(){return{w:parseInt(g.document.documentElement.clientWidth||g.innerWidth||g.document.body.clientWidth),h:parseInt(g.document.documentElement.clientHeight||g.innerHeight||g.document.body.clientHeight)}}};this.system.delEvent=function(a,b){m.delEvent(a,b)};this.system.addEvent=function(a,b,c){m.addEvent(a,b,c)};this.system.attachDOM=function(a){m.attach(a)};this.system.newDOM=function(a){a=g.document.createElement(a);
a.style.position="fixed";a.style.left=0;a.style.top=0;a.style.zIndex=l.style.zIndex+1;a.style.border="none";m.attach(a);return a};var l=g.document.createElement("canvas");l.crossOrigin="anonymous";l.width=parseInt(ga);l.height=parseInt(ha);l.style.position="fixed";l.style.left=0;l.style.top=0;l.style.zIndex=1E3;l.id="PointJS-canvas_0";l.style.backgroundColor="black";if("object"==typeof za)for(var nb in za)nb.match(/margin|padding|position/)||(l.style[nb]=za[nb]);m.addEvent("onload","Window_Hide_Scroll",
function(){g.document.body.style.overflow="hidden";ob={x:parseInt(l.style.left),y:parseInt(l.style.top)}});var ob=e(0,0),h=null,k=null,ca=!1,h=l.getContext("2d");"GL2D"==lc?(nc(),Hb="attribute vec2 aPosition; attribute vec2 aTextCoord; uniform vec2 uResolution; uniform int uMirrorX; varying vec2 vTextureCoord; void main() {    vec2 zeroToOne = aPosition / uResolution;    vec2 zeroToTwo = zeroToOne * 2.0;    vec2 clipSpace = zeroToTwo - 1.0;    gl_Position = vec4(clipSpace * vec2((uMirrorX == 1 ? -1 : 1), -1), 0, 1);    vTextureCoord = aTextCoord; }",
Gb="precision mediump float; uniform sampler2D texture; varying vec2 vTextureCoord; uniform int uInversion; void main() { \tvec4 texColor = texture2D(texture,vTextureCoord.xy); \tvec4 finalColor; \tfinalColor = texColor; \tif (uInversion == 1) \t\tfinalColor = 1.0 - finalColor; \tgl_FragColor = finalColor; }",U=k.createProgram(),k.attachShader(U,Ib(k.VERTEX_SHADER,Hb)),k.attachShader(U,Ib(k.FRAGMENT_SHADER,Gb)),k.linkProgram(U),k.getProgramParameter(U,k.LINK_STATUS)||E("Can't install shader"),k.useProgram(U),
oc(),ca=!0,m.addEvent("postLoop","drawGL",function(){k?(k.texImage2D(k.TEXTURE_2D,0,k.RGBA,k.RGBA,k.UNSIGNED_BYTE,l),k.drawArrays(k.TRIANGLES,0,6),k.uniform1i(ib,0),k.uniform1i(jb,0)):E("GL is not inited. Use a initGL() function.")})):(m.attach(l),h.textBaseline=u.textBaseline);this.system.setStyle=function(a){if("object"==typeof a)for(var b in a)l.style[b]=a[b]};this.system.getCanvas=function(){return l};this.system.getContext=function(){return h};this.system.resize=function(a,b){r=a||ga;t=b||ha;
P=r/2;Q=t/2;l.width=r;l.height=t;ca&&(w.width=l.width,w.height=l.height,k.viewport(0,0,r,t))};this.system.initFullPage=function(){m.addEvent("gameResize","PointJS_resizeGame",function(){r=m.getWH().w;t=m.getWH().h;P=r/2;Q=t/2;l.width=r;l.height=t;ca&&(w.width=l.width,w.height=l.height,k.viewport(0,0,r,t));h.textBaseline=u.textBaseline});m.runEvent("gameResize","PointJS_resizeGame")};var V=!1,qc=function(){V||(this.requestFullscreen?(this.requestFullscreen(),V=!0):this.mozRequestFullScreen?(this.mozRequestFullScreen(),
V=!0):this.webkitRequestFullscreen&&(this.webkitRequestFullscreen(),V=!0),r=m.getWH().w,t=m.getWH().h,P=r/2,Q=t/2,l.width=r,l.height=t,ca&&(w.width=l.width,w.height=l.height,k.viewport(0,0,r,t)))},pb=function(a){V=Mb(g.document.fullscreenElement||g.document.mozFullScreenElement||g.document.webkitFullscreenElement)};g.document.addEventListener("webkitfullscreenchange",pb);g.document.addEventListener("mozfullscreenchange",pb);g.document.addEventListener("fullscreenchange",pb);this.system.initFullScreen=
function(){V||(g.document.documentElement.onclick=qc,Da||(m.addEvent("gameResize","PointJS_initFullScreen",function(){r=m.getWH().w;t=m.getWH().h;P=r/2;Q=t/2;l.width=r;l.height=t;ca&&(w.width=l.width,w.height=l.height,k.viewport(0,0,r,t));h.textBaseline=u.textBaseline}),m.runEvent("gameResize","PointJS_initFullScreen")))};this.system.exitFullScreen=function(){V&&(m.delEvent("gameResize","PointJS_initFullScreen"),g.document.exitFullscreen?(g.document.exitFullscreen(),V=!1):g.document.mozCancelFullScreen?
(g.document.mozCancelFullScreen(),V=!1):g.document.webkitExitFullscreen&&(g.document.webkitExitFullscreen(),V=!1),r=ga,t=ha,P=r/2,Q=t/2,l.width=r,l.height=t,ca&&(w.width=l.width,w.height=l.height,k.viewport(0,0,r,t)),g.document.documentElement.onclick=function(){})};this.system.isFullScreen=function(){return V};this.system.exitFullPage=function(){r=ga;t=ha;P=r/2;Q=t/2;l.width=r;l.height=t;ca&&(w.width=l.width,w.height=l.height,k.viewport(0,0,r,t))};var Y=!1,Da=!1,Nb=ga,Ob=ha,Pb=!1;this.system.initFullScale=
function(a){Da||(a&&(Pb=!0),m.addEvent("gameResize","PointJS_initFullScale",function(){var a=Nb,c=Ob,d=m.getWH();Pb?(a=d.w,c=d.h):d.w<d.h?(c=d.w/r,a=d.w,c*=t):d.h<d.w&&(a=d.h/t,c=d.h,a*=r);Nb=a;Ob=c;Y={w:a/r,h:c/t};l.style.width=a+"px";l.style.height=c+"px";ca&&(w.style.width=l.style.width,w.style.height=l.style.height,k.viewport(0,0,r,t))}),m.runEvent("gameResize","PointJS_initFullScale"),Da=!0)};this.system.exitFullScale=function(){Da&&(Da=!1,m.delEvent("gameResize","PointJS_initFullScale"),l.style.width=
ga+"px",l.style.height=ha+"px",ca&&(w.style.width=l.style.width,w.style.height=l.style.height,k.viewport(0,0,r,t)))};this.system.getWH=function(){return m.getWH()};var rc=[],sc=0,ta=function(a,b){var c=g.document.createElement(a);c.style.position="fixed";c.style.zIndex=l.style.zIndex+1;c.style.outline="none";c.style.left=b.x?b.x+"px":0;c.style.top=b.y?b.y+"px":0;b.w&&(c.style.width=b.w+"px");b.h&&(c.style.height=b.h+"px");c.style.backgroundColor=b.fillColor?b.fillColor:"";c.style.color=b.color?b.color:
"black";c.style.border=(b.strokeWidth||0)+"px solid "+(b.strokeColor||"");c.onmousedown=c.onmouseup=c.onmousemove=c.onclick=c.onkeydown=c.onkeypress=c.onkeyup=function(a){a.stopPropagation()};c.oncontextmenu=c.onselectstart=c.ondragstart=function(a){a.stopPropagation();return!1};this.w=b.w||0;this.h=b.h||0;this.el=c;this.id=sc+=1;this.visible=!0;if(b.events)this.onEvents(b.events);b.style&&this.setStyle(b.style);rc.push(this)};ta.prototype={onEvents:function(a){"function"==typeof a.keyPress&&(this.el.onkeypress=
function(b){b.stopPropagation();var c=!1;0!=b.which&&0!=b.charCode&&32<=b.which&&(c=String.fromCharCode(b.which));return a.keyPress(c)});"function"==typeof a.change&&(this.el.oninput=function(b){b.stopPropagation();a.change()});"function"==typeof a.mouseOver&&(this.el.onmouseover=function(b){b.stopPropagation();a.mouseOver()});"function"==typeof a.mouseOut&&(this.el.onmouseleave=function(b){b.stopPropagation();a.mouseOut()});"function"==typeof a.click&&(this.el.onclick=function(b){b.stopPropagation();
a.click()});"function"==typeof a.mousePress&&(this.el.onmousedown=function(b){b.stopPropagation();a.mousePress()});"function"==typeof a.mouseUp&&(this.el.onmouseup=function(b){b.stopPropagation();a.mouseUp()})},getID:function(){return this.id},move:function(a){this.el.style.left=parseInt(this.el.style.left)+a.x+"px";this.el.style.top=parseInt(this.el.style.top)+a.y+"px"},setPosition:function(a){this.el.style.left=a.x+"px";this.el.style.top=a.y+"px"},setPositionC:function(a){this.el.style.left=a.x-
this.w/2+"px";this.el.style.top=a.y-this.h/2+"px"},getPosition:function(){return e(parseInt(this.el.style.left),parseInt(this.el.style.top))},getPositionC:function(){return e(parseInt(this.el.style.left)+this.w/2,parseInt(this.el.style.top)+this.h/2)},setSize:function(a){this.w=a.w;this.h=a.h;this.el.style.width=a.w+"px";this.el.style.height=a.h+"px"},getSize:function(){return C(this.w,this.h)},setStyle:function(a){for(var b in a)this.el.style[b]=a[b]},setVisible:function(a){if(this.visible=a)return this.el.style.display=
"block";this.el.style.display="none"},isVisible:function(){return this.visible},setEnabled:function(a){this.enabled=a;this.el.disabled=!a},setText:function(a){this.el.innerHTML&&(this.el.innerHTML=a,this.w=parseInt(this.el.offsetWidth),this.h=parseInt(this.el.offsetHeight));this.el.value&&(this.el.value=a)},getText:function(){if(this.el.innerHTML)return this.el.innerHTML;this.el.value&&(this.el.value=text)}};this.GUI.newButton=function(a){var b=new ta("input",a);b.el.type="button";b.el.value=a.text?
a.text:"Button "+b.id;m.attach(b.el);return b};this.GUI.newInput=function(a){var b=new ta("input",a);b.el.type="text";b.el.value=a.text?a.text:"Button "+b.id;b.el.oncontextmenu=b.el.onselectstart=b.el.ondragstart=function(a){};m.attach(b.el);return b};this.GUI.newPanel=function(a){var b=new ta("div",a);b.el.innerHTML=a.text?a.text:"Panel "+b.id;m.attach(b.el);return b};this.GUI.newImage=function(a){var b=new ta("img",a);if(!a.file)return E("error in GUI.newImage : Where image file?");b.el.src=a.file;
m.attach(b.el);b.el.onload=function(){b.w||(b.w=parseInt(this.width));b.h||(b.h=parseInt(this.height))};return b};this.GUI.newHTML=function(a){var b=new ta("div",a);b.el.innerHTML=a.text?a.text.toString():"Your HTML Text";m.attach(b.el);m.addEvent("onload","getWH_HTMLPanel"+b.id,function(){b.w||(b.w=parseInt(b.el.offsetWidth));b.h||(b.h=parseInt(b.el.offsetHeight))});return b};var F=!1;this.actionControl.initActionControl=function(){q.touchControl.isTouchSupported()&&(F=!0,q.touchControl.initTouchControl());
q.mouseControl.initMouseControl();return this};this.actionControl.isPress=function(){return F?q.touchControl.isPress():q.mouseControl.isPress("LEFT")};this.actionControl.isDown=function(){return F?q.touchControl.isDown():q.mouseControl.isDown("LEFT")};this.actionControl.isUp=function(){return F?q.touchControl.isUp():q.mouseControl.isUp("LEFT")};this.actionControl.isInObject=function(a){return F?q.touchControl.isInObject(a):q.mouseControl.isInObject(a)};this.actionControl.isInStatic=function(a){return F?
q.touchControl.isInStatic(a):q.mouseControl.isInStatic(a)};this.actionControl.isInDynamic=function(a){return F?q.touchControl.isInDynamic(a):q.mouseControl.isInDynamic(a)};this.actionControl.isPeekObject=function(a){return F?q.touchControl.isPeekObject(a):q.mouseControl.isPeekObject("LEFT",a)};this.actionControl.isPeekStatic=function(a){return F?q.touchControl.isPeekStatic(a):q.mouseControl.isPeekStatic("LEFT",a)};this.actionControl.isPeekDynamic=function(a){return F?q.touchControl.isPeekDynamic(a):
q.mouseControl.isPeekDynamic("LEFT",a)};this.actionControl.getPosition=function(a){return F?q.touchControl.getPosition():q.mouseControl.getPosition()};this.actionControl.getPositionS=function(a){return F?q.touchControl.getPositionS():q.mouseControl.getPositionS()};this.actionControl.getMouse=function(){return q.mouseControl};this.actionControl.getTouch=function(){return F?q.touchControl:!1};this.actionControl.getActiveControl=function(){return F?q.touchControl:q.mouseControl};this.actionControl.getActiveControlName=
function(){return F?"touchControl":"mouseControl"};this.actionControl.getSpeed=function(){if(!F)return q.mouseControl.getSpeed()||q.touchControl.getSpeed()};var Pa={LEFT:37,RIGHT:39,UP:38,DOWN:40,SPACE:32,CTRL:17,SHIFT:16,ALT:18,ESC:27,ENTER:13,MINUS:189,PLUS:187,CAPS_LOCK:20,BACKSPACE:8,TAB:9,Q:81,W:87,E:69,R:82,T:84,Y:89,U:85,I:73,O:79,P:80,A:65,S:83,D:68,F:70,G:71,H:72,J:74,K:75,L:76,Z:90,X:88,V:86,B:66,N:78,M:77,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,C:67,9:57,F1:112,F2:113,F3:114,F4:115,
F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123},tc={37:"LEFT",39:"RIGHT",38:"UP",40:"DOWN",32:"SPACE",17:"CTRL",16:"SHIFT",18:"ALT",27:"ESC",13:"ENTER",189:"MINUS",187:"PLUS",20:"CAPS_LOCK",8:"BACKSPACE",9:"TAB",81:"Q",87:"W",69:"E",82:"R",84:"T",89:"Y",85:"U",73:"I",79:"O",80:"P",65:"A",83:"S",68:"D",70:"F",71:"G",72:"H",74:"J",75:"K",76:"L",90:"Z",88:"X",86:"V",66:"B",78:"N",77:"M",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",67:"C",57:"9",112:"F1",113:"F2",114:"F3",
115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12"},uc={8:!0,9:!0,13:!0,18:!0,16:!0,17:!0,27:!0,112:!0,113:!0,114:!0,115:!0,116:!0,117:!0,118:!0,119:!0,120:!0,121:!0,122:!0,123:!0};this.keyControl.getKeyList=function(){var a,b=[];for(a in Pa)b.push(a);return b};var ua={},Ea={},ma={},Fa=!1,Ga=!1,Qa=!1,vc=function(a){W(ma,function(a,c,d){1==a&&(d[c]=2)})};this.keyControl.isDown=function(a){return 1==ua[Pa[a]]};this.keyControl.isUp=function(a){return 1==Ea[Pa[a]]};this.keyControl.isPress=
function(a){return 1==ma[Pa[a]]};this.keyControl.getInputChar=function(){return Fa};this.keyControl.getInputKey=function(){return tc[Ga]};this.keyControl.setInputMode=function(a){Qa=a};this.keyControl.isInputMode=function(){return Qa};this.keyControl.exitKeyControl=function(){g.onkeydown=function(){};g.onkeypress=function(){};g.onkeyup=function(){};m.delEvent("postLoop","PointJS_clearAllKeyUp");ua={};Ea={};ma={};Qa=Ga=Fa=!1};this.keyControl.initKeyControl=function(){g.onkeydown=function(a){if(Qa)return Ga=
a.keyCode,uc[a.keyCode]?(a.preventDefault(),!1):!0;a.preventDefault();2!=ma[a.keyCode]&&(ma[a.keyCode]=1);ua[a.keyCode]=!0;return!1};g.onkeypress=function(a){var b=!1;0!=a.which&&0!=a.charCode&&32<=a.which&&(b=String.fromCharCode(a.which));Fa=b};g.onkeyup=function(a){a.preventDefault();1==ua[a.keyCode]&&(Ea[a.keyCode]=!0);ua[a.keyCode]=!1;delete ma[a.keyCode];return!1};m.addEvent("postLoop","PointJS_clearAllKeyUp",function(){Ea={};vc();Ga=Fa=!1});return this};var G=e(0,0),Ra=e(0,0);e(0,0);var Ha=
!0,qb="",Sa=!1,na=e(0,0),Ta=!1,rb={LEFT:1,RIGHT:3,MIDDLE:2},Ua={},Va={},Ia={},Ja=0,Qb=function(){Ua={};Va={};Ia={};Ja=0;Ta=!1},wc=function(){W(Ia,function(a,b,c){1==a&&(c[b]=2)})},Wa=function(a){var b=0,c=0;a&&(b=f.x,c=f.y);return e(b+G.x,c+G.y)};this.mouseControl.getPosition=function(){return Wa(1)};this.mouseControl.getPositionS=function(){return Wa()};this.mouseControl.setCursorImage=function(a){qb='url("'+a+'"), auto';g.document.body.style.cursor=qb};this.mouseControl.setVisible=function(a){!Ha&&
!a||Ha&&a||(Ha=1==a,g.document.body.style.cursor=Ha?qb:"none")};this.mouseControl.isVisible=function(){return Ha};this.mouseControl.isDown=function(a){return Ua[rb[a]]};this.mouseControl.isUp=function(a){return Va[rb[a]]};this.mouseControl.isPress=function(a){return 1==Ia[rb[a]]};this.mouseControl.isMove=function(){return Ta};this.mouseControl.isInStatic=function(a){var b=Wa(1);return b.x>=a.x&&b.x<=a.x+a.w&&b.y>=a.y&&b.y<=a.y+a.h};this.mouseControl.isInDynamic=function(a){return la(Wa(1),a)};this.mouseControl.isInObject=
function(a){return a.visible?a.angle?this.isInDynamic(a.getDynamicBox()):this.isInStatic(a.getStaticBox()):!1};this.mouseControl.isWheel=function(a){return"UP"==a&&0<Ja||"DOWN"==a&&0>Ja};var Rb=function(a){a.preventDefault();Ja=a.wheelDelta?a.wheelDelta:-a.detail;return!1},Xa=!1,Sb=function(){Xa&&(Sa=v(g.document.pointerLockElement)||v(g.document.mozPointerLockElement)?!0:!1)};this.mouseControl.initMouseLock=function(){m.addEvent("onload","initPointerLock",function(){Xa=l.requestPointerLock||l.mozRequestPointerLock||
!1;g.document.exitPointerLock=g.document.exitPointerLock||g.document.mozExitPointerLock||!1;"onpointerlockchange"in g.document?g.document.addEventListener("pointerlockchange",Sb,!1):"onmozpointerlockchange"in g.document&&g.document.addEventListener("mozpointerlockchange",Sb,!1);if(!Xa)return E("error in initMouseLock : not supported");Sa||(l.onclick=Xa)})};this.mouseControl.exitMouseLock=function(){g.document.exitPointerLock();l.onclick=function(){};na=e(0,0)};this.mouseControl.unlockMouse=function(){na=
e(0,0);g.document.exitPointerLock()};this.mouseControl.isMouseLock=function(){return Sa};this.mouseControl.getSpeed=function(){return e(na.x,na.y)};this.mouseControl.isPeekStatic=function(a,b){return this.isPress(a)?this.isInStatic(b):!1};this.mouseControl.isPeekDynamic=function(a,b){return this.isPress(a)?this.isInDynamic(b):!1};this.mouseControl.isPeekObject=function(a,b){return this.isPress(a)&&b.visible?this.isInDynamic(b.getDynamicBox()):!1};this.mouseControl.initMouseControl=function(){g.onmousemove=
function(a){a.preventDefault();a.stopPropagation();if(Sa){var b=a.movementY||a.mozMovementY||0;G.x+=a.movementX||a.mozMovementX||0;G.y+=b;return!1}G.x=a.pageX-ob.x;G.y=a.pageY-ob.y;Y&&(G.x/=Y.w,G.y/=Y.h);na.x=G.x-Ra.x;na.y=G.y-Ra.y;Ra.x=G.x;Ra.y=G.y;Ta=!0;return!1};g.onmousedown=function(a){a.preventDefault();a.stopPropagation();!a.which&&a.button&&(a.button&1?a.which=1:a.button&4?a.which=2:a.button&2&&(a.which=3));Ua[a.which]=!0;Ia[a.which]=1};g.onmouseup=function(a){a.preventDefault();a.stopPropagation();
!a.which&&a.button&&(a.button&1?a.which=1:a.button&4?a.which=2:a.button&2&&(a.which=3));Ua[a.which]=!1;Va[a.which]=!0;delete Ia[a.which]};g.oncontextmenu=g.onselectstart=g.ondragstart=function(){return!1};g.onmousewheel=Rb;g.addEventListener("DOMMouseScroll",Rb,!1);m.addEvent("postLoop","PointJS_clearAllMouseUp",function(){Va={};wc();Ja=0;Ta=!1;na=e(0,0)});return this};this.mouseControl.exitMouseControl=function(){g.onmousemove=g.onmousedown=g.onmouseup=g.oncontextmenu=g.onselectstart=g.ondragstart=
g.onmousewheel=function(){};m.delEvent("postLoop","PointJS_clearAllMouseUp");Qb()};var Ya=!1,Za=0,$a=0,J=0,K=0,z=e(0,0),Ka=e(0,0),ab=e(0,0);this.touchControl.isTouchSupported=function(){return!!("ontouchstart"in window)};this.touchControl.isMobileDevice=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(g.navigator.userAgent)};var Tb=function(){Ya=!1;$a=Za=0;z=e(0,0);K=J=0};this.touchControl.getFixPositionS=function(){return z.x||z.y?e(z.x,z.y):!1};this.touchControl.getFixPosition=
function(){return z.x||z.y?e(z.x+f.x,z.y+f.y):!1};this.touchControl.getRun=function(){var a=0,b=0;z.x&&z.x!=J&&(a=J-z.x);z.y&&z.y!=K&&(b=K-z.y);return e(a,b)};this.touchControl.getVector=function(){var a=0,b=0;z.x&&z.x!=J&&(a=J>z.x?1:-1);z.y&&z.y!=K&&(b=K>z.y?1:-1);return e(a,b)};this.touchControl.getSpeed=function(){return e(Ka.x,Ka.y)};this.touchControl.isDown=function(){return Ya};this.touchControl.isPress=function(){return 1==Za};this.touchControl.isUp=function(){return 1==$a};this.touchControl.getPosition=
function(){return e(J+f.x,K+f.y)};this.touchControl.getPositionS=function(){return e(J,K)};this.touchControl.isPeekStatic=function(a){return this.isPress()?this.isInStatic(a):!1};this.touchControl.isPeekDynamic=function(a){return this.isPress()?this.isInDynamic(a):!1};this.touchControl.isPeekObject=function(a){return this.isPress()&&a.visible?this.isInDynamic(a.getDynamicBox()):!1};this.touchControl.isInStatic=function(a){var b=this.getPosition();return b.x>=a.x&&b.x<=a.x+a.w&&b.y>=a.y&&b.y<=a.y+
a.h};this.touchControl.isInDynamic=function(a){return la(this.getPosition(),a)};this.touchControl.isInObject=function(a){return a.visible?a.angle?this.isInDynamic(a.getDynamicBox()):this.isInStatic(a.getStaticBox()):!1};this.touchControl.getTouches=function(){Eb("getTouches","isPress, isUp, isDown")};this.touchControl.initTouchControl=function(){g.addEventListener("touchstart",function(a){a.preventDefault();J=a.targetTouches[0].pageX;K=a.targetTouches[0].pageY;Y&&(J/=Y.w,K/=Y.h);z.x=J;z.y=K;Ya=!0;
Za=1;return!1},!1);g.addEventListener("touchmove",function(a){a.preventDefault();J=a.targetTouches[0].pageX;K=a.targetTouches[0].pageY;Y&&(J/=Y.w,K/=Y.h);Ka.x=J-ab.x;Ka.y=K-ab.y;return!1},!1);g.addEventListener("touchend",function(a){a.preventDefault();z.x=0;z.y=0;Ya=!1;$a=1;return!1},!1);q.touchControl.vibrate=function(a){if(g.navigator.vibrate)return g.navigator.vibrate(a);if(g.navigator.oVibrate)return g.navigator.oVibrate(a);if(g.navigator.mozVibrate)return g.navigator.mozVibrate(a);if(g.navigator.webkitVibrate)return g.navigator.webkitVibrate(a)};
m.addEvent("postLoop","PointJS_touchStopPress",function(){$a=Za=0;ab.x=J;ab.y=K;Ka=e(0,0)});return this};this.touchControl.exitTouchControl=function(){g.ontouchstart=g.ontouchmove=g.ontouchend=function(a){};m.delEvent("postLoop","PointJS_touchStopPress");Tb()};var bb=function(a,b,c,d){return"rgba("+a+", "+b+", "+c+", "+(d?d:1)+")"},Ub=function(a,b){a="#"==a[0]?a.substr(1,6):a;var c=parseInt(a.substr(0,2),16),d=parseInt(a.substr(2,2),16),n=parseInt(a.substr(4,2),16);return bb(c,d,n,b)};this.colors.rgb=
function(a,b,c){return bb(a,b,c,1)};this.colors.rgba=function(a,b,c,d){return bb(a,b,c,d)};this.colors.hex2rgb=function(a){return Ub(a,1)};this.colors.hex2rgba=function(a,b){return Ub(a,b)};this.colors.randomColor=function(a,b,c){return bb(ba(a,b),ba(a,b),ba(a,b),c||1)};var v=function(a){return"undefined"==typeof a||null==a?!1:!0},Mb=function(a){return v(a)&&""!==a&&0!==a?!0:!1},W=function(a,b){var c,d;for(c in a)if("undefined"!=typeof a[c]&&(d=b(a[c],c,a))&&"break"==d)break},x=function(a,b){if(a.length){var c,
d,n;c=0;for(d=a.length;c<d&&("undefined"==typeof a[c]||!(n=b(a[c],c,a,0<c?a[c-1]:a[a.length-1])||!1)||"break"!=n);c+=1);}};this.OOP.insertArrElement=function(a,b){var c=a[b];a.splice(b,1);return c};this.OOP.insertRandArrElement=function(a){var b=ba(0,a.length-1),c=a[b];a.splice(b,1);return c};this.OOP.drawEach=function(a,b){W(a,function(a){a&&a.draw&&a.isInCamera()&&(a.draw(),b&&b(a))})};this.OOP.drawArr=function(a,b){var c,d;c=0;for(d=a.length;c<d;c+=1)a[c]&&a[c].draw&&a[c].isInCamera()&&(a[c].draw(),
b&&b(a[c],c))};var Vb=function(a){a.length=0},xc=function(a,b){var c=!1,d=lb(),n=!1,e=new XMLHttpRequest,f=function(){e.open("GET",a,!0);e.send()};e.onreadystatechange=function(){4==e.readyState&&(b(e.responseText),c&&(n?setTimeout(f,n):f()))};this.start=function(){a=a.match(/\?/)?a+("&session_id="+d):a+("?session_id="+d);f();c=!0};this.setSID=function(a){d=a};this.setTime=function(a){n=a};this.stop=function(){c=!1};this.isActive=function(){return c}};this.OOP.readJSON=function(a,b){var c={},d=new XMLHttpRequest;
d.open("GET",a,!0);D.add();d.onreadystatechange=function(){4==d.readyState&&(c=d.responseText,c=JSON.parse(c),D.load(),b(c))};d.send()};this.OOP.toString=function(a,b){var c,d=0,n,e="[";for(c in a)a.hasOwnProperty(c)&&(n=a[c],"number"==typeof n&&b&&(n=parseInt(n)),e+=(0<d?", ":"")+c+" : "+n,d+=1);return e+"]"};this.OOP.sendGET=function(a,b,c){var d=new XMLHttpRequest,n="?";W(b,function(a,b){n+=b+"="+encodeURIComponent(a)+"&"});d.open("GET",a+n,!0);d.onreadystatechange=function(){4==d.readyState&&
c(d.responseText)};d.send()};this.OOP.sendPOST=function(a,b,c){var d=new XMLHttpRequest,n="";W(b,function(a,b){n+=b+"="+encodeURIComponent(a)+"&"});d.open("POST",a,!0);d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");d.onreadystatechange=function(){4==d.readyState&&c(d.responseText)};d.send(n)};this.OOP.sendPOSTScreen=function(a,b,c){var d=new XMLHttpRequest;b=b+"="+l.toDataURL("image/png");d.open("POST",a,!0);d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
d.onreadystatechange=function(){4==d.readyState&&c(d.responseText)};d.send(b)};this.OOP.isDef=v;this.OOP.isSet=Mb;this.OOP.forEach=W;this.OOP.forInt=function(a,b){var c,d;for(c=0;c<a&&(!(d=b(c))||"break"!=d);c+=1);};this.OOP.forXY=function(a,b,c){var d,n,e;for(n=0;n<b;n+=1)for(d=0;d<a&&(!(e=c(d,n))||"break"!=e);d+=1);};this.OOP.forArr=x;this.OOP.clearArr=Vb;this.OOP.fillArr=function(a,b,c){a.length=0;var d;for(d=0;d<b;d+=1)a.push(c(d,0<d?a[d-1]:!1));return a};this.OOP.delObject=function(a,b){var c,
d;c=0;for(d=a.length;c<d;c+=1)if(a[c].id==b.id)return a.splice(c,1),!0};this.OOP.randArrElement=function(a){return a[ba(0,a.length-1)]};this.OOP.readJSONSync=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send();a=b.responseText;return a=JSON.parse(a)};this.OOP.sendGETSync=function(a,b){var c=new XMLHttpRequest,d="?";W(b,function(a,b){d+=b+"="+encodeURIComponent(a)+"&"});c.open("GET",a+d,!1);c.send();return c.responseText};this.OOP.sendPOSTSync=function(a,b){var c=new XMLHttpRequest,d=
"";W(b,function(a,b){d+=b+"="+encodeURIComponent(a)+"&"});c.open("POST",a,!1);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");c.send(d);return c.responseText};this.OOP.newAJAXListener=function(a,b){return new xc(a,b)};this.OOP.runCode=function(a){(new Function("",a))()};var L={};this.OOP.includeSync=function(a,b){if(L[a])L[a].loaded&&!b&&L[a].code();else{L[a]={loaded:!1,code:function(){console.log(a+" is loading")}};var c=new XMLHttpRequest;c.open("GET",a,!1);c.send();L[a].code=
new Function("",c.responseText);L[a].loaded=!0;L[a].code()}};this.OOP.include=function(a,b,c){if(L[a])L[a].loaded&&!c&&L[a].code(),b&&b();else{L[a]={loaded:!1,code:function(){console.log(a+" is loading")}};var d=new XMLHttpRequest;d.open("GET",a,!0);d.onreadystatechange=function(){4==d.readyState&&(L[a].code=new Function("",d.responseText),L[a].loaded=!0,L[a].code(),b&&b())};d.send()}};this.OOP.clone=function(a,b){var c=new B({});W(a,function(a,b){"id"!=b&&(c[b]=a)});b&&(c.onClone=b,c.onClone(c),
delete c.onClone);return c};var va=60,M=Date.now(),cb=0,db=-1,Wb=M,ja={};this.game.setFPS=function(a){va=0<a?a:60};this.game.getFPS=function(){return va};this.game.getDT=function(a){a||(a=1E3);return cb/a};this.game.getTime=function(){return M};var Xb=function(){return g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||g.msRequestAnimationFrame||function(a){g.setTimeout(a,1E3/va)}},La=Xb(),Yb=function(){M=Date.now();if(Db){var a=e(0,0),b=
e(r,t);h.clearRect(a.x,a.y,b.x,b.y)}m.runEvent("preLoop")},Zb=function(){m.runEvent("postLoop");-1!=db&&(cb=M-db);db=M},H={func:function(){console.log('please, use a "setLoop" function.');La=function(){}},start:!1,end:!1,audio:!1,fps:!1,name:"NotLoop"},$b=function(){H.audio&&x(H.audio,function(a){a.stop()})};this.game.newLoop=function(a,b,c,d){"function"==typeof b?ja[a]={func:b,start:c||!1,end:d||!1,audio:!1,fps:!1,name:a}:da("error in newLoop : "+b+" is not a function")};this.game.newLoopFromClassObject=
function(a,b){if(!b.update)return da('error in newLoopFromClassObject : function "update" not found');ja[a]={func:b.update,start:b.entry||!1,end:b.exit||!1,audio:!1,fps:!1,name:a}};this.game.newLoopFromConstructor=function(a,b){var c=new b;if(!c.update)return da('error in newLoopFromConstructor : function "update" not found');ja[a]={func:c.update,start:c.entry||!1,end:c.exit||!1,audio:!1,fps:!1,name:a}};this.game.setLoopSound=function(a,b){var c;ja[a].audio||(ja[a].audio=[]);for(c=0;c<b.length;c+=
1)b[c].setNextPlay(b[c+1==b.length?0:c+1]),ja[a].audio.push(b[c])};this.game.setLoop=function(a){if(!ja[a])return da("setLoop : "+a+" is no a Loop");$b();Qb();ua={};Ea={};ma={};Ga=Fa=!1;Tb();sb(e(0,0));H.end&&H.end();H=ja[a];H.start&&H.start();H.audio&&H.audio[0].play()};var ac=function(){if(60>va){var a=1E3/va;try{M=Date.now(),M-Wb>a&&(Yb(),H.func(cb),Wb=M,Zb())}catch(b){Aa&&Oa(b),fb&&(Aa||Oa(b),da())}}else try{Yb(),H.func(cb),Zb()}catch(b){Aa&&Oa(b),fb&&(Aa||Oa(b),da())}La(ac)},bc=function(a){ka||
(ka=!0,va=a||60,La(ac))},da=function(a){if(!ka)return E(v(a)?a:"game is stop");ka=!1;$b();La=function(){E(v(a)?a:"game is stop")}};this.game.getWH=function(){return{w:r,h:t,w2:P,h2:Q}};this.game.getWH2=function(){return{w:r/2,h:t/2}};this.game.getResolution=function(){return Math.min(r/ga,t/ha)};this.game.startLoop=function(a,b){this.setLoop(a);this.start(b)};this.game.start=bc;this.game.stop=da;this.game.resume=function(a){ka||(H.audio&&H.audio[0].play(),E(a||"game is run"),La=Xb(),db=-1,bc())};
var yc=[],zc=0,oa=!1,ea=function(a,b){b.prototype=Object.create(a.prototype);b.prototype.constructor=b},B=function(a){this.type="BaseObject";this.id=zc+=1;this.x=a.x||0;this.y=a.y||0;this.w=a.w||1;this.h=a.h||1;this.ondraw=a.ondraw?a.ondraw:!1;this.parent=!1;this.children=[];this.fillColor=a.fillColor||!1;this.strokeColor=a.strokeColor||u.strokeStyle;this.strokeWidth=a.strokeWidth||0;this.angle=a.angle||0;this.alpha=v(a.alpha)?a.alpha:1;this.center=e(0,0);this.box={x:0,y:0,w:0,h:0};this.visible=v(a.visible)?
a.visible:!0;this.flip=e(0,0);this.setShadow(a);a.userData&&this.setUserData(a.userData);a.center&&this.setCenter(a.center);a.box&&this.setBox(a.box);a.size&&this.setSize(a.size);a.sizeC&&this.setSizeC(a.sizeC);a.position&&this.setPosition(a.position);a.positionC&&this.setPositionC(a.positionC);a.drawLoop&&(oa||(oa={},m.addEvent("postLoop","drawFrames",function(){oa[H.name]&&x(oa[H.name],function(a){a.draw()})})),oa[a.drawLoop]||(oa[a.drawLoop]=[]),oa[a.drawLoop].push(this));yc.push(this)};B.prototype=
{getID:function(){return this.id},getType:function(){return this.type},getParent:function(){return this.parent},addChild:function(a){a&&a.id!=this.id&&(a.parent=this,this.children.push(a),a.move(this.getPosition()),a.setPositionC(O(a.getPositionC(),this.getPositionC(),this.angle)),a.turn(this.angle))},delChild:function(a){a.parent=!1;var b,c;b=0;for(c=this.children.length;b<c;b+=1)if(this.children[b].id==a.id){this.children.splice(b,1);break}},delParent:function(){this.parent.delChild(this)},setBox:function(a){a.offset&&
(this.box.x=a.offset.x||0,this.box.y=a.offset.y||0);a.size&&(this.box.w=a.size.w||0,this.box.h=a.size.h||0)},isArrIntersect:function(a){var b,c;b=0;for(c=a.length;b<c;b+=1)if(a[b].id!=this.id&&this.isIntersect(a[b]))return a[b];return!1},isArrInside:function(a){var b,c;b=0;for(c=a.length;b<c;b+=1)if(this.isDynamicInside(a[b].getDynamicBox()))return a[b];return!1},getNearest:function(a){var b,c=0,d=!1,e;b=0;for(e=a.length;b<e;b+=1)if(this.id!=a[b].id){!1===d&&(d=this.getDistanceC(a[b].getPositionC()),
c=b);var f=this.getDistanceC(a[b].getPositionC());f<d&&(d=f,c=b)}return a[c]},setFlip:function(a,b){v(a)&&this.flip.x!=a&&(this.flip.x=a);v(b)&&this.flip.y!=b&&(this.flip.y=b)},setUserData:function(a){for(var b in a)v(this[b])||(this[b]=a[b])},setShadow:function(a){this.shadowColor=a.shadowColor||!1;this.shadowBlur=v(a.shadowBlur)?a.shadowBlur:3;this.shadowX=a.shadowX||0;this.shadowY=a.shadowY||0},getDynamicBox:function(){var a=this.getPosition(1);return 0==this.angle?[e(this.x+this.box.x,this.y+
this.box.y),e(this.x+this.box.x+this.w+this.box.w,this.y+this.box.y),e(this.x+this.box.x+this.w+this.box.w,this.y+this.box.y+this.h+this.box.h),e(this.x+this.box.x,this.y+this.box.y+this.h+this.box.h)]:[O(e(this.x+this.box.x,this.y+this.box.y),a,this.getAngle()),O(e(this.x+this.box.x+this.w+this.box.w,this.y+this.box.y),a,this.getAngle()),O(e(this.x+this.box.x+this.w+this.box.w,this.y+this.box.y+this.h+this.box.h),a,this.getAngle()),O(e(this.x+this.box.x,this.y+this.box.y+this.h+this.box.h),a,this.getAngle())]},
isDynamicIntersect:function(a){if(3>a.length)return!1;var b=this.getDynamicBox(),c,d;c=0;for(d=b.length;c<d;c+=1)if(la(b[c],a))return!0;c=0;for(d=a.length;c<d;c+=1)if(la(a[c],b))return!0;return!1},isIntersect:function(a){return a.visible?this.angle||a.angle?this.isDynamicIntersect(a.getDynamicBox()):this.isStaticIntersect(a.getStaticBox()):!1},isDynamicInside:function(a){if(3>a.length)return!1;var b=this.getDynamicBox(),c,d,e=0;c=0;for(d=b.length;c<d;c+=1)la(b[c],a)&&(e+=1);return e==b.length?!0:
!1},drawDynamicBox:function(a){N(this,1);h.shadowColor="transparent";wa(e(this.x+this.box.x,this.y+this.box.y),C(this.w+this.box.w,this.h+this.box.h),!1,a||"yellow",2);cc(e(this.x+this.w/2+this.center.x,this.y+this.h/2+this.center.y),10,a||"yellow");I()},drawStaticBox:function(a){h.shadowColor="transparent";wa(e(this.x+this.box.x,this.y+this.box.y),C(this.w+this.box.w,this.h+this.box.h),!1,a||"yellow",2);cc(e(this.x+this.w/2+this.center.x,this.y+this.h/2+this.center.y),10,a||"yellow")},isStaticIntersect:function(a){return this.y+
this.box.y+this.h+this.box.h>=a.y&&this.x+this.box.x+this.w+this.box.w>=a.x&&this.x+this.box.x<a.x+a.w&&this.y+this.box.y<a.y+a.h},getStaticBox:function(){return{x:this.x+this.box.x,y:this.y+this.box.y,w:this.w+this.box.w,h:this.h+this.box.h}},setAlpha:function(a){this.alpha!=a&&(this.alpha=0<=a?1>=a?a:1:0)},transparent:function(a){this.setAlpha(this.alpha+a)},getAlpha:function(){return this.alpha},rotate:function(a){this.setAngle(Math.atan2(a.y-this.getPosition(1).y,a.x-this.getPosition(1).x)*(180/
Math.PI))},setCenter:function(a){this.center=e(a.x,a.y)},nullCenter:function(a){a||(a=e(0,0));this.center=e(-this.w/2+a.x,-this.h/2+a.y)},getCenter:function(){return e(this.center.x,this.center.y)},getBox:function(){return this.box},move:function(a){this.prevPosition=this.getPosition();this.x+=a.x;this.y+=a.y},circling:function(a,b,c){v(this.circlingAnglePointJS)||(this.circlingAnglePointJS=0);this.x=a.x+b*Math.cos(A(this.circlingAnglePointJS));this.y=a.y+b*Math.sin(A(this.circlingAnglePointJS));
this.circlingAnglePointJS=360<this.circlingAnglePointJS?0:this.circlingAnglePointJS+c},circlingC:function(a,b,c){v(this.circlingAnglePointJS)||(this.circlingAnglePointJS=0);this.setPositionC(e(a.x+b*Math.cos(A(this.circlingAnglePointJS)),a.y+b*Math.sin(A(this.circlingAnglePointJS))));this.circlingAnglePointJS=360<this.circlingAnglePointJS?0:this.circlingAnglePointJS+c},motion:function(a,b,c){v(this.motionPercentPointJS)||(this.motionPercentPointJS=0);this.x=a.x+b.w*Math.cos(A(this.motionPercentPointJS));
this.y=a.y+b.h*Math.sin(A(this.motionPercentPointJS));this.motionPercentPointJS=360<this.motionPercentPointJS?0:this.motionPercentPointJS+c},motionC:function(a,b,c){v(this.motionPercentPointJS)||(this.motionPercentPointJS=0);this.setPositionC(e(a.x+b.w*Math.cos(A(this.motionPercentPointJS)),a.y+b.h*Math.sin(A(this.motionPercentPointJS))));this.motionPercentPointJS=360<this.motionPercentPointJS?0:this.motionPercentPointJS+c},scale:function(a){this.w*=a;this.h*=a},scaleC:function(a){var b=this.w,c=
this.h;this.scale(a);this.move(e(-((this.w-b)/2),-((this.h-c)/2)))},getPosition:function(a){return 1==a?e(this.x+(this.w/2+this.center.x),this.y+(this.h/2+this.center.y)):2==a?(a=e(this.x+this.w/2,this.y+this.h/2),this.angle&&(a=O(a,this.getPosition(1),this.angle)),e(a.x,a.y)):e(this.x,this.y)},getPositionC:function(){return e(this.x+(this.w/2+this.center.x),this.y+(this.h/2+this.center.y))},getPositionS:function(){return e(this.x+f.x,this.y+f.x)},getPositionCS:function(){return e(this.x+(this.w/
2+this.center.x)+f.x,this.y+(this.h/2+this.center.y)+f.y)},setPosition:function(a){this.getPosition();!1!==a.x&&(this.x=a.x);!1!==a.y&&(this.y=a.y)},setPositionS:function(a){this.getPosition();!1!==a.x&&(this.x=a.x+f.x);!1!==a.y&&(this.y=a.y+f.y)},setPositionC:function(a){this.getPosition();!1!==a.x&&(this.x=-(this.w/2+this.center.x)+a.x);!1!==a.y&&(this.y=-(this.h/2+this.center.y)+a.y)},setPositionCS:function(a){this.getPosition();!1!==a.x&&(this.x=-(this.w/2+this.center.x)+a.x+f.x);!1!==a.y&&(this.y=
-(this.h/2+this.center.y)+a.y+f.y)},getSize:function(){return C(this.w,this.h)},setSize:function(a){this.w=a.w;this.h=a.h},setSizeC:function(a){this.w=a.w;this.h=a.h;this.move(e(-(a.w/2),-(a.h/2)))},turn:function(a){this.angle+=a},rotateForAngle:function(a,b){0>this.angle&&(this.angle+=360);0>a&&(a+=360);var c=this.angle-a;180<c?c-=360:-180>c&&(c+=360);c>=-b-.5&&c<=b+.5?this.angle=a:c>b+.5?this.angle-=b:c<-b-.5&&(this.angle+=b)},rotateForPoint:function(a,b){var c=Ba(this.getPositionC(),a);this.rotateForAngle(c,
b)},rotateForObject:function(a,b){var c=Ba(this.getPositionC(),a.getPositionC());this.rotateForAngle(c,b)},moveTo:function(a,b){var c=A(Ba(this.getPosition(),a));this.prevPosition=this.getPosition();this.x+=b*Math.cos(c);this.y+=b*Math.sin(c)},moveToC:function(a,b){var c=A(Ba(this.getPositionC(),a));this.prevPosition=this.getPosition();this.x+=b*Math.cos(c);this.y+=b*Math.sin(c)},moveAngle:function(a,b){b=A(v(b)?b:this.angle);this.prevPosition=this.getPosition();this.x+=a*Math.cos(b);this.y+=a*Math.sin(b)},
moveTime:function(a,b){b=b||1;var c=this.getPosition();this.move(e((a.x-c.x)/b,(a.y-c.y)/b))},moveTimeC:function(a,b){b=b||1;var c=this.getPosition(1);this.move(e((a.x-c.x)/b,(a.y-c.y)/b))},getAngle:function(){return this.angle},setAngle:function(a){this.angle!=a&&(this.angle=a%360)},getDistance:function(a){return Math.sqrt(Math.pow(a.x-this.getPosition(2).x,2)+Math.pow(a.y-this.getPosition(2).y,2))},getDistanceC:function(a){return Math.sqrt(Math.pow(a.x-this.getPosition(1).x,2)+Math.pow(a.y-this.getPosition(1).y,
2))},setVisible:function(a){this.visible=1==a},isVisible:function(){return this.visible},isInCamera:function(){return this.angle?this.isInCameraDynamic():this.isInCameraStatic()},isInCameraStatic:function(){return this.x+this.w<f.x||this.x>f.x+r||this.y+this.h<f.y||this.y>f.y+t?!1:!0},isInCameraDynamic:function(){var a=this.getDynamicBox(),b=[e(f.x,f.y),e(f.x+r,f.y),e(f.x+r,f.y+t),e(f.x,f.y+t)],c,d,n=0;c=0;for(d=a.length;c<d;c+=1)la(a[c],b)&&(n+=1);return 0<n},onCollision:function(a){Eb("onCollision, onArrCollision",
"isIntersect, isArrIntersect")},onArrCollision:function(a){var b,c;b=0;for(c=a.length;b<c;b+=1)if(this.id!=a[b].id)this.onCollision(a[b])},draw:function(){}};this.game.newBaseObject=function(a){return new B(a)};var tb=function(a){B.call(this,a);this.type="TriangleObject"};ea(B,tb);tb.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),a=!0;Ma(this.x,this.y,[e(this.w/2,0),e(this.w,this.h),e(0,this.h)],this.fillColor,this.strokeWidth?
this.strokeColor:!1,this.strokeWidth);if(this.ondraw)this.ondraw();a&&I()}};this.game.newTriangleObject=function(a){return new tb(a)};var ub=function(a){B.call(this,a);this.type="RectObject"};ea(B,ub);ub.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),a=!0;wa(e(this.x,this.y),C(this.w,this.h),this.fillColor,this.strokeColor,this.strokeWidth);if(this.ondraw)this.ondraw();a&&I()}};this.game.newRectObject=function(a){return new ub(a)};
var vb=function(a){B.call(this,a);this.type="RoundRectObject";this.radius=a.radius||1};ea(B,vb);vb.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),a=!0;wb(e(this.x,this.y),C(this.w,this.h),this.radius,this.fillColor,this.strokeColor,this.strokeWidth);if(this.ondraw)this.ondraw();a&&I()}};this.game.newRoundRectObject=function(a){return new vb(a)};var pa=function(a){B.call(this,a);this.radius=a.radius||5;a.scale&&(this.radius*=a.scale);
this.w=2*this.radius;this.h=2*this.radius;this.type="CircleObject";a.positionC&&this.setPositionC(a.positionC)};ea(B,pa);pa.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),a=!0;xa(e(this.x,this.y),this.radius,this.fillColor,this.strokeColor,this.strokeWidth);if(this.ondraw)this.ondraw();a&&I()}};pa.prototype.scale=function(a){this.w*=a||0;this.h*=a||0;this.radius*=a?a/2:0};pa.prototype.scaleC=function(a){var b=this.w,c=this.h;
this.w*=a||0;this.h*=a||0;this.radius*=a;this.move(e(-((this.w-b)/2),-((this.h-c)/2)))};pa.prototype.getRadius=function(){return this.radius};pa.prototype.setRadius=function(a){a&&this.radius!=a&&(this.radius=a,this.w=2*a,this.h=2*a)};this.game.newCircleObject=function(a){return new pa(a)};var xb=function(a){this.file=a.file;this.w=a.w;this.h=a.h;this.countX=a.countX;this.countY=a.countY;this.fullW=this.countX*this.w;this.fullH=this.countY*this.h;this.cnv=g.document.createElement("canvas");this.cnv.width=
this.w;this.cnv.height=this.h;this.ctx=this.cnv.getContext("2d");this.loaded=!1;this.x=a.x||0;this.y=a.y||0;a=g.document.createElement("img");var b=this;a.onload=function(){b.ctx.drawImage(this,0,0,b.w,b.h);b.loaded=!0;D.load()};a.src=this.file;D.add()};xb.prototype.draw=function(){if(this.loaded){var a=-f.x+this.x,b=-f.y+this.y,c,d;for(d=0;d<this.countY;d+=1)if(!(this.y+d*this.h+this.h<f.y||this.y+d*this.h>f.y+t))for(c=0;c<this.countX;c+=1)this.x+c*this.w+this.w<f.x||this.x+c*this.w>f.x+r||h.drawImage(this.cnv,
a+c*this.w,b+d*this.h,this.w,this.h)}};xb.prototype.getSize=function(){return this.loaded?C(this.fullW,this.fullH):C()};this.game.newBackgroundObject=function(a){return new xb(a)};var yb=function(a){B.call(this,a);this.type="EllipsObject"};ea(B,yb);yb.prototype.draw=function(){if(this.visible&&this.alpha){N(this);xa(e(this.x,this.y),this.h/2,this.fillColor,this.strokeColor,this.strokeWidth);if(this.ondraw)this.ondraw();I()}};this.game.newEllipsObject=function(a){return new yb(a)};var Z=function(a){B.call(this,
a);this.type="TextObject";this.text=a.text||"TextObject";this.color=a.color||"";this.size=a.size||10;a.scale&&(this.size*=a.scale);this.font=a.font||"sans-serif";this.style=a.style||"";this.align="left";this.padding=a.padding||2;this.w=zb(this.text,this.style,this.size,this.font)+2*this.padding;this.h=this.size+2*this.padding;this.strokeColorText=a.strokeColorText||!1;this.strokeWidthText=a.strokeWidthText||!1;this.textDY=-this.size/7;a.positionC&&this.setPositionC(a.positionC)};ea(B,Z);Z.prototype.reStyle=
function(a){this.text=a.text||this.text;this.color=a.color||this.color;this.size=a.size||this.size;this.font=a.font||this.font;this.style=a.style||this.style;this.padding=a.padding||this.padding;this.w=zb(this.text,this.style,this.size,this.font)+2*this.padding;this.h=this.size+2*this.padding;this.strokeColorText=a.strokeColorText||this.strokeColorText;this.strokeWidthText=a.strokeWidthText||this.strokeWidthText;this.strokeColor=a.strokeColor||this.strokeColor;this.strokeWidth=a.strokeWidth||this.strokeWidth;
this.fillColor=a.fillColor||this.fillColor;this.textDY=-this.size/7};Z.prototype.setText=function(a){this.text!=a&&this.reStyle({text:a})};Z.prototype.getText=function(){return this.text};Z.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),a=!0;(this.fillColor||this.strokeColor)&&wa(e(this.x,this.y),C(this.w,this.h),this.fillColor,this.strokeColor,this.strokeWidth);qa(e(this.x+this.padding,this.textDY+this.y+this.padding),this.text,
this.color,this.size,this.font,this.style,this.align,this.strokeColorText,this.strokeWidthText);if(this.ondraw)this.ondraw();a&&I()}};Z.prototype.scale=function(a){this.reStyle({size:this.size*a})};Z.prototype.scaleC=function(a){var b=this.w,c=this.h;this.reStyle({size:this.size*a});this.move(e(-((this.w-b)/2),-((this.h-c)/2)))};Z.prototype.setSize=function(a){this.size!=a&&this.reStyle({size:a})};Z.prototype.setSizeC=function(a){this.size!=a&&(this.reStyle({size:a}),this.move(e(-a/2,-a/2)))};var zb=
function(a,b,c,d){var e=g.document.createElement("canvas").getContext("2d");e.font=b+c+"px "+d;return e.measureText(a).width};this.OOP.getTextWidth=function(a){return zb(a.text,a.style||"",a.size||10,a.font||"sans-serif")};this.game.newTextObject=function(a){return new Z(a)};var R=function(a){B.call(this,a);this.type="PolygonObject";this.points=[];this.dX=this.dY=0;var b=this;a.points&&x(a.points,function(a){b.addPoint(a)});this.pointColor=a.pointColor||!1};ea(B,R);R.prototype.addPoint=function(a){this.dY=
this.dX=0;var b=this;this.y+a.y<this.y&&(this.dY=Math.abs(this.y+a.y-this.y),x(this.points,function(a){a.y+=b.dY}));this.x+a.x<this.x&&(this.dX=Math.abs(this.x+a.x-this.x),b=this,x(this.points,function(a){a.x+=b.dX}));this.points.push(e(a.x+this.dX,a.y+this.dY));this.h=this.w=0;b=this;x(this.points,function(a){b.h+=b.y+a.y>b.y+b.h?a.y-b.h:0;b.w+=b.x+a.x>b.x+b.w?a.x-b.w:0})};R.prototype.delPoint=function(a){var b,c,d=this.getPoints();this.clearPoints();b=0;for(c=d.length;b<c;b+=1)b!=a&&this.addPoint(d[b])};
R.prototype.clearPoints=function(){this.points=[];this.count=0};R.prototype.getPoints=function(){return this.points};R.prototype.getCount=function(){return this.points.length};R.prototype.getPoint=function(a){return this.points[a]};R.prototype.scale=function(a){};R.prototype.drawDynamicBox=function(a){var b=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),b=!0;Ma(this.x,this.y,this.points,this.fillColor,a||"yellow",2,"red");b&&I()};R.prototype.getDynamicBox=function(){var a=[];if(this.angle){var b=
this.getPosition(1),c=this;x(this.points,function(d){a.push(O(sa(d,e(c.x,c.y)),b,c.getAngle()))})}else{var c=this;x(this.points,function(b){a.push(sa(b,e(c.x,c.y)))})}return a};R.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),a=!0;Ma(this.x,this.y,this.points,this.fillColor,this.strokeColor,this.strokeWidth,this.pointColor);if(this.ondraw)this.ondraw();a&&I()}};this.game.newPolygonObject=function(a){return new R(a)};var ra=function(a){B.call(this,
a);this.type="ImageObject";this.w=a.w||0;this.h=a.h||0;this.loaded=!1;this.file="";this.forOnLoad=a.onload||!1;dc(a.file,this,a.scale||1)};ea(B,ra);ra.prototype.draw=function(){if(this.visible&&this.alpha&&this.loaded){var a=!1;if(this.angle||1!=this.alpha||this.shadowColor||this.flip.x||this.flip.y)N(this),a=!0;ec(e(this.x,this.y),C(this.w,this.h),this.file);if(this.ondraw)this.ondraw();a&&I()}};ra.prototype.simpleDraw=function(a){if(this.loaded){var b=!1;if(this.angle||1!=this.alpha||this.shadowColor)N(this),
b=!0;ec(e(a.x,a.y),C(this.w,this.h),this.file);b&&I()}};ra.prototype.setImage=function(a,b){this.file!=a&&(v(p[a])?(this.file=a,b&&b()):(this.loaded=!1,this.origHeight=this.origWidth=0,this.forOnLoad=b||!1,dc(a,this)))};ra.prototype.getImage=function(){return this.file};ra.prototype.resize=function(a){if(!1!==a.w&&!1===a.h){var b=a.w/this.w;this.w=a.w;this.h*=b}else!1!==a.h&&!1===a.w?(b=a.h/this.h,this.h=a.h,this.w*=b):!1!==a.w&&!1!==a.h&&(this.w=a.w,this.h=a.h)};this.game.newImageObject=function(a){return new ra(a)};
var X=function(a){B.call(this,a);this.type="AnimationObject";this.frame=0;this.anim=a.animation;this.step=a.delay||10;this.toFrameStep=this.difStep=0;a.scale&&(this.w*=a.scale,this.h*=a.scale)};ea(B,X);X.prototype.draw=function(){if(this.visible&&this.alpha){var a=!1;if(this.angle||1!=this.alpha||this.flip.x||this.flip.y||this.shadowColor)N(this),a=!0;Ab(this.anim,e(this.x,this.y),C(this.w,this.h),this.frame);if(this.ondraw)this.ondraw();this.difStep>this.step?(this.frame=this.frame<this.anim.r?this.frame+
1:0,this.difStep=0):this.difStep+=1;a&&I()}};X.prototype.drawFrames=function(a,b,c){if(this.visible&&this.alpha){if(this.frame<a||this.frame>b)this.frame=a;c=!1;if(this.angle||1!=this.alpha||this.flip.x||this.flip.y||this.shadowColor)N(this),c=!0;Ab(this.anim,e(this.x,this.y),C(this.w,this.h),this.frame);if(this.ondraw)this.ondraw();this.difStep>this.step?(this.frame=this.frame<b?this.frame+1:a,this.difStep=0):this.difStep+=1;c&&I()}};X.prototype.drawFrame=function(a){if(this.visible&&this.alpha){var b=
!1;if(this.angle||1!=this.alpha||this.flip.x||this.flip.y||this.shadowColor)N(this),b=!0;Ab(this.anim,e(this.x,this.y),C(this.w,this.h),a);if(this.ondraw)this.ondraw();b&&I()}};X.prototype.drawToFrame=function(a){if(this.visible&&this.alpha){if(this.frame<a)this.toFrameStep=1;else if(this.frame>a)this.toFrameStep=-1;else{this.drawFrame(a);return}this.drawFrame(this.frame);if(this.ondraw)this.ondraw();this.difStep>this.step?(this.frame=this.frame<this.anim.r?this.frame+this.toFrameStep:0,this.difStep=
0):this.difStep+=1}};X.prototype.drawReverFrames=function(a,b){if(this.visible&&this.alpha){this.drawFrame(this.frame);if(this.ondraw)this.ondraw();this.difStep>this.step?(this.frame<=a?this.toFrameStep=1:this.frame>=b&&(this.toFrameStep=-1),this.frame=this.frame<=this.anim.r?this.frame+this.toFrameStep:0,this.difStep=0):this.difStep+=1}};X.prototype.setAnimation=function(a){this.anim=a};X.prototype.getAnimation=function(){return this.anim};X.prototype.setDelay=function(a){this.step=0<a?a:this.step};
X.prototype.getDelay=function(){return this.step};this.game.newAnimationObject=function(a){return new X(a)};var ya=function(a){this.file=a;this.loaded=!1;this.h=this.w=0;this.toLoad=[];var b=g.document.createElement("img"),c=this;b.onload=function(){c.loaded=!0;c.w=this.width;c.h=this.height;c.img=g.document.createElement("canvas");c.img.width=this.width;c.img.height=this.height;c.context=c.img.getContext("2d");c.context.drawImage(this,0,0);c.toLoad.length&&x(c.toLoad,function(a){a.func(c.context,
a.w,a.h,a.r)});D.load()};b.src=a;D.add()};ya.prototype.onContext=function(a){this.loaded?a(this.context,this.w,this.h,1):this.toLoad.push({w:this.w,h:this.h,r:1,func:a})};ya.prototype.getAnimation=function(a,b,c,d,e){var n=function(a,b,c,d,e,n){this.image=a;this.x=b;this.y=c;this.w=d;this.h=e;this.r=n?n-1:0};n.prototype={onContext:function(a){this.image.loaded?a(this.image.context,this.w,this.h,this.r):this.image.toLoad.push({w:this.w,h:this.h,r:this.r,func:a})},getImage:function(){return this.image},
getCount:function(){return this.r}};return new n(this,a,b,c,d,e)};var Bb=function(a,b){this.loaded=!0;this.w=a;this.h=b;this.img=g.document.createElement("canvas");this.img.width=a;this.img.height=b;this.context=this.img.getContext("2d")};Bb.prototype.onContext=ya.prototype.onContext;Bb.prototype.getAnimation=ya.prototype.getAnimation;this.tiles.newDrawImage=function(a,b){return new Bb(a,b)};this.tiles.newImage=function(a){return new ya(a)};this.tiles.newAnimation=function(a,b,c,d){return(new ya(a)).getAnimation(0,
0,b,c,d)};var Ab=function(a,b,c,d){a.image.loaded&&h.drawImage(a.image.img,a.x+a.w*d,a.y,a.w,a.h,b.x+-f.x,b.y+-f.y,c.w,c.h)},p={},dc=function(a,b,c){if(v(p[a])){b.loaded=!0;b.file=a;var d,e;if(b.w&&!b.h){var f=b.w/p[a].w;d=b.w;e=p[a].h*f}else!b.w&&b.h?(f=b.h/p[a].h,e=b.h,d=p[a].w*f):b.w&&b.h?(d=b.w,e=b.h):(d=p[a].w,e=p[a].h);c&&(d*=c,e*=c);b.w=d;b.h=e;b.forOnLoad&&b.forOnLoad()}else d=g.document.createElement("img"),d.onload=function(){p[a]={};p[a].loaded=!0;p[a].img=this;p[a].w=this.width;p[a].h=
this.height;if(v(b)){b.loaded=!0;var d,e;if(b.w&&!b.h){var n=b.w/p[a].w;d=b.w;e=p[a].h*n}else!b.w&&b.h?(n=b.h/p[a].h,e=b.h,d=p[a].w*n):b.w&&b.h?(d=b.w,e=b.h):(d=p[a].w,e=p[a].h);c&&(d*=c,e*=c);b.w=d;b.h=e;b.file=a;b.forOnLoad&&b.forOnLoad()}D.load()},d.src=a,D.add()},ec=function(a,b,c){c&&h.drawImage(p[c].img,0,0,p[c].w,p[c].h,a.x+-f.x,a.y+-f.y,b.w,b.h)},fc=function(a){this.type="Mesh";this.objs=[];this.x=a.x||0;this.y=a.y||0;this.angle=a.angle||0;this.count=0;var b=this;a.add&&x(a.add,function(a){b.add(a)});
this.angle&&this.setAngle(this.angle)};fc.prototype={getCount:function(){return this.count},getObjects:function(){return this.objs},add:function(a){this.count+=1;this.objs.push(a);a.offsetMesh=a.getPosition(1);a.turn(this.angle);a.setPositionC(e(this.x+a.offsetMesh.x,this.y+a.offsetMesh.y))},del:function(a){var b=this;x(this.objs,function(c){c.id==a.id&&(b.objs.splice(void 0,1),b.count--)})},draw:function(a){x(this.objs,function(a){a.draw()})},move:function(a){this.x+=a.x||0;this.y+=a.y||0;var b=
this;x(this.objs,function(a){a.setPositionC(e(b.x+a.offsetMesh.x,b.y+a.offsetMesh.y))})},turn:function(a){if(0!=a){this.angle%=360;this.angle+=a;var b=e(this.x,this.y),c=this;x(this.objs,function(d){d.turn(a);d.setPositionC(O(e(c.x+d.offsetMesh.x,c.y+d.offsetMesh.y),b,c.angle))})}},setAngle:function(a){if(a!=this.angle){this.angle=a%=360;var b=e(this.x,this.y),c=this;x(this.objs,function(d){d.setAngle(a);d.setPositionC(O(e(c.x+d.offsetMesh.x,c.y+d.offsetMesh.y),b,c.angle))})}},setPosition:function(a){if(this.x!=
a.x||this.y!=a.y){this.x=a.x||this.x;this.y=a.y||this.y;var b=this;x(this.objs,function(a){b.angle?a.setPositionC(O(e(b.x+a.offsetMesh.x,b.y+a.offsetMesh.y),e(b.x,b.y),b.angle)):a.setPositionC(e(b.x+a.offsetMesh.x,b.y+a.offsetMesh.y))})}},isDynamicIntersect:function(a){if(3>a.length)return!1;var b=!1;x(this.objs,function(c){if(c.isDynamicIntersect(a))return b=c});return b},isStaticIntersect:function(a){var b=!1;x(this.objs,function(c){if(c.isStaticIntersect(a))return b=c});return b},isIntersect:function(a){var b=
!1;x(this.objs,function(c){if(c.isIntersect(a))return b=c});return b}};this.game.newMesh=function(a){return new fc(a)};this.camera.setScale=function(a){};this.camera.circling=function(a,b,c){v(this.circlingAnglePointJS)||(this.circlingAnglePointJS=c);f.x=a.x+b*Math.cos(A(this.circlingAnglePointJS));f.y=a.y+b*Math.sin(A(this.circlingAnglePointJS));this.circlingAnglePointJS=360<=this.circlingAnglePointJS?c:this.circlingAnglePointJS+c};this.camera.circlingC=function(a,b,c){v(this.circlingAnglePointJS)||
(this.circlingAnglePointJS=c);f.x=-P+a.x+b*Math.cos(A(this.circlingAnglePointJS));f.y=-Q+a.y+b*Math.sin(A(this.circlingAnglePointJS));this.circlingAnglePointJS=360<=this.circlingAnglePointJS?c:this.circlingAnglePointJS+c};this.camera.motion=function(a,b,c){v(this.motionPercentPointJS)||(this.motionPercentPointJS=b);f.x=a.x+b.w*Math.cos(A(this.motionPercentPointJS));f.y=a.y+b.h*Math.sin(A(this.motionPercentPointJS));this.motionPercentPointJS=360<=this.motionPercentPointJS?b:this.motionPercentPointJS+
c};this.camera.motionC=function(a,b,c){v(this.motionPercentPointJS)||(this.motionPercentPointJS=b);this.setPositionC(e(a.x+b.w*Math.cos(A(this.motionPercentPointJS)),a.y+b.h*Math.sin(A(this.motionPercentPointJS))));this.motionPercentPointJS=360<=this.motionPercentPointJS?b:this.motionPercentPointJS+c};this.camera.follow=function(a){this.moveTimeC(a.getPositionC(),10)};this.camera.move=function(a){f.x+=a.x||0;f.y+=a.y||0};this.camera.moveTime=function(a,b){b=b||1;var c=e(f.x,f.y);this.move(e((a.x-
c.x)/b,(a.y-c.y)/b))};this.camera.moveTimeC=function(a,b){b=b||1;var c=e(f.x+P,f.y+Q);this.move(e((a.x-c.x)/b,(a.y-c.y)/b))};this.camera.setPosition=function(a){sb(e(!1!==a.x?a.x:f.x,!1!==a.y?a.y:f.y))};this.camera.setPositionC=function(a){sb(e(!1!==a.x?a.x-P:f.x,!1!==a.y?a.y-Q:f.y))};this.camera.getPosition=function(a){return a?e(f.x+P,f.y+Q):e(f.x,f.y)};this.camera.getPositionC=function(){return e(f.x+P,f.y+Q)};this.camera.getStaticBox=function(){return{x:f.x,y:f.y,w:f.x+r,h:f.y+t}};this.camera.getDynamicBox=
function(){return[e(f.x,f.y),e(f.x+r,f.y),e(f.x+r,f.y+t),e(f.x,f.y+t)]};var sb=function(a){f=e(a.x,a.y)},Fb=function(){h.mozImageSmoothingEnabled=Na;h.msImageSmoothingEnabled=Na;h.imageSmoothingEnabled=Na},I=function(a){h.restore();h.globalAlpha=u.globalAlpha;h.fillStyle="black";h.strokeStyle="black";Fb()},N=function(a,b){h.save();var c=a.getPositionC();a.angle&&(h.translate(-f.x+c.x,-f.y+c.y),h.rotate(A(a.angle)),h.translate(-c.x+f.x,-c.y+f.y));1!=a.alpha&&(h.globalAlpha=a.alpha);if(a.flip.x||a.flip.y)h.translate(-f.x+
c.x,-f.y+c.y),h.scale(a.flip.x?-1:1,a.flip.y?-1:1),h.translate(-c.x+f.x,-c.y+f.y);a.shadowColor&&(h.shadowBlur=a.shadowBlur,h.shadowColor=a.shadowColor,h.shadowOffsetX=a.shadowX,h.shadowOffsetY=a.shadowY);if("EllipsObject"==a.type&&!b){var c=a.w/2,d=a.h/2,n=e(-f.x+a.x,-f.y+a.y);h.translate(n.x,n.y);h.scale(c/d,1);h.translate(-n.x,-n.y)}};this.system.setContextSettings=function(a){h.save();for(var b in a)h[b]=a[b]};this.system.defaultSettings=function(){I()};this.game.clear=function(){var a=e(0,0),
b=e(r,t);h.clearRect(a.x,a.y,b.x,b.y)};this.game.fill=function(a){h.fillStyle=a;h.fillRect(0,0,r,t)};var Ma=function(a,b,c,d,n,g,k){if(!(3>c.length)){var Ca;if(d&&!(3>c.length)){h.fillStyle=d;d=-f.x+a;Ca=-f.y+b;var l;h.beginPath();h.moveTo(d+c[0].x,Ca+c[0].y);for(l=1;l<c.length;l+=1)h.lineTo(d+c[l].x,Ca+c[l].y);h.closePath();h.fill()}for(d=0;d<c.length;d+=1)Ca=d+1<c.length?d+1:0,n&&aa(sa(c[d],e(a,b)),sa(c[Ca],e(a,b)),n,g),k&&eb(sa(c[d],e(a,b)),k)}};this.brush.drawPolygon=function(a){var b=a.points||
[],c=a.fillColor||!1,d=a.strokeColor||!1,e=a.strokeWidth||1;a=a.pointColor||!1;if(!(3>b.length)){var g;if(c&&!(3>b.length)){h.fillStyle=c;c=-f.x;g=-f.y;var k;h.beginPath();h.moveTo(c+b[0].x,g+b[0].y);for(k=1;k<b.length;k+=1)h.lineTo(c+b[k].x,g+b[k].y);h.closePath();h.fill()}for(c=0;c<b.length;c+=1)g=c+1<b.length?c+1:0,d&&aa(b[c],b[g],d,e),a&&eb(b[c],a)}};this.brush.drawTriangle=function(a){Ma(a.x||0,a.y||0,[e(a.w/2,0),e(a.w,a.h),e(0,a.h)],a.fillColor,a.strokeColor,a.strokeWidth)};this.brush.drawTriangleS=
function(a){Ma(f.x+(a.x||0),f.y+(a.y||0),[e(a.w/2,0),e(a.w,a.h),e(0,a.h)],a.fillColor,a.strokeColor,a.strokeWidth)};var qa=function(a,b,c,d,e,g,k,l,m){h.textAlign=k;h.lineWidth=m;h.font=(g?g+" ":"")+d+"px "+e;d=-f.x;e=-f.y;c&&(h.fillStyle=c,h.fillText(b,d+a.x,e+a.y));l&&(h.strokeStyle=l,h.strokeText(b,d+a.x,e+a.y))};this.brush.drawMultiText=function(a){var b,c=a.text.split("\n");for(b=0;b<c.length;b+=1)qa(e(a.x,a.y+a.size*b),c[b],a.color||u.fillStyle,a.size||10,a.font||u.font,a.style||!1,a.align||
"left",a.strokeColor||!1,a.strokeWidth||2)};this.brush.drawMultiTextS=function(a){var b,c=a.text.split("\n"),d=a.size||10;for(b=0;b<c.length;b+=1)qa(e(a.x+f.x,a.y+f.y+d*b),c[b],a.color||u.fillStyle,d||10,a.font||u.font,a.style||!1,a.align||"left",a.strokeColor||!1,a.strokeWidth||2)};this.brush.drawText=function(a){qa(e(a.x||0,a.y||0),a.text,a.color||!1,a.size||10,a.font||u.font,a.style||!1,a.align||"left",a.strokeColor||!1,a.strokeWidth||2)};this.brush.drawTextS=function(a){qa(e((a.x||0)+f.x,(a.y||
0)+f.y),a.text,a.color||u.fillStyle,a.size||10,a.font||u.font,a.style||!1,a.align||"left",a.strokeColor||!1,a.strokeWidth||2)};this.brush.drawTextLines=function(a){if(a.lines){var b,c=a.size||10;for(b=0;b<a.lines.length;b+=1)qa(e(a.x,a.y+c*b),a.lines[b],a.color||u.fillStyle,c,a.font||u.font,a.style||!1,a.align||"left",a.strokeColor||!1,a.strokeWidth||2)}};this.brush.drawTextLinesS=function(a){if(a.lines){var b,c=a.size||10;for(b=0;b<a.lines.length;b+=1)qa(e(a.x+f.x,a.y+f.y+c*b),a.lines[b],a.color||
u.fillStyle,c,a.font||u.font,a.style||!1,a.align||"left",a.strokeColor||!1,a.strokeWidth||2)}};var cc=function(a,b,c){aa(e(a.x-b,a.y),e(a.x+b,a.y),c,2);aa(e(a.x,a.y-b),e(a.x,a.y+b),c,2)},wa=function(a,b,c,d,e){h.fillStyle=c;h.strokeStyle=d;h.lineWidth=e;d=-f.x+(e?e/2:0);var n=-f.y+(e?e/2:0);c&&h.fillRect(a.x+d,a.y+n,b.w,b.h);e&&h.strokeRect(a.x+d,a.y+n,b.w,b.h)};this.brush.drawRect=function(a){wa(e(a.x,a.y),C(a.w,a.h),a.fillColor||!1,a.strokeColor||u.strokeStyle,a.strokeWidth||!1)};this.brush.drawRectS=
function(a){wa(e(a.x+f.x,a.y+f.y),C(a.w,a.h),a.fillColor||!1,a.strokeColor||u.strokeStyle,a.strokeWidth||!1)};var eb=function(a,b){(h.fillStyle=b)&&h.fillRect(-f.x+a.x-1,-f.y+a.y-1,2,2)};this.brush.drawPoint=function(a){eb(e(a.x,a.y),a.fillColor||!1)};this.brush.drawPointS=function(a){eb(e(a.x+f.x,a.y+f.y),a.fillColor||!1)};var wb=function(a,b,c,d,e,g){h.fillStyle=d;h.strokeStyle=e;h.lineWidth=g;e=-f.x+a.x+(g?g/2:0);a=-f.y+a.y+(g?g/2:0);h.beginPath();h.moveTo(e+c,a);h.lineTo(e+b.w-c,a);h.quadraticCurveTo(e+
b.w,a,e+b.w,a+c);h.lineTo(e+b.w,a+b.h-c);h.quadraticCurveTo(e+b.w,a+b.h,e+b.w-c,a+b.h);h.lineTo(e+c,a+b.h);h.quadraticCurveTo(e,a+b.h,e,a+b.h-c);h.lineTo(e,a+c);h.quadraticCurveTo(e,a,e+c,a);h.closePath();d&&h.fill();g&&h.stroke()};this.brush.drawRoundRect=function(a){wb(e(a.x,a.y),C(a.w,a.h),a.radius||2,a.fillColor||!1,a.strokeColor||u.strokeStyle,a.strokeWidth||!1)};this.brush.drawRoundRectS=function(a){wb(e(f.x+a.x,f.y+a.y),C(a.w,a.h),a.radius||2,a.fillColor||!1,a.strokeColor||u.strokeStyle,a.strokeWidth||
!1)};var xa=function(a,b,c,d,e){h.fillStyle=c;h.strokeStyle=d;h.lineWidth=e;d=-f.x+b+(e?e/2:0);var n=-f.y+b+(e?e/2:0);h.beginPath();h.arc(a.x+d,a.y+n,b,0,2*Math.PI,!0);h.closePath();c&&h.fill();e&&h.stroke()};this.brush.drawCircle=function(a){xa(e(a.x,a.y),a.radius,a.fillColor||!1,a.strokeColor||u.strokeStyle,a.strokeWidth||!1)};this.brush.drawCircleS=function(a){xa(e(a.x+f.x,a.y+f.y),a.radius,a.fillColor||!1,a.strokeColor||u.strokeStyle,a.strokeWidth||!1)};var aa=function(a,b,c,d){h.strokeStyle=
c;h.lineWidth=d;c=-f.x;d=-f.y;h.beginPath();h.moveTo(c+a.x,d+a.y);h.lineTo(c+b.x,d+b.y);h.closePath();h.stroke()};this.brush.drawLineAngle=function(a){var b=O(e(a.x+a.length,a.y),e(a.x,a.y),a.angle);aa(e(a.x,a.y),e(b.x,b.y),a.strokeColor||u.strokeStyle,a.strokeWidth||1)};this.brush.drawLineAngleS=function(a){var b=O(e(f.x+a.x+a.length,f.y+a.y),e(f.x+a.x,f.y+a.y),a.angle);aa(e(f.x+a.x,f.y+a.y),e(b.x,b.y),a.strokeColor||u.strokeStyle,a.strokeWidth||1)};this.brush.drawLine=function(a){aa(e(a.x1,a.y1),
e(a.x1+a.x2,a.y1+a.y2),a.strokeColor||u.strokeStyle,a.strokeWidth||1)};this.brush.drawLineS=function(a){aa(e(f.x+a.x1,f.y+a.y1),e(f.x+a.x2,f.y+a.y2),a.strokeColor||u.strokeStyle,a.strokeWidth||1)};this.brush.drawLineA=function(a){aa(e(a.x1,a.y1),e(a.x2,a.y2),a.strokeColor||u.strokeStyle,a.strokeWidth||1)};this.brush.drawLineAS=function(a){aa(e(a.x1+f.x,a.y1+f.y),e(a.x2+f.x,a.y2+f.y),a.strokeColor||u.strokeStyle,a.strokeWidth||1)};this.brush.drawEllips=function(a){var b=a.w/2,c=a.h/2,d=e(-f.x+a.x,
-f.y+a.y);h.save();h.translate(d.x,d.y);h.scale(b/c,1);h.translate(-d.x,-d.y);xa(e(a.x,a.y),c,a.fillColor,a.strokeColor,a.strokeWidth);h.restore()};this.brush.drawEllipsS=function(a){var b=a.w/2,c=a.h/2,d=e(a.x,a.y);h.save();h.translate(d.x,d.y);h.scale(b/c,1);h.translate(-d.x,-d.y);xa(e(f.x+a.x,f.y+a.y),c,a.fillColor,a.strokeColor,a.strokeWidth);h.restore()};this.brush.drawImageS=function(a){if(a.file)if(v(p[a.file])){if(p[a.file].loaded){var b=a.x||0,c=a.y||0,d,e;if(a.w&&!a.h){var f=a.w/p[a.file].w;
d=a.w;e=p[a.file].h*f}else!a.w&&a.h?(f=a.h/p[a.file].h,e=a.h,d=p[a.file].w*f):a.w&&a.h?(d=a.w,e=a.h):(d=p[a.file].w,e=p[a.file].h);a.scale&&(d*=a.scale,e*=a.scale);h.drawImage(p[a.file].img,0,0,p[a.file].w,p[a.file].h,b,c,d,e)}}else p[a.file]={loaded:!1},b=g.document.createElement("img"),b.onload=function(){p[a.file].loaded=!0;p[a.file].img=this;p[a.file].w=this.width;p[a.file].h=this.height;D.load()},b.src=a.file,D.add()};this.brush.drawImage=function(a){if(a.file)if(v(p[a.file])){if(p[a.file].loaded){var b=
a.x||0,c=a.y||0,d,e;if(a.w&&!a.h){var k=a.w/p[a.file].w;d=a.w;e=p[a.file].h*k}else!a.w&&a.h?(k=a.h/p[a.file].h,e=a.h,d=p[a.file].w*k):a.w&&a.h?(d=a.w,e=a.h):(d=p[a.file].w,e=p[a.file].h);a.scale&&(d*=a.scale,e*=a.scale);h.drawImage(p[a.file].img,0,0,p[a.file].w,p[a.file].h,-f.x+b,-f.y+c,d,e)}}else p[a.file]={},p[a.file].loaded=!1,b=g.document.createElement("img"),b.onload=function(){p[a.file].loaded=!0;p[a.file].img=this;p[a.file].w=this.width;p[a.file].h=this.height;D.load()},b.src=a.file,D.add()};
this.brush.getPixelColor=function(a,b){var c=h.getImageData(a,b,1,1).data;return"rgb("+c[0]+", "+c[1]+", "+c[2]+")"};this.brush.setPixelColor=function(a,b,c){var d=h.createImageData(1,1);d.data[0]=c.r||d.data[0];d.data[1]=c.g||d.data[1];d.data[2]=c.b||d.data[2];d.data[3]=c.a||255;h.putImageData(d,a,b)};this.brush.onPixel=function(a,b,c){var d=h.getImageData(a,b,1,1),e={r:d.data[0],g:d.data[1],b:d.data[2],a:d.data[3]?d.data[3]:255};c(e);d.data[0]=e.r;d.data[1]=e.g;d.data[2]=e.b;d.data[3]=e.a;h.putImageData(d,
a,b)};this.brush.onPixels=function(a,b,c,d,e){c=h.getImageData(a,b,c,d);var f;d=0;for(f=c.data.length;d<f;d+=4){var g={r:c.data[d],g:c.data[d+1],b:c.data[d+2],a:c.data[d+3]?c.data[d+3]:255};e(g);c.data[d]=g.r;c.data[d+1]=g.g;c.data[d+2]=g.b;c.data[d+3]=g.a}h.putImageData(c,a,b)};this.brush.onRawPixels=function(a,b,c,d,e){c=h.getImageData(a,b,c,d);e(c.data,c.data.length);h.putImageData(c,a,b)};var S=g.AudioContext||g.webkitAudioContext||!1;(S=S?new S:!1)&&S.listener.setPosition(0,0,0);var T=function(a,
b){S||E('module "wAudio" is not supported! use a "audio"');this.vol=b&&1>=b&&0<b?b:1;this.loadPLay=this.nextPlay=this.loaded=this.playing=!1;this.pausedTime=this.duration=this.startTime=0;var c=this,d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(a){S.decodeAudioData(this.response,function(a){c.wABuffer=a;c.duration=c.wABuffer.duration;c.wAGain=S.createGain();c.wAGain.gain.value=c.vol;c.wAPanner=S.createPanner();c.wAPanner.setPosition(0,0,1);c.wAPanner.panningModel=
"equalpower";D.load();c.loaded=!0;c.loadPlay&&c.replay()},function(a){E("error in wAudio.newAudio : error decoding file",a)})};a?d.send():E("error in wAudio.newAudio : Where is file?");D.add()};T.prototype.play=function(a){if(!this.loaded)this.loadPlay=!0;else if(!this.playing){this.playing=!0;this.wASource=S.createBufferSource();this.wASource.buffer=this.wABuffer;this.wAListener=S.destination;this.wASource.connect(this.wAGain);this.wAGain.connect(this.wAPanner);this.wAPanner.connect(this.wAListener);
this.wASource.start(0,this.pausedTime,this.duration);this.startTime=S.currentTime;var b=this;this.wASource.onended=function(){b.playing=!1;b.startTime=0;b.pausedTime=0;b.nextPlay&&b.nextPlay.replay()}}};T.prototype.replay=function(a){this.loaded?(this.stop(),this.play()):this.loadPlay=!0};T.prototype.stop=function(){this.pause();this.pausedTime=this.startTime=0};T.prototype.pause=function(){if(this.playing){this.pausedTime=this.getProgress();this.playing=!1;this.wASource.stop(0);var a=this;this.wASource.onended=
function(){a.playing=!1}}};T.prototype.getProgress=function(){return this.playing?S.currentTime-this.startTime+this.pausedTime:this.pausedTime};T.prototype.playPause=function(){this.playing?this.pause():this.play()};T.prototype.setNextPlay=function(a){this.nextPlay=a};T.prototype.setVolume=function(a){this.vol=a&&1>=a&&0<a?a:this.vol;this.wAGain.gain.value=this.vol};T.prototype.getVolume=function(){return this.vol};T.prototype.setSide=function(a){this.side=a;this.wAPanner&&this.wAPanner.setPosition(this.side,
0,1-Math.abs(this.side))};T.prototype.getSide=function(){return this.side};this.wAudio.newAudio=function(a,b){return new T(a,b)};var fa=function(a,b){var c,d,e=g.document.createElement("audio");if("string"==typeof a){var f=g.document.createElement("source");f.src=a;e.appendChild(f)}else for(c=0,d=a.length;c<d;c+=1)f=g.document.createElement("source"),f.src=a[c],e.appendChild(f);this.vol=b&&1>=b&&0<b?b:1;this.playing=0;this.audio=e;this.nextPlay=this.loaded=!1;this.audio.volume=this.vol;var h=this;
this.audio.onloadeddata=function(){h.loaded=!0;D.load()};this.audio.onended=function(){h.playing=!1;h.nextPlay&&h.nextPlay.play()};this.audio.load();D.add()};fa.prototype.play=function(a){this.playing||(a&&(this.vol=a&&1>=a&&0<a?a:this.vol,this.audio.volume=this.vol),this.playing=!0,this.audio.play())};fa.prototype.replay=function(a){a&&this.setVolume(a);this.playing=!0;this.audio.currentTime=0;this.audio.play()};fa.prototype.stop=function(){this.playing&&(this.playing=!1,this.audio.pause(),this.audio.currentTime=
0)};fa.prototype.pause=function(){this.playing&&(this.playing=!1,this.audio.pause())};fa.prototype.playPause=function(){this.playing?this.pause():this.play()};fa.prototype.setNextPlay=function(a){this.nextPlay=a};fa.prototype.setVolume=function(a){this.vol=a&&1>=a&&0<a?a:this.vol;this.audio.volume=this.vol};fa.prototype.getVolume=function(){return this.vol};this.audio.newAudio=function(a,b){return new fa(a,b)};this.dialogs.openLine=function(a,b){q.game.stop();var c=g.document.createElement("input");
c.type="text";c.style.position="fixed";c.style.border="none";c.style.zIndex=l.style.zIndex+1;c.style.outline="none";c.style.backgroundColor=a.fillColor||"white";c.style.color=a.color||"black";c.style.top=(a.y?a.y>>0:0)+"px";c.style.left=(a.x?a.x>>0:0)+"px";c.style.width=(a.w?a.w>>0:0)+"px";c.style.fontSize=(a.size?a.size>>0:10)+"px";c.onclick=function(a){a.stopPropagation()};c.onkeydown=function(a){a.stopPropagation();if(27==a.keyCode||13==a.keyCode)a=c.value.trim(),"function"==typeof b&&b(""!=a?
a:!1),g.document.body.removeChild(c),q.game.resume()};m.attach(c);c.focus()};this.dialogs.openArea=function(a,b){q.game.stop();var c=g.document.createElement("textarea");c.style.position="fixed";c.style.border="none";c.style.zIndex=l.style.zIndex+1;c.style.overflowY="scroll";c.style.outline="none";c.style.backgroundColor=a.fillColor||"white";c.style.color=a.color||"black";c.style.top=(a.y?a.y>>0:0)+"px";c.style.left=(a.x?a.x>>0:0)+"px";c.style.width=(a.w?a.w>>0:0)+"px";c.style.height=(a.h?a.h>>0:
0)+"px";c.style.fontSize=(a.size?a.size>>0:10)+"px";c.style.maxWidth=(a.w?a.w>>0:0)+"px";c.style.maxHeight=(a.h?a.h>>0:0)+"px";c.onclick=function(a){a.stopPropagation()};c.onkeydown=function(a){a.stopPropagation();27==a.keyCode&&(a=c.value.trim(),"function"==typeof b&&b(""!=a?a:!1),g.document.body.removeChild(c),q.game.resume())};m.attach(c);c.focus()};this.dialogs.openTouchLine=function(a,b,c){q.game.stop();q.touchControl.exitTouchControl();var d=g.document.createElement("input");d.type="text";d.style.position=
"fixed";d.style.border="none";d.style.zIndex=l.style.zIndex+1;d.style.outline="none";d.style.backgroundColor=a.fillColor||"white";d.style.color=a.color||"black";d.style.top=(a.y?a.y>>0:0)+"px";d.style.left=(a.x?a.x>>0:0)+"px";d.style.width=(a.w?a.w>>0:0)+"px";d.style.fontSize=(a.size?a.size>>0:10)+"px";var e=g.document.createElement("div");e.style.padding=(b.padding||10)+"px";e.align="center";e.style.position="fixed";e.style.border="none";e.style.zIndex=l.style.zIndex+1;e.style.backgroundColor=b.fillColor||
"white";e.style.color=b.color||"black";e.innerHTML=b.text||"OK";e.style.top=(b.y?b.y>>0:0)+"px";e.style.left=(b.x?b.x>>0:0)+"px";b.w&&(e.style.width=(b.w>>0)+"px");b.h&&(e.style.height=(b.h>>0)+"px");e.style.fontSize=(b.size?b.size>>0:10)+"px";e.addEventListener("touchstart",function(a){a.preventDefault();a.stopPropagation();q.touchControl.initTouchControl();a=d.value.trim();"function"==typeof c&&c(""!=a?a:!1);g.document.body.removeChild(d);g.document.body.removeChild(e);q.game.resume()},!0);m.attach(d);
m.attach(e);d.focus()};var D={count:0,loaded:0,errored:0,add:function(){this.count+=1},load:function(){this.loaded+=1},error:function(){this.errored+=1}};this.resources.isLoaded=function(){return D.count==D.loaded};this.resources.getProgress=function(){return Math.ceil(D.loaded/D.count*100)};this.levels.forStringArray=function(a,b){var c=a.offset||e(0,0);x(a.source,function(d,e){x(d,function(d,f){" "!=d&&b(d,c.x+a.w*f,c.y+a.h*e,a.w,a.h)})})};var Ac=function(a){var b;"RectObject"==a.type?b=q.game.newRectObject({}):
"CircleObject"==a.type?b=q.game.newCircleObject({}):"RoundRectObject"==a.type?b=q.game.newRoundRectObject({}):"TextObject"==a.type?b=q.game.newTextObject({}):"EllipsObject"==a.type?b=q.game.newEllipsObject({}):"ImageObject"==a.type?b=q.game.newImageObject({}):"TriangleObject"==a.type?b=q.game.newTriangleObject({}):"AnimationObject"==a.type&&(b=q.game.newAnimationObject({}));b.name="";W(a,function(a,d){"id"!=d&&(b[d]=a)});return b},gc=function(a){var b=[];a=JSON.parse(a);x(a,function(a){var c=Ac(a);
c.name=a.name;b.push(c)});return b},hc=function(a,b){var c=[],d;a&&"json"==b&&(c=gc(a),d=a);this.reload=function(){c=gc(d)};this.clear=function(){Vb(c)};this.add=function(a){c.push(a)};this.del=function(a){x(c,function(b,d){if(a.id==b.id)return c.splice(d,1),"break"})};this.delById=function(a){c.splice(a,1)};this.getObjects=function(){return c};this.getObjectByName=function(a){var b,d;b=0;for(d=c.length;b<d;b+=1)if(c[b].name==a)return c[b];return!1};this.getObjectById=function(a){var b,d;b=0;for(d=
c.length;b<d;b+=1)if(c[b].id==a)return c[b];return!1};this.draw=function(a){x(c,function(b){a&&a(b);b.draw()})};this.getLevelAsJSON=function(){if(!c.length)return"";var a="[";x(c,function(b,c){a+="{";W(b,function(b,c){"function"!=typeof b&&(a+='"'+c+'":'+JSON.stringify(b)+",")});a=a.substr(0,a.length-1)+"},"});a=a.substr(0,a.length-1);return a+"]"}};this.levels.newLevelFromJSON=function(a){return new hc(a,"json")};this.levels.newEmptyLevel=function(a){return new hc(!1)};var ic=0,jc=0,Cb=0;this.system.initFPSCheck=
function(){m.addEvent("postLoop","fpsCheckUpdate",function(){Cb+=1;1E3<=M-jc&&(ic=Cb,Cb=0,jc=M)})};this.system.getFPS=function(){return ic};this.OOP.newRever=function(a,b,c){var d=function(a,b,c){this.min=a;this.max=b;this.step=c;this.value=a;this.to=c};d.prototype={update:function(){var a=this.value;this.value<=this.min?this.to=this.step:this.value>=this.max&&(this.to=-this.step);this.value+=this.to;return a},getValue:function(){return this.value},setValue:function(a){this.value=parseFloat(a)},setStep:function(a){this.step=
a},getStep:function(){return this.step}};return new d(a,b,c)};var kc={};this.OOP.once=function(a,b){kc[a]||(kc[a]=!0,b())};this.OOP.newTimer=function(a,b){if(0>=a)return da("error in system.newTimer : variable < 0, Timer is not created");var c={time:0<a?a:1E3,func:b,startTime:!1,ending:!1,start:function(){this.ending||this.startTime||(this.startTime=M)},run:function(){!this.ending&&this.startTime&&M-this.startTime>=this.time&&(this.func(),this.ending=!0)},end:function(){this.ending||(this.ending=
!0,this.func())},restart:function(a){this.startTime||this.start();if(this.ending){if(a&&0>=a)return da("error in Timer.restart : variable < 0");a&&(this.time=a);this.ending=!1;this.startTime=M}},stop:function(){this.ending||(this.ending=!0)}};m.addEvent("postLoop","timer"+ba(-100,100)*ba(-100,100)+M,function(){c.run()});return c};this.memory.local={storage:g.localStorage,clear:function(){this.storage.clear()},save:function(a,b){this.storage.setItem(a,b)},saveAsObject:function(a,b){var c=JSON.stringify(b);
this.storage.setItem(a,c)},loadAsObject:function(a){return JSON.parse(this.storage.getItem(a))},load:function(a){return this.storage.getItem(a)},loadAsNumber:function(a){return parseFloat(this.storage.getItem(a))}};this.memory.temp={values:{},save:function(a,b){this.values[a]=b},load:function(a){return this.values[a]},loadAsNumber:function(a){return parseFloat(this.values[a])}};g.onload=function(){for(var a in u)h[a]=u[a];h.save();m.runEvent("onload");m.loaded=!0;return!1};g.onblur=function(){if(ka)return m.runEvent("gameBlur"),
!1};g.onfocus=function(){if(!ka)return g.document.activeElement.blur(),g.focus(),m.runEvent("gameFocus"),!1};g.onresize=function(){m.runEvent("gameResize");h.textBaseline=u.textBaseline;return!1};g.onclick=function(){g.document.activeElement.blur();g.focus()};if("undefined"!==typeof POINTJS_LOADED_DOM_IGNORE)g.onload()};
module.exports.PointJS = PointJS;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const PointJS = __webpack_require__(0).PointJS;
const pjs = new PointJS('2D', 900, 390, {
    backgroundColor: 'yellow',
});
const game = pjs.game;
//pjs.system.initFullScreen();
const log = pjs.system.log;
const point = pjs.vector.point;
const cam = pjs.camera;
const brush = pjs.brush;
const OOP = pjs.OOP;
const math = pjs.math;
// const mouse = pjs.mouseControl.initMouseControl();
const key = pjs.keyControl.initKeyControl();
// key.initKeyControl();
const width = game.getWH().w;
const height = game.getWH().h;
const r = game.getResolution();



exports.constObj = {
    pjs: pjs,
    game: game
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const app = __webpack_require__(2);
const man = __webpack_require__(3).man;

const zombies = __webpack_require__(4).zombies;
const constObj = __webpack_require__(1).constObj;
const PointJS = __webpack_require__(0).PointJS;



//pjs.system.initFullScreen();
const log = constObj.pjs.system.log;

const point = constObj.pjs.vector.point;
const cam = constObj.pjs.camera;
const brush = constObj.pjs.brush;
const OOP = constObj.pjs.OOP;
const math = constObj.pjs.math;
// const mouse = pjs.mouseControl.initMouseControl();
const key = constObj.pjs.keyControl.initKeyControl();
// key.initKeyControl();

const width = constObj.game.getWH().w;
const height = constObj.game.getWH().h;
const r = constObj.game.getResolution();

constObj.pjs.system.setTitle('My mega game');


// *** Objects like a man or zombie ***
const backgr = constObj.game.newImageObject({
    file: 'img/bg2_wide.jpg',
    scale: 1.4,
});

// *** ***

const Game = function () {

    this.update = function () {
        constObj.game.clear();
        backgr.draw();
        man.drawManElements();
        man.drawStaticBox();
        zombies.spawner.restart();
        zombies.logic();

        if (key.isDown('RIGHT')) {
            cam.move(point(.5, 0));
            man.move(point(.5, 0));

        };
        if (key.isDown('SPACE')) {
            man.shooting();
        };
    };
    this.entry = function () {
        log(man);
        log('start!');
    };
    this.exit = function () {
        log('End!');
    }
};

constObj.game.newLoopFromClassObject('1', new Game());
constObj.game.startLoop('1');




// game.newLoopFromConstructor('game_one', function () {
//     let back = game.newImageObject({
//         file: 'img/bg2_wide.jpg',
//         scale: 1.4,
//     });

//     const man = game.newAnimationObject({
//         animation: pjs.tiles.newAnimation('img/sprites/human_114_8.png', 114, 114, 8),
//         w: 114,
//         h: 114,
//         x: 120,
//         y: 220,
//         delay: 10,
//         scale: 1.2,
//         onload: function () {
//             console.log('hello i am a onload')
//         }
//     });


//     man.drawName = function () {
//         brush.drawText({
//             x: this.x + this.w / 2 + 10,
//             y: this.y - 20,
//             text: this.name,
//             color: '#FFF',
//             size: '20',
//             align: 'center',
//         });
//     };

//     const zombies = [];

//     let timer = OOP.newTimer(3000, function () {
//         zombies.push(game.newAnimationObject({
//             animation: pjs.tiles.newAnimation('img/sprites/zombie_75_115_10.png', 73.72, 115, 10),
//             w: 73.65,
//             h: 115,
//             x: math.random(320, 1280),
//             y: 220,
//             delay: 10,
//             scale: 1.2,
//         }));
//     });


//     this.update = function () {
//         game.clear();
//         back.draw();
//         man.draw();
//         man.drawName();
//         timer.restart();
//         OOP.forArr(zombies, function (el) {
//             el.draw();
//             el.move(point(-1,0));
//         });


//         if (key.isDown('RIGHT')) {
//             cam.move(point(.5, 0));
//             man.move(point(.5, 0));

//         }
//     };

//     this.entry = function () {
//         log('lets start!');
//         timer.start();
//     };



//     pjs.OOP.drawArr(arr);

// if (mouse.isDown('LEFT')) {
//     createRect()
// }



// if (mouse.isInObject(man)) {
//     man.drawStaticBox('red');
// }

// if (man.isIntersect(zombies)) {
//     man.drawStaticBox('blue');
// }
// });

// game.startLoop('game_one');

// const rect = game.newRectObject( {
//     positionC: point(100,100),
//     w: 50, h:50,
//     fillColor: "red",
// });

// rect.control = function() {
//     if (key.isDown('RIGHT')) {
//         this.move(point(1,0));
//     }
//     if (key.isDown('LEFT')) {
//         this.move(point(-1,0));
//     }
//     if (key.isDown('UP')) {
//         this.y--;
//     }
//     if (key.isDown('DOWN')) {
//         this.y++;
//     }
// };
// console.log(key.getKeyList());




//exports.app = app;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const PointJS = __webpack_require__(0).PointJS;
const constObj = __webpack_require__(1).constObj;

const man = constObj.game.newAnimationObject({
    animation: constObj.pjs.tiles.newAnimation('img/sprites/human_114_8.png', 114, 114, 8),
    w: 114,
    h: 114,
    x: 120,
    y: 240,
    delay: 10,
    scale: 1,
    // onload: function () {
    //     console.log('hello i am a onload');
    // },
});

man.name = "Charlie";
man.drawName = function () {
    constObj.pjs.brush.drawText({
        x: this.x + this.w / 2 + 10,
        y: this.y - 20,
        text: this.name,
        color: '#FFF',
        size: '20',
        align: 'center',
    });
};

man.drawGun = function () {
    constObj.pjs.brush.drawImage({
        file: "img/gun1.png",
        x: this.x + this.w / 2 + 40,
        y: this.y + 45,
    });
};

const bullets = [];

man.shooting = function () {
    console.log('shooting');
    constObj.pjs.brush.drawRect({
        x: 200,
        y: 200,
        w: 240,
        h: 200,
        color: "black"
    });
};

man.drawManElements = function () {
    man.draw();
    man.drawName();
    man.drawGun();
}

exports.man = man;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const PointJS = __webpack_require__(0).PointJS;
const constObj = __webpack_require__(1).constObj;
const man = __webpack_require__(3).man;

const point = constObj.pjs.vector.point;

const zombieDead = constObj.pjs.tiles.newAnimation('img/sprites/zombie_75_115_1_dead.png', 184, 115, 1);

const zombies = [];
zombies.spawner = constObj.pjs.OOP.newTimer(1000, function () {
    zombies.push(constObj.game.newAnimationObject({
        animation: constObj.pjs.tiles.newAnimation('img/sprites/zombie_75_115_10.png', 73.72, 115, 10),
        w: 73.65,
        h: 115,
        x: constObj.pjs.math.random(man.getPosition().x + 320, man.getPosition().x + 850), // x 1280
        y: 240,
        delay: 10,
        scale: 1,
    }));
});


zombies.logic = function () {
    return constObj.pjs.OOP.forArr(zombies, function (zombie) {

        if (!zombie.flag) {
            zombie.draw();
            zombie.move(point(-1, 0));
        } else {
            zombie.setAnimation(zombieDead);
            zombie.setFlip(1, 0);
            zombie.move(point(0, 0));
            zombie.y = 285;
            zombie.draw();
        }
        zombie.drawStaticBox();
        if (man.isStaticIntersect(zombie.getStaticBox())) {
            zombie.flag = true;
        }

    });
};

exports.zombies = zombies;


/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map