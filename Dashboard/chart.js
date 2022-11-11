d3.json("csvjson.json").then(function(data){
  console.log(data);
});

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("csvjson.json").then((data) => {
   

    var category = data.Category;
   data.forEach((category) => {
      console.log(category.Category);
      selector
        .append("option")
        .text(category.Category)
        .property("value", category.Category );
    });

    // // Use the first sample from the list to build the initial plots
    // var firstSample = category[0];
    // buildCharts(firstSample);
    // // buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  // buildMetadata(newSample);
  buildCharts(newSample);
  
}

// // Demographics Panel 
// function buildMetadata(Category) {
//   d3.json("csvjson.json").then((data) => {
//     var metadata = data.name;
//     // Filter the data for the object with the desired sample number
//     var resultArray = metadata.filter(sampleObj => sampleObj.name == sample);
//     var result = resultArray[0];
//     // Use d3 to select the panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");

//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(result).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//     });

//   });
// }

  function buildCharts(n) {
    // Use d3.json to load and retrieve file 
    d3.json("csvjson.json").then((data) => {
      // Create a variable for  
      var samples = data;
      // Create a variable that filters the samples for the object with the desired sample number.
      var results = samples.filter(categoryObject => categoryObject.name == Names)
      // Create  array that holds restaurants.
      var resArray = results[0]
      // Create variables that hold 
      // var otu_ids = resArray.otu_ids;
      var name = resArray.Names;
      var ratings = resArray.Ratings;
  
      //Create the yticks for the bar chart.
      var yticks = [0,5]
  
      // Create the trace for the bar chart. 
      var barData = [
        {
          y: yticks,
          x: ratings.slice(0, 10).reverse(),
          text: name.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h"
        }
      ];
      // Create the layout for the bar chart. 
      var barLayout = {
        title: "Top 10 rated restaurants",
        margin: { t: 30}
      };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout);

  //     // Create a variable that filters the metadata array for the object with the desired sample number.
  //     var metaDataId = data.metadata.filter(data => data.id == sample);
  //     console.log(metaDataId)
  //    // 2. Create a variable that holds the first sample in the metadata array.
  //     var firstSample = metaDataId[0];

  //     // Create a variable that holds the rating.
  //     var washFreq = firstSample.wfreq;
      
  //     // Create the trace for the gauge chart.
  //     var gaugeData = [
  //       {
  //         domain: { x: [0, 5], y: [0, 1] },
  //         value: washFreq,
  //         title: { text: "<b> Belly Button Washing Frequency</b> <br> Scrubs per Week" },
  //         type: "indicator",
  //         mode: "gauge+number",
  //         gauge: {
  //           axis: { range: [null, 10], tickwidth: 2, tickcolor: "black" },
  //           bar: { color: "black"},
  //           steps: [
  //             { range: [0, 1], color: "red" },
  //             { range: [1, 2], color: "orange" },
  //             { range: [2, 3], color: "yellow" },
  //             { range: [3, 4], color: "yellowgreen" },
  //             { range: [4, 5], color: "green" }
  //           ],
        
  //         }
  //       }
  //     ];
    
  //    // 5. Create the layout for the gauge chart.
  //     var gaugeLayout = {
  //       width: 500, height: 450, margin: { t:0, b: 0},
  //       font: {color: "black"} 
      
  //     };

  //     // 6. Use Plotly to plot the gauge data and layout.
  //     Plotly.newPlot("gauge", gaugeData, gaugeLayout);
      });
  }

  