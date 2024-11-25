import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:site/shared/extensions.dart';
import 'package:web/web.dart';

final class LinkButton extends StatelessWidget {
  final String iconAssetPath;
  final String url;

  const LinkButton({
    super.key,
    required this.iconAssetPath,
    required this.url,
  });

  @override
  Widget build(BuildContext context) {
    return IconButton.outlined(
      onPressed: () => window.open(url, '_blank', 'noopener,noreferrer'),
      icon: SvgPicture.asset(
        iconAssetPath,
        height: 16.0,
        width: 16.0,
        colorFilter: ColorFilter.mode(
          context.theme.colorScheme.onSurface,
          BlendMode.srcIn,
        ),
      ),
    );
  }
}
