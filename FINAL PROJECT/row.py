from tile import Tile


class Row:
    def __init__(self, width):
        self.arr = []
        for _ in range(width):
            self.arr.append(Tile())
    def getTile(self, pos):
        return self.arr[pos]
    def setTile(self, tile: Tile, pos):
        self.arr.pop(pos)
        self.arr.insert(pos, tile)
    def __len__(self):
        return len(self.arr)



