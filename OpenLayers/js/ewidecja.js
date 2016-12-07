//<!-- Plik javascript- EMUIA, OBRONA PRACY MAGISTERSKIEJ"
$(function() {
//DZIAŁKA EWIDENCYJNA
      var stylem = new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.6)'
        }),
        stroke: new ol.style.Stroke({
          color: [0, 128, 0,1],
          width: 1
        }),
        text: new ol.style.Text({
          font: '10px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: '#000'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 1
          })
        })
      });
	  //BUDYNEK
	   var stylen = new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.6)'
        }),
        stroke: new ol.style.Stroke({
          color: [0, 0, 0,1],
          width: 1
        }),
		 fill: new ol.style.Fill({
				color: [206,76,0,1]
				}),
        text: new ol.style.Text({
          font: '10px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: '#000'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 1
          })
        })
      });

	  //OBIEKT KARTO
	   var stylek = new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba[0, 128, 0,1],'
        }),
        stroke: new ol.style.Stroke({
          color: [0, 128, 0,1],
          width: 1,
		  lineDash: [4,4]
        }),
        text: new ol.style.Text({
          font: '10px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: '#000'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 1
          })
        })
      });


	 	 var skontur_klas = new ol.style.Style({
			stroke: new ol.style.Stroke({
			color: [0, 128, 0,1],
			width:0.26,
			lineCap: 'round',
			lineDash: [4,4]
			}),
			zIndex: 2
		});


  //DZIAŁKA EWIDENCYJNA
      var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'geojson/EGB_z_geometria/EGB_DzialkaEwidencyjna.geojson',
          format: new ol.format.GeoJSON()

        }),
        style: function(feature, resolution) {
          stylem.getText().setText(resolution < 1 ? feature.get('text') : '');
          return stylem;
        }
      });
	  //BUDYNEK
	   var vectorLayer2 = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'geojson/EGB_z_geometria/EGB_Budynek.geojson',
          format: new ol.format.GeoJSON()

        }),
        style: function(feature, resolution) {
          stylen.getText().setText(resolution < 1 ? feature.get('text') : '');
          return stylen;
        }
      });

	  //OBIEKT KARTO
	  var vectorLayer3= new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'geojson/EGB_z_geometria/KR_ObiektKarto.geojson',
          format: new ol.format.GeoJSON()

        }),
        style: function(feature, resolution) {
          stylen.getText().setText(resolution < 1 ? feature.get('text') : '');
          return stylen;
        }
      });

	  //KONTUR KLASYFIKACYJNY
	    //OBIEKT KARTO
	  var vectorLayer4= new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'geojson/EGB_z_geometria/EGB_KonturKlasyfikacyjny.geojson',
          format: new ol.format.GeoJSON()
			}),
        style:[skontur_klas]

      });


	  var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          vectorLayer4,vectorLayer,vectorLayer2,vectorLayer3
        ],
        target: 'map',
        view: new ol.View({
           center:[2396559, 6401437],
          zoom:15
        })
      });


	 // WYŚWIETLANIE I PODŚWIETLANIE WARSTWY
   var highlightStyleCache = {};

   var featureOverlay = new ol.layer.Vector({
     source: new ol.source.Vector(),
     map: map,
     style: function(feature, resolution) {
       var text = resolution < 5000 ? feature.get('fid') : '';
       if (!highlightStyleCache[text]) {
         highlightStyleCache[text] = new ol.style.Style({
           stroke: new ol.style.Stroke({
             color: '#f00',
             width: 1
           }),
           fill: new ol.style.Fill({
             color: 'rgba(255,0,0,0.1)'
           }),
           text: new ol.style.Text({
             font: '12px Calibri,sans-serif',
             text: text,
             fill: new ol.style.Fill({
               color: '#000'
             }),
             stroke: new ol.style.Stroke({
               color: '#f00',
               width: 3
             })
           })
         });
       }
       return highlightStyleCache[text];
     }
   });

   //WYSWIETLANIE NAPISU POD MAPĄ I PODKRESLANIE
   var highlight;
   var displayFeatureInfo = function(pixel) {

     var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
       return feature;
     });

     var info = document.getElementById('info');
     if (feature) {
       info.innerHTML =   ' ID : ' + feature.get('text');
     } else {
       info.innerHTML = '&nbsp;';
     }

     if (feature !== highlight) {
       if (highlight) {
         featureOverlay.getSource().removeFeature(highlight);
       }
       if (feature) {
         featureOverlay.getSource().addFeature(feature);
       }
       highlight = feature;
     }

   };


   map.on('pointermove', function(evt) {
     if (evt.dragging) {
       return;
     }
     var pixel = map.getEventPixel(evt.originalEvent);
     displayFeatureInfo(pixel);
   });

   map.on('click', function(evt) {
     displayFeatureInfo(evt.pixel);
   });
});
