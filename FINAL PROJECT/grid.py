class Grid():
    rows = {}

    def appendRow(self, row):
        self.rows[len(self.rows)+1] = row