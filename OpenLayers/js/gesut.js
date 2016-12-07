//<!-- Plik javascript- GESUT, OBRONA PRACY MAGISTERSKIEJ"
$(function() {
  //------------gesut---------------
    //10 ------------przewód kanalizacyjny--------------




     var sprze_kanal = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [128, 51, 0,1],
      width:1,
      lineCap: 'round'
      }),
      zIndex: 2
      });

   //11 przewód wodociagowy
    var sprze_wod = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0, 0, 225,1],
      width:1,
      lineCap: 'round',
      }),
      zIndex: 2
      });

    //12 przewód telekomunikacyjny
     var sprze_tele = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [225, 145, 0, 1],
      width: 1,
      lineCap: 'round'
        }),
      zIndex: 2
      });

    //13 kanal ciepłowniczy
     var sprze_ciepl = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [210, 0, 210, 1],
      width:1,
      lineCap: 'round'
        }),
      zIndex: 2
      });

    //14 przewod niezindentyfikowany

     var sprze_niez = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0, 0, 0, 1],
      width:1,
      lineCap: 'round'
        }),
      zIndex: 2
      });

      //15 budowla podziemna
     var sbud_podz = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0, 0, 0, 1],
      width: 1,
      lineCap: 'round',
      lineDash: [4,4]
        }),
      zIndex: 2
      });

   //16 przewód elektroenergetyczny
     var sprze_elekt = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [255, 0, 0, 1],
      width: 1,
      lineCap: 'round'
      }),
      zIndex: 2
      });
    //17 -----słup i maszt-------------
     var sslup_maszt = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0, 0, 0, 1],
      width:1,
      lineCap: 'round'

      }),
      zIndex: 0.7,
      image: new ol.style.Circle({
             fill: new ol.style.Fill({
             color: 'rgba(0, 0, 0,0.5)'
             }),
             stroke: new ol.style.Stroke({
             width: 0.36,
             color: 'rgba(0, 0, 0, 1)'
             }),
             radius: 0.7
             })
      });

     var slisciaste = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0, 128, 0,1],
      width:1,
      lineCap: 'round'

      }),
      zIndex: 0.7,
      image: new ol.style.Circle({
             fill: new ol.style.Fill({
             color: 'rgba(0, 128, 0,1)',
             }),
             stroke: new ol.style.Stroke({
             width: 0.36,
             color: 'rgba(0, 128, 0,1)'
             }),
             radius: 1.2
             })
      });

    //18 obudowa przewodu
     var sobudowa_prze = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0 ,0, 0, 1],
      width: 1,
      lineCap: 'round'
      }),
      zIndex: 2
      });


    //19 przewód gazowy
     var sprzew_gas = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [191,191, 0, 1],
      width: 1,
      lineCap: 'round'
      }),
      zIndex: 2
      });


    //20 przwód inny

     var sprzew_inny = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0,0, 0, 1],
      width: 1,
      lineCap: 'round'
      }),
      zIndex: 2
      });



    //21 urzadzenie techiczne zwiazane z siecia
     var surzadz_tech = new ol.style.Style({
      stroke: new ol.style.Stroke({
      color: [0 ,0, 0, 1],
      width: 0.13,
      lineCap: 'round'
      }),
      zIndex: 0.7,
      image: new ol.style.Circle({
             fill: new ol.style.Fill({
             color: 'rgba(0, 0, 0,0.5)'
             }),
             stroke: new ol.style.Stroke({
             width: 0.36,
             color: 'rgba(0, 0, 0, 1)'
             }),
             radius: 0.7
             })
      });

      		//przewód kanalizacyjny
      		var vectorLayer1 = new ol.layer.Vector({
            source: new ol.source.Vector({
                 url: 'geojson/GES/GES_PrzewodKanalizacyjny.geojson',
                format: new ol.format.GeoJSON()
      				}),
              style:[sprze_kanal]
            });
      		// przewód wodociągowy
      	   var vectorLayer2 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/GES/GES_PrzewodWodociagowy.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sprze_wod]
      		});
      		// przewód telekomunikacyjny
      	   var vectorLayer3 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/GES/GES_PrzewodTelekomunikacyjny.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sprze_tele]
      		});
      		// przewód cieplowniczy
      	   var vectorLayer4 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/GES/GES_PrzewodCieplowniczy.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sprze_ciepl]
      		});
      		// przewód niezindentyfikowany i inny
      	   var vectorLayer5 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/GES/GES_PrzewodNiezidentyfikowany.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sprze_niez]
      		});

      		//budowla elektroenergetyczny
      		  var vectorLayer6 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_PrzewodElektroenergetyczny.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sprze_elekt]
  	      });
      		//budowla podziemna
      		  var vectorLayer7 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_BudowlaPodziemna.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sbud_podz]
      		});

      	//budowla słup i maszt
      		  var vectorLayer8 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_SlupIMaszt.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sslup_maszt]
      		});

      		//punkt o okreslonej wysokosci
      		  var vectorLayer9 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_PunktOOkreslonejWysokosci.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sslup_maszt]
      		});

      		//obudowa przewodu
      		  var vectorLayer10 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_ObudowaPrzewodu.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sobudowa_prze]
      		});

      		//przewód gazowy
      		  var vectorLayer11 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_PrzewodGazowy.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sprzew_gas]
      		});

      		//przewód inny
      		  var vectorLayer12 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/GES/GES_PrzewodInny.geojson',
                  format: new ol.format.GeoJSON()
      			}),
            style:[sprzew_inny]
      	});
      				//przewód gazowy
      		  var vectorLayer13 = new ol.layer.Vector({
      	  	    source: new ol.source.Vector({
      			         url: 'geojson/GES/GES_UrzadzenieTechniczneZwiazaneZSiecia.geojson',
                    format: new ol.format.GeoJSON()
      				}),
              style:[surzadz_tech]
        });


      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          vectorLayer1,vectorLayer2,vectorLayer3,vectorLayer4,vectorLayer5,vectorLayer6,vectorLayer7,vectorLayer8,vectorLayer9,vectorLayer10,vectorLayer11,vectorLayer12,vectorLayer13
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
       info.innerHTML =   ' ID : ' + feature.get('fid');
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
