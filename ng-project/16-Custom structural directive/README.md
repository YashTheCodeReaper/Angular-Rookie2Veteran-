# custom structural directive

Lets learn how to build our own structural directive.

Generate a driective(ng g d unless). Basically, we are gonna create a directive, which accepts a boolean as a property and render the element into ng container if it is not true(opposite of *ngIf).
![](Screenshots/img1.png)

Make sure it is imported in the declarations of @NgModule of app.component.ts.
![](Screenshots/img2.png)

Declare an array of objects.
![](Screenshots/img3.png)

Use the directive in html as shown.
![](Screenshots/img4.png)

![](Screenshots/img5.png)