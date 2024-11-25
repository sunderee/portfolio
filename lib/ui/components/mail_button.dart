import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:site/shared/extensions.dart';
import 'package:web/web.dart';

final class MailButton extends StatelessWidget {
  const MailButton({super.key});

  @override
  Widget build(BuildContext context) {
    return IconButton.outlined(
      onPressed: () {
        document.location?.href = 'mailto:peter.aleksander@bizjak.dev';
      },
      icon: SvgPicture.asset(
        'assets/email.svg',
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
