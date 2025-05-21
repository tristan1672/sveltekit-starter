import { updateCache } from "./cache";
import { edgeDeviceConfig } from "./config";
import { initSSE } from "./sse";

export async function registerDevice() {
  try {
    const res = await fetch(`${edgeDeviceConfig.backendUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edgeDeviceConfig),
    });
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to register device:", err);
    return null; // Or throw a custom error if needed
  }
}

//Edge Device Init Driver
export async function initializeEdgeDevice(onSSEMessage: (data: any) => void) {
  // Step 1: Load config and data into cache
  updateCache({
    currentView: edgeDeviceConfig.view as any, // assuming view is still gate/flight/etc
    config: {
      name: edgeDeviceConfig.name,
      view: edgeDeviceConfig.view,
      eventType: edgeDeviceConfig.eventType,
      value1: edgeDeviceConfig.value1,
      value2: edgeDeviceConfig.value2,
      topic: edgeDeviceConfig.topic,
    },
    data: {
      timestamp: Date.now(),
      initialized: true,
    },
  });

  // Step 2: Register with backend
  await registerDevice();

  // Step 3: Connect SSE
  initSSE(onSSEMessage);
}
