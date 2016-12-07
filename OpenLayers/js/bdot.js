//<!-- Plik javascript- BDOT, OBRONA PRACY MAGISTERSKIEJ"
$(function() {
  //------------bdot---------------
  //22 woda powierzchniowa

  var swoda_pow = new ol.style.Style({
    fill: new ol.style.Fill({
    color: [209,255,255,1]
    }),
    stroke: new ol.style.Stroke({
    color: [209,255,255,1],
    width:0.8,
    lineCap: 'round'
    }),
    zIndex: 2
  });

//23 budowla hydrotechniczna

   var sjaz = new ol.style.Style({
    fill: new ol.style.Fill({
    color: [209,255,255,1]
    }),
    stroke: new ol.style.Stroke({
    color: [89,217,255,1],
    width:1,
    lineCap: 'round'
    }),
    zIndex: 2
  });


  //24 jezdnia___________
   var sjezdnia = new ol.style.Style({
    fill: new ol.style.Fill({
    color: [255,217,0,1]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [255,217,0,1]
    }),
    color: [81,2,5,1],
    width:1,
    lineCap: 'round'
    }),
    zIndex: 2
  });

//25 PLAC
 var splac = new ol.style.Style({
  fill: new ol.style.Fill({
  color: [255,255,255,1]
  }),
  stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [255,255,255,1]
    }),
  color: [81,2,5,1],
  width:1,
  lineCap: 'round'
  }),
  zIndex: 2
});

   //26 tory
  var stor = new ol.style.Style({
    stroke: new ol.style.Stroke({
    color: [0, 0, 0, 1],
    width: 1,
    lineCap: 'round'
    }),
    zIndex: 2
    });
//
  var steren_les= new ol.style.Style({
    fill: new ol.style.Fill({
    color: [219,250,176,1]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [219,250,176,1]
    }),
    color: [219,250,176,1],
    width:1,
    lineCap: 'round'
    }),
    zIndex: 2
  });

   //komin przemysłowy
  var swys_bud_tech = new ol.style.Style({
    stroke: new ol.style.Stroke({
    color: [0, 0, 0, 1],
    width: 1,
    lineCap: 'round'
  }),
    zIndex: 2
    });


   //budynek inzynierski
  var sbud_inz= new ol.style.Style({
    fill: new ol.style.Fill({
    color: [0,0,0,1]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [0,0,0,1]
      }),
    color: [0,0,0,1],
    width:1,
    lineCap: 'round'
    }),
    zIndex: 2
  });

   //zbiornik techniczny na ciecz
  var szb_tech= new ol.style.Style({
    fill: new ol.style.Fill({
    color: [209,255,255,1]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [209,255,255,1]
    }),
    color: [51,56,255,1],
    width:1,
    lineCap: 'round'
    }),
    zIndex: 2
  });
   //skarpa nieumocniona
  var sbud_ziemna= new ol.style.Style({
    fill: new ol.style.Fill({
    color: [0,0,0,0.5]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [0,0,0,1]
    }),
    color: [0,0,0,0.5],
    width:0.5,
    lineCap: 'round'
    }),
    zIndex: 2
  });

   //ciag ruchu pieszego i rowerowego
  var sruch= new ol.style.Style({
    fill: new ol.style.Fill({
    color: [179,191,191,1]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [179,191,191,1]
    }),
    color:[82,100,100,1],
    width:0.5,
    lineCap: 'round'
    }),
    zIndex: 2
  });


   //budowla inna
  var sbud_inna= new ol.style.Style({
    fill: new ol.style.Fill({
    color: [138,143,179,1]
    }),
    stroke: new ol.style.Stroke({
    fill: new ol.style.Fill({
    color: [138,143,179,1]
    }),
    color:[0,0,0,1],
    width:1,
    lineCap: 'round'
    }),
    zIndex: 2
  });


  //3 EGB_JednostkaEwidencyjna

     var srow = new ol.style.Style({
    stroke: new ol.style.Stroke({
    color: [0, 0, 0,1],
    width:0.5,
    lineCap: 'round',
    lineDash: [4,4]
    }),
    zIndex: 2
  });
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
    var sprzew_inny = new ol.style.Style({
     stroke: new ol.style.Stroke({
     color: [0,0, 0, 1],
     width: 1,
     lineCap: 'round'
     }),
     zIndex: 2
     });




      			//budowla ziemna skarpa nieumocniona
      		var vectorLayer1 = new ol.layer.Vector({
            source: new ol.source.Vector({
                 url: 'geojson/BDZ/BDZ_BudowlaZiemna.geojson',
                format: new ol.format.GeoJSON()
      				}),
              style:[sbud_ziemna]
            });
      	//budowla hydrotechniczna [jaz]
      	   var vectorLayer2 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/BDZ/BDZ_BudowlaHydrotechniczna.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sjaz]
      		});
      			//jezdnia
      	   var vectorLayer3 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/BDZ/BDZ_Jezdnia.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sjezdnia]
      		});
      		//tor
      	   var vectorLayer4 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/BDZ/BDZ_Tor.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[stor]
      		});
      		//BDZ_InnaBudowla
      	   var vectorLayer5 = new ol.layer.Vector({
             source: new ol.source.Vector({
                  url: 'geojson/BDZ/BDZ_InnaBudowla.geojson',
                 format: new ol.format.GeoJSON()
      				}),
              style:[sbud_inna]
      		});

      		//ruch
      		  var vectorLayer6 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/BDZ/BDZ_CiagRuchuPieszegoIRowerowego2.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sruch]
  	      });
      		//kraweznik
      		  var vectorLayer7 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/BDZ/BDZ_Kraweznik.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[srow]
      		});

