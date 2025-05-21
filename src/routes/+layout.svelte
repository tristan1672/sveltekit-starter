<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { updateCache, getCache } from "$lib/cache";
  import { initializeEdgeDevice } from "$lib/init";

  import GateView from "./gate/GateView.svelte";
  import FlightView from "./flight/FlightView.svelte";
  import IncomingView from "./incoming/IncomingView.svelte";

  export let data;
  let currentView: string = "gate";

  function getComponent(view: string) {
    switch (view) {
      case "flight":
        return FlightView;
      case "incoming":
        return IncomingView;
      default:
        return GateView;
    }
  }

  onMount(() => {
    initializeEdgeDevice((data) => {
      console.log("Received SSE:", data);
      // Optional: update your cache or view here
    });

    const interval = setInterval(() => {
      currentView = getCache().currentView;
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<svelte:component this={getComponent(currentView)} />
