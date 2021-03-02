import os
from flask import Flask, request, jsonify, render_template
from flask_mail import Mail, Message
from flask_cors import CORS, cross_origin

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app, support_credentials=True)
mail = Mail(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('EMAILUSERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAILPW')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route("/send_message", methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def index():
   request_data = request.get_json()
   new_store = {
      'emails': request_data['emails'],
      'subject': request_data['subject'],
      'message': request_data['message']
   }

   for email in new_store['emails']:
      msg = Message(new_store['subject'], sender=os.getenv('EMAILUSERNAME'), recipients=[email])
      msg.body = new_store['message']
      mail.send(msg)
   return "Sent"


if __name__ == '__main__':
   app.run(host='0.0.0.0' , port=5000, debug = True)
