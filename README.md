# Pepcep Component for Vue

A Vue Plugin for Pepcep payment gateway.

  
  

### Install

  

#### NPM

```
npm install vue-pepcep
```
#### YARN
```
yarn add vue-pepcep
```

  

#### Javascript via CDN

```javascript 1.8

<!--  Vue  -->

<script  src="https://unpkg.com/vue/dist/vue.js"></script>

<!--  Vue-Pepcep  -->

<script  src="https://unpkg.com/vue-pepcep@1.0.2/dist/index.js"></script>

```

  

### Usage

  

#### Via NPM

  

###### compnent.vue sample

```vue
<template>
	<div>
		<vue-pepcep
			:pepcepkey="pepcepkey"
			:subdomain="subdomain"
			:items="items"
			:email="email">
			Click to Make Payment
		</vue-pepcep>
	</div>
</template>	
<script>
export  default {
	data() {
		return {
			pepcepkey:  "pcp_pk_test_de1c44a927dbd7d1fsandboxbonkers_a",
			subdomain:  "sandbox.pepcep.com",
			items: [
				{ name:  "T-Shirt", amount:  2000 },
				{ name:  "Shoes", amount:  2000 },
			],
			email:  "test@pepcep.com"
		};
	},
};
</script>
```


## Contributing

1. Fork it!

2. Create your feature branch: `git checkout -b feature-name`

3. Commit your changes: `git commit -am 'Some commit message'`

4. Push to the branch: `git push origin feature-name`

5. Submit a pull request 😉

## License
Copyright © 2021, [Adeniran Opeyemi](https://github.com/horpey). 
Released under the [MIT License](https://github.com/Horpey/vue-pepcep/blob/master/LICENSE).

Made with :heart: by [Adeniran Opeyemi](https://horpey-site.web.app)