export interface EdgeDeviceConfig {
  name: string;
  view: string;
  eventType: string;
  value1: string;
  value2: string;
  backendUrl: string;
  topic: string;
}

export const edgeDeviceConfig: EdgeDeviceConfig = {
  name: import.meta.env.VITE_SV_NAME,
  view: import.meta.env.VITE_SV_VIEW_TYPE,
  eventType: import.meta.env.VITE_SV_EVENT_TYPE,
  value1: import.meta.env.VITE_SV_VALUE1,
  value2: import.meta.env.VITE_SV_VALUE2,
  backendUrl: import.meta.env.VITE_SV_BACKEND_URL,
  topic: "", // temporary
};

// Compute topic
const shapePart = edgeDeviceConfig.value1 || "*";
const colorPart = edgeDeviceConfig.value2 || "*";

edgeDeviceConfig.topic =
  !edgeDeviceConfig.value1 && !edgeDeviceConfig.value2
    ? `scene.${edgeDeviceConfig.eventType}.updated.#`
    : `scene.${edgeDeviceConfig.eventType}.updated.${shapePart}.${colorPart}`;

//SAMPLE ROUTING KEY WITH TOPICS:

//scene.shape.updated.sphere.#ffff00 - Shape change to sphere

//scene.color.updated.sphere.#ffff00 - Color change to ffff00
