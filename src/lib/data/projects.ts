export interface Project {
	slug: string;
	name: string;
	description: string;
}

// Use Vite's import.meta.glob to find all project pages.
// { eager: true } imports the modules synchronously so we can access their exports.
const modules = import.meta.glob('/src/routes/projects/*/+page.{svelte,md}', { eager: true });

export const projects: Project[] = Object.entries(modules).map(
	([path, module]: [string, unknown]) => {
		// Extract slug from path: /src/routes/projects/my-project/+page.svelte -> my-project
		const slug = path.split('/')[4];

		// Get metadata from the module export, or fallback to a formatted slug
		const metadata =
			(module as { metadata: { title: string; description: string } }).metadata || {};
		const name = metadata.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
		const description = metadata.description || 'No description provided.';

		return {
			slug,
			name,
			description
		};
	}
);
