import glob
import os
import json
import requests
import urllib.request
from datetime import date
import logging
from flask import Flask, request, jsonify, render_template
import pandas as pd
from PIL import Image, ImageDraw, ImageFont
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

app = Flask(__name__)
CORS(app, support_credentials=True) 

@app.route("/generate_certificate", methods=['GET', 'POST'])
@cross_origin(support_credentials=True)
def generate_certificate():
    today = date.today()
    dayform = today.strftime("%B %d, %Y")
    request_data = request.get_json()

    new_store = {
        'participants': request_data['participants'],
    }
    # new_store = {
    #     'participants': ['albert', 'john'],
    # }
    #data = pd.read_excel (r'gen.xlsx') 
    #name_list = data["Name"].tolist()
    name_list=new_store["participants"]
    app.logger.info(name_list) 
    for i in name_list:
        im = Image.open(r'Certificate.jpg')
        d = ImageDraw.Draw(im)
        location = (888, 704)
        text_color = (0, 137, 209)
        font = ImageFont.truetype("AlexBrush-Regular.ttf", 100)
        d.text(location, i, fill = text_color, font = font)

        d1 = ImageDraw.Draw(im)
        location1 = (1260, 1123)
        text_color1 = (0, 100, 188)
        font1 = ImageFont.truetype("Arial.ttf", 50)
        d1.text(location1, "HI Hong Kong", fill = text_color1, font = font1)


        d2 = ImageDraw.Draw(im)
        location2 = (383, 1125)
        text_color2 = (0, 100, 90)
        font2 = ImageFont.truetype("Arial.ttf", 50)
        d2.text(location2, dayform, fill = text_color2, font = font2)

        im.save("certificate_" + i + ".pdf")

    return "Generated"

@app.route("/uploadgdrive", methods=['GET'])
@cross_origin(support_credentials=True)
def upload_gdrive():
    try:
        for file in glob.glob("*.pdf"):
            # print(file)
            # put ur access token after the word 'Bearer '
            headers = {"Authorization": "Bearer "+os.getenv("GDRIVETOKEN")}
            para = {
                "name": file,  # file name to be uploaded
                # make a folder on drive in which you want to upload files; then open that folder; the last thing in present url will be folder id
                "parents": ["1Vp46IYeMGRkimOFWhfhGUgNJ102yCvx-"]
            }
            files = {
                'data': ('metadata', json.dumps(para), 'application/json; charset=UTF-8'),
                # replace 'application/zip' by 'image/png' for png images; similarly 'image/jpeg' (also replace your file name)
                'file': ('application/zip', open(file, "rb"))
            }
            r = requests.post(
                "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
                headers=headers,
                files=files
            )
            print(r.text)
        return "Upload"+r.text
    except urllib.error:
        return urllib.error

#submit()
if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=5001, debug = True)
