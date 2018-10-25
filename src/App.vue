<template lang="pug">
#root
	vue-particles(
		color="#fafafa",
		:particleOpacity="0.2",
		:particlesNumber="80",
		shapeType="circle",
		:particleSize="4",
		linesColor="#fafafa",
		:linesWidth="1",
		:lineLinked="true",
		:lineOpacity="0.1",
		:linesDistance="150",
		:moveSpeed="4",
		:hoverEffect="false",
	)
	component(:is="$store.state.signedIn ? 'Main' : 'Welcome'")
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
	public mounted() {
		
	}
}
</script>

<style lang="scss">
@import "./styles/global";

#particles-js {
	position:fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	&, &>canvas {
		z-index: -100;
	}
}

</style>
