
$(function() {
//	//------------------------------------STYLE-------------------------------------------
	  //1 DZIAŁKA EWIDENCYJNA
	  var sdzEwid = new ol.style.Style({
		  stroke: new ol.style.Stroke({
          color: [0, 128, 0,1],
          width: 0.36,
          lineCap: 'round'
          }),
          zIndex: 2
      });

	  //2 BYDYNKI
	  	 var sbudynki = new ol.style.Style({
			fill: new ol.style.Fill({
			color: [206,76,0,1]
			}),
			stroke: new ol.style.Stroke({
			color: [0, 0, 0,1],
			width: 0.5,
			lineCap: 'round'
			}),
			zIndex: 2
		});

	  //3 EGB_JednostkaEwidencyjna

	  	 var sjedEwid = new ol.style.Style({
			stroke: new ol.style.Stroke({
			color: [0, 128, 0,1],
			width:0.36,
			lineCap: 'round',
			lineDash: [4,4]
			}),
			zIndex: 2
		});

	//4 EGB_Adres
	     var sadresEGB=new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: [0, 0, 0, 0.5],
			width:0.26,
			lineCap: 'round'
		}),
			zIndex: 2,
			image: new ol.style.Circle({
             fill: new ol.style.Fill({
             color: 'rgba(178,34,34, 1)'
             }),
             stroke: new ol.style.Stroke({
             width: 0.26,
             color: 'rgba(139, 0, 0, 1)'
             }),
             radius: 1.2
             })
      });

	  //5 punkt graniczny
		var spunktgraniczny=new ol.style.Style({
			stroke: new ol.style.Stroke({
			color: [0, 0, 0, 1],
			width:0.26,
			lineCap: 'round'
		}),
			zIndex: 2,
			image: new ol.style.Circle({
             fill: new ol.style.Fill({
             color: 'rgba(0,0,0, 0)'

             }),
             stroke: new ol.style.Stroke({
             width: 0.26,
             color: 'rgba(0,128, 0, 1)'
             }),
             radius: 1.2
             })
      });


	  //6 EGB_ObrebEwidencyjny

	  	 var sobreb = new ol.style.Style({
			stroke: new ol.style.Stroke({
			color: [0, 128, 0,1],
			width:0.36,
			lineCap: 'round',
			lineDash: [4,4]
			}),
			zIndex: 2
		});


	   //7 EGB_kontur klasyfikacyjny

	  	 var skontur_klas = new ol.style.Style({
			stroke: new ol.style.Stroke({
			color: [0, 128, 0,1],
			width:0.26,
			lineCap: 'round',
			lineDash: [4,4]
			}),
			zIndex: 2
		});

		 //8 EGB_kontur uzytku gruntowego

	  	 var skontur_uz_gr = new ol.style.Style({
			stroke: new ol.style.Stroke({
			color: [0, 128, 0,1],
			width:0.26,
			lineCap: 'round',
			lineDash: [4,4]
			}),
			zIndex: 2
		});

	   //9 EGB_obiekt trwale zwiazany z gruntem

	  	 var sobiekt_trz_gr = new ol.style.Style({
			fill: new ol.style.Fill({
			color: [0,0,0,0.3]
			}),
			stroke: new ol.style.Stroke({
			color: [0,0,0,1],
			width:0.26,
			lineCap: 'round'
			}),
			zIndex: 2
		});

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


		//--------------------BDOT------------------------------

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

	//--------------------------------------WARSTWY-----------------------------------

	//działki
