import 'package:flutter/material.dart';
import 'package:portfolio/utils/extensions.dart';

final class MasterContainer extends StatefulWidget {
  final Widget child;

  const MasterContainer({super.key, required this.child});

  @override
  State<MasterContainer> createState() => _MasterContainerState();
}

final class _MasterContainerState extends State<MasterContainer> {
  @override
  Widget build(BuildContext context) {
    final isDesktop = context.media.size.width >= 740;

    final mobileContainer = Scaffold(
      body: SafeArea(
        minimum: EdgeInsets.all(16.0),
        child: Center(child: widget.child),
      ),
    );
    final desktopContainer = Scaffold(
      body: Container(
        width: context.media.size.width,
        height: context.media.size.height,
        alignment: Alignment.center,
        child: SizedBox(width: 740.0, child: widget.child),
      ),
    );

    return isDesktop ? desktopContainer : mobileContainer;
  }
}
