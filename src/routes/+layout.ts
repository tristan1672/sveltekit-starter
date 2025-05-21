// src/routes/+layout.server.ts
import { initializeEdgeDevice } from "$lib/init";

export const load = async () => {
  await initializeEdgeDevice((data) => {
    console.log("Received SSE:", data);

    // You can update your cache, store, or reactive variables here
  });

  return {};
};
