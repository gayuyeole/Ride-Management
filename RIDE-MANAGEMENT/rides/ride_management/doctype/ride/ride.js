// Copyright (c) 2024, gayatri yeole and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride", {
 	refresh(frm) {

 	},
});
frappe.ui.form.on("Cost Breakup",{
    amount(frm,cdt,cdn){
        let total= 0;
        frm.doc.cost_breakup.forEach(function(d){
           // console.log(typeof(d.amount));
            total+=parseInt(d.amount);

        });
        frm.set_value("total",total);
    }
})