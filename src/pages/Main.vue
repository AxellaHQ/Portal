<template lang="pug">
router-view
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Main extends Vue {

}
</script>

<style lang="scss" scoped>
#root {
	background: #4C4A48;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>
