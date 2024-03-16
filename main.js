var mapView = new ol.View ({
    center: ol.proj.fromLonLat([19.4024, 52.0000]),
    zoom: 7, 
});

var map = new ol.Map({
    target: "map",
    view: mapView,
});

var osmTile = new ol.layer.Tile ({
    title: "OpenStreetMap",
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);

var wojewodztwa =new ol.layer.Tile({
    title: "Wojewodztwa",
    source: new ol.source.TileWMS({
        url: "http://localhost:8080/geoserver/test/wms?service=WMS&version=1.1.0&request=GetMap&layers=test%3Awojewodztwa&bbox=144693.28034703757%2C125837.01797845584%2C876500.3591027685%2C908411.1932280732&width=718&height=768&srs=EPSG%3A2180&styles=&format=application/openlayers",
        params: {'LAYERS':'wojewodztwa', 'TILED': true},
        serverType: 'geoserver',
        visible: true,
    })
});

map.addLayer(wojewodztwa);

function  toggleLayer(eve){
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function(element){
        if (lyrname == element.get('title')){
            element.setVisible(checkedStatus);
        }
    });
}