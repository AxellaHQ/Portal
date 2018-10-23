<template>
	<component :is="$store.state.signedIn ? 'Main' : 'Welcome'"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@/pages/Main.vue";
import Welcome from "@/pages/Welcome.vue";
import "normalize.css";
@Component({
	components: {
		Main,
		Welcome,
	},
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "./styles/global";
</style>
