import numpy as np
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
mongo = MongoClient('localhost', 27017)

db = mongo.schoolShooting
incident = db.incident
victim = db.victim
shooter = db.shooter
weapon = db.weapon

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)

#################################################
# Flask Routes
#################################################

@app.route("/incident")
def json_incident():
    objects = incident.find({}, {'_id': 0})

    return jsonify(list(objects))

@app.route("/victim")
def json_victim():
    objects = victim.find({}, {'_id': 0})

    return jsonify(list(objects))

@app.route("/shooter")
def json_shooter():
    objects = shooter.find({}, {'_id': 0})

    return jsonify(list(objects))

@app.route("/weapon")
def json_weapon():
    objects = weapon.find({}, {'_id': 0})

    return jsonify(list(objects))


if __name__ == '__main__':
    app.run(debug=True)
