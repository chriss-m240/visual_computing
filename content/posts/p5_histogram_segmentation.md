---
title: "Lab 1, task 3. P5 - Image Histogram and Segmentation"
description: "Here is presented the solution for the third task given in the first laboratory statement  "
images: []
draft: false
tags: ["P5", "JS" , "Hugo"]
---

## Image Histograms

Image histograms visually summarize the **distribution** of a continuous numeric variable by measuring the frequency at which certain values appear in the image. The x-axis in the image histogram is a **number line** that displays the range of image pixel values that has been split into number ranges, or bins. A bar is drawn for each bin, and the width of the bar represents the density number range of the bin; the height of the bar represents the number of pixels that fall into that range.

![](https://pro-cdn.pixelmator.com/tutorials/guides/understanding-histograms/image-understanding_histograms@2x.jpg)

In the following example, as we know that a pixel can take a value between 0 and 255, thar range of values were took for the bins (1 bin = 1 value between 0-255), furthermore was splited in 3 histograms, one per each color dimension.


## Image Segmentation

It is the process of dividing an image into different regions based on the characteristics of pixels to identify objects or boundaries to simplify an image and more efficiently analyze it. Segmentation impacts a number of domains, from the filmmaking industry to the field of medicine. For instance, the software behind green screens implements image segmentation to crop out the foreground and place it on a background for scenes that cannot be shot or would be dangerous to shoot in real life. Image segmentation is also used to track objects in a sequence of images and to classify terrains, like petroleum reserves, in satellite images. Some medical applications of segmentation include the identification of injured muscle, the measurement of bone and tissue, and the detection of suspicious structures to aid radiologists (Computer Aided Diagnosis, or CAD).

![](https://es.mathworks.com/discovery/image-segmentation/_jcr_content/mainParsys3/discoverysubsection/mainParsys3/image_629538353.adapt.480.high.jpg/1588786618532.jpg)


### Sana Twice Example 

In this interactive example of segmentation using several histograms, on per color channel in RGB colorMode, using sliders you can modify the window range to segment in th histograms, and placing a number between 0 and 255 in the text boxes you will take the control of the size of the windows use it in the segmentation.


<div class="row">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" type="text/javascript"></script>
	<div class="centered_div" style="padding-top: 7px" id="canvasI">
		<script src="/js/segmentation_hist.js" type="text/javascript"></script>   
	</div>
</div>



feel free to test several windows and ranges, for example: Red Channel in 60, Green Channel in 180 and Blue Channel in 20 you will see an alien 사나.


## How to do it?

As you can access to pixels in a loaded image as the following:

![](https://lh3.googleusercontent.com/6a3xoXOT6ZSsvn0HqWaC-2hcS5d6TrZ9DhNq8ZADFHJjXVbP_kMb0wYKFTyD3plD1yGxxwBLNSLgpt9vMFrGCWpRZJK9q3r6XS9Jyz19WJlkL-AXbr4=w773)

with the following code you will iterate it and take control over every channel:


```javascript =
  img.loadPixels();
  for(x=0;x<img.width;x++)
    for(y=0;y<img.height;y++) {      
      pos=4*(y*img.width+x);
      img.pixels[pos] // R value
      img.pixels[pos+1] // G value
      img.pixels[pos+2] // B value
      img.pixels[pos+3] // A value
  }
  img.updatePixels();
```

and updating the pixels in the image you can segment it for every channel.

<style>

.row {
    display: flex;
}

.centered_div {
    margin:auto
}

#dropdown {
    text-align: center;
}

#source_img {
    width:319px;
    height: 359px; 
}

</style>