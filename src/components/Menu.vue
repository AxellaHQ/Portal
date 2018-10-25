<template lang="pug">
#menu
	.menu-container
		router-link.item(to="/" @click.native="$emit('selected')") ステータス
		router-link.item(to="/me" @click.native="$emit('selected')") アカウント
		router-link.item(to="/drive" @click.native="$emit('selected')") Axella Drive
		router-link.item(to="/download" @click.native="$emit('selected')") ダウンロード
		router-link.item(to="/setting" @click.native="$emit('selected')") 設定
	
	a.danger(href="#", @click="logout($event)") ログアウト

</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
})
export default class Menu extends Vue {
	public logout(e: MouseEvent) {
		e.preventDefault();
		this.$store.dispatch("logout");
	}
}
</script>

<style lang="scss" scoped>
$grow-color: #00bcd4;
$grows: 0 0px 16px $grow-color, 0 0px 16px $grow-color inset;
.menu-container {
	margin: -1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	margin-bottom: 4rem;

	.item {
		padding: 1rem;
		text-decoration: none;
		&.router-link-exact-active {
			padding-left: 1.4rem;
			background: rgba(#fafafa, 0.1);
			//border-radius: 6px;
		}

		transition: all 0.2s ease;
	}
}

.danger {
	display: block;
	margin: -0.5rem;
	height: 3rem;
	text-decoration: none;
	font-weight: bold;
	color: #f44336;
}

</style>
