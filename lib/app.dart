import 'package:flutter/material.dart';
import 'package:portfolio/ui/home_screen.dart';

final class App extends StatelessWidget {
  static ThemeData _theme(Brightness brightness) => ThemeData.from(
    colorScheme: ColorScheme.fromSeed(
      brightness: brightness,
      dynamicSchemeVariant: DynamicSchemeVariant.monochrome,
      seedColor: const Color.fromARGB(255, 255, 149, 0),
    ),
  );

  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Peter Aleksander Bizjak',
      theme: _theme(Brightness.light),
      darkTheme: _theme(Brightness.dark),
      themeMode: ThemeMode.system,
      home: const HomeScreen(),
    );
  }
}
