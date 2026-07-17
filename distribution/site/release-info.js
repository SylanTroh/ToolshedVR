fetch("https://api.github.com/repos/SylanTroh/ToolshedVR/releases/latest")
  .then((r) => r.json())
  .then((release) => {
    const version = document.getElementById("version");
    if (version) version.textContent = release.tag_name;

    document.querySelectorAll(".checksum[data-asset]").forEach((el) => {
      const asset = release.assets.find((a) => a.name === el.dataset.asset);
      if (asset && asset.digest) el.textContent = asset.digest;
    });
  })
  .catch(() => {});
