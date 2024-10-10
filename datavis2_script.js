var vg_1 = "crimeratevis.vg.json";
vegaEmbed("#vis1", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "GDP_vis.vg.json";
vegaEmbed("#vis2", vg_2).then(function(result) {}).catch(console.error);

var vg_3 = "drugPrev_vis.vg.json";
vegaEmbed("#vis3", vg_3).then(function(result) {}).catch(console.error);