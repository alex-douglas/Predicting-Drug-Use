var margin = {top: 20, right: 30, bottom: 30, left: 40},
	width=720 - margin.left - margin.right,
	height=width / 1.6;

/*
var	svg=d3.select("#chart")
		  .append("svg")
		  .attr("width", w)
		  .attr("height", h);

var circle = svg.append("circle")
          		   .attr("r", 60)
          		   .attr("cx", 100)
          		   .attr("cy", 100)
          		   .attr("id", "main_circ")
          		   .style("stroke", "black")
           		   .style("fill", "purple");
*/

var button = d3.select(".buttons")
			   .append("button")
			   .attr("type", "submit")
			   .attr("class", "my_button")
			   .attr("id", "drugs")
			   .text("Drugs");

var button = d3.select(".buttons")
			   .append("button")
			   .attr("type", "submit")
			   .attr("class", "my_button")
			   .attr("id", "sex")
			   .text("Sex");


$(function() {
	var click_button = function(e) {
		$.getJSON('../../change_radius',
		function(return_val) {
		set_bars(return_val.result);
		});
		return false;
	};

	var click_button_2 = function(e) {
		$.getJSON('../../get_drugs',
		function(return_val) {
		set_bars_2(return_val.names, return_val.values);
		});
		return false;
	};

	var click_sub_app = function(e) {
		console.log('click_sub_app was called')
		$.getJSON('../../predict_drug_use',
		function(return_val) {
		console.log(return_val.message);
		set_message(return_val.message);
		});
		return false;
	}

		$('button#sex').bind('click', click_button);
		$('button#drugs').bind('click', click_button_2);
		//$('button#sub_app').bind('click', click_sub_app);
});

function set_message(message_data) {
	document.getElementById('app_result_message').text = message_data;
}

function set_bars(some_data) {
	d3.select(".chart")
	  .selectAll("g")
	  .remove();

	var chart = d3.select(".chart")
			  .attr("width", width + margin.left + margin.right)
			  .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			  .attr("transform", "translate(" + (margin.left + 40) + "," + margin.top + ")");

	//console.log(chart);
	//console.log(parseFloat(chart.style("width")));
	//console.log(parseFloat(chart.style("height")));
	//console.log(parseFloat(chart.style("width")) / parseFloat(chart.style("height")));
	var aspect = parseFloat(chart.style("width")) / parseFloat(chart.style("height"));

	//var body_width = $(".chart").parent().width();
	//console.log(body_width);

	var sexes = ['Male', 'Female'];

	var x = d3.scaleBand()
			  .domain(sexes)
			  .rangeRound([0, width])
			  .padding(0.1);

	var y = d3.scaleLinear()
		  .domain([0, d3.max(some_data)])
		  .range([height, 0]);

	var xAxis = d3.axisBottom(x)
				  //.tickFormat(function(d) {return d.x;})
				  .tickValues(sexes);

	var yAxis = d3.axisLeft(y)
				  //.tickFormat(function(d) {return d.y;});
				  .tickSize(5);

	chart.append("g")
		 .classed('x axis', true)
		 .attr("transform", "translate(0," + height + ")")
		 .call(xAxis);

	chart.append("g")
		 .attr("class", "y axis")
		 .call(yAxis);

	var barWidth = width / some_data.length;

	chart.selectAll(".bar")
		 .data(some_data).enter()
		 .append("rect")
		 .attr("class", "bar")
      	 .attr("y", function(d) { return y(d); })
      	 .attr("height", function(d) { return height - y(d); })

    chart.selectAll(".bar")
    	 .data(sexes)
    	 .attr("x", function(d) { return x(d); })
    	 .attr("width", x.bandwidth());

	/*
	var bar = chart.selectAll(".bar")
				   .data(some_data)
				   .enter().append(".bar")
				   .attr("transform", function(d, i) {return "translate(" + i * barWidth + ",0)"; });
			
	bar.append("rect")
	   .attr("y", function(d) { return y(d); })
	   .attr("width", barWidth - 10)
	   .attr("height", function(d) { return height - y(d); });
	*/

	/*
	bar.append("text")
	   .attr("x", (barWidth - 10) / 2)
	   .attr("y", function(d) { return y(d) + 3;})
	   .attr("dy", ".75em")
	   .text(function(d) { return d; });
	*/

	d3.select(window)
  	  .on("resize", function() {
  	  	var targetWidth = $(".chart").parent().width();
  	  	//console.log(targetWidth);
  	  	//console.log(aspect);
    	chart.attr("width", targetWidth);
    	chart.attr("height", targetWidth / aspect);
 	});

	/*
	d3.select("#chart")
	  .selectAll("div")
	  .remove();
	
	d3.select("#chart")
	  .selectAll("div")
	  .data(some_data)
	  .enter().append("div")
	  .style("width", function(d) {return w * d + "px"; })
	  .text("Male");
	  */
}

function set_bars_2(names, values) {
	d3.select(".chart")
	  .selectAll("g")
	  .remove();

	var chart = d3.select(".chart")
			  .attr("width", width)
			  .attr("height", height);

	var y = d3.scaleLinear()
		  .domain([0, d3.max(values)])
		  .range([height, 0]);

	var barWidth = width / values.length;

	var bar = chart.selectAll("g")
				   .data(values)
				   .enter().append("g")
				   .attr("transform", function(d, i) {return "translate(" + i * barWidth + ",0)"; });

	bar.append("rect")
	   .attr("y", function(d) { return y(d); })
	   .attr("width", barWidth - 10)
	   .attr("height", function(d) { return height - y(d); });

	/*
	bar.append("text")
	   .attr("x", (barWidth - 10) / 2)
	   .attr("y", function(d) { return y(d) + 3;})
	   .attr("dy", ".75em");
	
	chart.selectAll("text")
		 .data(names)
		 .text(function(d) { return d; });
	*/
}

/*
d3.select("#buttons button").on("click", function() {
	svg.selectAll("circle")
	   .attr("cx", function() {return Math.random() * w})
	   .attr("cy", function() {return Math.random() * h});
});
*/
