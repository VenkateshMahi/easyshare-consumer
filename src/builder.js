 class EasyShare{
    constructor(builder){
        this.envirment = builder.envirment;
        this.merchatId = builder.key;
        this.token = builder.token;
        this.isDeleted = builder.isDeleted || false;
        this.myBooking = builder.myBooking || true;
        this.limit = builder.limit || 50;
        this.cursor = builder.cursor || null;
        this.class= builder.class || true;
        this.isExpendable = builder.isExpendable || false;
    }
    
 }
 
 class  EasyShareBuilder{



    constructor(envirment,key,token ){
        this.envirment = envirment;
        this.key = key;
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
    addClass(classpros){
        this.class = classpros;
        return this;
    }

    addIsExpendable(isExpendable){
        this.isExpendable = isExpendable;
        return this;
    }
    validate(props){
        if(this.hasOwnProperty(props) && this[props] == undefined){
            return true;
        }
    }
    build(){
            
        if(this.validate("isDeleted")){
            throw new Error("isDeleted parameter missing")
        }
        if(this.validate('myBooking')){
            throw new Error("myBooking parameter is missing")
        }
        if(this.validate("limit")){
            throw new Error ("limit parameter is missing")

        }
  
        if(this.validate("cursor")){
            throw new Error("cursor parameter is missing")
       }
        if(this.validate("class")){
            throw new Error("class parameter is missing")

        }
        if(this.validate("isExpendable")){
            throw new Error("isExpendable parameter is missing")

        }
        return new EasyShare(this);
    }

 }

global.EasyShareBuilder = EasyShareBuiler;
export {
    EasyShareBuilder
}