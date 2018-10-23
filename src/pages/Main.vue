<template lang="pug">
#root
	.container
		.navbar
			button.hamburger(@click="menuIsVisible = !menuIsVisible" :class="{ active: menuIsVisible }")
				.line-1
				.line-2
				.line-3
		.row
			transition(name="fade" mode="in-out")
				.col-3(v-show="menuIsVisible")
					.menu
						v-menu
			div(:class="menuIsVisible ? 'col-9' : 'col-12'")
				.view-container
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

	.hamburger {
		border: none;
		background: none;
		outline: none;
		height: 2rem;
		box-shadow: 0 0 2px #202020;

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
		transition: all 0.2s ease;
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
</style>
