<template lang="pug">
	#status
		.card.window
			.header チーム結成から
			.main {{ day }}
			.footer 日目
		.card.window
			.header メンバー数
			.main {{ member }}
			.footer 人
		.card.window
			.header.bold お知らせ
			p Axella ポータルができました！まだ機能は少ないですが、メンバーのために開発を続けています！
			p 要望は
				a(href="https://github.com/axellahq/portal/issues") Issues
				| よりお願いします！
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashBoard extends Vue {
	private day = 0;

	private member = 24;

	public mounted() {
		this.day = 300;
	}
}
</script>

<style lang="scss" scoped>
$grow-color: #00bcd4;
#status {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: left;
	flex-wrap: wrap;
	align-items: left;
	.card {
		margin-bottom: 2rem;
		text-align: left;
		font-weight: 100;
		.header, .footer {
			display: block;
			font-size: 1.4rem;
			margin: 1rem 0;
		}

		.footer {
			display: inline-block;
			margin-left: 0.4rem;
		}
		.main {
			display: inline-block;
			font-size: 3rem;
		}
	}
}
</style>
