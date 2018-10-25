<template lang="pug">
#welcome
	img(src="@/assets/primary_logo.png" alt="Axella")
	input(type="text", placeholder="Your ID", v-model="name")
	input(type="password", placeholder="Password", v-model="password")
	button(@click="login", :disabled="!canLogin") ログイン
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
$grow-color: #00bcd4;
$grows: 0 0px 16px $grow-color, 0 0px 16px $grow-color inset;
$off-color: #BDBDBD;
$off: 0 0px 16px $off-color, 0 0px 16px $off-color inset;
#welcome {
	margin: auto;
	position: relative;
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-wrap: nowrap;

	align-items: center;
	justify-content: center;
	flex-direction: column;

	* {
		margin-bottom: 2rem;
	}

	img {
		max-width: 25rem;
		width: 25rem;
		filter: drop-shadow(0 0 16px #242424);
		height: auto;
	}

	input[type="text"], input[type="password"] {
		padding: 0.8rem;
		border: none;
		border-radius: 8px;
		color: #fafafa;
		outline: none;
		transition: all 0.25s ease-out;
		background: transparent;
		box-shadow: $off;

		&:focus {
			box-shadow: $grows;
			border-radius: 16px;
		}
		&::placeholder {
			color: #BDBDBD;
		}

	}

	button {
		background: rgba(#fff, 0.1);
		color: #fafafa;
		padding: 0.8rem;
		box-shadow: $grows;
		border-radius: 8px;
		border: none;
		transition: all 0.1s ease-out;
		outline: none;

		&:hover {
			border-radius: 16px;
		}

		&:active {
			background: #64B5F6;
		}

		&:disabled {
			box-shadow: none;
			background: transparent;
			color: #757575;
		}
	} 

}
</style>
