from tile import Tile


class Key(Tile):
    char = "⚿"
    def __init__(self, opDic):
        super().__init__(opDic)