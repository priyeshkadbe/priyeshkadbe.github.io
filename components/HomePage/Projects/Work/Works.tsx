import { Tile } from "../Tiles/Tile";
import TileBackground from "../Tiles/TileBackground";
import { TileContent } from "../Tiles/TileContent";
import TileWrapper from "../Tiles/TileWrapper";

import WorkContent from "./WorkContent";
//import { workTiles } from "./workTiles";

import projects from "../../../../utils/project";

export default function Works() {
  return (
    <TileWrapper numOfPages={projects.length}>
      <TileContent>
        {projects.map((item, i) => (
          <Tile page={i} key={item.title}>
            <WorkContent project={item} />
          </Tile>
        ))}
      </TileContent>
    </TileWrapper>
  );
}
