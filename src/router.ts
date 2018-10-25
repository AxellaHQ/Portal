import Vue from "vue";
import Router from "vue-router";
import Status from "@/views/DashBoard.vue";
import Wip from "@/views/Wip.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "status",
			component: Status,
		},
		{
			path: "/me",
			name: "me",
			component: Wip,
			props: {
				desc: "アカウントページでは、あなたのアカウント情報を詳しく確認できます。また、アカウント情報の編集をしたり、公開範囲のカスタマイズも行えます。",
			}
		},
		{
			path: "/drive",
			name: "drive",
			component: Wip,
			props: {
				desc: "Axella Driveでは、１人1GBのクラウドドライブを自由に使えます。ウェブフォルダーにファイルを入れるだけで、ウェブサイトの公開もできるので、ご自由にお使いください(php, cgiなどは動作しません)。",
			}
		},
		{
			path: "/download",
			name: "download",
			component: Wip,
			props: {
				desc: "ダウンロードページでは、Axellaが提供する素材などのデータをダウンロードできます。",
			}
		},
		{
			path: "/setting",
			name: "setting",
			component: Wip,
			props: {
				desc: "設定ページでは、ポータルのUIや、言語設定などを行えます。",
			}
		},
	],
});
