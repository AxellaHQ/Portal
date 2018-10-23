import Vue from "vue";
import Router from "vue-router";
import DashBoard from "@/views/DashBoard.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "dashboard",
			component: DashBoard,
		},
	],
});
