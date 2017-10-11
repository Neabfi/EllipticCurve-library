# EllipticCurve
This is a program to visualize elliptic curve of equation :
y^2=x^3+ax+b; as well as the addition of two points on the curve.


# The different functions
To create an elliptical function use: **Elliptic(a,b,m)** corresponding to the function (x^3 + ax + b)%m 

To calculate at a point x the value of your function use : **calc(x)**

To create a point p of the abscissa x belonging to the curve e use :  **p = new Point(x, e.calc(x))**

To plot the curve of an elliptic named e use: **draw(e)**

To calculate the coordinates of a point from two other to the curve e use: **e.sum(p1, p2)** 

# Representation Elliptic Curve and Modulo
![alt tag](https://user-images.githubusercontent.com/32454889/31430973-ae3d61f8-ae72-11e7-96f1-c41a9287d0a5.PNG "equation curve : y2=x^3-1x+1mod(11)")
