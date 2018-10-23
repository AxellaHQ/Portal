<template lang="pug">
#root
	.container
		header.navbar
			button.hamburger(@click="menuIsVisible = !menuIsVisible" :class="{ active: menuIsVisible }")
				.line-1
				.line-2
				.line-3
			h1 Axella
		.row
			transition(name="fade" mode="in-out")
				nav.col-3(v-show="menuIsVisible")
					.menu
						v-menu(@selected="selected()")
			div(:class="menuIsVisible ? 'col-9' : 'col-12'")
				main.view-container
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
		window.addEventListener("resize", (ev) => {
			if (this.prevInnerWidth < this.threshold && window.innerWidth < this.threshold) {
				// しきい値より小さくなった瞬間メニューを非表示
				this.menuIsVisible = false;
			} else if (this.prevInnerWidth > this.threshold && window.innerWidth > this.threshold) {
				// しきい値より小さくなった瞬間メニューを表示
				this.menuIsVisible = true;
			}

			this.prevInnerWidth = window.innerWidth;
		});
	}

	public selected() {
		if (window.innerWidth < this.threshold) {
			this.menuIsVisible = false;
		}
	}
}
</script>

<style lang="scss" scoped>

#root {
	color: white;
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
		background: #fafafa;
		height: 4rem;
		
		.hamburger {
			border: none;
			background: none;
			outline: none;
			height: 2rem;
			margin-right: 1rem;
			box-shadow: 0 0 2px #202020;
			transition: all 0.2s ease;

			&:hover {
				box-shadow: 0 0 8px #202020;
			}

			&:active {
				box-shadow: 0 0 1px #202020;
			}

			&.active {
				box-shadow: 0 0 2px #202020 inset;
			}

			.line-1, .line-2, .line-3 {
				display: block;
				width: 16px;
				height: 1px;
				background: #242424;
				margin: 4px 2px;
				padding: none;
			}
		}
		h1 {
			font-size: 1.2rem;
			font-weight: 100;
			color: #FF5722;
		}
	}

	.menu {
		padding: 0.4rem;
		background: #fafafa;
	}

	.view-container {
		color: #242424;
		padding: 0.4rem;
		background: #fafafa;
		transition: all .2s ease-out;
	}
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}

@media screen and (max-width: 768px) {
	.menu {
		position: absolute;
		left: 0;
		right: 0;
		padding: 0;
		margin: 0;
	}

	nav.col-3 {
		padding: 0;
		margin: 0;
	}
	
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		position: absolute;
		z-index: 1;
		opacity: 0;
		}
}

</style>
