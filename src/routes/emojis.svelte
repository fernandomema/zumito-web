
<script>
import { onMount } from "svelte";


    const host = import.meta.env.VITE_API_HOST;
    const pageSize = 25;
    let page = 1;
    let emojis = [];

    onMount(async () => {
        emojis = await fetchEmojis();
    });

    const fetchEmojis = async () => {
        const response = await fetch(host + `/api/emojis?page=${page}&size=${pageSize}`);
        const json = await response.json();
        return json;
    };

    const nextPage = async () => {
        page++;
        emojis = await fetchEmojis();
    };

    const previousPage = async () => {
        if(page === 1) return;
        page--;
        emojis = await fetchEmojis();
    };
</script>
<header class="py-5 section-bubble2">
	<div class="container mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold mb-5 text-brand-100 text-center">Emojis</h1>
    </div>
</header>

<section class="bg-brand-100 pb-5">
    <div class="container mx-auto">
        <div class="flex flex-wrap w-full gap-5 justify-center items-center">
            {#each emojis as emoji}
                <div class="flex flex-col justify-center items-center bg-brand-500 rounded-3xl text-brand-200 p-3">
                    <div class="flex w-24 h-24 bg-brand-100 rounded-2xl overflow-hidden">
                        <img class="w-full" src={emoji.url} alt="{emoji.name} emoji">
                    </div>
                    :{emoji.name}:
                </div>
            {/each}
        </div>
        <div class="flex justify-center mt-5">
            <button on:click={previousPage} class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-brand-100 rounded-lg border border-brand-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Previous
            </button>
            <button on:click={nextPage} class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-brand-100 rounded-lg border border-brand-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </div>
</section>


<style lang="scss">
    $spacer-height: 20vw;
	$section1-bg-color: #fbefef;
	$section2-bg-color: #f981a3;
	$section3-bg-color: #fbefef;
	$section4-bg-color: #f981a3;
	$section5-bg-color: #fbefef;

	@mixin bubbles($bubbles-type, $color) {
		@if $bubbles-type == a {
			background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#{url-friendly-colour($color)}' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
		} @else if $bubbles-type == b {
			background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='#{url-friendly-colour($color)}'/></svg>");
		}
	}

	@mixin section-bubble-with-colors($bubble-type, $currentcolor, $nextcolor) {
		@extend .section-bubble;
		background-color: $currentcolor;

		&:after {
			background-color: $nextcolor;

			@include bubbles($bubble-type, $currentcolor);
		}
	}

	@function url-friendly-colour($colour) {
		@return '%23' + str-slice('#{$colour}', 2, -1);
	}

	.section-bubble {
		margin-bottom: $spacer-height;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			bottom: 0;

			width: 100%;
			height: $spacer-height;
			background: url('') green; // needs to be next sections background
			background-size: 100%;

			transform: translate(0, 100%);
		}
	}

	.section-bubble1 {
		@include section-bubble-with-colors(a, $section1-bg-color, $section2-bg-color);
	}

	.section-bubble2 {
		@include section-bubble-with-colors(b, $section2-bg-color, $section3-bg-color);
        color: white;
	}

	.section-bubble3 {
		@include section-bubble-with-colors(a, $section3-bg-color, $section4-bg-color);
	}

	.section-bubble4 {
		@include section-bubble-with-colors(b, $section4-bg-color, $section5-bg-color);
	}

	.section-bubble5 {
		background: $section5-bg-color;
		color: white;

		text-align: center;
	}

	//$bubbles-a: '<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1185 248"><g fill="#FF8787"><circle cx="76" cy="121.1" r="20"/><circle cx="870" cy="201.1" r="11"/><circle cx="814.5" cy="165.6" r="24.5"/><path d="M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z"/></g></svg>';
	//$bubbles-b: '<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1" viewBox="0 0 1185 248"><path fill="#0012B7" d="M51 200c112 0 87-49 188-59s147 38 220 38 108-22 211-69c102-48 274-9 424 69 38 19 68 37 91 51V0H0v193c15 4 32 7 51 7zm1058-93c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zM371 58a25 25 0 1 1-1 49 25 25 0 0 1 1-49zm-56-22c6 0 11 5 11 11s-5 11-11 11-11-5-11-11 5-11 11-11z"/></svg>';

	.section-bubble_type-a {
		@extend .section-bubble;

		&:after {
			//background-image: url('http://localhost:3000/~rinu/rinu/wp-content/themes/siebzehn/static/images/bubbles.svg');
			background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
		}
	}

	.section-bubble_type-b {
		@extend .section-bubble;

		&:after {
			background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='red'/></svg>");
		}
	}
</style>