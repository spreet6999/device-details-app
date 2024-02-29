from flask import Flask, jsonify, request
from utils import appliances, appliance_info

app = Flask(__name__)

# Routes
@app.route('/api/v1/appliances', methods=['GET'])
def get_all_appliances():
    device_status = request.args.get('deviceStatus')
    download_status = request.args.get('downloadStatus')
    
    filtered_appliances = appliances
    
    if device_status:
        filtered_appliances = [appliance for appliance in filtered_appliances if appliance['deviceStatus'].lower() == device_status.lower()]
        
    if download_status:
        filtered_appliances = [appliance for appliance in filtered_appliances if appliance['downloadStatus'].lower() == download_status.lower()]
        
    return jsonify({"appliances": filtered_appliances}), 200


@app.route('/api/v1/appliance/<appliance_id>/info', methods=['GET'])
def get_appliance_info(appliance_id):
    if appliance_id in appliance_info:
        return jsonify(appliance_info[appliance_id]), 200
    else:
        return jsonify({"error": "Appliance not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
