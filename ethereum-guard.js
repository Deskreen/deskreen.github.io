(function ethereumGuard() {
  try {
    if (typeof window === "undefined") return;
    // define a benign ethereum object if none exists to avoid property access crashes
    if (!("ethereum" in window)) {
      try {
        Object.defineProperty(window, "ethereum", {
          value: {},
          writable: true,
          configurable: true,
        });
      } catch (_) {}
    }
    // suppress specific selectedAddress access errors from third-party scripts
    const suppress = (e) => {
      try {
        const msg = String(
          (e && (e.message || (e.error && e.error.message))) ||
            (e && e.reason && e.reason.message) ||
            "",
        );
        if (msg.includes("window.ethereum.selectedAddress")) {
          e && e.preventDefault && e.preventDefault();
        }
      } catch (_) {}
    };
    window.addEventListener("error", suppress, true);
    window.addEventListener("unhandledrejection", suppress, true);
  } catch (_) {}
})();
