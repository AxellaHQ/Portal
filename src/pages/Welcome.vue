<template lang="pug">
#welcome
	img(src="@/assets/primary_logo.png" alt="Axella")
	input(type="text", placeholder="Your ID", v-model="name")
	input(type="password", placeholder="Password", v-model="password")
	button(@click="login", :disabled="!canLogin") ãƒ­ã‚°ã‚¤ãƒ³
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@/pages/Main.vue";
import Welcome from "@/pages/Welcome.vue";

@Component({
})
export default class Index extends Vue {
	private name = "";
	private password = "";

	public get canLogin() { return !!this.name && !!this.password; }

	/**
	 * login
	 */
	public login() {
		this.$store.dispatch("login", {
			userName: this.name,
			password: this.password,
		});
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
}
#welcome {
	margin: auto;
	background: linear-gradient(#B2DFDB 60%, #009688);
	position: relative;
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-wrap: nowrap;

	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		max-width: 25rem;
		width: 25rem;
		height: auto;
	}

	* {
		margin-bottom: 2rem;
		font-size: 16px;
	}

	input[type="text"], input[type="password"] {
		padding: 0.8rem;
		border: none;
		border-bottom: 2px solid #424242;
		background: transparent;

		&:focus {
			background: #fafafa;
			border-color: #009688;
		}

		&:hover {
			box-shadow: 0 0 3px #757575;
		}
		outline: none;
		transition: all 0.1s ease-out;
	}

	button {
		background: #2196F3;
		color: #fafafa;
		padding: 0.8rem;
		box-shadow: 0 0 12px #757575;
		border: none;
		transition: all 0.1s ease-out;
		outline: none;

		&:hover {
			box-shadow: 0 0 24px #757575;
		}

		&:active {
			box-shadow: 0 0 2px #757575;
			background: #64B5F6;
		}

		&:disabled {
			box-shadow: none;
			background: #757575;
		}
	} 

}
</style>
