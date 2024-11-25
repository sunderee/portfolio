import 'package:flutter/material.dart';
import 'package:site/shared/extensions.dart';
import 'package:site/ui/components/link_button.dart';
import 'package:site/ui/components/mail_button.dart';

final class LandingScreen extends StatelessWidget {
  const LandingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        minimum: EdgeInsets.all(16.0),
        child: SizedBox(
          height: context.media.size.height,
          width: context.media.size.width,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Peter Aleksander Bizjak',
                textAlign: TextAlign.center,
                style: context.theme.textTheme.headlineSmall,
              ),
              Text(
                'Software developer. Cybersecurity specialist. Consultant.',
                textAlign: TextAlign.center,
                style: context.theme.textTheme.titleMedium?.copyWith(
                  color: context.theme.colorScheme.onSurfaceVariant,
                ),
              ),
              SizedBox(height: 16.0),
              Wrap(
                alignment: WrapAlignment.center,
                spacing: 8.0,
                children: [
                  LinkButton(
                    iconAssetPath: 'assets/twitter.svg',
                    url: 'https://x.com/peteralexbizjak',
                  ),
                  LinkButton(
                    iconAssetPath: 'assets/threads.svg',
                    url: 'https://www.threads.net/@peteralexbizjak',
                  ),
                  LinkButton(
                    iconAssetPath: 'assets/bluesky.svg',
                    url: 'https://bsky.app/profile/peteralexbizjak.bsky.social',
                  ),
                  LinkButton(
                    iconAssetPath: 'assets/linkedin.svg',
                    url: 'https://www.linkedin.com/in/peteraleksanderbizjak/',
                  ),
                  LinkButton(
                    iconAssetPath: 'assets/github.svg',
                    url: 'https://github.com/sunderee',
                  ),
                  MailButton(),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
