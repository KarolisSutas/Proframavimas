/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


/***/ }),

/***/ "./src/Invoice.js":
/*!************************!*\
  !*** ./src/Invoice.js ***!
  \************************/
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
      console.log('Render start', this.data);
      this.renderNumber();
      console.log('number done');
      this.renderDate();
      console.log('date done');
      this.renderSeller();
      console.log('seller done');
      this.renderBuyer();
      console.log('buyer done');
      this.renderItems();
      console.log('items done');
      this.renderTransport();
      console.log('transport done');
      this.countTotal();
      console.log('total done');
    }
  }, {
    key: "renderNumber",
    value: function renderNumber() {
      var el = document.querySelector('#number');
      if (!el) return; // jei nėra elemento – nutraukiam
      el.innerHTML = "Serija: ".concat(this.data.number);
    }
  }, {
    key: "renderDate",
    value: function renderDate() {
      var el = document.querySelector('#date');
      if (!el) return;
      el.innerHTML = "".concat(this.data.date);
    }
  }, {
    key: "renderSeller",
    value: function renderSeller() {
      var seller = this.data.company.seller;
      if (!document.querySelector('#seller')) {
        return;
      }
      document.querySelector('#seller').innerHTML = "\n          <b>PARDAV\u0116JAS</b><br><br> \n          <b>".concat(seller.name, "</b><br>\n          El. pa\u0161tas: ").concat(seller.email, "<br>\n          Tel. Nr.: ").concat(seller.phone, "<br>\n          Adresas: ").concat(seller.address, "<br>\n          \u012Emon\u0117s kodas: ").concat(seller.code, "<br>\n          PVM mok\u0117tojo kodas: ").concat(seller.vat);
    }
  }, {
    key: "renderBuyer",
    value: function renderBuyer() {
      var buyer = this.data.company.buyer;
      if (!document.querySelector('#buyer')) {
        return;
      }
      document.querySelector('#buyer').innerHTML = "\n          <b>PIRK\u0116JAS</b><br><br> \n          <b>".concat(buyer.name, "</b><br>\n          El. pa\u0161tas: ").concat(buyer.email, "<br>\n          Tel. Nr.: ").concat(buyer.phone, "<br>\n          Adresas: ").concat(buyer.address, "<br>\n          \u012Emon\u0117s kodas: ").concat(buyer.code, "<br>\n          PVM mok\u0117tojo kodas: ").concat(buyer.vat, "<br><br><br><br><br>\n          <b>Apmok\u0117ti iki: ").concat(this.data.due_date, "</b>");
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var tbody = document.querySelector('tbody');
      if (!document.querySelector('tbody')) {
        return;
      }
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
    key: "renderUpdatedItems",
    value: function renderUpdatedItems() {
      var tbody = document.querySelector('tbody');
      var template = document.querySelector('[data-update-content]');
      tbody.innerHTML = '';
      this.items.forEach(function (item, index) {
        var _item$discount, _item$discount2, _item$discount3, _item$discount4;
        var clone = template.content.cloneNode(true);

        // Įrašom reikšmes į input'us
        clone.querySelector('.desc').textContent = item.description;
        clone.querySelector('.qty').value = item.quantity;
        clone.querySelector('.price').textContent = item.price.toFixed(2);
        // Nuolaidos tipo select
        var discountTypeSelect = clone.querySelector('.discount-type');
        var discountValueInput = clone.querySelector('.discount-value');
        discountTypeSelect.value = ((_item$discount = item.discount) === null || _item$discount === void 0 ? void 0 : _item$discount.type) || 'none';
        discountValueInput.value = ((_item$discount2 = item.discount) === null || _item$discount2 === void 0 ? void 0 : _item$discount2.value) || '';

        // Skaičiuojam pradinę sumą
        var price = item.price;
        if (((_item$discount3 = item.discount) === null || _item$discount3 === void 0 ? void 0 : _item$discount3.type) === 'percentage') {
          price -= price * (item.discount.value / 100);
        } else if (((_item$discount4 = item.discount) === null || _item$discount4 === void 0 ? void 0 : _item$discount4.type) === 'fixed') {
          price -= item.discount.value;
        }
        var suma = price * item.quantity;
        clone.querySelector('.suma').textContent = "".concat(suma.toFixed(2), " \u20AC");
        tbody.appendChild(clone);
      });
      this.countTotal();
    }
  }, {
    key: "renderTransport",
    value: function renderTransport() {
      if (!document.querySelector('#trans')) {
        return;
      }
      document.querySelector('#trans').textContent = "".concat(this.shippingPrice.toFixed(2), " \u20AC");
    }
  }, {
    key: "countTotal",
    value: function countTotal() {
      if (!document.querySelector('#pirma table tbody tr')) {
        return;
      }
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

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _locStor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locStor.js */ "./src/locStor.js");
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.js */ "./src/Invoice.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
 // Importuojame locStor klasę darbui su localStorage
 // Importuojame Invoice klasę sąskaitos generavimui ir atvaizdavimui
var Main = /*#__PURE__*/function (_locStor) {
  function Main() {
    _classCallCheck(this, Main);
    return _callSuper(this, Main, arguments);
  }
  _inherits(Main, _locStor);
  return _createClass(Main, null, [{
    key: "init",
    value: function init() {
      // Inicializuojame localStorage su raktu Sąskaitos
      _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].storageInit({
        key: 'Sąskaitos'
      });

      // Patikriname ar esame puslapyje, kuriame reikia kurti sąskaitą
      if (document.querySelector('[data-create]')) {
        this.initCreate();
        return;
      } else if (document.querySelector('[data-read]')) {
        this.initRead();
        return;
      } else if (document.querySelector('[data-delete]')) {
        this.initDelete();
        return;
      } else if (document.querySelector('[data-show-inv]')) {
        this.initShow();
        return;
      } else if (document.querySelector('[data-update]')) {
        this.initUpdate();
        return;
      }
    }
  }, {
    key: "initCreate",
    value: function initCreate() {
      // Gauname atsitiktinius sąskaitos duomenis iš API
      fetch('https://in3.dev/inv/').then(function (res) {
        return res.json();
      }) // Konvertuojame atsakymą į JSON
      .then(function (data) {
        // Sukuriame naują Invoice objektą su gautais duomenimis
        var saskaita = new _Invoice_js__WEBPACK_IMPORTED_MODULE_1__["default"](data);
        saskaita.render(); // Atvaizduojame sąskaitą puslapyje

        // Parodome konteinerį ir sekcijas
        document.querySelector('.konteineris').style.display = 'flex';
        document.querySelector('#pirma').style.display = 'flex';
        document.querySelector('#antra').style.display = 'flex';
        var allInvButton = document.querySelector('[data-all]');
        allInvButton.addEventListener('click', function () {
          window.location.href = 'read.html';
        });

        // Surandame mygtuką Saugoti
        var saveButton = document.querySelector('[data-save]');

        // Pridedame įvykio klausytoją mygtukui
        saveButton.addEventListener('click', function () {
          // locStor.store(saskaita.data);
          // window.location.href = 'read.html';

          var pilnaSaskaita = _objectSpread(_objectSpread({}, saskaita.data), {}, {
            // visi API duomenys
            totals: {
              tarpinė: document.querySelector('#tarp').textContent,
              pvm: document.querySelector('#pvm').textContent,
              bendra: document.querySelector('#viso').textContent
            }
          });
          // Išsaugome pilną sąskaitą į localStorage
          _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].store(pilnaSaskaita);

          // Patikriname ar tikrai išsaugojo (debug)
          console.log('Sąskaita išsaugota:', saskaita.data);
          console.log('Visos sąskaitos localStorage:', _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].read());
          // Nukreipiame į sąskaitų sąrašą po išsaugojimo
          window.location.href = 'read.html';
        });
      });
    }
  }, {
    key: "initRead",
    value: function initRead() {
      var invoices = _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].read();

      // Jei sąskaitų nėra – parodome žinutę
      if (!invoices || invoices.length == 0) {
        document.querySelector('[data-list]').innerHTML = '<li class="list-group-item">Nėra išsaugotų sąskaitų</li>';
        return;
      }
      var template = document.querySelector('template');
      var listEl = document.querySelector('[data-list]');
      listEl.innerHTML = ''; // išvalymas sąrašo prieš įkėlimą

      invoices.forEach(function (inv) {
        var clone = template.content.cloneNode(true);
        clone.querySelector('[data-title]').textContent = inv.number;
        clone.querySelector('[data-date]').textContent = inv.date;
        clone.querySelector('[data-sum]').textContent = inv.totals.bendra;
        clone.querySelector('[data-edit]').setAttribute('href', 'update.html#' + inv.id);
        clone.querySelector('[data-delete]').setAttribute('href', 'delete.html#' + inv.id);
        clone.querySelector('[data-show]').setAttribute('href', 'show.html#' + inv.id);
        listEl.appendChild(clone);
      });
    }
  }, {
    key: "initDelete",
    value: function initDelete() {
      var invoices = _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].read();
      var id = window.location.hash.slice(1); // id paemimas is hashtago
      var invoice = invoices.find(function (inv) {
        return inv.id == id;
      });
      if (!invoice) {
        window.location.href = 'read.html'; // puslapio redirectas
        return;
      }
      document.querySelector('[data-title]').innerText = invoice.number;
      var destroyButton = document.querySelector('[data-destroy]');
      destroyButton.addEventListener('click', function (_) {
        _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].destroy(invoice.id);
        window.location.href = 'read.html';
      });
    }
  }, {
    key: "initShow",
    value: function initShow() {
      var invoices = _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].read();
      var id = window.location.hash.slice(1);
      var invoiceData = invoices.find(function (inv) {
        return inv.id == id;
      });
      if (!invoiceData) {
        window.location.href = 'read.html';
        return;
      }

      // pirmiau parodome konteinerį ir sekcijas
      document.querySelector('.konteineris').style.display = 'flex';
      document.querySelector('#pirma').style.display = 'flex';
      document.querySelector('#antra').style.display = 'flex';

      // kuriame Invoice ir renderinam
      var invoiceShow = new _Invoice_js__WEBPACK_IMPORTED_MODULE_1__["default"](invoiceData);
      invoiceShow.render();
    }
  }, {
    key: "initUpdate",
    value: function initUpdate() {
      var invoices = _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].read();
      console.log(invoices);
      var id = window.location.hash.slice(1);
      var invoice = invoices.find(function (inv) {
        return inv.id == id;
      });
      if (!invoice) {
        alert('Sąskaita nerasta!');
        window.location.href = 'read.html';
        return;
      }

      // parodyti paslėptus blokus
      document.querySelector('.konteineris').style.display = 'flex';
      document.querySelector('#pirma').style.display = 'flex';
      document.querySelector('#antra').style.display = 'flex';

      // Sukuriam invoice objektą ir renderinam
      var invoiceUpdate = new _Invoice_js__WEBPACK_IMPORTED_MODULE_1__["default"](invoice);
      invoiceUpdate.renderNumber();
      invoiceUpdate.renderDate();
      invoiceUpdate.renderSeller();
      invoiceUpdate.renderBuyer();
      invoiceUpdate.renderTransport();
      invoiceUpdate.renderUpdatedItems(); // čia jau input laukų versija
      invoiceUpdate.countTotal(); // pradinis skaičiavimas

      document.querySelector('[data-save]').addEventListener('click', function () {
        var rows = document.querySelectorAll('tbody tr');
        rows.forEach(function (row, i) {
          var qtyEl = row.querySelector('.qty');
          var typeEl = row.querySelector('.discount-type');
          var valueEl = row.querySelector('.discount-value');
          if (qtyEl && typeEl && valueEl) {
            invoice.items[i].quantity = parseFloat(qtyEl.value) || 0;
            invoice.items[i].discount.type = typeEl.value;
            invoice.items[i].discount.value = parseFloat(valueEl.value) || 0;
          } else {
            console.warn("Tr\u016Bksta lauk\u0173 eilut\u0117je ".concat(i));
          }
        });

        // const allDiscounts = invoiceSection.querySelectorAll('[data-discount]');
        // allDiscounts.forEach((input, i) => {
        //     input.addEventListener('change', _ => {
        //         const newDiscountValue = parseFloat(input.value);
        //         if (isNaN(newDiscountValue) || newDiscountValue < 0) {
        //             input.value = invoice.items[i].discount?.value || 0; // Reset to original if invalid
        //             return;
        //         }
        //         const discountType = document.querySelector(`input[name="discount-type-${i}"]:checked`);
        //         if (!discountType) {
        //             const fixedRadio = invoiceSection.querySelector(`input[name="discount-type-${i}"][value="fixed"]`);
        //             fixedRadio.checked = true;
        //         }
        //         invoice.items[i].discount = {
        //             value: newDiscountValue,
        //             type: discountType ? discountType.value : 'fixed'
        //         };
        //         updateItemTotal(i);
        //         calcTotals();
        //         updateTotals();
        //     });
        // });

        // Išsaugoti atnaujintą sąskaitą
        var invoices = _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].read();
        var index = invoices.findIndex(function (inv) {
          return inv.id === invoice.id;
        });
        if (index !== -1) {
          invoices[index] = invoice;
          _locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"].write(invoices);
          window.location.href = 'read.html';
        }
      });
    }
  }]);
}(_locStor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.js */ "./src/Main.js");

