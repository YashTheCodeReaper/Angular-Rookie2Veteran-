# view encapsulation

View encapsulation defines whether the template and styles defined within the component can affect the whole application or vice versa. Angular provides three encapsulation strategies: Emulated (default) - styles from main HTML propagate to the component.

Create a component called sample and type some paragraph.
![](Screenshots/img1.png)

Import that in app component.
![](Screenshots/img2.png)

In the css of app component, select the paragraph element and set the color property to red.
![](Screenshots/img3.png)

U didn't expect that right? Actually the css declarations does not traverse through other components(globally), but it belongs to the elements of the components itself(not even if the component has other components import)
![](Screenshots/img4.png)

If u need to apply css of the component globally, in the component.ts, to the @Component decorator, use encapsulation: ViewEncapsulation.None / ViewEncapsulation.ShadowDOM.
![](Screenshots/img5.png)

Now see the results,
![](Screenshots/img6.png)