export class EasyShareBuilder{
    constructor(envirment,key, token){
        this.envirment = envirment;
        this.merchatId = key;
        this.token = token;
    }
    addIsDeleted(isDeleted){
        this.isDeleted = isDeleted;
        return this;
    }
    
    addMybooking(myBooking){
        this.myBooking = myBooking;
        return this;
    }
    addLimit(limit){
        this.limit = limit;
        return this;
    }
    addCursor(cursor){
        this.cursor = cursor;
        return this;
    }
    addClass(classtype){
        this.class = classtype;
        return this;
    }

   build(){
       if(this.hasOwnProperty("isDeleted") && !this.isDeleted){
            throw new Error("isDeleted parameter missing")

        }
    
        if(this.hasOwnProperty('myBooking') && !this.myBooking){
            throw new Error("myBooking parameter is missing")
        }
        if(this.hasOwnProperty("limit")&& !this.limit){
            throw new Error ("limit parameter is missing")

        }
  
        if(this.hasOwnProperty("cursor") && !this.cursor){
            throw new Error("cursor parameter is missing")
       }
        if(this.hasOwnProperty("class") && !this.class)
    
       return new EasyShareBuilder(this.envirment, this.key, this.token);
   }
  
}

