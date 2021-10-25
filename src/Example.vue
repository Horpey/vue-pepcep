<template>
  <div>
    <vue-pepcep
      :pepcepkey="pepcepkey"
      :subdomain="subdomain"
      :items="items"
      :email="email"
      >Click to Make Payment</vue-pepcep
    >
  </div>
</template>
<script>
import VuePepcep from "./VuePepcep";

export default {
  components: {
    VuePepcep,
  },
  data() {
    return {
      pepcepkey: "pcp_pk_test_de1c44a927dbd7d1fsandboxbonkers_a",
      subdomain: "sandbox.pepcep.com",
      items: [
        {
          name: "T-Shirt",
          amount: 2000,
        },
        {
          name: "Shoes",
          amount: 2000,
        },
      ],
      email: "test@pepcep.com",
    };
  },
};
</script>
