---
title: "P5 convolution example"
description: "P5 is life, here an easy example of how to use it with Hugo"
images: []
draft: false
tags: ["P5", "JS" , "Hugo"]
---
<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ex non ipsum rutrum faucibus in ut orci. Vestibulum vel orci orci. Curabitur vitae risus tincidunt, tristique neque at, dignissim arcu. Morbi euismod mollis lacus sed sagittis. Morbi lacinia pharetra felis, sit amet porttitor nunc iaculis non. Donec bibendum maximus dui eu facilisis. Donec ultrices placerat urna a convallis. Nunc et ipsum luctus, consequat sem a, pulvinar felis. Integer posuere tincidunt urna, at fermentum nulla accumsan quis. Sed dignissim, purus eget efficitur vestibulum, sapien leo sodales mauris, id auctor neque turpis quis lacus. Aenean et nunc purus. Ut hendrerit mi tortor, vel dapibus mi feugiat a. Quisque ultricies, eros id faucibus pulvinar, justo enim lobortis diam, pulvinar auctor nunc quam non dolor. Sed scelerisque nulla leo, et tincidunt nunc blandit sit amet.


<link rel="stylesheet" href="style.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" type="text/javascript"></script>

<div class="row">
    <div style="float: left; width: 50%;">
        <img src="/images/rover.png" alt="Italian Trulli">
    </div>
    <div style="float: left; width: 50%;" id="myCanvas">
        <script src="/js/convolution2.js" type="text/javascript">
        </script>     
    </div>
</div>
<div class="row">
    <select name="efeects" id="efects">
        <option value="blur">blur</option>
        <option value="bottom sobel">bottom sobel</option>
        <option value="emboss">emboss</option>
        <option value="identity">identity</option><option value="emboss">emboss</option>
        <option value="left sobel">left sobel</option>
        <option value="outline">outline</option>
        <option value="right sobel">right sobel</option>
        <option value="sharpen">sharpen</option>
        <option value="top sobel">top sobel</option>
    </select>
</div>
</div>