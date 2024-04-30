from tile import Tile


class Wall(Tile):
    char = "▧"
    collide = True
    def __init__(self, keyCode):
        super().__init__("reveal", keyCode)