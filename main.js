const carObject={
    brand: "hyundai",
    model: "Tucson", 
    year: 2013 
};
console.log(carObject);
function addNewProperty(property,value,objectName){
    objectName.property=value;
    return objectName;
}
console.log(addNewProperty("color", "gray", carObject))