//działki

   var vdzEwid = new ol.layer.Vector({
      title: 'added Layer',
     source: new ol.source.GeoJSON({
        projection : 'EPSG:3857',
       url: 'geojson/EGB_z_geometria/EGB_DzialkaEwidencyjna.geojson'
		 }),
	  style: [sdzEwid]
		});

	  //budynki
	   var vbudynki = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/EGB_z_geometria/EGB_Budynek.geojson'
			}),
		style: [sbudynki]
	  });

	 //jednostka ewidencyjna

   var vjedEwid = new ol.layer.Vector({
      title: 'added Layer',
      source: new ol.source.GeoJSON({
         projection : 'EPSG:3857',
         url: 'geojson/EGB_z_geometria/EGB_JednostkaEwidencyjna.geojson'
	     }),
	  style: [sjedEwid]
   });

	  //adresy
	  var vadresEGB = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/EGB_z_geometria/EGB_Adres.geojson'
		}),
		style:[sadresEGB]
	  });


	//punkt graniczny
	 var vpunktgraniczny = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/EGB_z_geometria/linestring.geojson'
			}),
		style:[spunktgraniczny]
	});

		//EGB_ObrebEwidencyjny
	 var vobreb = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/EGB_z_geometria/EGB_ObrebEwidencyjny.geojson'
		}),
		style:[sobreb]
	});




		//EGB_kontur klasyfikacyjny
	 var vkontur_klas = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/EGB_z_geometria/EGB_KonturKlasyfikacyjny.geojson'
			}),
		style:[skontur_klas]
	});

		//EGB_kontur uzytku gruntowego
	 var vkontur_uz_gr = new ol.layer.Vector({
      title: 'added Layer',
      source: new ol.source.GeoJSON({
         projection : 'EPSG:3857',
         url: 'geojson/EGB_z_geometria/EGB_KonturUzytkuGruntowego.geojson'
		}),
	  style:[skontur_uz_gr]
	});

			//EGB_kontur uzytku gruntowego
	 var vobiekt_trz_gr = new ol.layer.Vector({
      title: 'added Layer',
      source: new ol.source.GeoJSON({
         projection : 'EPSG:3857',
         url: 'geojson/EGB_z_geometria/EGB_ObiektTrwaleZwiazanyZBudynkiem.geojson'
		}),
	  style:[sobiekt_trz_gr]
	});


		//przewód kanalizacyjny
		var vprze_kanal = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodKanalizacyjny.geojson'
				}),
			style:[sprze_kanal]
		});
		// przewód wodociągowy
	   var vprze_wod = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodWodociagowy.geojson'
				}),
			style:[sprze_wod]
		});
		// przewód telekomunikacyjny
	   var vprze_tele = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodTelekomunikacyjny.geojson'
				}),
			style:[sprze_tele]
		});
		// przewód cieplowniczy
	   var vprze_ciel = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodCieplowniczy.geojson'
				}),
			style:[sprze_ciepl]
		});
		// przewód niezindentyfikowany i inny
	   var vprze_niez = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodNiezidentyfikowany.geojson'
				}),
			style:[sprze_niez]
		});

		//budowla elektroenergetyczny
		  var vprze_elekt = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodElektroenergetyczny.geojson'
				}),
			style:[sprze_elekt]
		});

		//budowla podziemna
		  var vbudowla_podz = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_BudowlaPodziemna.geojson'
				}),
			style:[sbud_podz]
		});

	//budowla słup i maszt
		  var vslup_maszt = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_SlupIMaszt.geojson'
				}),
			style:[sslup_maszt]
		});

		//punkt o okreslonej wysokosci
		  var vpkt_ow = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PunktOOkreslonejWysokosci.geojson'
				}),
			style:[sslup_maszt]
		});

		//obudowa przewodu
		  var vobudowa_prze = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_ObudowaPrzewodu.geojson'
				}),
			style:[sobudowa_prze]
		});

		//przewód gazowy
		  var vprzew_gas = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodGazowy.geojson'
				}),
			style:[sprzew_gas]
		});

		//przewód inny
		  var vprzew_inny = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_PrzewodInny.geojson'
				}),
			style:[sprzew_inny]
		});
				//przewód gazowy
		  var vurzadz_tech = new ol.layer.Vector({
			title: 'added Layer',
			source: new ol.source.GeoJSON({
				projection : 'EPSG:3857',
				url: 'geojson/GES/GES_UrzadzenieTechniczneZwiazaneZSiecia.geojson'
				}),
			style:[surzadz_tech]
		});


		//---------------------bdot-------------------------

//	//budowla ziemna skarpa nieumocniona

	var vbud_ziemna = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_BudowlaZiemna.geojson'
			}),
		style: [sbud_ziemna]
	});
