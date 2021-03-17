//To set up differenet navigation ICON
import 'package:best_flutter_ui_templates/design_course/design_course_app_theme.dart';
import 'package:best_flutter_ui_templates/design_course/forum.dart';
import 'package:best_flutter_ui_templates/design_course/profile.dart';
import 'package:best_flutter_ui_templates/design_course/bot.dart';
import 'package:flutter/material.dart';
import 'package:animations/animations.dart';
import 'package:best_flutter_ui_templates/design_course/home_design_course.dart';
import 'package:best_flutter_ui_templates/design_course/programs.dart';

class NavBar extends StatefulWidget {
  @override
  _NavBarState createState() => _NavBarState();
}

class _NavBarState extends State<NavBar> {
  final _pageoption = [
    DesignCourseHomeScreen(),
    Program(),
    HomePageDialogflow(),
    Forum(),
    Profile(),
  ];

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
            icon: Icon(Icons.home),
            title: Text('Home'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list),
            title: Text('Programs'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.chat_outlined ),
            title: Text('Chatbot'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.archive),
            title: Text('Forum'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.people),
            title: Text('Profile'),
          ),
        ],
      ),
    );
  }
}
