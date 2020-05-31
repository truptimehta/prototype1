class Victim{
constructor(name,contact,highwayno,state,severity){
this.name=name;
this.contact=contact;
this.highwayno=highwayno;
this.state=state;
this.severity=severity
}
getHospitalInfo(){
    console.log("Getting info" + this.highwayno);
var ref=database.ref('highways')
ref.orderByKey().equalTo(this.highwayno).on("value",(data)=>{
    if(allHospitals!==undefined){
         allHospitals=data.val();
         console.log(allHospitals)
    }


})

}
}
