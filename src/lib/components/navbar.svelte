<script lang="ts">
  import { page } from '$app/stores'
  import { lombokDeveloper } from '$lib/images'
  import { menu } from '$lib/stores/menu'

  const navLists = $menu
  console.log('🚀 ~ navLists:', navLists)

  $: path = $page.url.pathname
  $: console.log('🚀 ~ path:', path)
</script>

<nav
  class="navbar fixed border-b bg-base-100/50 px-4 backdrop-blur sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
  <div class="flex-1">
    <a class="link-hover link flex items-center gap-2" href="/">
      <img class="h-8 w-8" src={lombokDeveloper} alt="Lombok Developer" />
      <span
        class="bg-gradient-to-l from-primary to-accent bg-clip-text font-medium text-transparent">
        Lombok Developer
      </span>
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu rounded-box menu-compact menu-horizontal p-1">
      {#each navLists as { url, text }}
        <li class="px-px">
          <a class="font-medium {path === url && 'active'}" href={url}>{text}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
