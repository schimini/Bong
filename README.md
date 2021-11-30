# Bong

![Logo](src/images/logo-128.png)

Bong - Because Bing is no more

Redirect all Bing (and therefore Cortana) searches to a search engine of your choice!

Microsoft's web team has always been ahead. Like a bit too much. From Internet Explorer to Bing they got it all. That's why this extension serves as a boycott. Because they are just too good. 

Bong serves its full purpose when used with the great Edge Deflector (https://github.com/da2x/EdgeDeflector) 

Open to contributions, just file a PR!

[Firefox Addons](https://addons.mozilla.org/en-US/firefox/addon/bong/)
[Not yet] [Chrome Web Store](https://chrome.google.com/webstore/detail/mbbgkkdlmfdbchafakhpioopolaodgff)


## Notes

On Opera active search thingy on extension settings

## Changelog

[Changelog](CHANGELOG.md)

## Dev setup

1. Install dependencies

```
yarn
```

2.  Build/Watch the front-end

```
  yarn build
  yarn watch
```

3. Navigate chrome to `chrome://extensions` or to your favorite browser extension page
4. Check the `Developer mode` toggle
5. Click on `Load Unpacked Extension...`
6. Select the `distribution` directory

## Credits

Originally created by [Theo Browne](http://www.t3.gg) and a few other contributors.

Forked from https://github.com/TheoBr/Chrometana

A lot of code taken from https://github.com/drewctate/preact-chrome-extension-starter and https://github.com/fregante/browser-extension-template
