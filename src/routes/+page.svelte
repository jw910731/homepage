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
	<IconButton class="mx-2 prose prose-invert" icon="mdi:billboard" href="https://blog.jw910731.me"> Blog </IconButton>
	<IconButton class="mx-2" icon="ic:baseline-facebook" href="https://facebook.com/jw910731" />
	<IconButton class="mx-2" icon="mdi:github" href="https://github.com/jw910731" />
	<IconButton
		class="mx-2"
		icon="mdi:stackoverflow"
		href="https://stackoverflow.com/users/11264533/jw910731"
	/>
	<IconButton class="mx-2" icon="ic:baseline-email" href="mailto:jw910731@gmail.com" />
    <IconButton class="mx-2 prose prose-invert" icon="mdi:biography" href="/resume.pdf">Resume</IconButton> 
</div>

<div class="mb-8 rounded-lg bg-sky-900 px-4 py-3 shadow-md">
	<h2 class="mb-2 text-lg font-semibold text-white">About Me</h2>
	<p class="text-white">
		I am an enthusiast of problem solving. Always seeks for best solution of problems encountered in life, work, or researches in spare time. Good at using debug tools and working with large codebase with mixture of several frameworks or tools to solve difficult problem.
	</p>
</div>

<div class="mb-8 rounded-lg bg-sky-900 px-4 py-3 shadow-md">
	<h2 class="mb-4 text-lg font-semibold text-white">Career</h2>
	<CareerTimeline>
        <CareerTimelineItem date="2025/08 - Present" title="Graid Tech - Software Engineer (Product Interface)">
            <ul class="list-disc ml-5">
                <li>Developing and debugging linux kernel driver related to GPU driven RAID device</li>
                <li>Improving clangd setup to </li>
            </ul>
        </CareerTimelineItem>
        <CareerTimelineItem date="2025/05 - 2025/07" title="Apple - Embedded Software Engineering Intern">
            <div slot="icon">
                <Icon icon="ic:baseline-apple" class="h-4 w-4 text-white" />
            </div>
            <p>Develop internal flash tools and </p>
        </CareerTimelineItem>
        <CareerTimelineItem date="2023/12 - 2025/05" title="Appier - Backend Software Engineer Intern">
            <p>Optimize Trino database by using bit vectorize query. Saves 56% of CPU time, and 39% of wall time.</p>
        </CareerTimelineItem>
        <CareerTimelineItem date="2023/07 - 2023/11" title="Leju - Backend Software Engineer Intern">
            <p>Introduce Datadog as logging solution to replace MySQL based logging system. Significantly speed up bug fix workflow and improves development experience.</p>
        </CareerTimelineItem>
	</CareerTimeline>
</div>
