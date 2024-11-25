{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
    onEntrypointLoaded: async function (engineInitializer) {
        const appRunner = await engineInitializer.initializeEngine();

        const LOADER_ID = "preloader";
        document.getElementById(LOADER_ID)?.remove();

        appRunner.runApp();
    }
});
