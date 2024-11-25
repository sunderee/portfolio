import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:site/ui/app.dart';

void main() {
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
    ),
  );

  runApp(App());
}
