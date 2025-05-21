<!-- src/routes/gate/GateView.svelte -->
<script lang="ts">
  import { getCache } from "$lib/cache";
</script>

<section class="view gate-view">
  <h1>Gate Display</h1>
  <p>This screen shows gate information.</p>

  <pre>{JSON.stringify(getCache().data, null, 2)}</pre>
</section>

<style>
  .gate-view {
    background-color: #e0f7fa;
    color: #006064;
    padding: 2rem;
  }
</style>
