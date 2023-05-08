<script lang="ts">
  const carName = [
    {
      name: 'comunity website',
      Description:
        'Website development services from Lombok Developer are ready to help you master the online world'
    }
  ]
</script>

{#each carName as car}
  <div class="card-bordered card rounded-sm">
    <div class="p-5">
      <p class="py-10 text-center text-2xl font-semibold">{car.name}</p>
      <div class="flex-col justify-evenly gap-5 md:flex lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGZvcmZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="" />
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGZvcmZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="" />
      </div>
    </div>
  </div>

  <div class="card-bordered card my-20 rounded-sm">
    <div class="p-5">
      <p class="py-10 text-center text-2xl font-semibold">{car.name}</p>
      <div class="flex-col justify-evenly gap-5 md:flex lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGZvcmZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="" />
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGZvcmZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="" />
      </div>
    </div>
  </div>

  <div class="card-bordered card my-20 rounded-sm">
    <div class="p-5">
      <p class="py-10 text-center text-2xl font-semibold">{car.name}</p>
      <div class="flex-col justify-evenly gap-5 md:flex lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGZvcmZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="" />
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGZvcmZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="" />
      </div>
    </div>
  </div>
{/each}
