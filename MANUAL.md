# Background
The DEMOTAPE explorer is a hybrid webportal, created via the combination of a wiki-like knowledge platform and an interactive map. The knowledge platform is created with Quartz (https://github.com/jackyzha0/quartz), a markdown file driven online toolset developed to publish  "digital gardens", using similar architecture to an Obsidian vault. The explorer combines this with an interactive mapping tool based on Leaflet, implemented as an html page. The explorer architecture creates an interconnected system where the portal content both can be shown in a thematic and in a spatial way.

The DEMOTAPE explorer is designed inspired by the design principles and experiences of the Cliwac explorer platform (www.cliwac-explorer.de), developed to present the results of the Cliwac research project (www.cliwac.de). However, here a stronger focus was put on ease of use and transferability, and the make of use of existing tools than developing a completely new system.

## Features and novelties
- Fully markdown based content management
- Automatic wiki-style links
- Custom (non-geographic) map support
- Community driven content support
- Github pages support 
- Offline hosting support (tbd)

# How does it work?
The webplatform is built with Quartz. Quartz is fed by content via markdown files, preferably (but not exclusively) created with an Obsidian vault (this is a great way to test if the links and networks work offline well). The used Quartz system is modified to include an interactive map html page, that is being included into the build.

# Content management
The markdown files are located in the "/content" folder directly 
The recommended markdown structure to these files is:
```
'''
title: Title
'''
#tags

content

[[link|alias]]

```

The location markers are located in the file:
"/quartz/static/maps/data/points-ai.geojson"

The points in the file are as:
```
{ "type": "Feature", "properties": { "title": "Jeker_1", "content_file": "content/jeker_1.md"}, "geometry": { "type": "Point", "coordinates": [ 0.055476909166148, 0.0391553191727 ] } }
```

Note: coordinates are always defined in WGS84 (Leaflet thingy)

Any new markdown file needs a new point row like this, with a proper content_file path to show up. 

_Recommendation: With the custom maps, the best way to create the points is via the QGIS editor - just remember saving it out as a .gejson file._

_/If the interactive map needs editing it is here:  "/quartz/static/maps/index.html"_

## Content updates:
Once the content is updated, from the root directory run:
```
npm run docs
```
This calls the necessary quartz and extra scripts to build the webportal up. The final files will be created in the /docs folder. The Github pages is launched from this folder.

__Note: without rebuilding the portal locally, no updates will be included in the actual deployed site online__

---
# Notes
- Images are located in the /content/images folder and should be referenced as: 
```
![Beki](/images/beki.jpg)
```
