import os

import numpy as np
from flask import Flask, jsonify, request
from PIL import Image
from tensorflow.keras.models import load_model
from werkzeug.utils import secure_filename
from google.cloud import storage



app = Flask(__name__)
app.config['ALLOWED_EXTENSIONS'] = set(['png', 'jpg', 'jpeg'])
# app.config['UPLOAD_FOLDER'] = 'static/uploads/'
app.config['MODEL_FILE'] = 'Cat_InceptionV3.h5'
app.config['LABELS_FILE'] = 'labels.txt'


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']


model = load_model(app.config['MODEL_FILE'], compile=False)
with open(app.config['LABELS_FILE'], 'r') as file:
    labels = file.read().splitlines()


def predict_cat(image):
    img = Image.open(image).convert("RGB")
    img = img.resize((299, 299))
    img_array = np.asarray(img)
    img_array = np.expand_dims(img_array, axis=0)
    normalized_image_array = (img_array.astype(np.float32) / 127.5) - 1
    data = np.ndarray(shape=(1, 299, 299, 3), dtype=np.float32)
    data[0] = normalized_image_array
    predictions = model.predict(data)
    index = np.argmax(predictions)
    class_name = labels[index]
    confidence_score = predictions[0][index]
    return class_name[2:], confidence_score

@app.route("/prediction", methods=["POST"])

def prediction_route():
    if request.method == "POST":
        image = request.files["image"]
        if image and allowed_file(image.filename):
            filename = secure_filename(image.filename)
            bucket_name = 'catstone'
            storage_client = storage.Client()
            bucket = storage_client.bucket(bucket_name)
            blob = bucket.blob(filename)
            blob.upload_from_string(image.read(), content_type=image.content_type)

            class_name, confidence_score = predict_cat(image)

            return jsonify({
                "status": {
                    "code": 200,
                    "message": "Success predicting"
                },
                "data": {
                    "cat_types_prediction": class_name,
                    "confidence": float(confidence_score),
                }
            }), 200
        else:
            return jsonify({
                "status": {
                    "code": 400,
                    "message": "Invalid file format. Please upload a JPG, JPEG, or PNG image."
                },
                "data": None,
            }), 400
    else:
        return jsonify({
            "status": {
                "code": 405,
                "message": "Method not allowed"
            },
            "data": None,
        }), 405


if __name__ == "__main__":
    app.run(debug=True)