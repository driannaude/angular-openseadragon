ng-openseadragon
=====================

Angular module for [OpenSeadragon](http://openseadragon.github.io/) that exposes more API calls from OSD and bi-directional binding for tile sources.

##Installation

Installation can be done via NPM (recommended)
```bash
$ npm install --save ng-openseadragon
```

Alternatively you can clone this repository into your project
```bash
# Using ssh:
$ git clone git@github.com:driannaude/ng-openseadragon.git

# Using https:
$ git clone https://github.com/driannaude/ng-openseadragon.git
```


## Usage

Include the library in your `index.html` at the close of the `body` tag:

```html
    ...
    <script type="text/javascript" src="/path/to/ng-openseadragon/dist/ng-openseadragon.min.js"></script>
  </body>
</html>
```

### Model :
```html
<seadragon options="options" />
```
### Controller:
```javascript
    angular.module("demo", ["ui.openseadragon"])
    .controller("demo", ["$scope", function ($scope) {
        $scope.options = {
            prefixUrl: "http://openseadragon.github.io/openseadragon/images/",
            tileSources: [
                "example-images/highsmith/highsmith.dzi"
            ]
        };
    }]);
```
## Available Attributes
Name | Description
---- | -----------
options | Options for instanciation (parent scope field). Not monitored if changed. See [http://openseadragon.github.io/docs/OpenSeadragon.html#Options]()
name | Name of parent scope field to assign, if you want to access methods.
prefixUrl | Overrides the `prefixUrl` of the options. (raw value, does not evaluate angular expression)
tilesource | Overrides the `tileSources` of the options. (raw value, does not evaluate angular expression)

## Openseadragon Methods
You also have access to the entire underlying `Viewer` API which can be [found here](http://openseadragon.github.io/docs/OpenSeadragon.Viewer.html)

Common methods/values that are attached include:

Name | Description
---- | -----------
[setFullScreen(Bool)](http://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#setFullScreen) | Make canvas go to full screen
[forceRedraw()](http://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#forceRedraw) | Force a redraw/re-render of the canvas
[destroy()](http://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#destroy) | Destroys the referenced instance of OSD*

__* The instance automagically gets destroyed when the scope is destroyed__

## OSD Viewport Methods
Exposing the OSD `Viewer` API also gives you access to helpful programmatic methods to pan/zoom/control the Viewport as exposed via `${name}.viewport`:

Common methods/values that are attached include:

Name | Description
---- | -----------
[getZoom()](http://openseadragon.github.io/docs/OpenSeadragon.Viewport.html#getZoom) | Gets the current zoom level*
[getMinZoom()](http://openseadragon.github.io/docs/OpenSeadragon.Viewport.html#getMinZoom) | Gets the minimum zoom level
[getMaxZoom()](http://openseadragon.github.io/docs/OpenSeadragon.Viewport.html#getMaxZoom) | Gets the maximum zoom level
[zoomTo(zoom, refPoint, immediately)](http://openseadragon.github.io/docs/OpenSeadragon.Viewport.html#zoomTo) | Zooms to level specified
[panTo(center, immediately)](http://openseadragon.github.io/docs/OpenSeadragon.Viewport.html#panTo) | Pans to [OpenSeadragon.Point](http://openseadragon.github.io/docs/OpenSeadragon.Point.html)

__* Zoom level is also exposed and available via ${name}.zoom as a Number__

## Informational API
If you set the `name` attribute, you can access the informational data :

Name | Description
---- | -----------
mouse | Get mouse information
mouse.position | mouse position on viewer (null if cursor is outside)
mouse.imageCoord | mouse position as image coords (null if cursor is outside)
mouse.viewportCoord | mouse position as viewport coords (null if cursor is outside)
viewport | viewport information
viewport.bounds | viewport current bounds
viewport.center | viewport current center
viewport.rotation | viewport current rotation
viewport.zoom | viewport current zoom
