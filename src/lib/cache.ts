type ViewType = "gate" | "flight" | "incoming";

export interface Cache {
  currentView: ViewType;
  config: {
    name: string;
    view: string;
    eventType: string;
    value1?: string;
    value2?: string;
    topic: string;
  };
  data: Record<string, any>; // for runtime info / payloads / state
}

const cache: Cache = {
  currentView: "gate",
  config: {
    name: "",
    view: "",
    eventType: "",
    topic: "",
  },
  data: {},
};

export function getCache() {
  return cache;
}

export function updateCache(partial: Partial<Cache>) {
  Object.assign(cache, partial);
}
