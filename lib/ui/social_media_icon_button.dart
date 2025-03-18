import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portfolio/utils/extensions.dart';
import 'package:web/web.dart' as web;

final class SocialMediaIconButton extends StatelessWidget {
  final String assetPath;
  final String socialMediaURL;

  const SocialMediaIconButton({
    super.key,
    required this.assetPath,
    required this.socialMediaURL,
  });

  @override
  Widget build(BuildContext context) => IconButton.outlined(
    onPressed: () => web.window.open(socialMediaURL, '_blank')?.focus(),
    icon: SvgPicture.asset(
      assetPath,
      height: 20.0,
      width: 20.0,
      colorFilter: ColorFilter.mode(
        context.theme.colorScheme.onSurface,
        BlendMode.srcIn,
      ),
    ),
  );
}
