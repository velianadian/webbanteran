ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.251021, -7.370662, 109.288878, -7.352043]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Farm_1 = new ol.format.GeoJSON();
var features_Farm_1 = format_Farm_1.readFeatures(json_Farm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Farm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farm_1.addFeatures(features_Farm_1);
var lyr_Farm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Farm_1, 
                style: style_Farm_1,
                popuplayertitle: "Farm",
                interactive: true,
                title: '<img src="styles/legend/Farm_1.png" /> Farm'
            });
var format_Wisata_2 = new ol.format.GeoJSON();
var features_Wisata_2 = format_Wisata_2.readFeatures(json_Wisata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wisata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisata_2.addFeatures(features_Wisata_2);
var lyr_Wisata_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wisata_2, 
                style: style_Wisata_2,
                popuplayertitle: "Wisata",
                interactive: true,
                title: '<img src="styles/legend/Wisata_2.png" /> Wisata'
            });
var format_Kebun_3 = new ol.format.GeoJSON();
var features_Kebun_3 = format_Kebun_3.readFeatures(json_Kebun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kebun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_3.addFeatures(features_Kebun_3);
var lyr_Kebun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_3, 
                style: style_Kebun_3,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_3.png" /> Kebun'
            });
var format_Sawah_4 = new ol.format.GeoJSON();
var features_Sawah_4 = format_Sawah_4.readFeatures(json_Sawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_4.addFeatures(features_Sawah_4);
var lyr_Sawah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_4, 
                style: style_Sawah_4,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_4.png" /> Sawah'
            });
var format_RT_5 = new ol.format.GeoJSON();
var features_RT_5 = format_RT_5.readFeatures(json_RT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_5.addFeatures(features_RT_5);
var lyr_RT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_5, 
                style: style_RT_5,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_5_0.png" /> <br />\
    <img src="styles/legend/RT_5_1.png" /> RT 1/RW3<br />\
    <img src="styles/legend/RT_5_2.png" /> RT 2/RW 3<br />\
    <img src="styles/legend/RT_5_3.png" /> RT 3/RW 3<br />\
    <img src="styles/legend/RT_5_4.png" /> RT 4/RW 3<br />\
    <img src="styles/legend/RT_5_5.png" /> RT 5/ RW 3<br />\
    <img src="styles/legend/RT_5_6.png" /> RT 6/RW 3<br />\
    <img src="styles/legend/RT_5_7.png" /> RT 7/ RW 3<br />\
    <img src="styles/legend/RT_5_8.png" /> RT 8/ RW 3<br />\
    <img src="styles/legend/RT_5_9.png" /> RT 1/ RW 2<br />\
    <img src="styles/legend/RT_5_10.png" /> RT 2/RW 2<br />\
    <img src="styles/legend/RT_5_11.png" /> RT 3/RW 2<br />\
    <img src="styles/legend/RT_5_12.png" /> RT 4/RW 2<br />\
    <img src="styles/legend/RT_5_13.png" /> RT 4/ RW 2<br />\
    <img src="styles/legend/RT_5_14.png" /> RT 5/RW 2<br />\
    <img src="styles/legend/RT_5_15.png" /> RT 6/ RW 2<br />\
    <img src="styles/legend/RT_5_16.png" /> RT 7/RW 2<br />\
    <img src="styles/legend/RT_5_17.png" /> RT 1/RW 1<br />\
    <img src="styles/legend/RT_5_18.png" /> RT 3/RW 1<br />\
    <img src="styles/legend/RT_5_19.png" /> RT 2/ RW 1<br />\
    <img src="styles/legend/RT_5_20.png" /> RT 3/ RW 4<br />\
    <img src="styles/legend/RT_5_21.png" /> RT 4/ RW 4<br />\
    <img src="styles/legend/RT_5_22.png" /> RT 1/RW 4<br />\
    <img src="styles/legend/RT_5_23.png" /> RT 2/RW 4<br />\
    <img src="styles/legend/RT_5_24.png" /> RT 1/ RW 5<br />\
    <img src="styles/legend/RT_5_25.png" /> RT 2/ RW 5<br />\
    <img src="styles/legend/RT_5_26.png" /> RT 3/ RW 5<br />\
    <img src="styles/legend/RT_5_27.png" /> RT 4/RW 5<br />\
    <img src="styles/legend/RT_5_28.png" /> RT 5/RW 5<br />\
    <img src="styles/legend/RT_5_29.png" /> RT 6/ RW 5<br />\
    <img src="styles/legend/RT_5_30.png" /> RT 7/ RW 5<br />\
    <img src="styles/legend/RT_5_31.png" /> RT 1/ RW 6<br />\
    <img src="styles/legend/RT_5_32.png" /> RT 4/ RW 6<br />\
    <img src="styles/legend/RT_5_33.png" /> RT 2/ RW 6<br />\
    <img src="styles/legend/RT_5_34.png" /> RT 3/ RW 6<br />\
    <img src="styles/legend/RT_5_35.png" /> RT 1/ RW 7<br />\
    <img src="styles/legend/RT_5_36.png" /> RT 2/ RW 7<br />\
    <img src="styles/legend/RT_5_37.png" /> RT 3/ RW 7<br />\
    <img src="styles/legend/RT_5_38.png" /> RT 4/ RW 7<br />\
    <img src="styles/legend/RT_5_39.png" /> RT 5/ RW 7<br />\
    <img src="styles/legend/RT_5_40.png" /> RT 6/ RW 7<br />\
    <img src="styles/legend/RT_5_41.png" /> RT 7/ RW 7<br />\
    <img src="styles/legend/RT_5_42.png" /> RT 4/ RW 1<br />\
    <img src="styles/legend/RT_5_43.png" /> TPU<br />'
        });
