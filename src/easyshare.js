const stagingUrl = "https://easyshare-dot-services-dot-staging-schedulingengine.el.r.appspot.com";
const liveUrl = "https://hook-dot-services-dot-schedulingengine.uc.r.appspot.com";



 class EasyShare {
    constructor(options){
        this.easyshareObject = options;
    }
    
  async init (element){
      let url = this.easyshareObject.envirment=== "live"?liveUrl:stagingUrl;
      
        try{   
             const easyshare = await import("easyshare/App");
             await window.__config({
                headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${this.easyshareObject.token}`
                },
                isDev: false,
                // Latest Endpoint
                
                baseUrl: url
             }, (ack) => {
                console.log(ack);
                this.createEasyshare(element)
             });
        }
        catch(err){
            console.log(err);
         }
    }
    createEasyshare(element){
        const service_wrapper = document.createElement("service-wrapper");
        service_wrapper.setAttribute("isDeleted",this.easyshareObject.isDeleted);
        service_wrapper.setAttribute("cursor",this.easyshareObject.cursor);
        service_wrapper.setAttribute("limit",this.easyshareObject.limit);
        service_wrapper.setAttribute("class",this.easyshareObject.class);
        
        service_wrapper.setAttribute("merchandId",this.easyshareObject.merchatId);
        service_wrapper.setAttribute("myBooking",this.easyshareObject.myBooking);
        service_wrapper.setAttribute("brandId",this.easyshareObject.brandId);

        service_wrapper.setAttribute("isExpendable",this.easyshareObject.isExpendable);

        if(element){
            element.appendChild(service_wrapper);
        }
        else{
            document.querySelector("body").appendChild(service_wrapper)
        }

    }
}

global.EasyShare = EasyShare;
export {
    EasyShare
}