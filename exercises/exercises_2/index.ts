export function updateData(currentObject, newDataObject) {
    let newObject = {};
  
    Object.keys(currentObject).forEach((key) => {
        newObject[key] = newDataObject[key] ? newDataObject[key] : currentObject[key];
    })
  
      return newObject;
  }
  
  module.exports = updateData;