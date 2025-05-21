<!-- src/routes/incoming/IncomingView.svelte -->
<script lang="ts">
  import { getCache } from "$lib/cache";
</script>

<section class="view incoming-view">
  <h1>Incoming Flights Display</h1>
  <p>This screen shows upcoming arrivals.</p>

  <pre>{JSON.stringify(getCache().data, null, 2)}</pre>
</section>

<style>
  .incoming-view {
    background-color: #ede7f6;
    color: #4527a0;
    padding: 2rem;
  }
</style>
