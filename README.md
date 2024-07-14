# directus-extension-tableau-panel

Tableau Embedded Panel for Directus Analytics

## Install

```sh
npm install directus-extension-tableau-panel
```

or

```sh
yarn add directus-extension-tableau-panel
```

Add env variables to allow tableau embedded script import

```sh
CONTENT_SECURITY_POLICY_DIRECTIVES__CONNECT_SRC: "array:'self',blob:,https://*"
CONTENT_SECURITY_POLICY_DIRECTIVES__SCRIPT_SRC: "array:'self',https://*"
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC: "array:'self',https://*"
```

Restart Directus