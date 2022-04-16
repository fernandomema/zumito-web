<script>
	import { session } from '$app/stores';
import { onMount } from 'svelte';

    onMount(async () => {
        if (!$session?.user) document.location.href = "/api/auth/signin";
    });
    
</script>

<div class="flex min-h-screen text-gray-900">
	<aside class="hidden lg:block w-100 lg:w-88 flex-shrink-0">
		<header class="mt-16 flex justify-center">
			<div class="flex justify-between items-center w-56">
				<span class="text-3xl font-bold pb-1">Interface</span>
			
				<button class="bg-brand-100 text-blue-800 w-14 h-14 ml-8 rounded-full flex items-center justify-center">
				<i data-feather="command"></i>
			</button>
			</div>
		</header>
		
		<nav class="mt-20 flex justify-center max-w-full">
			<div class="flex justify-between items-center w-56">
				<ul class="w-full">
					<li class="active">
						<a href="#" class="flex rounded-xl p-1 items-center">
							<span class="icon-container text-brand-500 p-4 rounded-xl">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-server" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <rect x="3" y="4" width="18" height="8" rx="3"></rect>
                                    <rect x="3" y="12" width="18" height="8" rx="3"></rect>
                                    <line x1="7" y1="8" x2="7" y2="8.01"></line>
                                    <line x1="7" y1="16" x2="7" y2="16.01"></line>
                                </svg>
							</span>
							
							<span class="font-medium">Guilds</span>
						</a>
					</li>
					<li class="mt-3">
						<a href="#" class="flex rounded-xl p-1 items-center">
							<span class="icon-container text-brand-500 p-4 rounded-xl">
								<i data-feather="user" width="24" height="24"></i>
							</span>
							
							<span class="font-medium text-gray-600">Profile</span>
						</a>
					</li>
					<li class="mt-3">
						<a href="#" class="flex rounded-xl p-1 items-center">
							<span class="icon-container text-brand-500 p-4 rounded-xl">
								<i data-feather="sliders" width="24" height="24"></i>
							</span>
							
							<span class="font-medium text-gray-600">Settings</span>
						</a>
					</li>
					<li class="mt-3">
						<a href="#" class="flex rounded-xl p-1 items-center">
							<span class="icon-container text-brand-500 p-4 rounded-xl">
								<i data-feather="upload-cloud" width="24" height="24"></i>
							</span>
							
							<span class="font-medium text-gray-600">Cloud</span>
						</a>
					</li>
					<li class="mt-3">
						<a href="#" class="flex rounded-xl p-1 items-center">
							<span class="icon-container text-brand-500 p-4 rounded-xl">
								<i data-feather="message-circle" width="24" height="24"></i>
							</span>
							
							<span class="font-medium text-gray-600">Message</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		
		<section class="flex flex-col justify-center items-center mt-16 bg-brand-100 mx-4 rounded-2xl py-12">
			<a href="#" class="flex rounded-xl p-1 items-center w-56 bg-brand-100">
				<span class="icon-container text-purple-700 bg-brand-100 p-4 rounded-xl">
					<i data-feather="plus" width="24" height="24"></i>
				</span>

				<span class="ml-6 font-medium text-lg">New item</span>
			</a>
			
			<p class="font-medium text-gray-500 w-56 mt-6 mb-0 text-center">Click '+' to create your<br> new items.</p>
		</section>
	</aside>
	
	<section class="bg-brand-100 flex-grow rounded-3xl">
		
		<main class="mt-10 flex-row lg:flex">
			<section class="w-full lg:w-1/2 px-8 xl:pl-24 xl:pr-12 flex flex-col">
				<header>
					<h1 class="text-7xl font-bold">Hello <span class="capitalize">{$session?.user?.username}</span>!</h1>
					<p class="text-3-5xl text-gray-700">Have a nice day at work <span class="text-3xl">😊</span></p>
				</header>
				
				<section class="mt-20 flex justify-between items-center">
					<div class="bg-white rounded-1xl">
						<button class="bg-purple-700 text-white text-xl rounded-1xl h-20 w-56">Your Pro</button>
						<button class="text-gray-500 text-xl rounded-1xl h-20 w-56">Your Portfolio</button>
					</div>
					
					<div>
						<button class="bg-white h-20 w-20 rounded-1xl flex justify-center items-center shadow-2xl">
							<i class="text-purple-800" data-feather="more-horizontal" width="28" height="28"></i>
						</button>
					</div>
				</section>
			</section>
			
			<section class="w-full lg:w-1/2 px-8 xl:pr-24 xl:pl-12 flex"></section>
		</main>
	</section>
</div>

<style>
    li.active a {
	background-color: #f6e2eb;
}

li.active a .icon-container {
	background-color: #fbf0f6;
}

.search-icon {
	top: 15px;
	right: 1.3rem;
}

.badge {
	top: -5px;
	right: -5px;
}

@media (min-width: 1600px) {
	.break-1600 {
		
	}
}

/* Extend Tailwind */
.w-14 { width: 3.5rem; }
.w-60 { width: 15rem; }
.w-72 { width: 18rem; }
.w-80 { width: 20rem; }
.w-88 { width: 22rem; }
.w-96 { width: 24rem; }

.h-14 { height: 3.5rem; }

.max-w-80 { max-width: 20rem; }

.rounded-xl { border-radius: 1rem; }
.rounded-1xl { border-radius: 1.5rem; }
.rounded-2xl { border-radius: 2rem; }
.rounded-3xl { border-radius: 2.5rem; }

.bg-purple-150 { background-color: #efe0ff; }

.text-3-5xl { font-size: 2rem; }
.text-7xl { font-size: 5rem; }
</style>