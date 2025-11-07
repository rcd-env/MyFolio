import React from "react";

function Song() {
  return (
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/track/3oEkrIfXfSh9zGnE7eBzSV?utm_source=generator&theme=0"
      width="100%"
      height="80"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="The winner takes it all."
    ></iframe>
  );
}

export default Song;
