<script lang="ts">
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Header from '$lib/components/sidebar/Header.svelte';
	import '../app.css';
	let isSidebarOpen = true;
</script>

<div class="flex h-screen bg-sky-800">
	<Sidebar bind:isOpen={isSidebarOpen} />
	<div class="flex w-full flex-1 flex-col">
		<Header on:toggle-sidebar={() => (isSidebarOpen = !isSidebarOpen)} />
		<main class="h-full overflow-y-auto bg-sky-800">
			<div class="container mx-auto grid px-6">
				<slot />
			</div>
		</main>
	</div>
</div>
