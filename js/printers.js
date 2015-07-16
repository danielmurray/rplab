/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {

    var Printers = function() {
	    this.printers = {
	    	"sls":{
	    		id: "sls",
	    		type: "Selective Laser Sintering",
	    		name: "Formiga P100",
	    		oem: "EOS",
	    		link: "http://www.eos.info/systems_solutions/plastic/systems_equipment/formiga_p_110",
	    		dmm: "200mm x 250mm x 330mm",
	    		din: "7.9in x 9.8in x 13in",
	    		cost: 0.15,
	    		materials:[
	    			"pa"
	    		]
	    	},
	    	"pj":{
	    		id: "pj",
	    		type: "PolyJet",
	    		name: "Eden 350",
	    		oem: "Objet Geometries",
	    		link: "http://www.objet.com/Misc/Pages/ProductsEdenFamily/Eden350350V/tabid/73/Default.aspx",
	    		dmm: "350mm x 350mm x 200mm",
	    		din: "13.8in x 13.8in x 7.9in",
	    		cost: 0.25,
	    		materials:[
	    			"tm",
	    			"vm",
	    			"fc"
	    		]
	    	},
	    	"sla":{
	    		id: "sla",
	    		type: "Stereo Lithography Apparatus",
	    		name: "Viper SI",
	    		oem: "3D Systems",
	    		link: "http://www.3dsystems.com/3d-printers/production/overview",
	    		dmm: "250mm x 250mm x 250mm",
	    		din: "9.8in x 9.8in x 9.8in",
	    		cost: 0.35,
	    		materials:[
	    			"pg",
	    			"wc"
	    		]
	    	},
	    	"fdm":{
				id: "fdm",
				type: "Fused Deposition Modeling",
				name: "Fortus 360 MC",
				oem: "Stratasys",
				link: "http://www.stratasys.com/3d-printers/production-series/fortus-360-400mc",
				dmm: "406mm x 355mm x 406mm",
				din: "16in x 14in x 16in",
				cost: 0.45,
				materials:[
					"abs",
					"pc"
				]
	    	},
	    };

	    this.materials = {
	    	"abs":{
	    		id: "abs",
	    		name: "ABS-M30",
	    		link: "http://www.stratasys.com/materials/fdm/abs-m30/",
	    		desc: "ABS-M30 has strong mechanical properties that make it ideal for concept models and moderate-requirement parts including functional prototypes, jigs, fixtures, manufacturing tooling and end-use parts. It works with soluble support material for hands-free support removal to make your product-development process more efficient."
	    	},
	    	"pc":{
	    		id: "pc",
	    		name: "Polycarbonate",
	    		link: "http://www.stratasys.com/materials/fdm/pc/",
	    		desc: "PC and FDM Technology produce functional prototypes, tooling and end-use parts in a familiar, durable engineering material. PC’s high tensile and flexural strength make it ideal for demanding prototyping needs, tooling and fixtures, and patterns for metal bending and composite work. Low-volume manufacturing and customization become feasible, and testing provides more confidence."
	    	},
	    	"pg":{
	    		id: "pg",
	    		name: "ProtoGen O-XT 18420",
	    		link: "img/printers/pg.pdf",
	    		desc: "A white material that mimics engineering plastics. This high-temperature, ABS-like photopolymer is ideal for the medical, electronic, aerospace, and automotive markets. Example applications: Accurate RTV patterns, durable concept models, highly accurate parts, humidity and temperature tolerant parts."
	    	},
	    	"wc":{
	    		id: "wc",
	    		name: "WaterClear Ultra 10122",
	    		link: "img/printers/wc.pdf",
	    		desc: "An optically clear resin with ABS-like properties and good temperature resistance. It produces colorless, functional, accurate parts that simulate acrylic in appearance. Example applications: Automotive lenses, bottles, fluid flow analysis, packaging prototypes, light pipes."
	    	},
	    	"fc":{
	    		id: "fc",
	    		name: "FullCure 720 Transparent",
	    		link: "http://www.stratasys.com/materials/polyjet/transparent/",
	    		desc: "A translucent acrylic-based photopolymer material, FullCure Transparent is suitable for a wide range of rigid models, particularly where visibility of liquid flow or internal details is needed."
	    	},
	    	"vm":{
	    		id: "vm",
	    		name: "Vero Materials",
	    		link: "http://www.stratasys.com/materials/polyjet/rigid-opaque/",
	    		desc: "The Vero family provides users of Eden systems with the ability to produce opaque models that closely resemble the \"look\" of the target products. Currently available as VeroBlue and VeroWhite, VeroBlack, Vero materials also offer enhanced mechanical properties and the enhanced ability to withstand bending."
	    	},
	    	"tm":{
	    		id: "tm",
	    		name: "Tango Materials",
	    		link: "http://www.stratasys.com/materials/polyjet/rubber-like/",
	    		desc: "The Tango family of rubber-like materials, offers exceptional elongation at break, excellent toughness and durability and high resistance to tearing. It addresses a broad range of applications requiring rubber-like flexibility and durability, such as gaskets and seals, hoses, athletic footwear, toys and more."
	    	},
	    	"pa":{
	    		id: "pa",
	    		name: "PA 2200",
	    		link: "http://www.eos.info/material-p",
	    		desc: "Polyamide white - This whitish fine powder PA 2200 on the basis of polyamide 12 serves with its very well-balanced property profile a wide variety of applications."
	    	},
	    };

	    this.template =  _.template(
	        $( "#printers-template" ).html()
	    );

	    this.render = function() {
		    $( "#sections" ).html(
		        this.template({
		        	printers: this.printers,
		        	materials: this.materials,
		        })
		    );
	    };
	}

	var printers = new Printers();
	printers.render();

})(jQuery); // End of use strict
