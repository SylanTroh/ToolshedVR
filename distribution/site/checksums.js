// Unauthenticated GitHub API calls are rate-limited per IP (60/hr) — if this
// fails, it just leaves the checksum blank rather than erroring visibly.
fetch("https://api.github.com/repos/SylanTroh/ToolshedVR/releases/latest")
  .then((r) => r.json())
  .then((release) => {
    document.querySelectorAll(".checksum[data-asset]").forEach((el) => {
      const asset = release.assets.find((a) => a.name === el.dataset.asset);
      if (asset && asset.digest) el.textContent = asset.digest;
    });
  })
  .catch(() => {});
