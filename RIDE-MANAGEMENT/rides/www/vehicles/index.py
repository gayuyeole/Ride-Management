import frappe

def get_context(context):
    
    context.no_cach=1
    context.vehicles = frappe.get_all("Vehicle",fields=["name","make","model","year"])
    return context
  #  context.title="Vehicles"
   # context.parents=[{"name":"home","route":"/"},{"name":"vehicles"}]
    #context.update({"title":"Vehicles","vehicles":frappe.get_all("Vehicle",fields=["name","vehicle_type","status"])})