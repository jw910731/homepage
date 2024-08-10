<script lang="ts">
	import IconButton from '$lib/IconButton.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="my-1 flex divide-x">
		<div class="px-6">
			<img class="h-20 w-20 rounded-full" src="img/avatar.jpg" alt="My avatar" />
		</div>
		<div class="px-6">
			<h1 class="text-3xl text-slate-50">吳文元 Jerry Wu</h1>
			<h2 class="text-lg text-gray-300">jw910731</h2>
		</div>
	</div>
	<div class="my-1 flex">
		<IconButton class="mx-2" icon="mdi:blog" href="https://blog.jw910731.me" />
		<IconButton class="mx-2" icon="ic:baseline-facebook" href="https://facebook.com/jw910731" />
		<IconButton class="mx-2" icon="mdi:github" href="https://github.com/jw910731" />
		<IconButton
			class="mx-2"
			icon="mdi:stackoverflow"
			href="https://stackoverflow.com/users/11264533/jw910731"
		/>
		<IconButton class="mx-2" icon="ic:baseline-email" href="mailto:jw910731@gmail.com" />
	</div>
</div>
