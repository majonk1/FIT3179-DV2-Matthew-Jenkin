vegaEmbed(
    "#crop-production-chart",
    "vegalite_visualisations/chart1_crop_production.vl.json",
    {
        actions: false
    }
).catch(console.error);
vegaEmbed(
    "#agricultural-value-map",
    "vegalite_visualisations/chart2_agricultural_value_map.vl.json",
    {
        actions:false
    }
).catch(console.error);