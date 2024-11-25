import 'package:flutter/material.dart';
import 'package:site/ui/screens/landing_screen.dart';

final class App extends StatelessWidget {
  static ThemeData _applicationTheme(Brightness brightness) => ThemeData.from(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          brightness: brightness,
          seedColor: switch (brightness) {
            Brightness.light => const Color(0xFF2A2A2A),
            Brightness.dark => const Color(0xFFFAFAFA),
          },
          surface: switch (brightness) {
            Brightness.light => const Color(0xFFEFEFEF),
            Brightness.dark => const Color(0xFF121212),
          },
          onSurface: switch (brightness) {
            Brightness.light => const Color(0xFF0E0E08),
            Brightness.dark => const Color(0xFFFFFFFA),
          },
        ),
      ).copyWith(
        scaffoldBackgroundColor: switch (brightness) {
          Brightness.light => const Color(0xFFEFEFEF),
          Brightness.dark => const Color(0xFF121212),
        },
      );

  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.system,
      theme: _applicationTheme(Brightness.light),
      darkTheme: _applicationTheme(Brightness.dark),
      home: const LandingScreen(),
    );
  }
}
