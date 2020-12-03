function initViz() {
    var url_1 = "https://public.tableau.com/views/Trend_Analysis1/VideoCountByCategory?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var url_2 = "https://public.tableau.com/views/Trend_Analysis1/ViewsByCategory?:language=en&:display_count=y&:origin=viz_share_link";

    var url_3 = "https://public.tableau.com/views/Trend_Analysis1/LiketoDislikeRatioperCategory?:language=en&:display_count=y&:origin=viz_share_link"; 

    var url_4 = "https://public.tableau.com/views/Trend_Analysis1/Top15VideosByViewCount?:language=en&:display_count=y&:origin=viz_share_link"; 

    var viz1 = new tableau.Viz(document.getElementById("tableauViz"), url_1);
    var viz2 = new tableau.Viz(document.getElementById("tableauViz_2"), url_2);
    var viz3 = new tableau.Viz(document.getElementById("tableauViz_3"), url_3);
    var viz4 = new tableau.Viz(document.getElementById("tableauViz_4"), url_4);

    var url_5 = "https://public.tableau.com/views/Trend_Analysis1/UserBias?:language=en&:display_count=y&:origin=viz_share_link";

    var url_6 = "https://public.tableau.com/views/Trend_Analysis1/LiketoDislikeRatioperCategory?:language=en&:display_count=y&:origin=viz_share_link";

    var url_7 = "https://public.tableau.com/views/Trend_Analysis1/Top15VideosBasedonLikestoDislikesRatio?:language=en&:display_count=y&:origin=viz_share_link";

    var url_8 = "https://public.tableau.com/views/Trend_Analysis1/Top15VideosbasedonDislikestoLikesRatio?:language=en&:display_count=y&:origin=viz_share_link";

    var viz5 = new tableau.Viz(document.getElementById("tableauViz_5"), url_5);
    var viz6 = new tableau.Viz(document.getElementById("tableauViz_6"), url_6);
    var viz7 = new tableau.Viz(document.getElementById("tableauViz_7"), url_7);
    var viz8 = new tableau.Viz(document.getElementById("tableauViz_8"), url_8);
}
    