import server

from flask import Flask
app = Flask('__name__', static_url_path='')

if __name__ == '__main__':
	app.run(host="0.0.0.0")