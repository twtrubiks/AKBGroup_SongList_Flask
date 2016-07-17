from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

class Order(db.Model):
    ID = db.Column(db.Integer, primary_key=True)
    Order_Time = db.Column(db.String(32))
    User = db.Column(db.String(32))
    Song = db.Column(db.String(64))
    Source = db.Column(db.String(128))
    Condition = db.Column(db.String(32))
    PS = db.Column(db.String(32))

if __name__ == '__main__':
    manager.run()
