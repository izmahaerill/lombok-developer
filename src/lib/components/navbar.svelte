<script lang="ts">
  import { lombokDeveloper } from '$lib/images'
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
    <ul class="menu rounded-box menu-horizontal p-1">
      <li><a href="/">Item 1</a></li>
      <li><a href="/">Item 1</a></li>
      <li><a href="/">Item 1</a></li>
      <li><a href="/">Item 1</a></li>
    </ul>
  </div>
</nav>
