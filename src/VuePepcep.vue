<template>
  <button class="pepcepButton" @click="processPayment">
    <slot>Make Payment</slot>
  </button>
</template>
<script type="text/javascript">
export default {
  props: {
    pepcepkey: {
      type: String,
      required: true,
    },
    subdomain: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      scriptLoaded: null,
    };
  },
  created() {
    this.scriptLoaded = new Promise((resolve) => {
      this.loadScript(() => {
        resolve();
      });
    });
  },
  methods: {
    loadScript(callback) {
      const script = document.createElement("script");
      script.src = "https://js.pepcep.com/v1";
      document.getElementsByTagName("head")[0].appendChild(script);
      if (script.readyState) {
        // IE
        script.onreadystatechange = () => {
          if (
            script.readyState === "loaded" ||
            script.readyState === "complete"
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        // Others
        script.onload = () => {
          callback();
        };
      }
    },
    processPayment() {
      this.scriptLoaded &&
        this.scriptLoaded.then(() => {
          this.initializePepcep();
        });
    },
    initializePepcep() {
      window.Pepcep.initialize({
        key: this.pepcepkey,
        subDomain: this.subdomain,
        email: this.email,
        items: this.items,
      });
    },
  },
};
</script>
