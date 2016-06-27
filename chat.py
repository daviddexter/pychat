from flask import Flask
from flask_socketio import SocketIO,emit

app = Flask(__name__,static_url_path="")
socketio = SocketIO(app)

messages = []

@socketio.on('connect',namespace='/chat')
def on_connect():
    print('connected')
    for msg in messages:
        emit("message", msg)

@socketio.on('sendmsg',namespace='/chat')
def on_send_message(msg):
    messages.append(msg)
    emit("message", msg, broadcast=True)


@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    socketio.run(app,host="localhost",port=5505,debug=True)