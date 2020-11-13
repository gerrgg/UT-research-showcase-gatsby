--- 
title: Imaging, Reimagined
date: 1550466000000
category: Department of Mathematics | College of Natural Sciences
---

![MRI images](http://research.utexas.edu/showcase/assets/js/fileman/Uploads/MRI_images.jpeg)

In a traditional MRI image (left), each pixel represents the type of tissue at a certain point in the body, in this case, the brain. An AI algorithm trained on images of many other brains can create an MRI image with much less data (middle), saving time and money. But how accurate is it? Using a method called cross validation (right), Ward can determine which parts of the reconstructed image were inaccurately reconstructed (pink). Credit: Rachel Ward.

Magnetic resonance imaging (MRI) helps doctors diagnose a host of problems from tumors to spinal cord injuries to strokes. But MRI scans require patients to spend as long as a half-hour or hour uncomfortably confined in a tube, sometimes at a cost of thousands of dollars.

[Rachel Ward](https://sites.google.com/prod/view/rward), a UT Austin mathematician, is part of a team exploring ways to produce faithful high-resolution images more quickly and at a lower cost with the help of artificial intelligence algorithms. 

MRI technology uses an extremely powerful magnet and a radio transmitter to flip hydrogen atoms in the body. The way the atoms react at any given spot reveals details about the tissue there, so the MRI scans a region and collects enough data to build up a 2D or 3D image of specific tissue.

Ward and her colleagues train artificial intelligence algorithms to recognize standard patterns in human tissues, using images from past patients. Algorithms that can accurately fill in gaps would mean needing to collect less data and spend less time in the machine.

To prevent the algorithm from missing critically important details that differ from one patient to the next, the team applies a method called cross validation to reconstructed MRI images. In essence, they hold back a random subset of measurements from the algorithm when it makes the reconstruction and then compare the hold-outs to what the algorithm has filled in. How closely those hold-outs match the reconstructed image gives a sense for any errors the algorithm may have made.

“If in the end, it produces an image that has some piece that’s wildly inaccurate, then this cross-validation procedure will tell you that you shouldn’t trust this reconstruction that much,” Ward said. That indicates more time in the MRI actually may be warranted after all.