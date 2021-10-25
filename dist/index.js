/*!
 * vue-pepcep v1.0.0
 * (c) Adeniran Opeyemi
 * Released under the MIT License.
 */
'use strict';

var vue = require('vue');

var script = {
  props: {
    pepcepkey: {
      type: String,
      required: true
    },
    subdomain: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      scriptLoaded: null
    };
  },
  created: function created() {
    var _this = this;

    this.scriptLoaded = new Promise(function (resolve) {
      _this.loadScript(function () {
        resolve();
      });
    });
  },
  methods: {
    loadScript: function loadScript(callback) {
      var script = document.createElement("script");
      script.src = "https://js.pepcep.com/v1";
      document.getElementsByTagName("head")[0].appendChild(script);

      if (script.readyState) {
        // IE
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        // Others
        script.onload = function () {
          callback();
        };
      }
    },
    processPayment: function processPayment() {
      var _this2 = this;

      this.scriptLoaded && this.scriptLoaded.then(function () {
        _this2.initializePepcep();
      });
    },
    initializePepcep: function initializePepcep() {
      window.Pepcep.initialize({
        key: this.pepcepkey,
        subDomain: this.subdomain,
        email: this.email,
        items: this.items
      });
    }
  }
};

var _hoisted_1 = /*#__PURE__*/vue.createTextVNode("Make Payment");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", {
    "class": "pepcepButton",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.processPayment && $options.processPayment.apply($options, arguments);
    })
  }, [vue.renderSlot(_ctx.$slots, "default", {}, function () {
    return [_hoisted_1];
  })]);
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-pepcep", script);
  }
};

module.exports = index;
