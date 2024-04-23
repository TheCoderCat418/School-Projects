from tile import Tile
import keyboard

class Player(Tile):
    char = "U"
    def takeTurn(self):
        keyboard.wait('right')
        return