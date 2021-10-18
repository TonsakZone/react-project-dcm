from flask import Flask, redirect, url_for, jsonify, request
import numpy as np
import pydicom
from PIL import Image
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/conv', methods=['POST','GET'])
def convertIMG():
    name = request.args['img']
    im = pydicom.dcmread(name)
    im = im.pixel_array.astype(float)
    rescaled_img = (np.maximum(im,0)/im.max())*255
    final = np.uint8(rescaled_img)
    final = Image.fromarray(final)
    final.save("../conv/img/convert.jpg")
    return name

if __name__ == "__main__":
    app.run(debug=True)
