import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 564,
  site: "first-store",
  domains: ["first-store.deco.site"],
});