// Still Building
import 'package:best_flutter_ui_templates/design_course/design_course_app_theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dialogflow/dialogflow_v2.dart';
import 'package:flutter_tts/flutter_tts.dart';
//Enable the text to speach function
final FlutterTts flutterTts = new FlutterTts();

class HomePageDialogflow extends StatefulWidget {
  HomePageDialogflow({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageDialogflow createState() => new _HomePageDialogflow();
}

class _HomePageDialogflow extends State<HomePageDialogflow> {
  final List<ChatMessage> _messages = <ChatMessage>[];
  final TextEditingController _textController = new TextEditingController();
//Generate the text box for typing
  Widget _buildTextComposer() {
    return new IconTheme(
      data: new IconThemeData(color: Theme.of(context).accentColor),
      child: new Container(
        margin: const EdgeInsets.symmetric(horizontal: 8.0),
        child: new Row(
          children: <Widget>[
            new Flexible(
              child: new TextField(
                controller: _textController,
                onSubmitted: _handleSubmitted,
                decoration: new InputDecoration.collapsed(
                  hintText: "Talk to Univent virtual assistant...",
                ),
              ),
            ),
            new Container(
              margin: new EdgeInsets.symmetric(horizontal: 4.0),
              child: new IconButton(
                  icon: new Icon(Icons.send,
                      color: DesignCourseAppTheme.nearlyBlue),
                  onPressed: () => _handleSubmitted(_textController.text)),
            ),
          ],
        ),
      ),
    );
  }
//Recive the data from thte dialogflow api and turn on the tts for response in voice and text
  void Response(query) async {
    _textController.clear();
    AuthGoogle authGoogle =
        await AuthGoogle(fileJson: "assets/credentials.json").build();
    Dialogflow dialogflow =
        Dialogflow(authGoogle: authGoogle, language: Language.english);
    AIResponse response = await dialogflow.detectIntent(query);
    ChatMessage message = new ChatMessage(
      text: response.getMessage() ??
          new CardDialogflow(response.getListMessage()[0]).title,
      name: "Javis",
      type: false,
    );
    setState(() {
      _messages.insert(0, message);
    });
    await flutterTts.setLanguage("en-US");
    await flutterTts.setPitch(1);
    await flutterTts.setSpeechRate(0.5);
    await flutterTts.speak(message.text);
  }

  void _handleSubmitted(String text) {
    _textController.clear();
    ChatMessage message = new ChatMessage(
      text: text,
      name: "Michael",
      type: true,
    );
    setState(() {
      _messages.insert(0, message);
    });
    Response(text);
  }
//UI design seting the container , color
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
          title: Text("Univent Helper",
              style: TextStyle(
                  color: DesignCourseAppTheme.darkText,
                  fontFamily: "WorkSans")),
          backgroundColor: Colors.pinkAccent),
      body: new Column(children: <Widget>[
        new Flexible(
            child: new ListView.builder(
          padding: new EdgeInsets.all(8.0),
          reverse: true,
          itemBuilder: (_, int index) => _messages[index],
          itemCount: _messages.length,
        )),
        new Divider(height: 1.0),
        new Container(
          decoration: new BoxDecoration(color: Theme.of(context).cardColor),
          child: _buildTextComposer(),
        ),
      ]),
    );
  }
}

//Chat CSS like tht position and the color, icon
class ChatMessage extends StatelessWidget {
  ChatMessage({this.text, this.name, this.type});

  final String text;
  final String name;
  final bool type;

  List<Widget> otherMessage(context) {
    return <Widget>[
      new Container(
        margin: const EdgeInsets.only(right: 16.0),
        //child: new CircleAvatar(
            //child: new Text('B', style: TextStyle(color: Colors.white)),
            //backgroundColor: DesignCourseAppTheme.nearlyBlue.withOpacity(0.4)
        //),
        child: new Icon(Icons.face,
            size: 40.0, color: Colors.pink
        ),
      ),
      new Expanded(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            new Text(this.name,
                style: new TextStyle(
                  fontWeight: FontWeight.bold,
                )),
            new Container(
              margin: const EdgeInsets.only(top: 5.0, right: 10.0),
              child: new Text(text, style: new TextStyle()),
            ),
          ],
        ),
      ),
    ];
  }

  List<Widget> myMessage(context) {
    return <Widget>[
      new Expanded(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            new Text(this.name,
                style: new TextStyle(
                  fontWeight: FontWeight.bold,
                )),
            new Container(
              margin: const EdgeInsets.only(top: 5.0),
              child: new Text(text, style: new TextStyle()),
            ),
          ],
        ),
      ),
      new Container(
        margin: const EdgeInsets.only(left: 16.0),
        child: new CircleAvatar(
            backgroundColor: DesignCourseAppTheme.nearlyBlue,
            child: new Text(
              this.name[0],
              style: new TextStyle(
                  fontWeight: FontWeight.bold, color: Colors.white),
            )),
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return new Container(
      margin: const EdgeInsets.symmetric(vertical: 10.0),
      child: new Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: this.type ? myMessage(context) : otherMessage(context),
      ),
    );
  }
}
