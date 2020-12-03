function initViz() {
    
var url_11 = "https://public.tableau.com/views/Trend_Analysis1/Top15VideosAnalysis?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link";

var url_12 = "https://public.tableau.com/views/Trend_Analysis1/Top15ChannelswiseAnalysis?:language=en&:display_count=y&:origin=viz_share_link";

var url_13 = "https://public.tableau.com/views/Trend_Analysis1/CategorywiseVedioAnalysis?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link";

var viz11 = new tableau.Viz(document.getElementById("tableauViz_11"), url_11);
var viz12 = new tableau.Viz(document.getElementById("tableauViz_12"), url_12);
var viz13 = new tableau.Viz(document.getElementById("tableauViz_13"), url_13);

}