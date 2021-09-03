# easyshare-consumer

# Why  we need this repo 
  This repo has preconfigured webpack 5 with module federation.
  more on this can be found here. https://pravanjanpalai.medium.com/micro-frontends-create-and-share-using-webpack-module-federation-9d194840546a
 
 This configration help easyshare changes to directly refresh in consume side. 
 Example - Every time there is new change or bug fixes in easyshare the consumer has to deploy the same to 
 in their application to have those changes available. 
 
 By using this build files the consume does not have to deploy for new change.  Every new changes available in 
 easyshare  server  would automatically reflect on consumer side. 
 
     
}

Why we created this - As we found most team do not use the latest version of webpack(greater than 5). This pacakge would help build a bundle file which internally 
pull the change from easyshare. 

Steps to create bundle -- 

         cd easyshare-consumer // change directory to the project dir
         npm i // install dependeciens 
         npm run build // This would create the bundle file 
 
Copy the bundle file from dist folder and then  all we have to do is place the token and merchatId which supposed to received from run time
      
      let accessToken = "Your token "
      let merchantId = "Your merchant id"
      let envirment = "live/staging". // whether we are deploying the build on staging or live.

       let easyshareObject =  new EasyShareBuiler("stage",merchantId,accessToken).addIsDeleted(false).addIsExpendable(true).build();
       new EasyShare(easyshareObject).init(null);
