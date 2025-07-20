"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Header Styling */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section { display: block; }
body { line-height: 1;}
ol,ul { list-style: none;}
blockquote,q { quotes: none;}
blockquote:before,blockquote:after,q:before,q:after { content: ''; content: none;}
table { border-collapse: collapse; border-spacing: 0;}


body {
    font-family: 'Lato', sans-serif;
    background-color: bisque;
    color: #4A2C2A;
}

/* Restore emphasis styling removed by the reset */
em {
    font-style: italic;
}

header {
    background-color: #4A2C2A;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header h1 {
    font-size: 4rem;
    color: burlywood;
    font-weight: bold;

}

nav {
    display: flex;
    gap: 3rem;
}

button {
    border-radius: 12px;
    padding: 15px 50px;
    border: none;
    background-color: bisque;
    font-weight: bold;
    font-size: 1.2rem;
}

button:hover {
    background-color: brown;
    cursor: pointer;
    box-shadow: 2px 2px 5px black;
    transition: all 0.15s ease-in-out;
}

button:active {
    background-color: burlywood;
    box-shadow: 1px 1px 2px black;
}


/* Homepage Styling */
.home img {
    width: 100%;
    height: 75vh; /* Slightly reduced height for better balance */
    object-fit: cover;
    display: block; /* Removes any extra space below the image */
}

.home p {
    text-align: center;
    font-size: 2.2rem; /* Slightly smaller for better proportion */
    padding: 25px; /* Adds padding instead of margin */
    font-weight: bold;
    color: #4A2C2A; /* Using your existing color for consistency */
    background-color: bisque; /* Matches your body background */
    margin-bottom: 5px;
}

/* Styling for the hours section to make it look like a card */
.hours {
    max-width: 400px; /* Gives the card a max width */
    margin: 15px auto; /* Centers the card on the page */
    padding: 25px;
    background-color: #F3EFEA; /* A soft, creamy off-white for contrast */
    border-radius: 10px; /* Rounds the corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
    text-align: center; /* Centers the text inside the card */
}

/* Styling for the "Hours" heading */
.hours h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px; /* Adds space below the heading */
    color: #4A2C2A;
}

.operational-times {
    display: inline-flex; /* Allows the flex container to fit its content */
    flex-direction: column;
    gap: 15px; /* Reduced gap for a tighter list */
    font-size: 1.1rem; /* A legible font size */
    list-style: none; /* This is already in your reset, but good to be explicit */
    padding: 0;
}

/* Styling for Menu Section */

.menu {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60vh;
    border-radius: 18px;
    background-color: burlywood;
    margin: auto;
    margin-top: 70px;
    box-shadow: 14px 2px 40px 2px  black
}


.menu h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 18px;
}

.menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px
}

/* Styling for Contact Section */
.contact {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 40vh;
    border-radius: 18px;
    background-color: burlywood;
    margin: auto;
    margin-top: 70px;
    box-shadow: 14px 2px 40px 2px  black;
    padding: 20px 0;
}

.contact h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 28px;
}

