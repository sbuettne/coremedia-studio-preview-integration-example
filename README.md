# CoreMedia Studio Preview Integration Example

Use this workspace as a reference on how to enable the CoreMedia Studio preview integration in your custom frontend.

The example contains the required `preview.js` as well as example code for responsive breakpoint support and additional content metadata.

## Quick Start

```shell
pnpm install
pnpm run dev
```

Will start the example app on http://localhost:3000/.

## Configure Studio Preview
To enable this example app as a preview in Studio, you need to configure the following in the _Multi Preview_ configuration. Please note, that the groups should be set to `developers` so that the app does not appear for regular Studio users.

![studio-preview-configuration.png](doc%2Fstudio-preview-configuration.png)

See [Studio Developer Manual - Multiple Previews Configuration](https://documentation.coremedia.com/cmcc-11/artifacts/2304/webhelp/studio-developer-en/content/MultiplePreviewsConfiguration.html) for details.