var format_ADMINISTRASIDESA_AR_25K_6 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_6 = format_ADMINISTRASIDESA_AR_25K_6.readFeatures(json_ADMINISTRASIDESA_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_6.addFeatures(features_ADMINISTRASIDESA_AR_25K_6);
var lyr_ADMINISTRASIDESA_AR_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_6, 
                style: style_ADMINISTRASIDESA_AR_25K_6,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_6.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Banteran_poly_7 = new ol.format.GeoJSON();
var features_Banteran_poly_7 = format_Banteran_poly_7.readFeatures(json_Banteran_poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Banteran_poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banteran_poly_7.addFeatures(features_Banteran_poly_7);
var lyr_Banteran_poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banteran_poly_7, 
                style: style_Banteran_poly_7,
                popuplayertitle: "Banteran_poly",
                interactive: false,
                title: '<img src="styles/legend/Banteran_poly_7.png" /> Banteran_poly'
            });
var format_Sungai_8 = new ol.format.GeoJSON();
var features_Sungai_8 = format_Sungai_8.readFeatures(json_Sungai_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sungai_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_8.addFeatures(features_Sungai_8);
var lyr_Sungai_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_8, 
                style: style_Sungai_8,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_8.png" /> Sungai'
            });
var format_Jalan_9 = new ol.format.GeoJSON();
var features_Jalan_9 = format_Jalan_9.readFeatures(json_Jalan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_9.addFeatures(features_Jalan_9);
var lyr_Jalan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_9, 
                style: style_Jalan_9,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_9.png" /> Jalan'
            });
var format_Perusahaan_10 = new ol.format.GeoJSON();
var features_Perusahaan_10 = format_Perusahaan_10.readFeatures(json_Perusahaan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Perusahaan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perusahaan_10.addFeatures(features_Perusahaan_10);
var lyr_Perusahaan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perusahaan_10, 
                style: style_Perusahaan_10,
                popuplayertitle: "Perusahaan",
                interactive: true,
                title: '<img src="styles/legend/Perusahaan_10.png" /> Perusahaan'
            });
var format_Kuliner_11 = new ol.format.GeoJSON();
var features_Kuliner_11 = format_Kuliner_11.readFeatures(json_Kuliner_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kuliner_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuliner_11.addFeatures(features_Kuliner_11);
var lyr_Kuliner_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuliner_11, 
                style: style_Kuliner_11,
                popuplayertitle: "Kuliner",
                interactive: true,
                title: '<img src="styles/legend/Kuliner_11.png" /> Kuliner'
            });
var format_TPU_12 = new ol.format.GeoJSON();
var features_TPU_12 = format_TPU_12.readFeatures(json_TPU_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TPU_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_12.addFeatures(features_TPU_12);
var lyr_TPU_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_12, 
                style: style_TPU_12,
                popuplayertitle: "TPU",
                interactive: true,
                title: '<img src="styles/legend/TPU_12.png" /> TPU'
            });
var format_Bengkel_13 = new ol.format.GeoJSON();
var features_Bengkel_13 = format_Bengkel_13.readFeatures(json_Bengkel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bengkel_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_13.addFeatures(features_Bengkel_13);
var lyr_Bengkel_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_13, 
                style: style_Bengkel_13,
                popuplayertitle: "Bengkel",
                interactive: true,
                title: '<img src="styles/legend/Bengkel_13.png" /> Bengkel'
            });
