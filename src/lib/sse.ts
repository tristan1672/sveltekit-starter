// src/lib/sse.ts
import { edgeDeviceConfig } from "./config";

export function initSSE(onMessage: (data: any) => void) {
  const eventSource = new EventSource(
    `${edgeDeviceConfig.backendUrl}/events/${edgeDeviceConfig.name}`
  );

  eventSource.onopen = () => console.log("SSE connection opened");
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("[SSE] Received message:", data);
    onMessage(data);
  };

  eventSource.onerror = (err) => {
    console.error("SSE error:", err);
    eventSource.close();
  };

  return eventSource;
}

export function init_SSE(onMessage: (data: any) => void) {
  const eventSource = new EventSource(`${edgeDeviceConfig.backendUrl}/event`);

  eventSource.onopen = () => console.log("SSE connection opened");
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("[SSE] Received message:", data);
    onMessage(data);
  };

  eventSource.onerror = (err) => {
    console.error("SSE error:", err);
    eventSource.close();
  };

  return eventSource;
}