//
//
	//budowla hydrotechniczna [jaz]

	var vjaz = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_BudowlaHydrotechniczna.geojson'
			}),
		style: [sjaz]
	});

	//jezdnia
	var vjezdnia = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			//url: 'gjson/jezdnia.geojson'
			url: 'geojson/BDZ/BDZ_Jezdnia.geojson'
			}),
		style: [sjezdnia]
	});
//
	//tor
	var vtor = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_Tor.geojson'
			}),
		style: [stor]
	});
//
//
//
	//BDZ_InnaBudowla
	var vbud_inna = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_InnaBudowla.geojson'
			}),
		style: [sbud_inna]
	});
//
	//ruch
	var vruch = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_CiagRuchuPieszegoIRowerowego2.geojson'
			}),
		style: [sruch]
	});

//kraweznik
var vkraweznik = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_Kraweznik.geojson'
			}),
		style: [srow]
	});

	//Obiekt o znaczeniu orientacyjnym
var voozo = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_ObiektOZnaczeniuOrientacyjnymWTerenie.geojson'
			}),
		style: [sslup_maszt]
	});

	//Obiekt przyrodniczy

var vobiekt_prze = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_ObiektPrzyrodniczy.geojson'
			}),
		style: [slisciaste]
	});


//
//	//zbiornik techniczny
//
	var vzb_tech = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_ZbiornikTechniczny.geojson'
			}),
		style: [szb_tech]
	});

//woda powierznie

	var vwoda = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_WodaPowierzchniowa.geojson'
			}),
		style: [swoda_pow]

	});



//
//
////obiekt kartograficzny
//	var vobiekt_kart = new ol.layer.Vector({
//		title: 'added Layer',
//		source: new ol.source.GeoJSON({
//			projection : 'EPSG:3857',
//			url: 'gjson/ob_kart.geojson'
//		}),
//	style: [sobiekt_kart]
//	});
//
	//BDZ_BudowlaInzynierska
	var vbud_inz = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_BudowlaInzynierska.geojson'
			}),
	style: [sbud_inz]
	});

	//BDZ_WysokaBudowlaTechniczna
	var vwys_bud_tech = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_WysokaBudowlaTechniczna.geojson'
			}),
		style: [swys_bud_tech]
	});
//
	//plac
	var vplac = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_Plac.geojson'
			}),
		style: [splac]
	});

//
	//teren zalesiony
	var vteren_les = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_TerenLesnyZadrzewionyLubZakrzewiony.geojson'
			}),
		style: [steren_les]
	});
//

