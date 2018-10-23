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
		},
		{
			path: "/drive",
			name: "drive",
			component: Wip,
		},
		{
			path: "/download",
			name: "download",
			component: Wip,
		},
		{
			path: "/setting",
			name: "setting",
			component: Wip,
		},
	],
});
