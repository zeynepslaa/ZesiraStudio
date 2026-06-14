export type ZsAnalyticsEvent =
  | { name: "cta_click"; target: string; href: string }
  | { name: "form_submit"; form: "contact" | "audit"; package?: string }
  | { name: "package_select"; package: string }
  | { name: "lang_switch"; lang: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackZsEvent(event: ZsAnalyticsEvent) {
  if (typeof window === "undefined") return;

  const payload = { event: `zs_${event.name}`, ...event, ts: Date.now() };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, event);
  }

  try {
    const log = JSON.parse(sessionStorage.getItem("zs_events") || "[]") as unknown[];
    log.push(payload);
    sessionStorage.setItem("zs_events", JSON.stringify(log.slice(-50)));
  } catch {
    /* ignore */
  }
}

export function getAnalyticsSessionId() {
  if (typeof window === "undefined") return "server";
  let id = sessionStorage.getItem("zs_session");
  if (!id) {
    id = `zs_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem("zs_session", id);
  }
  return id;
}
