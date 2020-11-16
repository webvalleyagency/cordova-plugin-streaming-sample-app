# cordova-plugin-streaming-sample-app

## Local testing
If you want to test you local version of the plugin, you can follow these steps:

1. Open terminal in root of this project.
2. Uninstall current version of the plugin via command:
```bash
cordova plugin remove cordova-plugin-streaming-media
```
3. Then install your local version via command:
```bash
cordova plugin add <PATH_TO_YOUR_LOCAL_VERSION_OF_THE_PLUGIN>
```
4. When you're done, revert `package.json` and `package-lock.json` files. DO NOT push them to the git!