from flask import Flask, jsonify, request
from utils import appliances, appliance_info
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Routes
@app.route('/api/v1/appliances', methods=['GET'])
def get_all_appliances():
    # In case in future we want filters based on deviceStatus or downloadStatus
    # device_status = request.args.get('deviceStatus')
    # download_status = request.args.get('downloadStatus')
    
    filtered_appliances = appliances
    metadata = {
        'device_status_counts': {},
        'download_status_counts': {}
    }

    # if device_status:
    #     filtered_appliances = [appliance for appliance in filtered_appliances if appliance['deviceStatus'].lower() == device_status.lower()]
        
    # if download_status:
    #     filtered_appliances = [appliance for appliance in filtered_appliances if appliance['downloadStatus'].lower() == download_status.lower()]

    # Extract counts
    for appliance in appliances:
        device_status = appliance["deviceStatus"]
        download_status = appliance["downloadStatus"]

        # Use get method with default value 0 for non-existent keys
        metadata['device_status_counts'][device_status] = metadata['device_status_counts'].get(device_status, 0) + 1
        metadata['download_status_counts'][download_status] = metadata['download_status_counts'].get(download_status, 0) + 1

    # Printing metadata and counts
    print("Metadata:")
    print(f"{metadata}")
    
        
    return jsonify({"appliances": filtered_appliances, "metadata": metadata}), 200


@app.route('/api/v1/appliance/<appliance_id>/info', methods=['GET'])
def get_appliance_info(appliance_id):
    if appliance_id in appliance_info:
        return jsonify(appliance_info[appliance_id]), 200
    else:
        return jsonify({"error": "Appliance not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
