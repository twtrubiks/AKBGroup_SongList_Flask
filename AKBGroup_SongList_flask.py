from flask import *
from Model.dbModel import *

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index_old')
def index2():
    return render_template('index_old.html')


@app.route('/akb48')
def akb48():
    return render_template('AKB48.html', title='AKB48')


@app.route('/ske48')
def ske48():
    return render_template('SKE48.html', title='SKE48')


@app.route('/nmb48')
def nmb48():
    return render_template('NMB48.html', title='NMB48')


@app.route('/hkt48')
def hkt48():
    return render_template('HKT48.html', title='HKT48')


@app.route('/sdn48')
def sdn48():
    return render_template('SDN48.html', title='SDN48')


@app.route('/keyakizaka46')
def keyakizaka46():
    return render_template('Keyakizaka46.html', title='欅坂46')


@app.route('/nogizaka46')
def nogizaka46():
    return render_template('Nogizaka46.html', title='乃木坂46')


@app.route('/live')
def live():
    return render_template('LIVE.html', title='公演')


@app.route('/sub_group')
def sub_group():
    return render_template('Sub-Group.html', title='子團')


@app.route('/solo')
def solo():
    return render_template('SOLO.html', title='SOLO')


@app.route('/sp')
def sp():
    return render_template('SP.html', title='期間限定組合')


@app.route('/other')
def other():
    return render_template('Other.html', title='其他')


@app.route('/confirm', methods=['POST'])
def confirm():
    time = request.json.get('time', None)
    uid = request.json.get('uid', None)
    song = request.json.get('str', None)
    src = request.json.get('src', None)
    talk = request.json.get('talk', "")

    data = Order(Order_Time=time, User=uid, Song=song, Source=src, Condition="排入", PS=talk)

    db.session.add(data)
    db.session.commit()

    return "OK"


@app.route('/list')
def list():
    return render_template('list.html', items=order())


@app.route('/modify', methods=['POST', 'GET'])
def modify():
    return render_template('modify.html', items=order())


def order():
    arr = []
    Orders = Order.query.all()
    for order in Orders:
        arr.append({
            'ID': order.ID,
            'Order_Time': order.Order_Time,
            'User': order.User,
            'Song': order.Song,
            'Source': order.Source,
            'Condition': order.Condition.strip(),
            'PS': order.PS
        })
    return arr


@app.route('/changeAPI', methods=['POST'])
def changeAPI():
    condition = request.form['value']
    id = request.form['pk']
    update = Order.query.filter_by(ID=id).first()
    update.Condition = condition
    db.session.commit()
    return 'changeAPI'


@app.route('/deleteAPI', methods=['POST'])
def deleteAPI():
    # # 一次刪除整欄
    print(request.json.get('deleteID', None))
    id = request.json.get('deleteID', None)
    date_delete = Order.query.filter_by(ID=id).first()
    db.session.delete(date_delete)
    db.session.commit()
    return 'deleteAPI'


if __name__ == '__main__':
    app.run(debug=True)
