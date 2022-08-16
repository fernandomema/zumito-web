<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.scss';

	export let url;
</script>

<PageTransition {url}>
    <slot />
</PageTransition>
