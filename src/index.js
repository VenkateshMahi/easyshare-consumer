import { EasyShareBuilder } from "./builder";
const stagingUrl = "https://staging-dot-services-dot-schedulingengine.appspot.com";
const liveUrl = "https://hook-dot-services-dot-schedulingengine.uc.r.appspot.com";



class EasyShare {
    constructor(options){
        this.easyshareObject = options;
    }
    
  async init (element){
      
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
                
                baseUrl: liveUrl
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
        service_wrapper.setAttribute("isDeleted",false);
        service_wrapper.setAttribute("cursor","");
        service_wrapper.setAttribute("limit","50")
        service_wrapper.setAttribute("class","true")
        
        service_wrapper.setAttribute("merchandId",this.easyshareObject.merchatId)
        service_wrapper.setAttribute("myBooking","true")
        if(element){
            element.appendChild(service_wrapper);
        }
        else{
            document.querySelector("body").appendChild(service_wrapper)
        }

    }
}

let accessToken = "Your token "
let merchantId = "Your merchant id"
let envirment = "The envirment"

let easyshareObject = new EasyShareBuilder("live",merchantId,accessToken)
new EasyShare(easyshareObject).init(null);


