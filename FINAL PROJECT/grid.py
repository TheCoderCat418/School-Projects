class Grid():
    rows = {}

    def appendRow(self, row):
        self.rows[len(self.rows)] = row
    def getRow(self, rowNum):
        return self.rows[rowNum]
    def setRow(self, rowNum, row):
        self.rows[rowNum] = row
    def __len__(self):
        return len(self.rows)
    def replaceTile(self, x,y, newTile):
        self.rows[x].setTile(newTile, y)