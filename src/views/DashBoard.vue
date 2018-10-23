<template lang="pug">
	#status
		.card
			.header チーム結成から
			.main {{ day }}
			.footer 日目
		.card
			.header メンバー数
			.main {{ member }}
			.footer 人
		.card
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
#status {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: left;
	flex-wrap: wrap;
	align-items: left;
	.card {
		background: #fafafa;
		color: #242424;
		padding: 0.8rem;
		margin: 0.8rem;
		text-align: left;
		.header, .footer {
			display: block;
			font-size: 1.2rem;
			color: #404040;
			margin: 1rem 0;
			font-weight: bold;
		}

		.footer {
			display: inline-block;
			margin-left: 0.4rem;
		}
		.main {
			display: inline-block;
			font-size: 3rem;
			font-weight: bold;
		}
	}
}
</style>
