/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    var Receipt = function() {
    	this.startUpCost = 5;
    	this._partCount = 0
    	this.parts = []

	    this.printers = {
	    	"sls":{
	    		id: "sls",
	    		name: "Selective Laser Sintering",
	    		cost: 0.37
	    	},
	    	"pj":{
	    		id: "pj",
	    		name: "PolyJet",
	    		cost: 0.34
	    	},
	    	"sla":{
	    		id: "sla",
	    		name: "Stereo Lithography Apparatus",
	    		cost: 0.38
	    	},
	    	"fdm":{
	    		id: "fdm",
	    		name: "Fused Deposition Modeling",
	    		cost: 0.33
	    	},
	    };

	    this.template =  _.template(
	        $( "#receipt-template" ).html()
	    );

	    this.addPart = function() {
	    	this.parts.push({
	    		id: "part-"+this._partCount,
		    	vol: 0,
		    	printer: "sls"    	
		    });

    		this._partCount++; 
	    };

	    this.removePart = function(partID) {			
			for (var i = 0; i < this.parts.length; i++){
				if (this.parts[i].id == partID) { 
			        this.parts.splice(i, 1);
			        break;
			    }
			} 
	    };

	     this.updatePart = function(update) {
			var result = $.grep(this.parts, function(e){ return e.id == update.id; })[0];
			$.extend(result, result, update)
			console.log(result)
	    };

	    this.render = function() {
		    $( "#quoteReceipt" ).html(
		        this.template({
		        	parts: this.parts,
		        	printers: this.printers,
		        	startup: this.startUpCost
		        })
		    );

		    $(".add-part").click(function(){
				receipt.addPart()
				receipt.render();
			})

		    $(".remove-part").click(function(e){
				var partID = $(event.currentTarget).closest(".receipt-item")[0].id;
				receipt.removePart(partID)
				receipt.render()
			})

			$(".form-control.printer").change(function(event){
				var part = $(event.currentTarget).closest(".receipt-item")[0];
				var optionSelected = $("option:selected", this)[0];
				receipt.updatePart({
					id: part.id,
					printer: optionSelected.value
				})
				receipt.render()
			})

			$(".form-control.volume").change(function(event){
				var part = $(event.currentTarget).closest(".receipt-item")[0];
				var volume = $(event.currentTarget)[0];
				receipt.updatePart({
					id: part.id,
					vol: volume.value
				})
				receipt.render()
			})
	    };

	    this.addPart()
	}

	var receipt = new Receipt();
	receipt.render();

})(jQuery); // End of use strict
