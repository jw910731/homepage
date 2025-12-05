<script lang="ts">
	import { resolve } from '$app/paths';
	import { projects } from '$lib/data/projects';
	import { slide } from 'svelte/transition';
	export let isOpen: boolean;
	let isProjectsMenuOpen = true;
</script>

<aside class="z-20 w-64 flex-shrink-0 overflow-y-auto bg-sky-900 md:block" class:hidden={!isOpen}>
	<div class="py-4 text-white">
		<a class="ml-6 text-lg font-bold text-white" href={resolve('/')}> My Portfolio </a>
		<ul class="mt-6">
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
					href={resolve('/')}
				>
					Home
				</a>
			</li>
			{#if projects.length > 0}
				<li class="relative px-6 py-3">
					<button
						class="inline-flex w-full items-center justify-between text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
						on:click={() => (isProjectsMenuOpen = !isProjectsMenuOpen)}
					>
						<span>Projects</span>
						<svg
							class="h-4 w-4"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							class:rotate-180={isProjectsMenuOpen}
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
					{#if isProjectsMenuOpen}
						<ul
							class="mt-2 space-y-2 overflow-hidden rounded-md bg-sky-950 p-2 text-sm font-medium text-white shadow-inner"
							transition:slide={{ duration: 150 }}
						>
							{#each projects as project (project.slug)}
								<li class="px-2 py-1 transition-colors duration-150 hover:text-gray-200">
									<a class="w-full" href={`/projects/${project.slug}`}>{project.name}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/if}
		</ul>
	</div>
</aside>
