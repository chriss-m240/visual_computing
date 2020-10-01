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
    <div class="centered_div">
        <img id="source_img" src="/images/rover.png" alt="Italian Trulli">
    </div>
    <div class="centered_div" style="padding-top: 7px" id="myCanvas">
        <script src="/js/convolution2.js" type="text/javascript"></script>     
    </div>
</div>
    <div id="test">
        <select name="cars" id="cars"> </select>
    </div>
</div>


<style>

.row {
    display: flex;
}

.centered_div {
    margin:auto
}

#test {
    text-align: center;
}

#source_img {
    width:319px;
    height: 359px; 
}

</style>