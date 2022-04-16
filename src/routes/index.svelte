<script>
	import { session } from '$app/stores';
    import CallToActionA from '$lib/components/landing/callToActionA.svelte';
    import Chat from '$lib/components/landing/chat.svelte';
    import Commands from '$lib/components/landing/commands.svelte';
    import Memes from '$lib/components/landing/memes.svelte';
    import Menu from '$lib/components/landing/menu.svelte';
    import Stats from '$lib/components/landing/stats.svelte';
    import Testimonials from '$lib/components/landing/testimonials.svelte';

    let menuOpen;

	console.log($session);

    let toggleMenu = function() {
        menuOpen = !menuOpen;
    }
</script>

<section style="height: min-content;" class="py-5 section-bubble1 my-auto w-full bg-brand-200">
	<div class="bg-burger bg-top py-32">
        <div class="mt-8 flex">
            <img
                class="h-44 mx-auto"
                src="https://cdn.discordapp.com/avatars/878950861122985996/d05ce5c0de25fd9afb4f5492f31f21fe.webp?size=1024"
                alt="Zumito logo"
            />
        </div>
        <!-- menu -->
        <nav class="mt-10 flex relative">
            <ul class="triangle-menu bg-brand-500 text-white uppercase font-semibold h-8 mx-auto items-center hidden md:inline-flex" >
                <li class="px-6">
                    <a href="/commands">Commands</a>
                </li>
                <span>/</span>
                <li class="px-6">
                    <a href="/emojis">Emojis</a>
                </li>
                <span>/</span>
                <li class="px-6">
                    <a href="https://github.com/fernandomema/zumito">Source code</a>
                </li>
                <span>/</span>
                <li class="px-6">
                    <a href="/dashboard">Dashboard</a>
                </li>
            </ul>
            <ul on:click={toggleMenu} class="triangle-menu bg-brand-500 text-white uppercase font-semibold h-8 mx-auto items-center inline-flex md:hidden" >
                <li class="px-6">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </span>
                </li>
            </ul>
            <div class="absolute top-0 w-full z-10 drop-shadow-2xl">
                <Menu bind:open={menuOpen} />
            </div>
            
        </nav>
    </div>
</section>
<section class="py-5 section-bubble2">
    <div class="container mx-auto">
        <Commands />
    </div>
</section>
<section class="py-5 section-bubble3">
	<div class="container mx-auto flex flex-col md:flex-row justify-evenly">
        <div class="flex flex-col justify-center text-center md:text-left">
            <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Talk to our<br>Zumito chatbot.</h1>
            <h3 class="text-xl mb-5 font-light">Zumito will always want to talk with you.</h3>
        </div>
		<Chat />
	</div>
</section>
<section class="py-5 section-bubble4">
	<Memes />
</section>
<section class="py-5 section-bubble1">
    <div class="container mx-auto">
        <Stats />
    </div>
</section>
<section class="py-5 section-bubble2">
    <div class="container mx-auto">
        
    </div>
</section>
<section class="py-5 section-bubble3">
	<Testimonials />
</section>
<section class="py-5 section-bubble4">
    <div class="container mx-auto">
        <CallToActionA />
    </div>
</section>

<style lang="scss">
	.triangle-menu {
		position: relative;
	}

	.triangle-menu::after,
	.triangle-menu::before {
		content: '';
		height: 0;
		width: 0;
		border-style: solid;
		border-width: 16px;
		position: absolute;
	}

	.triangle-menu::after {
		left: 100%;
		border-color: transparent transparent transparent theme('colors.brand.500');
	}

	.triangle-menu::before {
		right: 100%;
		border-color: transparent theme('colors.brand.500') transparent transparent;
	}

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
