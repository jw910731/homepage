<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string;
	export let href: string;
	let clazz: string;
	export { clazz as class };
</script>

<a {href} class={clazz}><Icon {icon} class="h-8 w-8 text-slate-50" /></a>
