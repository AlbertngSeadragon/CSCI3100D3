import glob
import os
import json
import requests
import urllib.request
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

app = Flask(__name__)
CORS(app, support_credentials=True) 

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


if __name__ == '__main__':
    app.run(debug = True)

