from flask_cors import cross_origin
from flask import Flask, request, render_template

app = Flask(__name__)

# Flask for the fe to past data POST method API
@app.route("/getchartdata", methods=['GET', 'POST'])
@cross_origin()
def submit():
    if request.method == 'POST':
        #json_data = request.json
        request_data = request.json

        return {
            "Linechartyearshowmonth": [
                [
                    210
                ],
                [
                    79
                ],
                [
                    170
                ],
                [
                    130
                ],
                [
                    242
                ],
                [
                    201
                ],
                [
                    200
                ],
                [
                    159
                ],
                [
                    236
                ],
                [
                    30
                ],
                [
                    264
                ],
                [
                    348
                ]
            ],
            "Year": [
                [
                    "Lighting Music     ",
                    22
                ],
                [
                    "Football          ",
                    12
                ],
                [
                    "Marvel        ",
                    83
                ],
                [
                    "Logic and thinking           ",
                    17
                ],
                [
                    "Budda       ",
                    51
                ],
                [
                    "Deep learning           ",
                    260
                ]
            ],
            "Month": [
                [
                    "Cantoneses       ",
                    1513
                ],
                [
                    "Music Festival      ",
                    104
                ],
                [
                    "CSCI3100 Software Engineering  ",
                    208
                ]
            ],
            "typeofitem": [
                [
                    "Sport     ",
                    166
                ],
                [
                    "Music      ",
                    265
                ],
                [
                    "technolgoy   ",
                    80
                ],
                [
                    "Science   ",
                    80
                ]
            ]
        }
    return 'Cant Retrieve'


if __name__ == '__main__':
    app.debug = True
    app.run()
