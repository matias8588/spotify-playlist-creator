import React, { memo } from "react";
import ListSongs from "../ListSong/index";

export default memo(function Track({ album, id, name, external_urls, artists }: any) {
  return (
    <ListSongs
      imgUrl={album?.images[0]?.url}
      id={id}
      releaseDate={album?.release_date}
      title={name}
      externalUrl={external_urls?.spotify}
      artist={artists[0].name}
    />
  );
});
