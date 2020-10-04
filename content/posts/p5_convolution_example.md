---
title: "Lab 1, task 2. P5 - Convolution masks"
description: "Here is presented the solution for the second task given in the first laboratory statement  "
images: []
draft: false
tags: ["P5", "JS" , "Hugo"]
---
<div>
Let's start understanding a little bit about convolutional masks, also known as kernels. It's a concept normally used in visual computing because it refers to a matrix where some values are defined to achieve certain effect over images or videos. The most common convolutional mask is the blur kernel used to soften an image and create a foggy or a fade effect, here it is what is know as a box blur kernel, characteristic because it defines that the color for a pixel is the arithmetic mean of its neighboring pixels.

![](https://miro.medium.com/max/250/1*5-58malxQBN0y0wIv9n11Q.jpeg)

Taking into account that matrix then to apply the effect on an image consist only of reading the image as a matrix and then for every pixel consider a submatrix of same size as the kernel with center on it and multiply pairwise every value of the submatix with the kernel and asign the sum of the product to the corresponding pixel. Here is a graphic example of it. 


![](https://embarc.org/embarc_mli/doc/build/html/_images/image104.jpg)

For the development of this task there was asked to implement the effect of some concolutional masks on images, here is part of the code responsable of iterating every pixel of the image and asign a new value acording to the multiplication with the kernel values.

```javascript =
      for (let x = 1; x < img.width; x++) {
          for (let y = 1; y < img.height; y++) {
          let sum = 0; 
    
          for (kx = -1; kx <= 1; kx++) {
              for (ky = -1; ky <= 1; ky++) {
                let xpos = x + kx;
                let ypos = y + ky;
                
                let val = p5.red(img.get(xpos, ypos));
      
                sum += kernel[kx+1][ky+1] * val;
              }
          }
    
          edgeImg.set(x, y, p5.color(sum));
          }
      } 
```

Next, there is an example to visualize the effect of the consolutional masks. On the left we have the original photo, and on the right is the image after passing throught the processing of a given convolutional mask. Initially there is no kernel selected, please select a kernel in the dropdown and wait patiently, it could take a few seconds.

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" type="text/javascript"></script>

<div class="row">
    <div class="centered_div">
        <img id="source_img" src="/images/rover.png">
    </div>
    <div class="centered_div" style="padding-top: 7px" id="canvas">
        <script src="/js/convolution.js" type="text/javascript"></script>     
    </div>
</div>
<div id="dropdown">
    <select id="kernels"> </select>
    <p id="noWEBGL"> </p>
</div>

After running the convolutional mask, the execution time is presented under the dropdown. As it was stated before it took a few seconds, this is the case because it was implemented by software, that means that to process the image output the script only used resources given by the browser. 

Then, now is presented an example of convolutional mask making use of hardware, with P5.js is know as Shaders, here a small peek of the code:


```c   =
	for(int i = 0; i<9; i++){
		//sample a 3x3 grid of pixels
		vec4 color = texture2D(tex0, uv + offset[i]*dist);

    // multiply the color by the kernel value and add it to our conv total
		conv += color * kernel[i];

    // keep a running tally of the kernel weights
		kernelWeight += kernel[i];
	}

    if (kernelType == 3.0) {
        conv.rgb /= kernelWeight;
    }
    
	gl_FragColor = vec4(conv.rgb, 1.0);
```
Now take a look on the improvement by selecting a kernel on the dropdown and cheking the almost instant results.

<div>
    <div class="row">
        <div class="centered_div">
            <img id="source_img" src="/images/rover.png"">
        </div>
        <div class="centered_div" style="padding-top: 7px" id="canvasI">
            <script src="/js/webgl_convolution.js" type="text/javascript"></script>     
        </div>
    </div>
</div>
    <div id="dropdown">
        <select id="webgl_kernels"> </select>
        <p id="WEBGL"> </p>
    </div>

It is a notorious improvement, going down from seconds to miliseconds. That's the power of shaders or the image procesing usign hardware.

At last, here is a table with the excution time given on a DELL XPS 13 with a Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz computer to show the improvement. The result are taken as the mean after running every kernel 5 times.


|Kernel |Software Time (ms)    | Hardware Time  (ms)  |Improvement Factor |
|-----|--------|-----|-----|
|Bottom sobel|5379,36       |0,130|24,043|
|Emboss  |5361,96      |0,210|21,466|
|Blur  |5461,69      |0,345|19,034|
|Identity  |5642,33      |0,055|37,620|
|Left sobel  |6010,82     |0,290|19,358|
|Outline  |5251,40    |0,065|26,370|
|Right sobel  |5486,77      |0,290|27,324|
|Sharpen  |5250,73      |0,340|22,771|
|Top sobel  |5369,87    |0,345|20,635|


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