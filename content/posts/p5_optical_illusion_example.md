---
title: "P5 optical illusion example"
description: "P5 may trick you with some illusions, here is an example"
images: []
draft: false
tags: ["P5", "JS" , "Hugo"]
---


The following illusion is called **Café Wall**, it consists of simple elements as it is some black and white squares displayed inside parallel rows tricking our eyes to see not parallel rows as it actually is but evidencing a few slopped squares especially at the ends or sides of the rows. Here is part of the code used to make this visualization:

```javascript=
function draw() {
  groutWidth = 139 / 25;
  background('#444444*2');
  numRows = ceil(1000 / (sqWidth)) + 1;
  for (let i = 0; i < numRows; i = i + 1) {
    line(0, i * sqWidth, 480, i * sqWidth);
    drawRow(i);
  }
}
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" type="text/javascript"></script>
<script src="/js/main.js" type="text/javascript"></script>

<div id="cafeWall"> </div>

The following illusion is called **Café Wall**, it consists of simple elements as it is some black and white squares displayed inside parallel rows tricking our eyes to see not parallel rows as it actually is but evidencing a few slopped squares especially at the ends or sides of the rows. Here is part of the code used to make this visualization:

```javascript=
function draw() {
  groutWidth = 139 / 25;
  background('#444444*2');
  numRows = ceil(1000 / (sqWidth)) + 1;
  for (let i = 0; i < numRows; i = i + 1) {
    line(0, i * sqWidth, 480, i * sqWidth);
    drawRow(i);
  }
}
```

<div id="penroseTriangle"> </div>
<div id="circleMovements"> </div>
<div id="mullerLyer"> </div>


