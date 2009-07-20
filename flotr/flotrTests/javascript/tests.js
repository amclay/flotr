var tests = [
  {
    name: 'basic',
    draw: function(container){
      var d1 = [];
      for (var i = 0; i < 14; i += 0.5) 
        d1.push([i, Math.sin(i)]);
      
      var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
      return Flotr.draw(container, [d1, d2]);
    }
  },
  {
    name: 'basicAxis',
    draw: function(container){
      var d1 = [];
      var d2 = [];
      var d3 = [];
      var d4 = [];
      var d5 = [];
      
      for (var i = 0; i <= 10; i += 0.1) {
        d1.push([i, 4 + Math.pow(i, 1.5)]);
        d2.push([i, Math.pow(i, 3)]);
        d3.push([i, i * 5 + 3 * Math.sin(i * 4)]);
        d4.push([i, i]);
        if (i.toFixed(1) % 1 == 0) {
          d5.push([i, 2 * i]);
        }
      }
      
      d3[30][1] = null;
      d3[31][1] = null;
      
      var graph = Flotr.draw(container, [{
        data: d1,
        label: 'y = 4 + x^(1.5)',
        lines: {
          fill: true
        }
      }, {
        data: d2,
        label: 'y = x^3'
      }, {
        data: d3,
        label: 'y = 5x + 3sin(4x)'
      }, {
        data: d4,
        label: 'y = x'
      }, {
        data: d5,
        label: 'y = 2x',
        lines: {
          show: true
        },
        points: {
          show: true
        }
      }], {
        xaxis: {
          noTicks: 7, // Display 7 ticks.
          tickFormatter: function(n){
            return '(' + n + ')';
          }, // =>
          // displays
          // tick
          // values
          // between
          // brackets.
          min: 1, // => part of the series is not displayed.
          max: 7.5 // => part of the series is not displayed.
        },
        yaxis: {
          ticks: [[0, "Lower"], 10, 20, 30, [40, "Upper"]],
          max: 40
        },
        grid: {
          verticalLines: false
        },
        legend: {
          position: 'nw'
        },
        title: 'Basic Axis example',
        subtitle: 'This is a subtitle'
      });
      return graph;
    }
  },
  {
    name: 'basicCandleStricks',
    draw: function(container){
      d1 = [[0, 3.206, 3.224478568878954, 2.480873707446835, 3.1628649458043645], [1, 3.1628649458043645, 3.29267438078315, 3.0642586066778676, 3.1067741131430338], [2, 3.1067741131430338, 3.8008487609546044, 2.78477231490403, 3.7573332518139284], [3, 3.7573332518139284, 3.807501779025224, 3.1839597076967032, 3.7933990864426184], [4, 3.7933990864426184, 4.490604553970846, 3.582064032656224, 4.189610222616408], [5, 4.189610222616408, 4.475879611727201, 4.093661894442142, 4.29684175971171], [6, 4.29684175971171, 4.37385408147773, 3.910279286111603, 4.373827033605448], [7, 4.373827033605448, 5.2841993220086705, 4.152539125455332, 4.216497294995724], [8, 4.216497294995724, 4.457982018482932, 3.368066005796838, 4.36861660196311], [9, 4.36861660196311, 4.964314920100403, 4.293564722974805, 4.751746061935007], [10, 4.751746061935007, 5.013750277668583, 4.535080602983643, 4.871831757901373], [11, 4.871831757901373, 5.029928509285364, 3.9883079604268215, 4.270484376615837], [12, 4.270484376615837, 4.337048982299606, 3.513079419914095, 3.616341496697418], [13, 3.616341496697418, 4.031070967695358, 2.9188227094604438, 3.230466033414459], [14, 3.230466033414459, 3.4425876066949725, 2.846026888770203, 2.917453717266577], [15, 2.917453717266577, 3.3810646191096, 2.3770886353714573, 2.7732230470263], [16, 2.7732230470263, 3.723342014077243, 2.7032185248450267, 3.522546052042738], [17, 3.522546052042738, 3.8217936876635576, 2.9176888249603996, 3.593041622231209], [18, 3.593041622231209, 4.37650685968552, 3.029229106027749, 3.3809711040949515], [19, 3.3809711040949515, 3.522571309282028, 3.0830910143652117, 3.426859047540838], [20, 3.426859047540838, 3.9453024632822653, 3.2229343218677884, 3.912307218428427], [21, 3.912307218428427, 4.857988946587744, 3.886509752598503, 4.2272654114879025], [22, 4.2272654114879025, 4.325724194819883, 3.3083722967649725, 3.50221500392137], [23, 3.50221500392137, 3.6789413571530956, 2.935051270178312, 3.3905016060731623], [24, 3.3905016060731623, 4.362762722637497, 2.6926078143805463, 3.764212535023666], [25, 3.764212535023666, 3.9165075346796674, 3.0870098712418366, 3.6611692383295944], [26, 3.6611692383295944, 4.559468132100455, 2.7142257239983962, 3.8513798325403776], [27, 3.8513798325403776, 4.412480366732894, 3.35834839945591, 4.326495757148108], [28, 4.326495757148108, 4.793520733623349, 4.047381041527387, 4.630497988367807], [29, 4.630497988367807, 4.964265563782849, 4.441606543635198, 4.66087028773895], [30, 4.66087028773895, 4.739870872871906, 4.059627376281058, 4.318483251467338], [31, 4.318483251467338, 5.26859260957476, 3.525826681630373, 3.7368916560566383], [32, 3.7368916560566383, 3.7770328602640433, 3.259774501214609, 3.322796701338177], [33, 3.322796701338177, 4.102389010231413, 2.5313197599978006, 3.917673734950804], [34, 3.917673734950804, 3.932562076795523, 2.9600760321814525, 3.711383043233426], [35, 3.711383043233426, 4.558517290995983, 3.6160756137973427, 4.548109274381042], [36, 4.548109274381042, 5.096938849093261, 3.9646814760522084, 4.899841979504355], [37, 4.899841979504355, 5.747624302524712, 4.290975090102198, 4.5928285930618715], [38, 4.5928285930618715, 4.859377302697165, 4.12233801442763, 4.290723310417799], [39, 4.290723310417799, 4.866280033480947, 3.8919693509236173, 4.403724621579556], [40, 4.403724621579556, 5.151098086793035, 4.318155801261234, 4.435527462602335], [41, 4.435527462602335, 5.065641237373211, 3.8421693620706807, 4.926267256835992], [42, 4.926267256835992, 5.783441059777175, 3.935432376255976, 5.246098393110471], [43, 5.246098393110471, 5.434141585172935, 4.870020135122727, 4.97171447453247], [44, 4.97171447453247, 5.36301717878298, 4.094969047134656, 4.446983133451818], [45, 4.446983133451818, 4.760588781598693, 3.5156854637645267, 4.046791920246622], [46, 4.046791920246622, 4.5286809440612, 3.8597645102223375, 4.441008396654243], [47, 4.441008396654243, 4.639463635413588, 3.462471481907544, 3.5121836534397888], [48, 3.5121836534397888, 3.6207744162388336, 2.9529984588051916, 3.5354923914134186], [49, 3.5354923914134186, 4.030655755311514, 2.904420027601116, 3.9250384953520627]];
      return Flotr.draw(container, [d1], {
        candles: {
          show: true,
          candleWidth: 0.6
        },
        xaxis: {
          noTicks: 10
        }
      });
    }
  },
  {
    name: 'basicBar',
    draw: function(container){
      var d1 = [[0, 3], [1, 10], [2, 5], [3, 7]];
      var d2 = [[0.5, 8], [1.5, 8], [2.5, 6], [3.5, 1]];
      function markerFomatter(obj){
        return obj.y + '%';
      }
      var markers = {
        data: [],
        markers: {
          show: true,
          position: 'ct',
          labelFormatter: markerFomatter
        },
        bars: {
          show: false
        }
      };
      
      return Flotr.draw(container, [d1, d2, markers], {
        bars: {
          show: true,
          barWidth: 0.5
        },
        mouse: {
          track: true,
          relative: true
        },
        yaxis: {
          min: 0,
          autoscaleMargin: 1
        },
        spreadsheet: {
          show: true
        }
      });
    }
  },
  {
    name: 'basicStackedBars',
    draw: function(container){
      var d1 = [[-10, 0.12841702625385143], [-9, 0.47761312410063395], [-8, 0.4895111945671988], [-7, 0.11198640852206865], [-6, 0.6465454092108222], [-5, 0.3021624533971454], [-4, 0.5563035776918498], [-3, 0.08602935240431264], [-2, 0.9284809879299226], [-1, 0.15728325156476708], [0, 0.46839029899798623], [1, 0.14932397519102714], [2, 0.34965769359233956], [3, 0.727710513141325], [4, 0.41008954268358955], [5, 0.7513111027040322], [6, 0.26294544860744784], [7, 0.06421331212103343], [8, 0.03515972096711362], [9, 0.4156279137513256]];
      var d2 = [[-10, 0.7275869158294166], [-9, 0.3340763268110386], [-8, 0.39395792255358697], [-7, 0.9882133052163047], [-6, 0.6554247434578155], [-5, 0.29880046332521093], [-4, 0.4050261821624459], [-3, 0.431974003642407], [-2, 0.13594083156585113], [-1, 0.3903962422463624], [0, 0.6540423515758503], [1, 0.2928602676110438], [2, 0.9318150879564585], [3, 0.9336911912634839], [4, 0.9309685521146319], [5, 0.38281808259838446], [6, 0.20191346604607596], [7, 0.02943733681696825], [8, 0.01923921138538698], [9, 0.6981607107441224]];
      var d3 = [[-10, 0.9343788067869415], [-9, 0.22939368798801085], [-8, 0.007828749085460496], [-7, 0.009082398396152658], [-6, 0.8352965877180082], [-5, 0.3641166547906821], [-4, 0.2825754766338293], [-3, 0.8917621271620927], [-2, 0.9012244773967676], [-1, 0.08792376545235425], [0, 0.4296856339825452], [1, 0.7062899733398454], [2, 0.9878684036780603], [3, 0.9946828483363529], [4, 0.3234598278104699], [5, 0.03664185285867105], [6, 0.362892334884132], [7, 0.4838735341747903], [8, 0.6744725432731736], [9, 0.17850652786045562]];
      
      return Flotr.draw(container, [{
        data: d1,
        label: 'Serie 1'
      }, {
        data: d2,
        label: 'Serie 2'
      }, {
        data: d3,
        label: 'Serie 3'
      }], {
        legend: {
          backgroundColor: '#D2E8FF' // => a light blue
        },
        bars: {
          show: true,
          stacked: true,
          barWidth: 0.6
        },
        grid: {
          verticalLines: false
        },
        spreadsheet: {
          show: true
        }
      });
    }
  },
  {
    name: 'basicPie',
    draw: function(container){
      var d1 = [[0, 4]];
      var d2 = [[0, 3]];
      var d3 = [[0, "1.03"]];
      var d4 = [[0, 3.5]];
      
      // Draw the graph.
      return Flotr.draw(container, [{
        data: d1,
        label: 'Comedy'
      }, {
        data: d2,
        label: 'Action'
      }, {
        data: d3,
        label: 'Romance',
        pie: {
          explode: 50
        }
      }, {
        data: d4,
        label: 'Drama'
      }], {
        HtmlText: false,
        grid: {
          verticalLines: false,
          horizontalLines: false
        },
        xaxis: {
          showLabels: false
        },
        yaxis: {
          showLabels: false
        },
        pie: {
          show: true,
          explode: 6
        },
        legend: {
          position: 'se',
          backgroundColor: '#D2E8FF'
        }
      });
    }
  },
  {
    name: 'basicRadar',
    draw: function(container){
      var s1 = {
        label: 'Actual',
        data: [[0, 3], [1, 8], [2, 5], [3, 5], [4, 3], [5, 9]]
      };
      var s2 = {
        label: 'Target',
        data: [[0, 8], [1, 7], [2, 8], [3, 2], [4, 4], [5, 7]]
      };
      
      return Flotr.draw(container, [s1, s2], {
        radar: {
          show: true
        },
        grid: {
          circular: true
        },
        yaxis: {
          min: 0,
          max: 10
        },
        xaxis: {
          ticks: [[0, "Statutory"], [1, "External"], [2, "Videos"], [3, "Yippy"], [4, "Management"], [5, "oops"]]
        }
      });
    }
  },
  {
    name: 'basicLegend',
    draw: function(container){
      var d1 = [];
      var d2 = [];
      var d3 = [];
      for (var i = 0; i < 15; i += 0.5) {
        d1.push([i, i + Math.sin(i + Math.PI)]);
        d2.push([i, i]);
        d3.push([i, 15 - Math.cos(i)]);
      }
      
      function myLabelFunc(label){
        return 'y = ' + label;
      }
      
      return Flotr.draw(container, [{
        data: d1,
        label: 'x + sin(x+π)'
      }, {
        data: d2,
        label: 'x'
      }, {
        data: d3,
        label: '15 - cos(x)'
      }], {
        legend: {
          position: 'se', // => position the legend 'south-east'.
          labelFormatter: myLabelFunc, // => format the labels.
          backgroundColor: '#D2E8FF' // => a light blue background
          // color.
        },
        HtmlText: false
      });
    }
  },
  {
    name: 'mouseTracking',
    draw: function(container){
      var d1 = [];
      var d2 = [];
      var d3 = [];
      for (var i = 0; i < 20; i += 0.5) {
        d1.push([i, 2 * i]);
        d2.push([i, i * 1.5 + 1.5 * Math.sin(i)]);
        d3.push([i, 3 * Math.cos(i) + 10]);
      }
      
      /**
       * The following configuration disables mouse tracking for series d1,
       * and configures mousetracking for series d2 and d3.
       */
      var graph = Flotr.draw(container, [{
        data: d1,
        mouse: {
          track: false
        }
      }, d2, d3], {
        mouse: {
          track: true,
          lineColor: 'purple',
          relative: true,
          position: 'ne',
          sensibility: 1, // => The smaller this value, the more
          // precise you've to point
          trackDecimals: 2,
          trackFormatter: function(obj){
            return 'x = ' + obj.x + ', y = ' + obj.y;
          }
        },
        crosshair: {
          mode: 'xy'
        }
      });
      
      graph.overlay.simulate('mousemove', {
        pointerX: 410,
        pointerY: 150
      });
      
      return graph;
    }
  },
  {
    name: 'clickEvent',
    draw: function(container){
      var options = {
        xaxis: {
          min: 0,
          max: 15
        },
        yaxis: {
          min: 0,
          max: 15
        },
        lines: {
          show: true
        },
        points: {
          show: true
        },
        mouse: {
          track: true
        }
      };
      
      /**
       * Start with a single coordinate in the origin.
       */
      var d1 = [[0, 0]];
      
      /**
       * Observe the 'flotr:click' event. When the graph is clicked, add the
       * click position to the d1 series and redraw the graph.
       */
      container.observe('flotr:click', function(event){
        // Retrieve where the user clicked.
        var position = event.memo[0];
        
        // Store the click position in the d1 series.
        d1.push([position.x, position.y]);
        
        // Sort the series.
        d1 = d1.sort(function(a, b){
          return a[0] - b[0];
        });
        
        // Redraw the graph, with the new series.
        Flotr.draw(container, [d1], options);
      });
      
      /**
       * Draw an empty graph and configure the axis.
       */
      var graph = Flotr.draw(container, [d1], options);
      
      graph.overlay.simulate('click', {
        pointerX: 410,
        pointerY: 30
      }).simulate('click', {
        pointerX: 210,
        pointerY: 30
      }).simulate('click', {
        pointerX: 230,
        pointerY: 280
      }).simulate('click', {
        pointerX: 560,
        pointerY: 240
      }).simulate('click', {
        pointerX: 310,
        pointerY: 130
      });
      
      return graph;
    }
  },
  {
    name: 'extendingFlotr',
    draw: function(container){
      var d1 = [];
      for (var i = 0; i < 14; i += 0.5) 
        d1.push([i, Math.sin(i)]);
      
      var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
      
      var myGraph = Class.create(Flotr.Graph, {
        drawCount: 0,
        drawSeries: function($super, series){
          this.drawCount++;
          $super(series);
        }
      });
      
      return Flotr.draw(container, [d1, d2], null, myGraph);
    },
    
    test: function(testCase, graph, name){
      testCase.assert(graph.drawCount == 2, 'wrong drawCount');
    }
  },
  {
    name: 'mouseSelect',
    draw: function(container){
      var d1 = [];
      var d2 = [];
      var d3 = [];
      for (var i = 0; i < 40; i += 0.5) {
        var y1 = Math.sin(i) + 3 * Math.cos(i);
        d1.push([i, y1]);
        d2.push([i, Math.pow(1.1, i)]);
        d3.push([i, 40 - i + y1]);
      }
      
      /**
       * Global options object.
       */
      var options = {
        selection: {
          mode: 'x',
          fps: 30
        }
      };
      
      /**
       * Function displays a graph in the 'container' element, extending the
       * global options object with the optionally passed options.
       */
      function drawGraph(opts){
        /**
         * Clone the options, so the 'options' variable always keeps intact.
         */
        var o = Object.extend(Object.clone(options), opts ||
        {});
        /**
         * Return a new graph.
         */
        return Flotr.draw(container, [d1, d2, d3], o);
      }
      
      /**
       * Actually draw the graph.
       */
      var graph = drawGraph();
      
      /**
       * Hook into the 'flotr:select' event.
       */
      container.observe('flotr:select', function(evt){
        /**
         * Get the selected area coordinates passed as event memo.
         */
        var area = evt.memo[0];
        
        /**
         * What happens: empty the container element, and draw a new graph
         * with bounded axis. The axis correspond to the selection you just
         * made.
         */
        graph = drawGraph({
          xaxis: {
            min: area.x1,
            max: area.x2
          },
          yaxis: {
            min: area.y1,
            max: area.y2
          }
        });
      });
      
      graph.overlay.simulate('mousedown', {
        pointerX: 310,
        pointerY: 150
      }).simulate('mousemove', {
        pointerX: 570,
        pointerY: 50
      });
      
      return graph;
    }
  },
  {
    name: 'mouseZoom',
    draw: function(container){
      var d1 = [];
      var d2 = [];
      var d3 = [];
      for (var i = 0; i < 40; i += 0.5) {
        var y1 = Math.sin(i) + 3 * Math.cos(i);
        d1.push([i, y1]);
        d2.push([i, Math.pow(1.1, i)]);
        d3.push([i, 40 - i + y1]);
      }
      
      /**
       * Global options object.
       */
      var options = {
        selection: {
          mode: 'x',
          fps: 30
        }
      };
      
      /**
       * Function displays a graph in the 'container' element, extending the
       * global options object with the optionally passed options.
       */
      function drawGraph(opts){
        /**
         * Clone the options, so the 'options' variable always keeps intact.
         */
        var o = Object.extend(Object.clone(options), opts ||
        {});
        /**
         * Return a new graph.
         */
        return Flotr.draw(container, [d1, d2, d3], o);
      }
      
      /**
       * Actually draw the graph.
       */
      var graph = drawGraph();
      
      /**
       * Hook into the 'flotr:select' event.
       */
      container.observe('flotr:select', function(evt){
        /**
         * Get the selected area coordinates passed as event memo.
         */
        var area = evt.memo[0];
        
        /**
         * What happens: empty the container element, and draw a new graph
         * with bounded axis. The axis correspond to the selection you just
         * made.
         */
        graph = drawGraph({
          xaxis: {
            min: area.x1,
            max: area.x2
          },
          yaxis: {
            min: area.y1,
            max: area.y2
          }
        });
      });
      
      graph.overlay.simulate('mousedown', {
        pointerX: 310,
        pointerY: 150
      }).simulate('mousemove', {
        pointerX: 570,
        pointerY: 50
      }).simulate('mouseup', {
        pointerX: 570,
        pointerY: 50
      });
      
      return graph;
    }
  },
  {
    name: 'basicTime',
    draw: function(container){
      var d1 = [];
      var start = new Date("2009/01/01 01:00").getTime();
      for (var i = 0; i < 100; i++) {
        var x = start + (i * 1000 * 3600 * 24 * 36.5);
        d1.push([x, i / 30 + Math.sin(i / 5)]);
      }
      
      var options = {
        xaxis: {
          mode: 'time',
          labelsAngle: 45
        },
        selection: {
          mode: 'x'
        },
        HtmlText: false
      };
      
      /**
       * Function displays a graph in the 'container' element, extending the
       * global options object with the optionally passed options.
       */
      function drawGraph(opts){
        /**
         * Clone the options, so the 'options' variable always keeps intact.
         */
        var o = Object.extend(Object.clone(options), opts ||
        {});
        /**
         * Return a new graph.
         */
        return Flotr.draw(container, [d1], o);
      }
      
      /**
       * Actually draw the graph.
       */
      var graph = drawGraph();
      
      /**
       * Hook into the 'flotr:select' event.
       */
      container.observe('flotr:select', function(evt){
        /**
         * Get the selected area coordinates passed as event memo.
         */
        var area = evt.memo[0];
        
        /**
         * What happens: empty the container element, and draw a new graph with
         * bounded axis. The axis correspond to the selection you just made.
         */
        drawGraph({
          xaxis: {
            min: area.x1,
            max: area.x2,
            mode: 'time',
            labelsAngle: 45
          },
          yaxis: {
            min: area.y1,
            max: area.y2
          }
        });
      });
      
      graph.overlay.simulate('mousedown', {
        pointerX: 310,
        pointerY: 150
      }).simulate('mousemove', {
        pointerX: 320,
        pointerY: 50
      }).simulate('mouseup', {
        pointerX: 320,
        pointerY: 50
      });
      
      return graph;
    }
  },
  {
    name: 'negative',
    draw: function(container){
      var d0 = [];
      var d1 = [[0, -12.51373822191511], [1, -10.258723473148425], [2, -10.45168012506119], [3, -5.697338035208517], [4, -8.263282552180325], [5, -8.28032637415778], [6, -1.1542366511072153], [7, -1.6232981621547609], [8, -0.7531828665830158], [9, -2.2920658123086017], [10, -1.4343324691841293], [11, 0.020466722503002188], [12, -2.73980223817129], [13, 2.3329921248457772], [14, 1.4581054179246564], [15, 4.00647094130467], [16, 7.1799735372591265], [17, 4.089830753912114], [18, 10.86050119094466], [19, 5.007500662222206]];
      var d2 = [];
      
      var n, x, y, sx = 0, sy = 0, sxy = 0, sxsq = 0;
      for (n = 0; n < 20; n++) {
        x = n;
        y = d1[x][1];
        d0.push([x, 0]);
        
        /**
         * Do some math, we need these later to compute the regression line.
         */
        sx += x;
        sy += y;
        sxy += x * y;
        sxsq += Math.pow(x, 2);
      }
      
      var xmean = sx / n;
      var ymean = sy / n;
      var beta = ((n * sxy) - (sx * sy)) / ((n * sxsq) - (Math.pow(sx, 2)));
      var alpha = ymean - (beta * xmean);
      
      /**
       * Compute the regression line.
       */
      for (var i = 0; i < 20; i++) {
        d2.push([i, alpha + beta * i])
      }
      
      return Flotr.draw(container, [{
        data: d0,
        shadowSize: 0,
        color: '#545454'
      }, {
        data: d1,
        label: 'y = x + (Math.random() * 8) - 15',
        points: {
          show: true
        }
      }, {
        data: d2,
        label: 'y = ' + alpha.toFixed(2) + ' + ' + beta.toFixed(2) + '*x'
      }], {
        legend: {
          position: 'se',
          backgroundColor: '#D2E8FF'
        }
      });
    }
  }
];

/**
 * Each test must at least define : a property 'name', 
 * a property 'draw': function drawing and returning the graph
 * Optionally, a property 'test' might be used as additional validation for the
 * test
 */
var test = {
  name: 'test',
	/**
	 * Draws the graph
	 * @param {Element} container - the container element
	 * @return {Object} returns the graph object
	 */
	draw: function(container) {},

	/**
	 * User defined test
	 * @param {Object} testCase - the testCase object
	 * @param {Object} graph - the graph object returned by draw()
	 * @param {Object} name - the name test
	 */
	test: function(testCase, graph, name){}
};

var debug = false;
