---
title: "D3-Hugo integration task"
description: "Adding some D3 visualizations to Hugo it wouldn't have been easier."
author: "chriss-m240"
images: []
draft: false
tags: ["D3", "JS", "Hugo"]
---

Te following task is an example of how to add a D3 chart into the Hugo webpage by writting some JS code into the project. The JS code to this specific visualization can be found in the **/static/js/chart.js** file, where there are some variables and data declared for D3 to properly work and render. 

In the case of the .md files there is only a few lines of HTML, defining the use of D3 via a CDN and referencing the JS script mecioned before.

```htmlmixed=
<div class="visualisation"> </div> 
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<script src = "/js/chart.js"></script> 
```

<div class="visualisation"> </div> <!-- Hugo supports html in markdown -->
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script> <!-- load d3.js from CDN. you could potentially load it from /static folder as well-->
<script src = "/js/chart.js"></script> <!-- load d3.js from CDN. you could potentially load it from /static folder as well-->
