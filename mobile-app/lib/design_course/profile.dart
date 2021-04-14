import 'package:best_flutter_ui_templates/design_course/category_list_view.dart';
import 'package:best_flutter_ui_templates/design_course/course_info_screen.dart';
import 'package:best_flutter_ui_templates/design_course/popular_course_list_view.dart';
import 'package:best_flutter_ui_templates/design_course/programs.dart';
import 'package:best_flutter_ui_templates/design_course/home_design_course.dart';
import 'package:best_flutter_ui_templates/main.dart';
import 'package:flutter/material.dart';
import 'design_course_app_theme.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:circular_profile_avatar/circular_profile_avatar.dart';

class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.fromLTRB(15, 20, 15, 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              'Profile',
              textAlign: TextAlign.left,
              style: TextStyle(
                fontWeight: FontWeight.w600,
                fontSize: 22,
                letterSpacing: 0.27,
                color: DesignCourseAppTheme.darkerText,
              ),
            ),
            SizedBox(height: 20),
            getAppBarUI(),
            SizedBox(height: 20),
            Text(
              'Highest Event Rating',
              textAlign: TextAlign.left,
              style: TextStyle(
                fontWeight: FontWeight.w600,
                fontSize: 22,
                letterSpacing: 0.27,
                color: DesignCourseAppTheme.darkerText,
              ),
            ),
            SizedBox(height: 20),
            Column(
              children: [
                new Container(
                  padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                  //height: 175.37,
                  width: 376.00,
                  decoration: BoxDecoration(
                    color: Color(0xFFFFC0CB).withOpacity(0.4),
                    borderRadius: BorderRadius.circular(11.00),
                  ),
                  child: Row(
                    children: <Widget>[
                      Container(
                        width: 40,
                        child: new Text(
                          "#1",
                          style: TextStyle(
                            //fontFamily: "PingFang HK",
                            fontWeight: FontWeight.w700,
                            fontSize: 25,
                            color: Color(0xff8F8B8B),
                          ),
                        ),
                      ),
                      SizedBox(width: 30),
                      new Text(
                        "CSCI3100",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w500,
                          fontSize: 15,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                      Expanded(
                        child: SizedBox(width: 1),
                      ),
                      new Text(
                        "100,000",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w700,
                          fontSize: 25,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 10),
                new Container(
                  padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                  //height: 175.37,
                  width: 376.00,
                  decoration: BoxDecoration(
                    color: Color(0xFFFFC0CB).withOpacity(0.4),
                    borderRadius: BorderRadius.circular(11.00),
                  ),
                  child: Row(
                    children: <Widget>[
                      Container(
                        width: 40,
                        child: new Text(
                          "#2",
                          style: TextStyle(
                            //fontFamily: "PingFang HK",
                            fontWeight: FontWeight.w700,
                            fontSize: 25,
                            color: Color(0xff8F8B8B),
                          ),
                        ),
                      ),
                      SizedBox(width: 30),
                      new Text(
                        "Physics",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w500,
                          fontSize: 15,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                      Expanded(
                        child: SizedBox(width: 1),
                      ),
                      new Text(
                        "2,550",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w700,
                          fontSize: 25,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 10),
                new Container(
                  padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                  //height: 175.37,
                  width: 376.00,
                  decoration: BoxDecoration(
                    color: Color(0xFFFFC0CB).withOpacity(0.4),
                    borderRadius: BorderRadius.circular(11.00),
                  ),
                  child: Row(
                    children: <Widget>[
                      Container(
                        width: 40,
                        child: new Text(
                          "#3",
                          style: TextStyle(
                            //fontFamily: "PingFang HK",
                            fontWeight: FontWeight.w700,
                            fontSize: 25,
                            color: Color(0xff8F8B8B),
                          ),
                        ),
                      ),
                      SizedBox(width: 30),
                      new Text(
                        "History",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w500,
                          fontSize: 15,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                      Expanded(
                        child: SizedBox(width: 1),
                      ),
                      new Text(
                        "1,300",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w700,
                          fontSize: 25,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 10),
                new Container(
                  padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                  //height: 175.37,
                  width: 376.00,
                  decoration: BoxDecoration(
                    color: Color(0xFFFFC0CB).withOpacity(0.4),
                    borderRadius: BorderRadius.circular(11.00),
                  ),
                  child: Row(
                    children: <Widget>[
                      Container(
                        width: 40,
                        child: new Text(
                          "#4",
                          style: TextStyle(
                            //fontFamily: "PingFang HK",
                            fontWeight: FontWeight.w700,
                            fontSize: 25,
                            color: Color(0xff8F8B8B),
                          ),
                        ),
                      ),
                      SizedBox(width: 30),
                      new Text(
                        "Work Life Balance",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w500,
                          fontSize: 15,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                      Expanded(
                        child: SizedBox(width: 1),
                      ),
                      new Text(
                        "200",
                        style: TextStyle(
                          //fontFamily: "PingFang HK",
                          fontWeight: FontWeight.w700,
                          fontSize: 25,
                          color: Color(0xff8F8B8B),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 10),
              ],
            ),
            new Container(
              padding: EdgeInsets.all(20),
              //height: 175.37,
              width: 376.00,
              decoration: BoxDecoration(
                color: Color(0xFFFFC0CB).withOpacity(0.4),
                borderRadius: BorderRadius.circular(11.00),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  new Text(
                    "Events Badges Earned:",
                    style: TextStyle(
                      //fontFamily: "PingFang HK",
                      fontWeight: FontWeight.w500,
                      fontSize: 15,
                      color: Color(0xff8F8B8B),
                    ),
                  ),
                  SizedBox(height: 10),
                  Column(
                    children: <Widget>[
                      Row(
                        children: [
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/1.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/2.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/3.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/4.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/5.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/6.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/7.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                          Image.asset("assets/badges/8.png"),
                          Expanded(
                            child: SizedBox(
                              height: 1,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(height: 20),
                  new Text(
                    "Total Points:",
                    style: TextStyle(
                      //fontFamily: "PingFang HK",
                      fontWeight: FontWeight.w500,
                      fontSize: 15,
                      color: Color(0xff8F8B8B),
                    ),
                  ),
                  SizedBox(height: 5),
                  new Text(
                    "2,550",
                    style: TextStyle(
                      //fontFamily: "PingFang HK",
                      fontWeight: FontWeight.w700,
                      fontSize: 30,
                      color: Color(0xff8F8B8B),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}
