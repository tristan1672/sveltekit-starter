<!-- src/routes/flight/FlightView.svelte -->
<script lang="ts">
  import { getCache } from "$lib/cache";
</script>

<section class="view flight-view">
  <h1>Flight Display</h1>
  <p>This screen shows current flights and schedules.</p>

  <pre>{JSON.stringify(getCache().data, null, 2)}</pre>
</section>

<style>
  .flight-view {
    background-color: #ffff00;
    color: #e65100;
    padding: 2rem;
  }
</style>
