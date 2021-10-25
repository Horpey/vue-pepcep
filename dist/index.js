/*!
 * vue-pepcep v1.0.2
 * (c) Adeniran Opeyemi
 * Released under the MIT License.
 */
'use strict';

//
//
//
//
//
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
      scriptLoaded: null,
      defaultText: 'Make Payment'
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "pepcepButton",
    on: {
      "click": _vm.processPayment
    }
  }, [_vm._t("default", function () {
    return [_vm._v(_vm._s(_vm.defaultText))];
  })], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-pepcep", __vue_component__);
  }
};

module.exports = index;
