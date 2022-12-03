export function updateData(currentObject, newDataObject) {
    return Object.keys(newDataObject).forEach((key) => {
      if (currentObject.hasOwnProperty(key)) {
        currentObject[`${key}`] = newDataObject[`${key}`];
      }
    });
  }
  module.exports = updateData;