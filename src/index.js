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

let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MGZjMTNkZWEwMjhhODJkM2I4NjcxZDJlN2NhZjMyZTM0NmU3ZjkifQ.eyJpc3MiOiJodHRwczovL2Z1bGxjcmVhdGl2ZS5mdWxsYXV0aC5jb20iLCJpYXQiOjE2MjY1MTgxMzUsInByb2pfaWQiOiJzZXRtb3JlIiwidHlwZSI6InVzZXIiLCJzdWIiOiJmYjU3OTFmZi1lYzUyLTRiYjgtOWI0Ni0wNzlmZGI1ZGU2OTEiLCJleHAiOjE2MjcxMjI5MzUsImp0aSI6IjQ3MzA1MkZmOG5vVVozbzQifQ.ow7hsxoQ2N1NQQ7x-pTvfgB4G1qvtOfWUtrmbY03oErW6b-EAsLDatwvxvChTb1itnejsR24l2q-mBmQdEet37lLelv6RiJCSZqXVp52fxlxk7kStOPDt4-wkZwAb3caIDgL2-8J6zE4D-fephXu-llhtOghnWXf58oFwJlEgqup1oe7i158ZeW6J6n_05kpEQT1DNw2hwFq_CAqJw5KBvCEPxg09e_guHf80pwWwuMcvMx3eQVnSIdJ9HFr51tzImkbR9aWqtj-ao0F-dkCCLGnWzhQYvPZr1bhFClrgdp6Q5GWaxN0MlddSEf0KbH16TFqztAuz40WXa7Yn0begA";
let easyshareObject = new EasyShareBuilder("live","SEN42",accessToken)
new EasyShare(easyshareObject).init(null);


