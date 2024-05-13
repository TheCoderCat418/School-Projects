from tile import Tile


class Hidden(Tile):
    char = "⍰"
    collide = True
    def onCollide():
        pass
    def attemptedCollide(self):
        pass
    def beforeCollide(self):
        pass