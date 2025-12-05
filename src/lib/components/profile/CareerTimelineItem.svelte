<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string = '';
	export let date: string = '';
</script>

<div class="ml-6">
	<span
		class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 ring-8 ring-sky-900"
	>
		<slot name="icon">
			<Icon icon="ix:work-case-filled" class="h-4 w-4 text-white" />
		</slot>
	</span>
	<h3 class="mb-1 flex items-center text-lg font-semibold text-white">
		<slot name="title">{title}</slot>
	</h3>
	<time class="mb-2 block text-sm leading-none font-normal text-sky-200">
		<slot name="date">{date}</slot>
	</time>
	<div class="mb-4 text-base font-normal text-gray-300">
		<slot />
	</div>
</div>
