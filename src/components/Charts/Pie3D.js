import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);



const ChartComponent = ({data})=>{

  const chartConfigs = {
    type: "pie3d",
    width: "400",
    height: "400", 
    dataFormat: "json", 
    dataSource: {
      // Chart Configuration
      chart: {
       
        caption: "Languages",
        //Set the chart subcaption
        subCaption: "Most popular languages used",
        //Set the x-axis name
        //Set the theme for your chart
        "bgColor": "#1e1e30",
        opacity:0.1,
        theme: "candy",
        decimals:0,
        pieRadius:'40%',
      },
      // Chart Data
      data
    }
  };
  

  return (<ReactFC {...chartConfigs} />);
}



export default ChartComponent;