var format_Kelurahan_14 = new ol.format.GeoJSON();
var features_Kelurahan_14 = format_Kelurahan_14.readFeatures(json_Kelurahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kelurahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_14.addFeatures(features_Kelurahan_14);
var lyr_Kelurahan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_14, 
                style: style_Kelurahan_14,
                popuplayertitle: "Kelurahan",
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_14.png" /> Kelurahan'
            });
var format_Sekolah_15 = new ol.format.GeoJSON();
var features_Sekolah_15 = format_Sekolah_15.readFeatures(json_Sekolah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sekolah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_15.addFeatures(features_Sekolah_15);
var lyr_Sekolah_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_15, 
                style: style_Sekolah_15,
                popuplayertitle: "Sekolah",
                interactive: true,
                title: '<img src="styles/legend/Sekolah_15.png" /> Sekolah'
            });
var format_Lapangan_16 = new ol.format.GeoJSON();
var features_Lapangan_16 = format_Lapangan_16.readFeatures(json_Lapangan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_16.addFeatures(features_Lapangan_16);
var lyr_Lapangan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_16, 
                style: style_Lapangan_16,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_16.png" /> Lapangan'
            });
var format_Rumah_17 = new ol.format.GeoJSON();
var features_Rumah_17 = format_Rumah_17.readFeatures(json_Rumah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rumah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_17.addFeatures(features_Rumah_17);
var lyr_Rumah_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_17, 
                style: style_Rumah_17,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_17.png" /> Rumah'
            });
var format_masjid_18 = new ol.format.GeoJSON();
var features_masjid_18 = format_masjid_18.readFeatures(json_masjid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_masjid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_18.addFeatures(features_masjid_18);
var lyr_masjid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_18, 
                style: style_masjid_18,
                popuplayertitle: "masjid",
                interactive: true,
                title: '<img src="styles/legend/masjid_18.png" /> masjid'
            });
var format_Toko_19 = new ol.format.GeoJSON();
var features_Toko_19 = format_Toko_19.readFeatures(json_Toko_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Toko_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_19.addFeatures(features_Toko_19);
var lyr_Toko_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_19, 
                style: style_Toko_19,
                popuplayertitle: "Toko",
                interactive: true,
                title: '<img src="styles/legend/Toko_19.png" /> Toko'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Farm_1.setVisible(true);lyr_Wisata_2.setVisible(true);lyr_Kebun_3.setVisible(true);lyr_Sawah_4.setVisible(true);lyr_RT_5.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_6.setVisible(true);lyr_Banteran_poly_7.setVisible(true);lyr_Sungai_8.setVisible(true);lyr_Jalan_9.setVisible(true);lyr_Perusahaan_10.setVisible(true);lyr_Kuliner_11.setVisible(true);lyr_TPU_12.setVisible(true);lyr_Bengkel_13.setVisible(true);lyr_Kelurahan_14.setVisible(true);lyr_Sekolah_15.setVisible(true);lyr_Lapangan_16.setVisible(true);lyr_Rumah_17.setVisible(true);lyr_masjid_18.setVisible(true);lyr_Toko_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Farm_1,lyr_Wisata_2,lyr_Kebun_3,lyr_Sawah_4,lyr_RT_5,lyr_ADMINISTRASIDESA_AR_25K_6,lyr_Banteran_poly_7,lyr_Sungai_8,lyr_Jalan_9,lyr_Perusahaan_10,lyr_Kuliner_11,lyr_TPU_12,lyr_Bengkel_13,lyr_Kelurahan_14,lyr_Sekolah_15,lyr_Lapangan_16,lyr_Rumah_17,lyr_masjid_18,lyr_Toko_19];
lyr_Farm_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Wisata_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kebun_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RT_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_ADMINISTRASIDESA_AR_25K_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Banteran_poly_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_Sungai_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Jalan_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Perusahaan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kuliner_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TPU_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bengkel_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kelurahan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sekolah_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_masjid_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Toko_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Farm_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Wisata_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kebun_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Banteran_poly_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_Sungai_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Jalan_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Perusahaan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kuliner_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TPU_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bengkel_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kelurahan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sekolah_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_masjid_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Toko_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Farm_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Wisata_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kebun_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sawah_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RT_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_6.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Banteran_poly_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_Sungai_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Jalan_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_Perusahaan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kuliner_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TPU_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Bengkel_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kelurahan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sekolah_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_masjid_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Toko_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Toko_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});