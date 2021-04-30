//To set up differenet navigation ICON
import 'package:best_flutter_ui_templates/design_course/design_course_app_theme.dart';
import 'package:best_flutter_ui_templates/design_course/forum.dart';
import 'package:best_flutter_ui_templates/design_course/profile.dart';
import 'package:best_flutter_ui_templates/design_course/bot.dart';
import 'package:flutter/material.dart';
import 'package:animations/animations.dart';
import 'package:best_flutter_ui_templates/design_course/home_design_course.dart';
import 'package:best_flutter_ui_templates/design_course/programs.dart';
import 'invite_friend_screen.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';


//Nav Bar is referece from the library of the best_flutter_ui_templates
class NavBar extends StatefulWidget {
  @override
  _NavBarState createState() => _NavBarState();
}

//It is able to dynamyic adding different page in ascending order
class _NavBarState extends State<NavBar> {
  final _pageoption = [
    DesignCourseHomeScreen(),
    Program(),
    InviteFriend(),
    Forum(),
    Profile(),
    HomePageDialogflow(),
  ];

  //It create the logic of nav bar like moving to different page
  int _selectedIndex = 0;
  int choice = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: Colors.white,
      body: SafeArea(
        child: PageTransitionSwitcher(
            transitionBuilder: (
              Widget child,
              Animation<double> primaryAnimation,
              Animation<double> secondaryAnimation,
            ) {
              return FadeThroughTransition(
                child: child,
                animation: primaryAnimation,
                secondaryAnimation: secondaryAnimation,
              );
            },
            child: _pageoption[choice]),
      ),

      //It create the UI like the icon of nav bar like moving to different page
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        selectedItemColor: DesignCourseAppTheme.nearlyBlue,
        selectedLabelStyle: TextStyle(
          fontWeight: FontWeight.w700,
        ),
        unselectedLabelStyle: TextStyle(
          fontWeight: FontWeight.w700,
        ),
        currentIndex: choice,
        onTap: (int index) {
          setState(() {
            choice = index;
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            title: Text('Home'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list_alt_sharp),
            title: Text('Events'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.share),
            title: Text('Share'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.forum_outlined),
            title: Text('Forum'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_search_outlined),
            title: Text('Profile'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.chat_outlined ),
            title: Text('Chatbot'),
          ),
        ],
      ),
    );
  }
}
