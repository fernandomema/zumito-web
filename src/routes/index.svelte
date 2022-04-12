<script>
	import { session } from '$app/stores';

	console.log($session);
</script>

<main style="height: min-content;" class="my-auto w-full bg-brand-200" >

	<div class="bg-burger bg-top pt-0.5 pb-32 hidden md:block">
		<div class="mt-8 flex">
			<img class="h-44 mx-auto" src="https://cdn.discordapp.com/avatars/878950861122985996/d05ce5c0de25fd9afb4f5492f31f21fe.webp?size=1024" alt="Zumito logo"/>
		</div>
		<!-- menu -->
		<nav class="mt-10 flex">
			<ul class="triangle-menu bg-brand-500 text-white uppercase font-semibold h-8 inline-flex mx-auto items-center">
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
		</nav>
	</div>
</main>
<section class="py-5 section-bubble1">
    <div class="container">
        <h1>
            Section1
        </h1>
        <p>
            A test paragraph.
        </p>
    </div>
</section>
<section class="py-5 section-bubble2">
    <div class="container">
        <h1>
            Section2
        </h1>
        <p>
            A test paragraph.
        </p>
    </div>
</section>
<section class="py-5 section-bubble3">
    <div class="container">
        <h1>
            Section3
        </h1>
        <p>
            A test paragraph.
        </p>
    </div>
</section>
<section class="py-5 section-bubble4">
    <div class="container">
        <h1>
            Section4
        </h1>
        <p>
            A test paragraph.
        </p>
    </div>
</section>
<section class="py-5 section-bubble5">
    <div class="container">
        <h1>
            The footer
        </h1>
        <p>
            A test paragraph.
        </p>
        <br /><br /><br /><br />
    </div>
</section>

<style>

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
</style>
