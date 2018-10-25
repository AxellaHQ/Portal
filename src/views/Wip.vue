<template lang="pug">
#root
	h1 Work in progress!
	p(v-if="desc") {{ desc }}
	p この機能は現在、鋭意開発中です！しばしお待ち下さい。
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VMenu from "@/components/Menu.vue";

@Component
export default class Wip extends Vue {
	@Prop() desc: string;
}
</script>
