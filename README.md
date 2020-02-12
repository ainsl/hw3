# hw3
week 3 homework – computational practices 1 – cca spring 2020

Lawn Simulator™

1. What code draws the blades of grass?
Line 11 draws the grass. 
Line 14 places the pieces of grass in different locations on the x-axis. 
Line 16 changes the location of the grass on the y-axis.

2. What code makes the "lawnmower" come by? How often does it come by?
Line 25 makes the lawnmower come by whenever the value of random(1000) is greater than 999.

3. What's the point of the h variable?
The h is the height that the grass grows to.

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
The -10 changes the direction the grass grows. 
In the second argument, (-10, 10), it makes the grass grow slanted to the left and right.
In the fourth argment, (height-10-random(h)), it makes the grass grow upwards from the "ground."
