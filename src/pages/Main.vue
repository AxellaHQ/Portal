<template lang="pug">
#main
	.container
		header.navbar
			button.hamburger(@click="menuIsVisible = !menuIsVisible" :class="{ active: menuIsVisible }")
				.line-1
				.line-2
				.line-3
			h1 Axella
		.row
			transition(name="slide" mode="in-out")
				nav.col-3(v-show="menuIsVisible")
					.menu.window
						v-menu(@selected="selected()")
			div(:class="menuIsVisible ? 'col-9' : 'col-12'")
				main.view-container
					transition(name="fade" mode="out-in")
						router-view
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VMenu from "@/components/Menu.vue";

@Component({
	components: { VMenu },
})
export default class Main extends Vue {
	private menuIsVisible = false;

	private prevInnerWidth = 0;

	// 768px をPC, タブレットの解像度かそうでないかのボーダーとする
	private readonly threshold = 768;

	public mounted() {
		this.menuSnap();
	}

	public menuSnap() {
		if (this.prevInnerWidth >= this.threshold && window.innerWidth < this.threshold) {
			// しきい値より小さくなった瞬間メニューを非表示
			this.menuIsVisible = false;
		} else if (this.prevInnerWidth <= this.threshold && window.innerWidth > this.threshold) {
			// しきい値より大きくなった瞬間メニューを表示
			this.menuIsVisible = true;
		}

		this.prevInnerWidth = window.innerWidth;
		setTimeout(this.menuSnap, 100);
	}

	public selected() {
		if (window.innerWidth < this.threshold) {
			this.menuIsVisible = false;
		}
	}
}
</script>

<style lang="scss" scoped>
$grow-color: #00bcd4;
$grows: 0 0px 16px $grow-color, 0 0px 16px $grow-color inset;
#main {
	height: 100vh;
	display: flex;

	justify-content: stretch;

	.container {
		 margin: 0;
		 padding: 0;
		 width: 100%;
		 max-width: 100%;
	}

	.navbar {
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 0 2rem;
		background: none;
		margin-bottom: 1rem;
		height: 4rem;
		border-bottom: 1px solid $grow-color;
		box-shadow: 0 0 8px $grow-color;

		.hamburger {
			border: none;
			background: none;
			display: none;
			outline: none;
			height: 2rem;
			transform: translateX(-100%);
			opacity: 0;
			margin-right: 1rem;
			transition: all 0.2s ease;

			&:hover {
				box-shadow: 0 0 8px $grow-color;
			}

			&:active {
				box-shadow: 0 0 1px $grow-color;
			}

			&.active {
				box-shadow: 0 0 6px $grow-color inset, 0 0 6px $grow-color;
			}

			.line-1, .line-2, .line-3 {
				display: block;
				width: 16px;
				height: 2px;
				margin: 4px 2px;
				padding: none;
				box-shadow: $grows;
			}
		}
		h1 {
			font-size: 1.2rem;
			color: #fafafa;
		}
	}

	.menu {
	}

	.view-container {
	}
}

.fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active {
  transition: all .1s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  opacity: 0;
}

.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  transform: scale(0, 0);
  transform-origin: 50% 50%;
  opacity: 0;
}

@media screen and (max-width: 768px) {
	.menu {
		position: absolute;
		background: #004749;
		left: .5rem;
		right: .5rem;
		padding: .5rem;
		margin: .5rem;
	}

	.hamburger {
		display: block !important;
		transform: none !important;
		opacity: 1 !important;
	}

	nav.col-3 {
		padding: 0;
		margin: 0;
	}
}

</style>