.contact .contact-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 1.4rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB,6ZAA6Z,SAAS,EAAE,UAAU,EAAE,SAAS,EAAE,eAAe,EAAE,aAAa,EAAE,wBAAwB,CAAC;AACxf,gFAAgF,cAAc,EAAE;AAChG,OAAO,cAAc,CAAC;AACtB,QAAQ,gBAAgB,CAAC;AACzB,eAAe,YAAY,CAAC;AAC5B,sDAAsD,WAAW,EAAE,aAAa,CAAC;AACjF,QAAQ,yBAAyB,EAAE,iBAAiB,CAAC;;;AAKrD;IACI,+BAA+B;IAC/B,wBAAwB;IACxB,cAAc;AAClB;;AAEA,kDAAkD;AAClD;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;;AAErB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,6BAA6B;IAC7B,iCAAiC;AACrC;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;AACjC;;;AAGA,qBAAqB;AACrB;IACI,WAAW;IACX,YAAY,EAAE,+CAA+C;IAC7D,iBAAiB;IACjB,cAAc,EAAE,4CAA4C;AAChE;;AAEA;IACI,kBAAkB;IAClB,iBAAiB,EAAE,2CAA2C;IAC9D,aAAa,EAAE,mCAAmC;IAClD,iBAAiB;IACjB,cAAc,EAAE,8CAA8C;IAC9D,wBAAwB,EAAE,iCAAiC;IAC3D,kBAAkB;AACtB;;AAEA,8DAA8D;AAC9D;IACI,gBAAgB,EAAE,+BAA+B;IACjD,iBAAiB,EAAE,iCAAiC;IACpD,aAAa;IACb,yBAAyB,EAAE,0CAA0C;IACrE,mBAAmB,EAAE,uBAAuB;IAC5C,wCAAwC,EAAE,mCAAmC;IAC7E,kBAAkB,EAAE,qCAAqC;AAC7D;;AAEA,oCAAoC;AACpC;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB,EAAE,iCAAiC;IACtD,cAAc;AAClB;;AAEA;IACI,oBAAoB,EAAE,iDAAiD;IACvE,sBAAsB;IACtB,SAAS,EAAE,mCAAmC;IAC9C,iBAAiB,EAAE,wBAAwB;IAC3C,gBAAgB,EAAE,2DAA2D;IAC7E,UAAU;AACd;;AAEA,6BAA6B;;AAE7B;IACI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,gBAAgB;IAChB;AACJ;;;AAGA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB;AACJ;;AAEA,gCAAgC;AAChC;IACI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,gBAAgB;IAChB,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB","sourcesContent":["/* Header Styling */\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;}\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section { display: block; }\nbody { line-height: 1;}\nol,ul { list-style: none;}\nblockquote,q { quotes: none;}\nblockquote:before,blockquote:after,q:before,q:after { content: ''; content: none;}\ntable { border-collapse: collapse; border-spacing: 0;}\n\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');\n\n\nbody {\n    font-family: 'Lato', sans-serif;\n    background-color: bisque;\n    color: #4A2C2A;\n}\n\n/* Restore emphasis styling removed by the reset */\nem {\n    font-style: italic;\n}\n\nheader {\n    background-color: #4A2C2A;\n    padding: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader h1 {\n    font-size: 4rem;\n    color: burlywood;\n    font-weight: bold;\n\n}\n\nnav {\n    display: flex;\n    gap: 3rem;\n}\n\nbutton {\n    border-radius: 12px;\n    padding: 15px 50px;\n    border: none;\n    background-color: bisque;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\nbutton:hover {\n    background-color: brown;\n    cursor: pointer;\n    box-shadow: 2px 2px 5px black;\n    transition: all 0.15s ease-in-out;\n}\n\nbutton:active {\n    background-color: burlywood;\n    box-shadow: 1px 1px 2px black;\n}\n\n\n/* Homepage Styling */\n.home img {\n    width: 100%;\n    height: 75vh; /* Slightly reduced height for better balance */\n    object-fit: cover;\n    display: block; /* Removes any extra space below the image */\n}\n\n.home p {\n    text-align: center;\n    font-size: 2.2rem; /* Slightly smaller for better proportion */\n    padding: 25px; /* Adds padding instead of margin */\n    font-weight: bold;\n    color: #4A2C2A; /* Using your existing color for consistency */\n    background-color: bisque; /* Matches your body background */\n    margin-bottom: 5px;\n}\n\n/* Styling for the hours section to make it look like a card */\n.hours {\n    max-width: 400px; /* Gives the card a max width */\n    margin: 15px auto; /* Centers the card on the page */\n    padding: 25px;\n    background-color: #F3EFEA; /* A soft, creamy off-white for contrast */\n    border-radius: 10px; /* Rounds the corners */\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */\n    text-align: center; /* Centers the text inside the card */\n}\n\n/* Styling for the \"Hours\" heading */\n.hours h2 {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-bottom: 20px; /* Adds space below the heading */\n    color: #4A2C2A;\n}\n\n.operational-times {\n    display: inline-flex; /* Allows the flex container to fit its content */\n    flex-direction: column;\n    gap: 15px; /* Reduced gap for a tighter list */\n    font-size: 1.1rem; /* A legible font size */\n    list-style: none; /* This is already in your reset, but good to be explicit */\n    padding: 0;\n}\n\n/* Styling for Menu Section */\n\n.menu {\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 50%;\n    height: 60vh;\n    border-radius: 18px;\n    background-color: burlywood;\n    margin: auto;\n    margin-top: 70px;\n    box-shadow: 14px 2px 40px 2px  black\n}\n\n\n.menu h1 {\n    font-size: 4rem;\n    font-weight: bold;\n    margin: 18px;\n}\n\n.menu ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px\n}\n\n/* Styling for Contact Section */\n.contact {\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 50%;\n    min-height: 40vh;\n    border-radius: 18px;\n    background-color: burlywood;\n    margin: auto;\n    margin-top: 70px;\n    box-shadow: 14px 2px 40px 2px  black;\n    padding: 20px 0;\n}\n\n.contact h1 {\n    font-size: 4rem;\n    font-weight: bold;\n    margin-bottom: 28px;\n}\n\n.contact .contact-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    font-size: 1.4rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/Assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "457e447721227da5eaf3.jpg";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactPage)
/* harmony export */ });

