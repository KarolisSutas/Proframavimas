/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Inv.js":
/*!********************!*\
  !*** ./src/Inv.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invoice)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
console.log('Sąskaita');
fetch('https://in3.dev/inv/').then(function (res) {
  return res.json();
}).then(function (data) {
  var saskaita = new Invoice(data);
  saskaita.render();
  document.querySelector('.konteineris').style.display = 'flex';
  document.querySelector('#pirma').style.display = 'flex';
  document.querySelector('#antra').style.display = 'flex';
});
var Invoice = /*#__PURE__*/function () {
  function Invoice(data) {
    _classCallCheck(this, Invoice);
    this.data = data;
    this.items = data.items;
    this.shippingPrice = data.shippingPrice;
  }
  return _createClass(Invoice, [{
    key: "render",
    value: function render() {
      this.renderNumber();
      this.renderDate();
      this.renderSeller();
      this.renderBuyer();
      this.renderItems();
      this.renderTransport();
      this.countTotal();
      document.querySelector('.konteineris').style.display = 'flex';
      document.querySelector('#pirma').style.display = 'flex';
      document.querySelector('#antra').style.display = 'flex';
    }
  }, {
    key: "renderNumber",
    value: function renderNumber() {
      document.querySelector('#number').innerHTML = "Serija: ".concat(this.data.number);
    }
  }, {
    key: "renderDate",
    value: function renderDate() {
      document.querySelector('#date').innerHTML = "".concat(this.data.date);
    }
  }, {
    key: "renderSeller",
    value: function renderSeller() {
      var seller = this.data.company.seller;
      document.querySelector('#seller').innerHTML = "\n          <b>PARDAV\u0116JAS</b><br><br> \n          <b>".concat(seller.name, "</b><br>\n          El. pa\u0161tas: ").concat(seller.email, "<br>\n          Tel. Nr.: ").concat(seller.phone, "<br>\n          Adresas: ").concat(seller.address, "<br>\n          \u012Emon\u0117s kodas: ").concat(seller.code, "<br>\n          PVM mok\u0117tojo kodas: ").concat(seller.vat);
    }
  }, {
    key: "renderBuyer",
    value: function renderBuyer() {
      var buyer = this.data.company.buyer;
      document.querySelector('#buyer').innerHTML = "\n          <b>PIRK\u0116JAS</b><br><br> \n          <b>".concat(buyer.name, "</b><br>\n          El. pa\u0161tas: ").concat(buyer.email, "<br>\n          Tel. Nr.: ").concat(buyer.phone, "<br>\n          Adresas: ").concat(buyer.address, "<br>\n          \u012Emon\u0117s kodas: ").concat(buyer.code, "<br>\n          PVM mok\u0117tojo kodas: ").concat(buyer.vat, "<br><br><br><br><br>\n          <b>Apmok\u0117ti iki: ").concat(this.data.due_date, "</b>");
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var tbody = document.querySelector('tbody');
      var template = document.querySelector('[data-items-content]');
      tbody.innerHTML = '';
      this.items.forEach(function (item) {
        var clone = template.content.cloneNode(true);
        clone.querySelector('.prekė').textContent = item.description;
        clone.querySelector('.kiekis').textContent = item.quantity;
        clone.querySelector('.kaina').textContent = "".concat(item.price.toFixed(2), " \u20AC");
        var nuolaidosTekstas = '-';
        var Kaina = item.price;
        if (item.discount.type === 'percentage') {
          var procentinėNuolaida = item.price * item.discount.value / 100;
          Kaina -= procentinėNuolaida;
          nuolaidosTekstas = "-".concat(item.discount.value, "% (-").concat(procentinėNuolaida.toFixed(2), " \u20AC)");
        } else if (item.discount.type === 'fixed') {
          Kaina -= item.discount.value;
          nuolaidosTekstas = "-".concat(item.discount.value.toFixed(2), " \u20AC");
        }
        var suma = Kaina * item.quantity;
        clone.querySelector('.nuolaida').textContent = nuolaidosTekstas;
        clone.querySelector('.suma').textContent = "".concat(suma.toFixed(2), " \u20AC");
        tbody.appendChild(clone);
      });
    }
  }, {
    key: "renderTransport",
    value: function renderTransport() {
      document.querySelector('#trans').textContent = "".concat(this.shippingPrice.toFixed(2), " \u20AC");
    }
  }, {
    key: "countTotal",
    value: function countTotal() {
      var rows = document.querySelectorAll('#pirma table tbody tr');
      var suma = 0;
      rows.forEach(function (row) {
        var lastCell = row.querySelector('td:last-child');
        if (lastCell) {
          var value = parseFloat(lastCell.textContent.trim());
          if (!isNaN(value)) {
            suma += value;
          }
        }
      });
      var transport = this.shippingPrice || 0;
      var tarpine = suma;
      var suTransportu = tarpine + transport;
      var pvm = suTransportu * 0.21;
      var viso = suTransportu + pvm;
      document.querySelector('#tarp').textContent = "".concat(tarpine.toFixed(2), " \u20AC");
      document.querySelector('#pvm').textContent = "".concat(pvm.toFixed(2), " \u20AC");
      document.querySelector('#viso').innerHTML = "<b>".concat(viso.toFixed(2), " \u20AC</b>");
    }
  }]);
}();

;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Inv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inv.js */ "./src/Inv.js");

saskaita.render();

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkk3_crud"] = self["webpackChunkk3_crud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;