_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].init();

/***/ }),

/***/ "./src/locStor.js":
/*!************************!*\
  !*** ./src/locStor.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ locStor)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var locStor = /*#__PURE__*/function () {
  function locStor() {
    _classCallCheck(this, locStor);
  }
  return _createClass(locStor, [{
    key: "update",
    value: function update(id, updatedInvoice) {
      var all = this.read();
      var index = all.findIndex(function (inv) {
        return inv.id == id;
      });
      if (index !== -1) {
        all[index] = updatedInvoice;
        this.write(all);
      }
    }
  }], [{
    key: "storageInit",
    value: function storageInit(settings) {
      this.key = settings.key;
    }
  }, {
    key: "read",
    value: function read() {
      var storedData = localStorage.getItem(this.key);
      if (null === storedData) {
        return [];
      }
      return JSON.parse(storedData);
    }
  }, {
    key: "write",
    value: function write(data) {
      localStorage.setItem(this.key, JSON.stringify(data));
    }
    // CRUD
  }, {
    key: "store",
    value: function store(data) {
      this.write([].concat(_toConsumableArray(this.read()), [_objectSpread(_objectSpread({}, data), {}, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
      })]));
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      this.write(this.read().filter(function (inv) {
        return inv.id != id;
      }));
    }
  }]);
}();
_defineProperty(locStor, "key", void 0);


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