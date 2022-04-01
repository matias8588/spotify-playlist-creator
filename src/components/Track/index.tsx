import React, { memo } from "react";
import ListSongs from "@/components/SongList";

export default memo(function Track({
  album,
  id,
  name,
  external_urls,
  artists,
  titlePlaylist,
}: any) {
  return (
    <ListSongs
      imgUrl={album?.images[0]?.url}
      id={id}
      releaseDate={album?.release_date}
      title={name}
      externalUrl={external_urls?.spotify}
      artist={artists[0].name}
      titlePlaylist={titlePlaylist}
    />
  );
});
