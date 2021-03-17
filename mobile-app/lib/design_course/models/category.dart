class Category {
  Category({
    this.title = '',
    this.imagePath = '',
    this.lessonCount = 0,
    this.date = '',
    this.rating = 0.0,
  });

  String title;
  int lessonCount;
  String date;
  double rating;
  String imagePath;

  static List<Category> categoryList = <Category>[
    Category(
      imagePath: 'assets/design_course/i01_LWS.png',
      title: 'Lee Woo Shing Assembly',
      lessonCount: 24,
      date: '15/3',
      rating: 4.3,
    ),
    Category(
      imagePath: 'assets/design_course/i01_SW.png',
      title: 'Software Engineering Workshop',
      lessonCount: 22,
      date: '16/3',
      rating: 4.6,
    ),
    Category(
      imagePath: 'assets/design_course/i01_football.jpeg',
      title: 'Football Group Competition',
      lessonCount: 24,
      date: '17/3',
      rating: 4.3,
    ),
    Category(
      imagePath: 'assets/design_course/i01_music.jpeg',
      title: 'Music Club New Asia',
      lessonCount: 22,
      date: '28/3',
      rating: 4.6,
    ),
  ];

  static List<Category> popularCourseList = <Category>[
    
    Category(
      imagePath: 'assets/design_course/i01_Christian.jpeg',
      title: 'Christian Sharing',
      lessonCount: 12,
      date: '27/9',
      rating: 4.8,
    ),
    Category(
      imagePath: 'assets/design_course/i01_deeplearning.jpeg',
      title: 'Deep learning Course',
      lessonCount: 28,
      date: '28/9',
      rating: 4.9,
    ),
    Category(
      imagePath: 'assets/design_course/i01_swim.jpeg',
      title: 'Swimming Workshop',
      lessonCount: 12,
      date: '25/9',
      rating: 4.8,
    ),
    Category(
      imagePath: 'assets/design_course/i01_cook.jpeg',
      title: 'Cooking',
      lessonCount: 28,
      date: '26/9',
      rating: 4.9,
    ),
  ];
}