function loadContactPage() {
    const contentContainer = document.querySelector('.content')

    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact')

    const displayMessage = document.createElement('h1')
    displayMessage.textContent = "Contact"

    const contactList = document.createElement('ul')
    contactList.classList.add('contact-list')

    const number = document.createElement('li')
    number.textContent = '416-551-5555'
    contactList.appendChild(number)

    const email = document.createElement('li')
    email.textContent = "thomas.johnson@example.com"
    contactList.appendChild(email)

    const address = document.createElement('li')
    address.textContent = "123 Main Street"
    contactList.appendChild(address)

    contactDiv.appendChild(displayMessage)
    contactDiv.appendChild(contactList)

    contentContainer.appendChild(contactDiv)


}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _Assets_jay_wennington_N_Y88TWmGwA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg */ "./src/Assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg");


function loadHomePage() {
    const contentContainer = document.querySelector('.content')

    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home')

    const img = document.createElement('img')
    img.alt = "Restaurant Image"
    img.src = _Assets_jay_wennington_N_Y88TWmGwA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__

    const description = document.createElement('p')
    description.textContent = "Curated for the senses."

    
    homeDiv.appendChild(img)
    homeDiv.appendChild(description)

    contentContainer.appendChild(homeDiv)

    const hourDiv = document.createElement('div')
    hourDiv.classList.add('hours')

    const hourHeading = document.createElement('h2')
    hourHeading.textContent = "Hours"
    hourDiv.appendChild(hourHeading)
    

    const operationalTimes = document.createElement('ul')
    operationalTimes.classList.add('operational-times')

    const sunday = document.createElement('li')
    sunday.textContent = "Sunday: 8am - 8pm"

    const monday = document.createElement('li')
    monday.textContent = "Monday: 8am - 8pm"

    const tuesday = document.createElement('li')
    tuesday.textContent = "Tuesday: 8am - 8pm"

    const wednesday = document.createElement('li')
    wednesday.textContent = "Wednesday: 8am - 8pm"

    const thursday = document.createElement('li')
    thursday.textContent = "Thursday: 8am - 8pm"

    const friday = document.createElement('li')
    friday.textContent = "Friday: 8am - 8pm"

    const saturday = document.createElement('li')
    saturday.textContent = "Saturday: Closed"

    operationalTimes.appendChild(sunday)
    operationalTimes.appendChild(monday)
    operationalTimes.appendChild(tuesday)
    operationalTimes.appendChild(wednesday)
    operationalTimes.appendChild(thursday)
    operationalTimes.appendChild(friday)
    operationalTimes.appendChild(saturday)

    hourDiv.appendChild(operationalTimes)

    contentContainer.appendChild(hourDiv)

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const contactButton = document.querySelector('#contact')
const contentContainer = document.querySelector('.content')

;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

homeButton.addEventListener('click', () => {
    contentContainer.textContent = ''
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
})

menuButton.addEventListener('click', () => {
    contentContainer.textContent = ''
    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

contactButton.addEventListener('click', () => {
    contentContainer.textContent = ''
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
})



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
function loadMenuPage() {
    const contentContainer = document.querySelector('.content')

    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')

    const displayMessage = document.createElement('h1')
    displayMessage.textContent = "Menu"

    const menuList = document.createElement('ul')
    menuList.classList.add('menu-list')

    const menuItem1 = document.createElement('li')
    menuItem1.textContent = "Placeholder for Menu Item 1"

    const menuItem2 = document.createElement('li')
    menuItem2.textContent = "Placeholder for Menu Item 2"

    const menuItem3 = document.createElement('li')
    menuItem3.textContent = "Placeholder for Menu Item 3"

    const menuItem4 = document.createElement('li')
    menuItem4.textContent = "Placeholder for Menu Item 4"

    const menuItem5 = document.createElement('li')
    menuItem5.textContent = "Placeholder for Menu Item 5"

    const menuItem6 = document.createElement('li')
    menuItem6.textContent = "Placeholder for Menu Item 6"


    menuList.appendChild(menuItem1)
    menuList.appendChild(menuItem2)
    menuList.appendChild(menuItem3)
    menuList.appendChild(menuItem4)
    menuList.appendChild(menuItem5)
    menuList.appendChild(menuItem6)


    menuDiv.appendChild(displayMessage)
    menuDiv.appendChild(menuList)

    contentContainer.appendChild(menuDiv)


}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsa0JBQWtCO0FBQy9IO0FBQ0E7QUFDQSw2WkFBNlosV0FBVyxZQUFZLFdBQVcsaUJBQWlCLGVBQWU7QUFDL2QsZ0ZBQWdGO0FBQ2hGLE9BQU87QUFDUCxRQUFRO0FBQ1IsZUFBZTtBQUNmLHNEQUFzRCxhQUFhO0FBQ25FLFFBQVEsMkJBQTJCOzs7QUFHbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CO0FBQ0Esb0JBQW9CO0FBQ3BCLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCO0FBQ0EsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6Qiw4Q0FBOEM7QUFDOUMsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLDJFQUEyRSx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIsaUNBQWlDLHFDQUFxQyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxVQUFVLHNCQUFzQixhQUFhLHVCQUF1QixPQUFPLEtBQUssWUFBWSx5QkFBeUIsdUJBQXVCLGFBQWEsdUJBQXVCLHlCQUF5QixhQUFhLE9BQU8sWUFBWSxNQUFNLHdCQUF3Qix5QkFBeUIsV0FBVyx3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLHlCQUF5QixXQUFXLE9BQU8sS0FBSyx3QkFBd0IsYUFBYSx1QkFBdUIseUJBQXlCLHlCQUF5QixXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksNmNBQTZjLFdBQVcsWUFBWSxXQUFXLGlCQUFpQixlQUFlLDBCQUEwQixrRkFBa0YsaUJBQWlCLFNBQVMsZ0JBQWdCLFVBQVUsa0JBQWtCLGlCQUFpQixjQUFjLHdEQUF3RCxhQUFhLGVBQWUsVUFBVSwyQkFBMkIsbUJBQW1CLHdFQUF3RSxtQkFBbUIsWUFBWSxzQ0FBc0MsK0JBQStCLHFCQUFxQixHQUFHLDZEQUE2RCx5QkFBeUIsR0FBRyxZQUFZLGdDQUFnQyxvQkFBb0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsR0FBRyxlQUFlLHNCQUFzQix1QkFBdUIsd0JBQXdCLEtBQUssU0FBUyxvQkFBb0IsZ0JBQWdCLEdBQUcsWUFBWSwwQkFBMEIseUJBQXlCLG1CQUFtQiwrQkFBK0Isd0JBQXdCLHdCQUF3QixHQUFHLGtCQUFrQiw4QkFBOEIsc0JBQXNCLG9DQUFvQyx3Q0FBd0MsR0FBRyxtQkFBbUIsa0NBQWtDLG9DQUFvQyxHQUFHLHlDQUF5QyxrQkFBa0Isb0JBQW9CLHdFQUF3RSxzQkFBc0IsZ0RBQWdELGFBQWEseUJBQXlCLHlCQUF5QixpRUFBaUUsNERBQTRELHNCQUFzQiwrRUFBK0UsMkRBQTJELEdBQUcsNkVBQTZFLHdCQUF3Qix5REFBeUQsc0RBQXNELGlDQUFpQyxzRUFBc0Usd0VBQXdFLDhEQUE4RCx5Q0FBeUMsd0RBQXdELHNCQUFzQix3QkFBd0IsMkJBQTJCLHVEQUF1RCxHQUFHLHdCQUF3Qiw0QkFBNEIsK0VBQStFLGlCQUFpQiw2REFBNkQsaURBQWlELDZFQUE2RSxHQUFHLDZDQUE2QyxtQkFBbUIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsa0NBQWtDLG1CQUFtQix1QkFBdUIsNkNBQTZDLGdCQUFnQixzQkFBc0Isd0JBQXdCLG1CQUFtQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLGlEQUFpRCxtQkFBbUIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsaUJBQWlCLHVCQUF1QiwwQkFBMEIsa0NBQWtDLG1CQUFtQix1QkFBdUIsMkNBQTJDLHNCQUFzQixHQUFHLGlCQUFpQixzQkFBc0Isd0JBQXdCLDBCQUEwQixHQUFHLDRCQUE0QixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0Isd0JBQXdCLEdBQUcsbUJBQW1CO0FBQzcxTTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9LMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qjs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0I4RTs7QUFFL0Q7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDRFQUFlOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRXFDO0FBQ0E7QUFDTTtBQUN2Qjs7O0FBR3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFZOztBQUVaO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSx3REFBZTtBQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJjO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogSGVhZGVyIFN0eWxpbmcgKi9cbmh0bWwsYm9keSxkaXYsc3BhbixhcHBsZXQsb2JqZWN0LGlmcmFtZSxoMSxoMixoMyxoNCxoNSxoNixwLGJsb2NrcXVvdGUscHJlLGEsYWJicixhY3JvbnltLGFkZHJlc3MsYmlnLGNpdGUsY29kZSxkZWwsZGZuLGVtLGltZyxpbnMsa2JkLHEscyxzYW1wLHNtYWxsLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0dCx2YXIsYix1LGksY2VudGVyLGRsLGR0LGRkLG9sLHVsLGxpLGZpZWxkc2V0LGZvcm0sbGFiZWwsbGVnZW5kLHRhYmxlLGNhcHRpb24sdGJvZHksdGZvb3QsdGhlYWQsdHIsdGgsdGQsYXJ0aWNsZSxhc2lkZSxjYW52YXMsZGV0YWlscyxlbWJlZCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaGVhZGVyLGhncm91cCxtZW51LG5hdixvdXRwdXQscnVieSxzZWN0aW9uLHN1bW1hcnksdGltZSxtYXJrLGF1ZGlvLHZpZGVvIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGZvbnQtc2l6ZTogMTAwJTsgZm9udDogaW5oZXJpdDsgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO31cbmFydGljbGUsYXNpZGUsZGV0YWlscyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtZW51LG5hdixzZWN0aW9uIHsgZGlzcGxheTogYmxvY2s7IH1cbmJvZHkgeyBsaW5lLWhlaWdodDogMTt9XG5vbCx1bCB7IGxpc3Qtc3R5bGU6IG5vbmU7fVxuYmxvY2txdW90ZSxxIHsgcXVvdGVzOiBub25lO31cbmJsb2NrcXVvdGU6YmVmb3JlLGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUscTphZnRlciB7IGNvbnRlbnQ6ICcnOyBjb250ZW50OiBub25lO31cbnRhYmxlIHsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgYm9yZGVyLXNwYWNpbmc6IDA7fVxuXG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIGNvbG9yOiAjNEEyQzJBO1xufVxuXG4vKiBSZXN0b3JlIGVtcGhhc2lzIHN0eWxpbmcgcmVtb3ZlZCBieSB0aGUgcmVzZXQgKi9cbmVtIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBMkMyQTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGNvbG9yOiBidXJseXdvb2Q7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cblxuXG4vKiBIb21lcGFnZSBTdHlsaW5nICovXG4uaG9tZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzV2aDsgLyogU2xpZ2h0bHkgcmVkdWNlZCBoZWlnaHQgZm9yIGJldHRlciBiYWxhbmNlICovXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIFJlbW92ZXMgYW55IGV4dHJhIHNwYWNlIGJlbG93IHRoZSBpbWFnZSAqL1xufVxuXG4uaG9tZSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjJyZW07IC8qIFNsaWdodGx5IHNtYWxsZXIgZm9yIGJldHRlciBwcm9wb3J0aW9uICovXG4gICAgcGFkZGluZzogMjVweDsgLyogQWRkcyBwYWRkaW5nIGluc3RlYWQgb2YgbWFyZ2luICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM0QTJDMkE7IC8qIFVzaW5nIHlvdXIgZXhpc3RpbmcgY29sb3IgZm9yIGNvbnNpc3RlbmN5ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlOyAvKiBNYXRjaGVzIHlvdXIgYm9keSBiYWNrZ3JvdW5kICovXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBTdHlsaW5nIGZvciB0aGUgaG91cnMgc2VjdGlvbiB0byBtYWtlIGl0IGxvb2sgbGlrZSBhIGNhcmQgKi9cbi5ob3VycyB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDsgLyogR2l2ZXMgdGhlIGNhcmQgYSBtYXggd2lkdGggKi9cbiAgICBtYXJnaW46IDE1cHggYXV0bzsgLyogQ2VudGVycyB0aGUgY2FyZCBvbiB0aGUgcGFnZSAqL1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRUZFQTsgLyogQSBzb2Z0LCBjcmVhbXkgb2ZmLXdoaXRlIGZvciBjb250cmFzdCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kcyB0aGUgY29ybmVycyAqL1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEFkZHMgYSBzdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVycyB0aGUgdGV4dCBpbnNpZGUgdGhlIGNhcmQgKi9cbn1cblxuLyogU3R5bGluZyBmb3IgdGhlIFwiSG91cnNcIiBoZWFkaW5nICovXG4uaG91cnMgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGRzIHNwYWNlIGJlbG93IHRoZSBoZWFkaW5nICovXG4gICAgY29sb3I6ICM0QTJDMkE7XG59XG5cbi5vcGVyYXRpb25hbC10aW1lcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IC8qIEFsbG93cyB0aGUgZmxleCBjb250YWluZXIgdG8gZml0IGl0cyBjb250ZW50ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7IC8qIFJlZHVjZWQgZ2FwIGZvciBhIHRpZ2h0ZXIgbGlzdCAqL1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAvKiBBIGxlZ2libGUgZm9udCBzaXplICovXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgLyogVGhpcyBpcyBhbHJlYWR5IGluIHlvdXIgcmVzZXQsIGJ1dCBnb29kIHRvIGJlIGV4cGxpY2l0ICovXG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogU3R5bGluZyBmb3IgTWVudSBTZWN0aW9uICovXG5cbi5tZW51IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGJveC1zaGFkb3c6IDE0cHggMnB4IDQwcHggMnB4ICBibGFja1xufVxuXG5cbi5tZW51IGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAxOHB4O1xufVxuXG4ubWVudSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4XG59XG5cbi8qIFN0eWxpbmcgZm9yIENvbnRhY3QgU2VjdGlvbiAqL1xuLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGJveC1zaGFkb3c6IDE0cHggMnB4IDQwcHggMnB4ICBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5jb250YWN0IGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLmNvbnRhY3QgLmNvbnRhY3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkIsNlpBQTZaLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLENBQUM7QUFDeGYsZ0ZBQWdGLGNBQWMsRUFBRTtBQUNoRyxPQUFPLGNBQWMsQ0FBQztBQUN0QixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLGVBQWUsWUFBWSxDQUFDO0FBQzVCLHNEQUFzRCxXQUFXLEVBQUUsYUFBYSxDQUFDO0FBQ2pGLFFBQVEseUJBQXlCLEVBQUUsaUJBQWlCLENBQUM7OztBQUtyRDtJQUNJLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjs7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7O0FBR0EscUJBQXFCO0FBQ3JCO0lBQ0ksV0FBVztJQUNYLFlBQVksRUFBRSwrQ0FBK0M7SUFDN0QsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSw0Q0FBNEM7QUFDaEU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUUsMkNBQTJDO0lBQzlELGFBQWEsRUFBRSxtQ0FBbUM7SUFDbEQsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSw4Q0FBOEM7SUFDOUQsd0JBQXdCLEVBQUUsaUNBQWlDO0lBQzNELGtCQUFrQjtBQUN0Qjs7QUFFQSw4REFBOEQ7QUFDOUQ7SUFDSSxnQkFBZ0IsRUFBRSwrQkFBK0I7SUFDakQsaUJBQWlCLEVBQUUsaUNBQWlDO0lBQ3BELGFBQWE7SUFDYix5QkFBeUIsRUFBRSwwQ0FBMEM7SUFDckUsbUJBQW1CLEVBQUUsdUJBQXVCO0lBQzVDLHdDQUF3QyxFQUFFLG1DQUFtQztJQUM3RSxrQkFBa0IsRUFBRSxxQ0FBcUM7QUFDN0Q7O0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBRSxpQ0FBaUM7SUFDdEQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQixFQUFFLGlEQUFpRDtJQUN2RSxzQkFBc0I7SUFDdEIsU0FBUyxFQUFFLG1DQUFtQztJQUM5QyxpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsZ0JBQWdCLEVBQUUsMkRBQTJEO0lBQzdFLFVBQVU7QUFDZDs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0FBQ0o7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSGVhZGVyIFN0eWxpbmcgKi9cXG5odG1sLGJvZHksZGl2LHNwYW4sYXBwbGV0LG9iamVjdCxpZnJhbWUsaDEsaDIsaDMsaDQsaDUsaDYscCxibG9ja3F1b3RlLHByZSxhLGFiYnIsYWNyb255bSxhZGRyZXNzLGJpZyxjaXRlLGNvZGUsZGVsLGRmbixlbSxpbWcsaW5zLGtiZCxxLHMsc2FtcCxzbWFsbCxzdHJpa2Usc3Ryb25nLHN1YixzdXAsdHQsdmFyLGIsdSxpLGNlbnRlcixkbCxkdCxkZCxvbCx1bCxsaSxmaWVsZHNldCxmb3JtLGxhYmVsLGxlZ2VuZCx0YWJsZSxjYXB0aW9uLHRib2R5LHRmb290LHRoZWFkLHRyLHRoLHRkLGFydGljbGUsYXNpZGUsY2FudmFzLGRldGFpbHMsZW1iZWQsZmlndXJlLGZpZ2NhcHRpb24sZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWVudSxuYXYsb3V0cHV0LHJ1Ynksc2VjdGlvbixzdW1tYXJ5LHRpbWUsbWFyayxhdWRpbyx2aWRlbyB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBmb250LXNpemU6IDEwMCU7IGZvbnQ6IGluaGVyaXQ7IHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTt9XFxuYXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1lbnUsbmF2LHNlY3Rpb24geyBkaXNwbGF5OiBibG9jazsgfVxcbmJvZHkgeyBsaW5lLWhlaWdodDogMTt9XFxub2wsdWwgeyBsaXN0LXN0eWxlOiBub25lO31cXG5ibG9ja3F1b3RlLHEgeyBxdW90ZXM6IG5vbmU7fVxcbmJsb2NrcXVvdGU6YmVmb3JlLGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUscTphZnRlciB7IGNvbnRlbnQ6ICcnOyBjb250ZW50OiBub25lO31cXG50YWJsZSB7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IGJvcmRlci1zcGFjaW5nOiAwO31cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBjb2xvcjogIzRBMkMyQTtcXG59XFxuXFxuLyogUmVzdG9yZSBlbXBoYXNpcyBzdHlsaW5nIHJlbW92ZWQgYnkgdGhlIHJlc2V0ICovXFxuZW0ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTJDMkE7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBjb2xvcjogYnVybHl3b29kO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcbn1cXG5cXG5cXG4vKiBIb21lcGFnZSBTdHlsaW5nICovXFxuLmhvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzV2aDsgLyogU2xpZ2h0bHkgcmVkdWNlZCBoZWlnaHQgZm9yIGJldHRlciBiYWxhbmNlICovXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBibG9jazsgLyogUmVtb3ZlcyBhbnkgZXh0cmEgc3BhY2UgYmVsb3cgdGhlIGltYWdlICovXFxufVxcblxcbi5ob21lIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtOyAvKiBTbGlnaHRseSBzbWFsbGVyIGZvciBiZXR0ZXIgcHJvcG9ydGlvbiAqL1xcbiAgICBwYWRkaW5nOiAyNXB4OyAvKiBBZGRzIHBhZGRpbmcgaW5zdGVhZCBvZiBtYXJnaW4gKi9cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjNEEyQzJBOyAvKiBVc2luZyB5b3VyIGV4aXN0aW5nIGNvbG9yIGZvciBjb25zaXN0ZW5jeSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7IC8qIE1hdGNoZXMgeW91ciBib2R5IGJhY2tncm91bmQgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgaG91cnMgc2VjdGlvbiB0byBtYWtlIGl0IGxvb2sgbGlrZSBhIGNhcmQgKi9cXG4uaG91cnMge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4OyAvKiBHaXZlcyB0aGUgY2FyZCBhIG1heCB3aWR0aCAqL1xcbiAgICBtYXJnaW46IDE1cHggYXV0bzsgLyogQ2VudGVycyB0aGUgY2FyZCBvbiB0aGUgcGFnZSAqL1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNFRkVBOyAvKiBBIHNvZnQsIGNyZWFteSBvZmYtd2hpdGUgZm9yIGNvbnRyYXN0ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kcyB0aGUgY29ybmVycyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBBZGRzIGEgc3VidGxlIHNoYWRvdyBmb3IgZGVwdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSB0ZXh0IGluc2lkZSB0aGUgY2FyZCAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgXFxcIkhvdXJzXFxcIiBoZWFkaW5nICovXFxuLmhvdXJzIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRkcyBzcGFjZSBiZWxvdyB0aGUgaGVhZGluZyAqL1xcbiAgICBjb2xvcjogIzRBMkMyQTtcXG59XFxuXFxuLm9wZXJhdGlvbmFsLXRpbWVzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IC8qIEFsbG93cyB0aGUgZmxleCBjb250YWluZXIgdG8gZml0IGl0cyBjb250ZW50ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDsgLyogUmVkdWNlZCBnYXAgZm9yIGEgdGlnaHRlciBsaXN0ICovXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAvKiBBIGxlZ2libGUgZm9udCBzaXplICovXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IC8qIFRoaXMgaXMgYWxyZWFkeSBpbiB5b3VyIHJlc2V0LCBidXQgZ29vZCB0byBiZSBleHBsaWNpdCAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBNZW51IFNlY3Rpb24gKi9cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgIGJveC1zaGFkb3c6IDE0cHggMnB4IDQwcHggMnB4ICBibGFja1xcbn1cXG5cXG5cXG4ubWVudSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMThweDtcXG59XFxuXFxuLm1lbnUgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgQ29udGFjdCBTZWN0aW9uICovXFxuLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgYm94LXNoYWRvdzogMTRweCAycHggNDBweCAycHggIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5jb250YWN0IGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcXG59XFxuXFxuLmNvbnRhY3QgLmNvbnRhY3QtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcblxuICAgIGNvbnN0IGRpc3BsYXlNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGRpc3BsYXlNZXNzYWdlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGNvbnRhY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbGlzdCcpXG5cbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbnVtYmVyLnRleHRDb250ZW50ID0gJzQxNi01NTEtNTU1NSdcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChudW1iZXIpXG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwidGhvbWFzLmpvaG5zb25AZXhhbXBsZS5jb21cIlxuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGVtYWlsKVxuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjMgTWFpbiBTdHJlZXRcIlxuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZXNzYWdlKVxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpXG5cblxufSIsImltcG9ydCBSZXN0YXVyYW50SW1hZ2UgZnJvbSBcIi4vQXNzZXRzL2pheS13ZW5uaW5ndG9uLU5fWTg4VFdtR3dBLXVuc3BsYXNoLmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKCdob21lJylcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLmFsdCA9IFwiUmVzdGF1cmFudCBJbWFnZVwiXG4gICAgaW1nLnNyYyA9IFJlc3RhdXJhbnRJbWFnZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQ3VyYXRlZCBmb3IgdGhlIHNlbnNlcy5cIlxuXG4gICAgXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChpbWcpXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZURpdilcblxuICAgIGNvbnN0IGhvdXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvdXJEaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMnKVxuXG4gICAgY29uc3QgaG91ckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaG91ckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvdXJzXCJcbiAgICBob3VyRGl2LmFwcGVuZENoaWxkKGhvdXJIZWFkaW5nKVxuICAgIFxuXG4gICAgY29uc3Qgb3BlcmF0aW9uYWxUaW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBvcGVyYXRpb25hbFRpbWVzLmNsYXNzTGlzdC5hZGQoJ29wZXJhdGlvbmFsLXRpbWVzJylcblxuICAgIGNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBzdW5kYXkudGV4dENvbnRlbnQgPSBcIlN1bmRheTogOGFtIC0gOHBtXCJcblxuICAgIGNvbnN0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBtb25kYXkudGV4dENvbnRlbnQgPSBcIk1vbmRheTogOGFtIC0gOHBtXCJcblxuICAgIGNvbnN0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgdHVlc2RheS50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogOGFtIC0gOHBtXCJcblxuICAgIGNvbnN0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICB3ZWRuZXNkYXkudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogOGFtIC0gOHBtXCJcblxuICAgIGNvbnN0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIHRodXJzZGF5LnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogOGFtIC0gOHBtXCJcblxuICAgIGNvbnN0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBmcmlkYXkudGV4dENvbnRlbnQgPSBcIkZyaWRheTogOGFtIC0gOHBtXCJcblxuICAgIGNvbnN0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIHNhdHVyZGF5LnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogQ2xvc2VkXCJcblxuICAgIG9wZXJhdGlvbmFsVGltZXMuYXBwZW5kQ2hpbGQoc3VuZGF5KVxuICAgIG9wZXJhdGlvbmFsVGltZXMuYXBwZW5kQ2hpbGQobW9uZGF5KVxuICAgIG9wZXJhdGlvbmFsVGltZXMuYXBwZW5kQ2hpbGQodHVlc2RheSlcbiAgICBvcGVyYXRpb25hbFRpbWVzLmFwcGVuZENoaWxkKHdlZG5lc2RheSlcbiAgICBvcGVyYXRpb25hbFRpbWVzLmFwcGVuZENoaWxkKHRodXJzZGF5KVxuICAgIG9wZXJhdGlvbmFsVGltZXMuYXBwZW5kQ2hpbGQoZnJpZGF5KVxuICAgIG9wZXJhdGlvbmFsVGltZXMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpXG5cbiAgICBob3VyRGl2LmFwcGVuZENoaWxkKG9wZXJhdGlvbmFsVGltZXMpXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJEaXYpXG5cbn0iLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJylcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKVxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxubG9hZEhvbWVQYWdlKClcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgICBsb2FkSG9tZVBhZ2UoKVxufSlcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgICBsb2FkTWVudVBhZ2UoKVxufSlcblxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgICBsb2FkQ29udGFjdFBhZ2UoKVxufSlcblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuXG4gICAgY29uc3QgZGlzcGxheU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgZGlzcGxheU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0JylcblxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBtZW51SXRlbTEudGV4dENvbnRlbnQgPSBcIlBsYWNlaG9sZGVyIGZvciBNZW51IEl0ZW0gMVwiXG5cbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gXCJQbGFjZWhvbGRlciBmb3IgTWVudSBJdGVtIDJcIlxuXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9IFwiUGxhY2Vob2xkZXIgZm9yIE1lbnUgSXRlbSAzXCJcblxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBtZW51SXRlbTQudGV4dENvbnRlbnQgPSBcIlBsYWNlaG9sZGVyIGZvciBNZW51IEl0ZW0gNFwiXG5cbiAgICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbWVudUl0ZW01LnRleHRDb250ZW50ID0gXCJQbGFjZWhvbGRlciBmb3IgTWVudSBJdGVtIDVcIlxuXG4gICAgY29uc3QgbWVudUl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIG1lbnVJdGVtNi50ZXh0Q29udGVudCA9IFwiUGxhY2Vob2xkZXIgZm9yIE1lbnUgSXRlbSA2XCJcblxuXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMilcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTMpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW00KVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtNSlcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTYpXG5cblxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lc3NhZ2UpXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51TGlzdClcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdilcblxuXG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==