---
title: "Lab 1, task 4. P5 - Video analysis"
description: "Here is presented the solution for the fourth task given in the first laboratory statement "
images: []
draft: false
tags: ["P5", "JS" , "Hugo"]
---

At first we tried to run the convolutional masks on a video at software level, unfortunaly there was no possible to execute it because the resources given by the browser to the page were not enough to support the complete processing of the video, returning as and error the following.

<img src="/images/error.png">

With that is notorius that running convolutional mask on a software level is no efficient and it takes several computational resources to compute it. Then the solution comes with the computation in a hardware level, in this case since we are using P5.js that is what is know as shaders, here we have practically the same code as the one used in the convolutional mask for an image only that the input source now is different. We declare and upload the video to then apply the convolutional mask.

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js" type="text/javascript"></script>
<div class="centered_div" style="padding-top: 7px" id="video">
    <script src="/js/convolution_video.js" type="text/javascript"></script>  
</div>

So, in conclusion we realize that if we want to work with great volumes of data, that is the case of great images of videos, the best way to doit is by doing it with shaders. Since after the test we run we could observe that the difference in frame rate between running no convolutional mask on the video and running any convolutional mask is almost unnoticeable. resulting in and average framerate of 57.8 in both cases, running a convolutional mask or not running a convolutional mask.