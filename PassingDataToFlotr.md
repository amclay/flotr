# Data series #

When we want to draw a graph, we call `Flotr.draw(containerElement, data, options)`. So the second parameter needs to be the data. The data is an array of data series:

```
// Data format
[ series1, series2, ... ]
```

# Raw format #

The series in their turn can have two different formats. The first format is the raw data format:

```
// Raw data format of a series
[ [x1,y1], [x2,y2], ... ]
// e.g.
[ [1,2.5], [2,3.7], [2.5,6.78] ]
```

Basically this is an array of arrays with x and y coordinates. Note that the coordinates must be numbers/floats or null for the y coordinates if you want Flotr not to show this value (useful for line charts).

# Object format #

The second format is an object, and can be used to specify series specific configuration.

```
// Object format of a series
{
	color: color or number,
	data: [ [x1,y1], [x2,y2], ... ],
	label: string,
	lines: specific lines options,
	mouse: specific mouse tracking options,
	bars: specific bars options,
	points: specific points options,
	shadowSize: number
}
```

All options are optional except for the data option. Options that are not specified are to their default value. To read more about these options, go to ConfiguringFlotrGraphs. The following object format is perfectly ok:

```
// Example object format
{
	color: '#ff0000',
	data: [ [1,2.5], [2,3.7], [2.5,6.78] ]
}
```

# What’s next? #

If you think you’re ready to play around with the configuration of Flotr graphs, go see ConfiguringFlotrGraphs.