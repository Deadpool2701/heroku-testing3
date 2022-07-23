from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder="Frontend/build", static_url_path="")
CORS(app)

data = []


@app.route("/", methods=["GET", "POST"])
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/api", methods=["GET", "POST"])
@cross_origin()
def sample_api():
    if request.method == "POST":
        data.append(request.get_json())
    return json.dumps(data)


if __name__ == "__main__":
    app.run(debug=True)
