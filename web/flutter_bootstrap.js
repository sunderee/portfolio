{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
    config: {
        canvasKitVariant: 'auto',
        canvasKitForceCpuOnly: false,
        renderer: 'skwasm'
    },
    onEntrypointLoaded: async function (engineInitializer) {
        const LOADER_ID = "preloader";

        const appRunner = await engineInitializer.initializeEngine();
        document.getElementById(LOADER_ID)?.remove();
        appRunner.runApp();
    }
});
