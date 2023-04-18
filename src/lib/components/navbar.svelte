<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { navLists } from '$lib/constants'
  import { lombokDeveloper } from '$lib/images'
  import Iconify from '@iconify/svelte'

  $: path = $page.url.pathname
</script>

<nav
  class="navbar fixed z-50 border-b bg-base-100/50 px-4 backdrop-blur sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
  <div class="flex-1">
    <a class="link-hover link flex items-center gap-2" href={`${base}/`}>
      <img class="h-8 w-8" src={lombokDeveloper} alt="Lombok Developer" />
      <span
        class="bg-gradient-to-l from-primary to-accent bg-clip-text font-medium text-transparent">
        Lombok Developer
      </span>
    </a>
  </div>
  <div class="flex-none">
    <div class="hidden lg:block">
      <ul class="menu rounded-box menu-compact menu-horizontal p-1">
        {#each navLists as { url, text }}
          <li class="px-px">
            <a class="font-medium {path === url && 'active'}" href={url}>{text}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="lg:hidden">
      <div class="dropdown-end dropdown">
        <button
          class="text-xl transition duration-300 ease-in-out active:scale-90"
          aria-label="Hamburger Menu">
          <Iconify icon="fa6-solid:bars-staggered" />
        </button>
        <ul class="dropdown-content menu rounded-box mt-6 w-60 bg-base-100 p-2 shadow">
          {#each navLists as { url, text }}
            <li class="py-px">
              <a class="font-medium {path === url && 'active'}" href={url}>{text}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</nav>
