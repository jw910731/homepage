<script lang="ts">
	import CareerTimeline from '$lib/components/profile/CareerTimeline.svelte';
	import CareerTimelineItem from '$lib/components/profile/CareerTimelineItem.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="my-6 flex items-center">
	<img class="h-20 w-20 rounded-full object-cover" src="/img/avatar.jpg" alt="My avatar" />
	<div class="ml-4">
		<h1 class="text-3xl text-slate-50">吳文元 Jerry Wu</h1>
		<h2 class="text-lg text-gray-300">jw910731</h2>
	</div>
</div>

<div class="mb-8 flex">
	<IconButton class="mx-2" icon="mdi:billboard" href="https://blog.jw910731.me" />
	<IconButton class="mx-2" icon="ic:baseline-facebook" href="https://facebook.com/jw910731" />
	<IconButton class="mx-2" icon="mdi:github" href="https://github.com/jw910731" />
	<IconButton
		class="mx-2"
		icon="mdi:stackoverflow"
		href="https://stackoverflow.com/users/11264533/jw910731"
	/>
	<IconButton class="mx-2" icon="ic:baseline-email" href="mailto:jw910731@gmail.com" />
</div>

<div class="mb-8 rounded-lg bg-sky-900 px-4 py-3 shadow-md">
	<h2 class="mb-2 text-lg font-semibold text-white">About Me</h2>
	<p class="text-white">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus,
		magna ac interdum commodo, nulla risus scelerisque quam, sed mollis risus nisi eget augue.
		Pellentesque et enim vel justo commodo bibendum.
	</p>
</div>

<div class="mb-8 rounded-lg bg-sky-900 px-4 py-3 shadow-md">
	<h2 class="mb-4 text-lg font-semibold text-white">Career</h2>
	<CareerTimeline>
		<CareerTimelineItem date="1970/01 - 2038/03" title="Placeholder">
			<div slot="icon">
				<Icon icon="mdi:rocket" class="h-4 w-4 text-white" />
			</div>
			<p>Lorem ipsum</p>
		</CareerTimelineItem>
	</CareerTimeline>
</div>
