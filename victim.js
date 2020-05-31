class Victim{
constructor(){
//this.name=name;
//this.contact=contact;
this.highwayno=null;
//this.state=state;
//this.severity=severity
}
getHospitalInfo(){
   /* var hospitalref= database.ref('Highways')
    //console.log(hospitalref)
    
    hospitalref.orderByKey().equalTo("highway1").on("value",(data) =>{
        if(allHospitals!==undefined)
        {
        allHospitals=data.val();
        console.log(allHospitals)
        }
    })*/





    console.log("Getting info" + this.highwayno);
    isAccident=false;
var ref=database.ref('Highways')
ref.orderByKey().equalTo(this.highwayno).on("value",(data)=>{
    //if(allHospitals!==undefined){
         allHospitals=data.val();
         console.log(allHospitals)
    //}


})

}
}
