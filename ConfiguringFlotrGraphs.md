Configuring your Flotr graphs is very easy and flexible. You can pass your configuration to `Flotr.draw()`. The options you set in the option object, can be overridden by options set for an individual series.

# Passing options #

With the function `Flotr.draw(element, series, options)` you can draw graphs. I recommend reading the QuickStartGuide, if you not already did. The quick start guide explains the basics of using Flotr.

The third arguments of `Flotr.draw()` is the options object. When a graph is drawn, the options object is merged with the Flotr default options (which you can find on the bottom of this page). Here’s an example of a graph with three point series:

```
var f = Flotr.draw(
	$('container'),
	[d1, d2, d3],
	{points: {show: true}}
);
```

The resulting graph will have three series. The series will show up as points, because the default appearance is overridden. Without the options object three lines will appear. This is the resulting graph:

<table width='100%'><tr><td align='center'><img src='http://solutoire.com/blog/wp-content/uploads/2008/02/config2.png' /></td></tr></table>

But you can also configure the graph per series. This is a more advanced technique, the syntax for series then will look different:

```
var f = Flotr.draw(
	$('container'),
	[
		{data:d1, label: 'd1', color: 'black', points:{show: true}},
		{data: d2, label: 'd2', lines:{fill: true}},
		d3
	],{
		lines: {show: true},
		legend: {position: 'se'}
	}
);
```

The graph that’s drawn based on the code above also has three series, but only one (the first, `d1`) is drawn as a point series. The other two will show up as line series. The area beneath the second series will be filled. Note that because we defined labels for only the first two series, only those labels show up in the legend. This is the resulting graph:

<table width='100%'><tr><td align='center'><img src='http://solutoire.com/blog/wp-content/uploads/2008/02/config1.png' /></td></tr></table>

# All options #

There are too much options to list hem all here, I suggest you to try the [Flotr playground](http://phenxdesign.net/projects/flotr/playground/) to see and try all of them very easily.