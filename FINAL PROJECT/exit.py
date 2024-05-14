import pathlib
import sys
from tile import Tile
import mapHolder
import os
class Exit(Tile):
    char = "⌦"
    def onCollide(self):
        if (pathlib.Path(sys.argv[0]).parent.absolute() / f"MAP{str(mapHolder.id+1)}.csv").exists():
            print("Loading next map")
            return
        
        
    def attemptedCollide(self):
        pass
    def beforeCollide(self):
        pass