---
title: "P5 Lightness"
description: "Transforming images with color into black and white images"
images: []
draft: false
tags: ["P5", "JS" , "Hugo"]
---
<div>
The first image is the original colorfull image which we are going to transform into black and white images with the following tehcniques.

Arithmetic mean:

This metod is just the  i.e. average, of the three components, in the HSI model called intensity (fig. a). This is simply the projection of a point onto the neutral axis—the vertical height of a point in our tilted cube. The advantage is that, together with Euclidean-distance calculations of hue and chroma, this representation preserves distances and angles from the geometry of the RGB cube.

<div class="row">
    <div class="centered_div">
        <img class="special-img-class" src="/images/avg.png" />     
    </div>
    <div class="centered_div">
        <p>Equation</p>
        <img class="special-img-class" src="/images/avg_for.png" />     
    </div>
</div>

Luma:

A more perceptually relevant alternative is to use luma, Y′, as a lightness dimension (fig d). Luma is the weighted average of gamma-corrected R, G, and B, based on their contribution to perceived lightness, long used as the monochromatic dimension in color television broadcast. For sRGB, the Rec. 709 primaries yield Y′709 (standardizes the format of high-definition television, having 16:9 (widescreen) aspect ratio. ), digital NTSC uses Y′601 according to Rec. 601 and some other primaries are also in use which result in different coefficients.

<div class="row">
    <div class="centered_div">
        <img class="special-img-class" src="/images/luma.png" />     
    </div>
    <div class="centered_div">
        <p>Equation</p>
        <img class="special-img-class" src="/images/luma_for.png" />     
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" type="text/javascript"></script>

<div class="row">
    <div class="centered_div" style="padding-top: 7px" id="canvasI">
            <script src="/js/bw.js" type="text/javascript"></script>     
        </div>
</div>   

</div>


<style>

.row {
    display: flex;
}

.centered_div {
    margin:center
}

#dropdown {
    text-align: center;
}

#source_img {
    width:319px;
    height: 359px; 
}

</style>