<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<header class="z-10 bg-sky-900 py-4">
	<div
		class="container mx-auto flex h-full items-center justify-between px-6 text-purple-600 dark:text-purple-300"
	>
		<!-- Mobile hamburger -->
		<button
			class="focus:shadow-outline-purple mr-5 -ml-1 rounded-md p-1 focus:outline-none md:hidden"
			on:click={() => dispatch('toggle-sidebar')}
			aria-label="Menu"
		>
			<svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</header>
