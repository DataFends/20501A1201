from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')
    result = {}

    for url in urls:
        try:
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                if 'numbers' in data and isinstance(data['numbers'], list):
                    result[url] = data['numbers']
                else:
                    result[url] = "Invalid JSON response"
            else:
                result[url] = f"Failed to retrieve data from {url}"
        except requests.exceptions.RequestException as e:
            result[url] = str(e)

    return jsonify(result)

if __name__ == '__main__':
    app.run(host='localhost', port=8008)
