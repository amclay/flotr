**Flotr2** **released**: http://www.humblesoftware.com/flotr2/

# Introduction #

Flotr update and overhaul.  All this work is on the flotr2 branch.

  * Component Separation
  * Library Agnostic
  * Touch Events
  * Build System

## Component Separation ##

**Task**

Break all of the modules, types and plugins into separate files.  Factor out GraphType specific methods into those graph types.  Build a framework for applying these methods when needed.  Remove all GraphType inter-dependence.

**Advantages**

Individual files will make all of the further refactoring and maintenance easier.  Moving GraphType specific methods into their respective classes will makes the architecture more cohesive and makes adding new types easier.  Removing numerous GraphType interdependencies will reduce coupling as well as the flotr footpri nt when certain types are unused.

### Components ###

**plugins**

  * Existing spreadsheet plugin.
  * Make legend into a plugin.

**graph types**

  * bars
  * bubbles
  * candles
  * gantt
  * lines
  * markers
  * pie
  * points
  * radar

**classes / objects**

  * Flotr
  * Flotr.defaultOptions
  * Flotr.Color
  * Flotr.Date
  * Flotr.Graph

## Library Agnostic ##

Remove dependence on large external frameworks, initially replacing with micro-frameworks.  The two current versions (Prototype and MooTools) will become one version.  This eliminates flotr's dependency on the older Prototype library, allows using flotr with any or no framework, and makes it more attractive for mobile platforms.

This task has several components.  Selection of micro-frameworks and overhauling events, DOM manipulation, class structure, and functional sugar.

### Micro-Frameworks ###

This may change.  For now, I have selected
  * bean.js - Eventing
  * underscore.js - Class structure and functional sugar

### Events ###

Add a Flotr.EventAdapter class and implement all eventing w/in Flotr using this.  Add an adapter for bean.js, removing dependency on Prototype.Event.  Either add an API to Flotr.Graph for attaching event listeners to graphs or allow adapter configuration for use with external event frameworks.

### DOM Manipulation ###

Haven't analyzed this yet.

### Class Structure ###

This should be straight forward.  If necessary, underscore.js provides utilities for extending / merging objects.

### Functional Sugar ###

Replace all functional sugar with underscore.js utilities.  Keep a list of these for future analysis and the removal of unused / unneeded methods.

## Touch Events ##

Update all events with touch support.  This will make Flotr more attractive on the mobile platform.

## Build System ##

Update or change the build system.

Currently building 1 file with Ant.  Update the build to concatenate all source files before minification.  Add linting support.  Optionally concatenate built flotr with required libraries for single package.