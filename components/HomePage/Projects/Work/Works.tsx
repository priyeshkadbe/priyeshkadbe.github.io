import { Tile } from "../Tiles/Tile";
import Link from "next/link"
import { TileContent } from "../Tiles/TileContent";
import TileWrapper from "../Tiles/TileWrapper";

import WorkContent from "./WorkContent";


import projects from "../../../../utils/project";

export default function Works() {
  const MAX_DISPLAY_ITEMS = 3;
  return (
    <TileWrapper numOfPages={projects.length}>
      <TileContent>
      {projects.slice(0, MAX_DISPLAY_ITEMS).map((item, i) => (
      <Tile page={i} key={item.title}>
        <WorkContent project={item}  />
      </Tile>
    ))}
    {/* {projects.length > MAX_DISPLAY_ITEMS && (
      <Link className="view-more-link" href="/projects">
        View More
      </Link>
    )} */}
      </TileContent>
    </TileWrapper>
  );
}
