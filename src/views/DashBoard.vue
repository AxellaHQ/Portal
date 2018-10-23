<template lang="pug">
	p サークル結成から今日で{{ day }}日目
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashBoard extends Vue {
	private day = 0;

	public mounted() {
		this.day = 300;
	}
}
</script>

<style lang="scss" scoped>
#root {
	background: #4C4A48;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>
