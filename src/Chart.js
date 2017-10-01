import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

const xValues = ['950-1000', '900-950', '850-900', '800-850', '750-800', '700-750', '650-700',
                 '600-650', '550-600', '500-550', '450-500', '400-450', '350-400', '300-350',
                 '250-300', '200-250', '150-200', '100-150', '50-100', '0-50'].reverse();
const yValues = [24, 12, 37, 69, 49, 49, 60, 77, 103, 132, 149, 158, 236, 226, 251, 293, 326, 217, 239, 67].reverse();

const height = 150;
const width = 300;

const highlightedCategory = '500-550';

const normalBackgroundColor = 'rgba(255,99,132,0.2)';
const normalHoverBackgroundColor = 'rgba(255,99,132,0.4)';

const specialBackgroundColor = 'rgba(61,118,211,0.4)';
const specialHoverBackgroundColor = 'rgba(61,118,211,0.8)';

const normalBorderColor = 'rgba(255,99,132,1)';
const specialBorderColor = 'rgba(2,53,135,1)'

function generateBarChartColors(normal, special) {
  var resultArr = [];
  for (var i = 0; i < xValues.length; i++) {
    const currX = xValues[i];
    if (currX == highlightedCategory) {
      resultArr.push(special);      
    } else {
      resultArr.push(normal);
    }
  }
  return resultArr;
}

function getAverageFromCategory(priceCategory) {
  const arr = priceCategory.split("-");
  return (parseInt(arr[0]) + parseInt(arr[1]))/2;
}

function getOptimalPriceCategoryAndTopRevenue() {
  var topRevenue = -1;
  var optimalPriceCategory = '';
  for (var i = 0; i < xValues.length; i++) {
    const currX = getAverageFromCategory(xValues[i]);
    const currY = parseInt(yValues[i]);
    const currRevenue = currX * currY;
    if (currRevenue > topRevenue) {
      topRevenue = currRevenue;
      optimalPriceCategory = xValues[i];
    }
  }
  return [optimalPriceCategory, topRevenue];
}

const data = {
  labels: xValues,
  datasets: [
    {
      label: 'Adult Pax',      
      backgroundColor: generateBarChartColors(normalBackgroundColor, specialBackgroundColor),
      borderColor: generateBarChartColors(normalBorderColor, specialBorderColor),
      borderWidth: 1,
      hoverBackgroundColor: generateBarChartColors(normalHoverBackgroundColor, specialHoverBackgroundColor),
      hoverBorderColor: generateBarChartColors(normalBorderColor, specialBorderColor),
      data: yValues
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  legend: {
    onClick: null,
    display: false
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Adult Pax',
        fontSize: 20
      },
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Price Categories',
        fontSize: 20                  
      },
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      }
    }],
  }
};

class Chart extends React.Component {
  render() {
    return (  
      <div className="chart">
        <h2>Bar chart</h2>
        <Bar
          data = {data}
          width = {width}
          height = {height}
          options = {options}
        />
        <h3>The price category of {getOptimalPriceCategoryAndTopRevenue()[0]} gives the optimal estimated revenue of US${getOptimalPriceCategoryAndTopRevenue()[1]} under the given conditions.</h3>      
        <h3>You are overpricing!</h3>              
      </div>
    );
  }
}

Chart.propTypes = {
};

export default Chart;
