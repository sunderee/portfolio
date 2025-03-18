import 'package:flutter/material.dart';
import 'package:portfolio/ui/master_container.dart';
import 'package:portfolio/ui/social_media_icon_button.dart';
import 'package:portfolio/utils/extensions.dart';

final class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return MasterContainer(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Peter Aleksander Bizjak',
            textAlign: TextAlign.center,
            style: context.theme.textTheme.headlineSmall?.copyWith(
              color: context.theme.colorScheme.onSurface,
            ),
          ),
          Text(
            'Software developer. Cybersecurity specialist. Consultant.',
            textAlign: TextAlign.center,
            style: context.theme.textTheme.titleMedium?.copyWith(
              color: context.theme.colorScheme.onSurfaceVariant,
            ),
          ),
          const SizedBox(height: 16.0),
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 8.0,
            children: [
              SocialMediaIconButton(
                assetPath: 'assets/twitter.svg',
                socialMediaURL: 'https://x.com/peteralexbizjak',
              ),
              SocialMediaIconButton(
                assetPath: 'assets/threads.svg',
                socialMediaURL: 'https://www.threads.net/@peteralexbizjak',
              ),
              SocialMediaIconButton(
                assetPath: 'assets/bluesky.svg',
                socialMediaURL:
                    'https://bsky.app/profile/peteralexbizjak.bsky.social',
              ),
              SocialMediaIconButton(
                assetPath: 'assets/linkedin.svg',
                socialMediaURL:
                    'https://www.linkedin.com/in/peteraleksanderbizjak/',
              ),
              SocialMediaIconButton(
                assetPath: 'assets/github.svg',
                socialMediaURL: 'https://github.com/sunderee',
              ),
            ],
          ),
        ],
      ),
    );
  }
}
