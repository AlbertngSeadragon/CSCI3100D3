import 'package:flutter/material.dart';
import 'design_course_app_theme.dart';

class Forum extends StatefulWidget {
  @override
  _ForumState createState() => _ForumState();
}

//Designed the course for the polling and sumbit button
class _ForumState extends State<Forum> {
  bool val_1 = false;
  bool val_2 = false;
  bool val_3 = false;

  void _showcontent() {
    showDialog(
      context: context, barrierDismissible: false, // user must tap button!

      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('Submitted'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: [
                new Text('Thanks for polling. \n\n+10 points'),
              ],
            ),
          ),
          actions: [
            new FlatButton(
              child: new Text('Ok'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Stack(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.fromLTRB(15, 20, 15, 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Center(
                    child: Text(
                      'User Feedback and Comment',
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        fontSize: 22,
                        letterSpacing: 0.27,
                        color: DesignCourseAppTheme.darkerText,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 30,
                  ),
                  Text(
                    'Comment to you',
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 22,
                      letterSpacing: 0.27,
                      color: DesignCourseAppTheme.darkerText,
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  SingleChildScrollView(
                    child: Column(
                      children: [
                        postCardView(
                            "Ricky Chan",
                            "15 mins ago",
                            "Your done a great job on my event, keep up!",
                            "23",
                            "10",
                            "7"),
                        postCardView(
                            "Li Fung",
                            "1 hours ago",
                            "Hi students I am team leader of bastketball team. Feel free to ask me questions here and earn participation points.",
                            "23",
                            "10",
                            "7"),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  new Container(
                    padding: EdgeInsets.all(20),
                    //height: 175.37,
                    width: 400.00,
                    decoration: BoxDecoration(
                      color: Color(0xFFFFC0CB).withOpacity(0.4),
                      borderRadius: BorderRadius.circular(11.00),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        new Text(
                          "Poll:\nDo you like our service?",
                          style: TextStyle(
                            //fontFamily: "PingFang HK",
                            fontWeight: FontWeight.w500,
                            fontSize: 16,
                          ),
                        ),
                        SizedBox(height: 10),
                        Column(
                          children: <Widget>[
                            Center(
                              child: Row(
                                children: [
                                  Row(
                                    children: [
                                      Checkbox(
                                        activeColor:
                                        DesignCourseAppTheme.nearlyBlue,
                                        value: val_1,
                                        onChanged: (bool value) {
                                          setState(() {
                                            val_1 = value;
                                          });
                                        },
                                      ),
                                      Text("Good")
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Checkbox(
                                        activeColor:
                                        DesignCourseAppTheme.nearlyBlue,
                                        value: val_2,
                                        onChanged: (bool value) {
                                          setState(() {
                                            val_2 = value;
                                          });
                                        },
                                      ),
                                      Text("No opinion")
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Checkbox(
                                        activeColor:
                                        DesignCourseAppTheme.nearlyBlue,
                                        value: val_3,
                                        onChanged: (bool value) {
                                          setState(() {
                                            val_3 = value;
                                          });
                                        },
                                      ),
                                      Text("Bad")
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 5),
                        Center(
                          child: RaisedButton(
                            onPressed: _showcontent,
                            child: Text("Submit",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontFamily: "WorkSans")),
                            color: DesignCourseAppTheme.nearlyBlue,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

Widget postCardView(String name, String time, String content, String likes,
    String comments, String shares) {
  return new Card(
    elevation: 3,
    child: new Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        new ListTile(
          leading: Icon(
            //radius: 20.0,
            Icons.person,
            size: 60.0,
          ),
          title: new Text(
            name,
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          subtitle: new Row(
            children: [
              new Text(time),
              SizedBox(width: 5),
              new Icon(
                Icons.public,
                size: 15.0,
              )
            ],
          ),
          trailing: new Icon(Icons.more_horiz),
        ),
        ListTile(
          title: Text(content),
        ),
        Container(
          padding: new EdgeInsets.all(18.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              new Row(
                children: <Widget>[
                  new CircleAvatar(
                    radius: 10.0,
                    backgroundColor: Colors.pink,
                    child: new Icon(
                      Icons.thumb_up,
                      size: 12.0,
                      color: Colors.white,
                    ),
                  ),
                  new Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 0.0, horizontal: 8.0),
                    child: new Text(likes),
                  ),
                ],
              ),
              new Text(comments + " comments · " + shares + " share"),
            ],
          ),
        )
      ],
    ),
  );
}