//Obiekt o znaczeniu orientacyjnym
      		  var vectorLayer8 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/BDZ/BDZ_ObiektOZnaczeniuOrientacyjnymWTerenie.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[sslup_maszt]
      		});

      			//Obiekt przyrodniczy
      		  var vectorLayer9 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/BDZ/BDZ_ObiektPrzyrodniczy.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[slisciaste]
      		});

      		//zbiornik techniczny
      		  var vectorLayer10 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/BDZ/BDZ_ZbiornikTechniczny.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[szb_tech]
      		});

      		//woda powierznie
      		  var vectorLayer11 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'geojson/BDZ/BDZ_WodaPowierzchniowa.geojson',
                  format: new ol.format.GeoJSON()
      				}),
              style:[swoda_pow]
      		});

      	////obiekt kartograficzny
      		  var vectorLayer12 = new ol.layer.Vector({
              source: new ol.source.Vector({
                   url: 'gjson/ob_kart.geojson',
                  format: new ol.format.GeoJSON()
      			}),
            style:[sprzew_inny]
      	});
      				//BDZ_BudowlaInzynierska
      		  var vectorLayer13 = new ol.layer.Vector({
      	  	    source: new ol.source.Vector({
      			         url: 'geojson/BDZ/BDZ_BudowlaInzynierska.geojson',
                    format: new ol.format.GeoJSON()
      				}),
              style:[sbud_inz]
        });
      	//BDZ_WysokaBudowlaTechniczna
            var vectorLayer14 = new ol.layer.Vector({
                source: new ol.source.Vector({
                  url: 'geojson/BDZ/BDZ_WysokaBudowlaTechniczna.geojson',
              format: new ol.format.GeoJSON()
            }),
            style:[swys_bud_tech]
          });
          	//plac
          var vectorLayer15 = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: 'geojson/BDZ/BDZ_Plac.geojson',
              format: new ol.format.GeoJSON()
            }),
            style:[splac]
          });
        	//teren zalesiony
          var vectorLayer16 = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: 'geojson/BDZ/BDZ_TerenLesnyZadrzewionyLubZakrzewiony.geojson',
              format: new ol.format.GeoJSON()
            }),
            style:[steren_les]
          });
          ///obiekt zwiazany z komunikacja
          var vectorLayer17 = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: 'geojson/BDZ/BDZ_ObiektZwiazanyZKomunikacja.geojson',
              format: new ol.format.GeoJSON()
            }),
            style:[srow]
          });
          //row
          var vectorLayer18 = new ol.layer.Vector({
            source: new ol.source.Vector({
              url: 'geojson/BDZ/BDZ_Row.geojson',
              format: new ol.format.GeoJSON()
            }),
            style:[srow]
          });

      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          vectorLayer1,vectorLayer2,vectorLayer3,vectorLayer4,vectorLayer5,vectorLayer6,vectorLayer7,vectorLayer8,vectorLayer9,vectorLayer10,vectorLayer11,vectorLayer12,vectorLayer13,vectorLayer14,vectorLayer15,vectorLayer16,vectorLayer17,vectorLayer18
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
