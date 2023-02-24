import { Tile } from "../Tiles/Tile";
import Link from "next/link"
import { TileContent } from "../Tiles/TileContent";
import TileWrapper from "../Tiles/TileWrapper";
import WorkContent from "./WorkContent";
import projects from "../../../../utils/project";

export default function Works() {
  const MAX_DISPLAY_ITEMS = 4;
  const numProjects = projects.length;
  
  return (
    <TileWrapper numOfPages={MAX_DISPLAY_ITEMS }>
      <TileContent>
        {projects.slice(0, MAX_DISPLAY_ITEMS).map((item, i) => (
          <Tile page={i} key={item.title}>
            <WorkContent 
              project={item} 
              isLast={i === MAX_DISPLAY_ITEMS - 1} 
            />
          </Tile>
        ))}
      </TileContent>
    </TileWrapper>
  );
}
