ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([34.993827, -15.726181, 35.034570, -15.701795]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Gulu_Dennis_Gontha_3 = new ol.format.GeoJSON();
var features_Gulu_Dennis_Gontha_3 = format_Gulu_Dennis_Gontha_3.readFeatures(json_Gulu_Dennis_Gontha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gulu_Dennis_Gontha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulu_Dennis_Gontha_3.addFeatures(features_Gulu_Dennis_Gontha_3);
var lyr_Gulu_Dennis_Gontha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gulu_Dennis_Gontha_3, 
                style: style_Gulu_Dennis_Gontha_3,
                popuplayertitle: 'Gulu_Dennis_Gontha',
                interactive: true,
                title: '<img src="styles/legend/Gulu_Dennis_Gontha_3.png" /> Gulu_Dennis_Gontha'
            });
var format_Gulu_Gastin_Gontha_4 = new ol.format.GeoJSON();
var features_Gulu_Gastin_Gontha_4 = format_Gulu_Gastin_Gontha_4.readFeatures(json_Gulu_Gastin_Gontha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gulu_Gastin_Gontha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulu_Gastin_Gontha_4.addFeatures(features_Gulu_Gastin_Gontha_4);
var lyr_Gulu_Gastin_Gontha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gulu_Gastin_Gontha_4, 
                style: style_Gulu_Gastin_Gontha_4,
                popuplayertitle: 'Gulu_Gastin_Gontha',
                interactive: true,
                title: '<img src="styles/legend/Gulu_Gastin_Gontha_4.png" /> Gulu_Gastin_Gontha'
            });
var format_Gulu_Laurent_Gontha_5 = new ol.format.GeoJSON();
var features_Gulu_Laurent_Gontha_5 = format_Gulu_Laurent_Gontha_5.readFeatures(json_Gulu_Laurent_Gontha_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gulu_Laurent_Gontha_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulu_Laurent_Gontha_5.addFeatures(features_Gulu_Laurent_Gontha_5);
var lyr_Gulu_Laurent_Gontha_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gulu_Laurent_Gontha_5, 
                style: style_Gulu_Laurent_Gontha_5,
                popuplayertitle: 'Gulu_Laurent_Gontha',
                interactive: true,
                title: '<img src="styles/legend/Gulu_Laurent_Gontha_5.png" /> Gulu_Laurent_Gontha'
            });
var format_Gulu_Michael_teketeke_6 = new ol.format.GeoJSON();
var features_Gulu_Michael_teketeke_6 = format_Gulu_Michael_teketeke_6.readFeatures(json_Gulu_Michael_teketeke_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gulu_Michael_teketeke_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulu_Michael_teketeke_6.addFeatures(features_Gulu_Michael_teketeke_6);
var lyr_Gulu_Michael_teketeke_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gulu_Michael_teketeke_6, 
                style: style_Gulu_Michael_teketeke_6,
                popuplayertitle: 'Gulu_Michael_teketeke',
                interactive: true,
                title: '<img src="styles/legend/Gulu_Michael_teketeke_6.png" /> Gulu_Michael_teketeke'
            });
var format_Gulu_Sam_Banda_7 = new ol.format.GeoJSON();
var features_Gulu_Sam_Banda_7 = format_Gulu_Sam_Banda_7.readFeatures(json_Gulu_Sam_Banda_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gulu_Sam_Banda_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulu_Sam_Banda_7.addFeatures(features_Gulu_Sam_Banda_7);
var lyr_Gulu_Sam_Banda_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gulu_Sam_Banda_7, 
                style: style_Gulu_Sam_Banda_7,
                popuplayertitle: 'Gulu_Sam_Banda',
                interactive: true,
                title: '<img src="styles/legend/Gulu_Sam_Banda_7.png" /> Gulu_Sam_Banda'
            });
var format_Gulu_William_Nsangwe_8 = new ol.format.GeoJSON();
var features_Gulu_William_Nsangwe_8 = format_Gulu_William_Nsangwe_8.readFeatures(json_Gulu_William_Nsangwe_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gulu_William_Nsangwe_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gulu_William_Nsangwe_8.addFeatures(features_Gulu_William_Nsangwe_8);
var lyr_Gulu_William_Nsangwe_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gulu_William_Nsangwe_8, 
                style: style_Gulu_William_Nsangwe_8,
                popuplayertitle: 'Gulu_William_Nsangwe',
                interactive: true,
                title: '<img src="styles/legend/Gulu_William_Nsangwe_8.png" /> Gulu_William_Nsangwe'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Gulu_Dennis_Gontha_3.setVisible(true);lyr_Gulu_Gastin_Gontha_4.setVisible(true);lyr_Gulu_Laurent_Gontha_5.setVisible(true);lyr_Gulu_Michael_teketeke_6.setVisible(true);lyr_Gulu_Sam_Banda_7.setVisible(true);lyr_Gulu_William_Nsangwe_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_GoogleSatellite_2,lyr_Gulu_Dennis_Gontha_3,lyr_Gulu_Gastin_Gontha_4,lyr_Gulu_Laurent_Gontha_5,lyr_Gulu_Michael_teketeke_6,lyr_Gulu_Sam_Banda_7,lyr_Gulu_William_Nsangwe_8];
lyr_Gulu_Dennis_Gontha_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gulu_Gastin_Gontha_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gulu_Laurent_Gontha_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gulu_Michael_teketeke_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gulu_Sam_Banda_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gulu_William_Nsangwe_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gulu_Dennis_Gontha_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Gulu_Gastin_Gontha_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Gulu_Laurent_Gontha_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Gulu_Michael_teketeke_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Gulu_Sam_Banda_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Gulu_William_Nsangwe_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Gulu_Dennis_Gontha_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Gulu_Gastin_Gontha_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - visible with data', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Gulu_Laurent_Gontha_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Gulu_Michael_teketeke_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Gulu_Sam_Banda_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Gulu_William_Nsangwe_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Gulu_William_Nsangwe_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});