//obiekt zwiazany z komunikacja

	var vobiekt_kom = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			url: 'geojson/BDZ/BDZ_ObiektZwiazanyZKomunikacja.geojson'
			}),
		style: [srow]
	});



	//row

	var vrow = new ol.layer.Vector({
		title: 'added Layer',
		source: new ol.source.GeoJSON({
			projection : 'EPSG:3857',
			//url: 'gjson/jezdnia.geojson'
			url: 'geojson/BDZ/BDZ_Row.geojson'
			}),
		style: [srow]
	});

	//---------------------------------------script---------------------------------------
	var scaleLineControl = new ol.control.ScaleLine();

	 var map = new ol.Map({
		controls: ol.control.defaults({
			attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
			collapsible: false
			})
		}).extend([
		scaleLineControl
		]),
		target: 'map',
        layers: [
           new ol.layer.Tile({
              source: new ol.source.OSM()
			  }),


		   vjedEwid,
		   vdzEwid,
		   vkontur_klas,
		   vkontur_uz_gr,
		   vobiekt_trz_gr,
		   vbudynki,
		   vadresEGB,
		   vpunktgraniczny,
		   vobreb,
		   vprze_kanal,
		   vprze_wod,
		   vprze_tele,
		   vprze_ciel,
		   vprze_niez,
		   vprze_elekt,
		   vbudowla_podz,
		   vslup_maszt,
		   vobudowa_prze,
		   vprzew_gas,
		   vprzew_inny,
		   vurzadz_tech,
		   vpkt_ow,
		   vbud_inz,
		   vjezdnia,
		   vjaz,
		   vplac,
		   vwoda,
		   vtor,
		   vteren_les,
		   vwys_bud_tech,
		   vzb_tech,
		   vbud_ziemna,
		   vruch,
		   vkraweznik,
		   vbud_inna,
		   voozo,
		   vobiekt_prze,
		   vobiekt_kom,
		   vrow
		],
        view: new ol.View({
          center:[2396559, 6401437],
          zoom:11
		  })
      });

	  //kONTROLERY

	  map.addControl(new ol.control.FullScreen());
	  //map.addControl(new ol.control.OverviewMap());
	  //===================================================================





	 //-----------------------------------------------------------------------



	    //działki
      var visible = new ol.dom.Input(document.getElementById('visible'));
      visible.bindTo('checked',vdzEwid, 'visible');
	  //budynki
	  var visible1 = new ol.dom.Input(document.getElementById('visible1'));
      visible1.bindTo('checked',vbudynki, 'visible');
	  //obręby i kontury klasyfikacyjne
	   var visible2 = new ol.dom.Input(document.getElementById('visible2'));
      visible2.bindTo('checked',vjedEwid, 'visible');
	  //adresy i trwale zwiazne z budynkiem
	  var visible3 = new ol.dom.Input(document.getElementById('visible3'));
      visible3.bindTo('checked',vadresEGB, 'visible');
	  //punkty graniczne
	   var visible4 = new ol.dom.Input(document.getElementById('visible4'));
      visible4.bindTo('checked',vpunktgraniczny, 'visible');
	  //obreb ewidencyjny
	     var visible5 = new ol.dom.Input(document.getElementById('visible5'));
      visible5.bindTo('checked',vobreb,'visible');
	  //obreb ewidencyjny

	  //obreb ewidencyjny
	     var visible6 = new ol.dom.Input(document.getElementById('visible6'));
      visible6.bindTo('checked',vkontur_klas,'visible');
	  //obreb ewidencyjny
	     var visible7 = new ol.dom.Input(document.getElementById('visible7'));
      visible7.bindTo('checked',vkontur_uz_gr,'visible');
	  //obreb ewidencyjny
	     var visible8 = new ol.dom.Input(document.getElementById('visible8'));
      visible8.bindTo('checked',vobiekt_trz_gr,'visible');



	  //przewód kanalizacyjny
	  var visible9 = new ol.dom.Input(document.getElementById('visible9'));
      visible9.bindTo('checked',vprze_kanal, 'visible');
	  //przewod wodociagowy
	   var visible10 = new ol.dom.Input(document.getElementById('visible10'));
      visible10.bindTo('checked',vprze_wod,'visible');
	  //przewod telekomunikacyjny
	  var visible11 = new ol.dom.Input(document.getElementById('visible11'));
      visible11.bindTo('checked',vprze_tele, 'visible');
	  //przewod cieplowniczy
	   var visible12 = new ol.dom.Input(document.getElementById('visible12'));
      visible12.bindTo('checked',vprze_ciel,'visible');
	  	  //przewod niezindentyfikowany, obudowa przewodu
	   var visible15 = new ol.dom.Input(document.getElementById('visible15'));
      visible15.bindTo('checked',vprze_niez,'visible');
	    //przewod elektroenrgetyczny
	   var visible16 = new ol.dom.Input(document.getElementById('visible16'));
      visible16.bindTo('checked',vprze_elekt,'visible');
	  //budowla podziemna
	     var visible17 = new ol.dom.Input(document.getElementById('visible17'));
      visible17.bindTo('checked',vbudowla_podz,'visible');
	  //slup i maszt
	     var visible18 = new ol.dom.Input(document.getElementById('visible18'));
      visible18.bindTo('checked',vslup_maszt,'visible');
	  //punkt o określonej wysokości
	     var visible19 = new ol.dom.Input(document.getElementById('visible19'));
      visible19.bindTo('checked',vpkt_ow,'visible');

	     //obudowa przewodu
	   var visible20 = new ol.dom.Input(document.getElementById('visible20'));
      visible20.bindTo('checked',vobudowa_prze,'visible');
	  //przewód gazowy
	     var visible13 = new ol.dom.Input(document.getElementById('visible13'));
      visible13.bindTo('checked',vprzew_gas,'visible');
	  //przewód inny
	     var visible14 = new ol.dom.Input(document.getElementById('visible14'));
      visible14.bindTo('checked',vprzew_inny,'visible');
	  //urzadzenie techniczne zwiazane z siecia
	     var visible21 = new ol.dom.Input(document.getElementById('visible21'));
      visible21.bindTo('checked',vurzadz_tech,'visible');


		//================================================================================
		//jezdnia
    var visible22 = new ol.dom.Input(document.getElementById('visible22'));
    visible22.bindTo('checked',vjezdnia,'visible');
	//budowla hydrotechniczna
     var visible23 = new ol.dom.Input(document.getElementById('visible23'));
    visible23.bindTo('checked',vjaz,'visible');
   //Plac
     var visible24 = new ol.dom.Input(document.getElementById('visible24'));
    visible24.bindTo('checked',vplac,'visible');
	//woda powierzchniowa
	 var visible25 = new ol.dom.Input(document.getElementById('visible25'));
     visible25.bindTo('checked',vwoda,'visible');
	 //tory
	 var visible26 = new ol.dom.Input(document.getElementById('visible26'));
     visible26.bindTo('checked',vtor,'visible');
     //teren zalesiony i zakrzewiony
     var visible27 = new ol.dom.Input(document.getElementById('visible27'));
     visible27.bindTo('checked',vteren_les,'visible');
	   // wysoka budowla techniczna
	     var visible28 = new ol.dom.Input(document.getElementById('visible28'));
      visible28.bindTo('checked',vwys_bud_tech,'visible');
	  // budowla inzynierska
	     var visible29 = new ol.dom.Input(document.getElementById('visible29'));
      visible29.bindTo('checked',vbud_inz,'visible');
	   // zbiornik techniczny
	     var visible30 = new ol.dom.Input(document.getElementById('visible30'));
      visible30.bindTo('checked',vzb_tech,'visible');
	     // skarpa nieumocniona
	     var visible31 = new ol.dom.Input(document.getElementById('visible31'));
      visible31.bindTo('checked',vbud_ziemna,'visible');
	      // ciąg ruchu pieszego i rowerowego
	     var visible32 = new ol.dom.Input(document.getElementById('visible32'));
      visible32.bindTo('checked',vruch,'visible');
	       // kraweznik
	     var visible33 = new ol.dom.Input(document.getElementById('visible33'));
      visible33.bindTo('checked',vkraweznik,'visible');
	    // budowla inna
	     var visible34 = new ol.dom.Input(document.getElementById('visible34'));
      visible34.bindTo('checked',vbud_inna,'visible');
	      // obiekt o znaczeniu przyrodniczym
	     var visible35 = new ol.dom.Input(document.getElementById('visible35'));
      visible35.bindTo('checked',voozo,'visible');
	       // obiekt przyrodniczy
	     var visible36 = new ol.dom.Input(document.getElementById('visible36'));
      visible36.bindTo('checked',vobiekt_prze,'visible');
	    // obiekt o znaczeniu przyrodniczym
	     var visible37 = new ol.dom.Input(document.getElementById('visible37'));
      visible37.bindTo('checked',vobiekt_kom,'visible');
	       // obiekt przyrodniczy
	     var visible38 = new ol.dom.Input(document.getElementById('visible38'));
      visible38.bindTo('checked',vrow,'visible');





//	  //-------------------------------------------------------------------------


	  map.on('click', function(e) {
		var feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
		return feature;
	});
		$(info).empty();
		$(info).append('<b>ID</b> : '+feature.get('fid')+'<br/> <b>GML_ID</b> : '+feature.get('gml_id')+'<br/> <b>ID przestrzenne</b> : '+feature.get('przestrzenNazw'))
		var x = document.getElementById("container");
		var z = document.getElementById("splitterVertical");

		x.kendoSplitter({
											 orientation: "vertical",
											 panes: [
													 { collapsible: true },
													 { collapsible: true},
													 { collapsible: true, resizable: false }
											 ]
									 });

									z.kendoSplitter({
										 orientation: "horizontal",
											 panes: [
													 { collapsible: true },
													 { collapsible: false }
											 ]
									 });
});
});
