


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
// creating funtion and assigning argument
function combineUsers(...args) {
  
  const combinedObject = {
    users:[],
    merge_date: Date.today().toString("M/d/yyyy")
  }

  // looping through arg
  args.forEach(userArray => {

    // merging arrays
  combinedObject.users.push(...userArray)  
  }); 
// Returning the object
  return combinedObject;
}
