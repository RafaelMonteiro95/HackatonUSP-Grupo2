import sqlite3


class DBHelper:
    def __init__(self, dbname="jureguinho.sqlite"):
        self.dbname = dbname
        self.conn = sqlite3.connect(dbname)

    def setup(self):
        stmt = "CREATE TABLE IF NOT EXISTS users (nusp text)"
        self.conn.execute(stmt)
        self.conn.commit()

    def add_item(self, item_text):
        stmt = "INSERT INTO users (nusp) VALUES (?)"
        args = (item_text, )
        self.conn.execute(stmt, args)
        self.conn.commit()

    def delete_item(self, item_text):
        stmt = "DELETE FROM users WHERE nusp = (?)"
        args = (item_text, )
        self.conn.execute(stmt, args)
        self.conn.commit()

    def get_items(self):
        stmt = "SELECT nusp FROM users"
        return [x[0] for x in self.conn.execute(stmt)]