# injecting parameters in routing

To access the route parameters, we use route. snapshot , which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time.

Create components. Declare routes. For injecting parameter use :parameterName.
![](Screenshots/img1.png)

Declare some random array and assign some value.
![](Screenshots/img2.png)

For each element in the array, append the routerLink and queryParams as shown below.
![](Screenshots/img3.png)

Access the route parameters as shown below. We will see more about subscriptions. But for now, imagine them as some service providers and they provides data updates frequently...like web sockets.
In order to prevent memory leak, unsubscribe at the component ngOnDestroy. We are using observable because we need to change the route here asynchronously(pressing a button).
![](Screenshots/img4.png)

User component's html.
![](Screenshots/img5.png)

Final result!
![](Screenshots/parroutegif.gif)