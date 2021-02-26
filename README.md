# Angular lazy loading with SystemJS

Reproduction steps:

1. Adapt index.html
- change the path to system.min.js in head
```
  <script type="text/javascript" src="/root/system.min.js"></script>
```
2. change the importmap addresses with yours
```
  <script type="systemjs-importmap">
    {
      "imports": {
        "a-remote-module": "https://someserver.com/modules/a-remote-module.umd.min.js",
        "@a-scope/another-remote-module": "https://someserver.com/modules/a-scope-another-remote-module.umd.min.js"
      }
    }
  </script>
```

2. Build modules & deploy
```
ng b a-remote-module
ng b @a-scope/another-remote-module
```

Host the files `dist/a-remote-module/bundles/a-remote-module.umd.min.js` and `dist/a-scope/another-remote-module/bundles/a-scope-another-remote-module.umd.min.js` so they are accessible via the configured urls in the importmap (`https://someserver.com/modules/...`)

3. Build app & deploy
```
ng b root-app --base-href /root/
```

Host the app. I do host my app in a `/root/` folder, thus the need to prefix the system js script src in the index.htmk and use --base-href when building the app.