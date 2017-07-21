function signupController() {
  var vm = this;


  vm.submit = function() {
      var count = 0;
      var signupObject = {
        typeUser:vm.radioValue,
        dateOfBirth:vm.dateBirth,
        gender:vm.gender,
        address:vm.address,
        city:vm.city,
        state:vm.state,
        zipcode:vm.zipcode,
        phone:vm.phone,
        phoneType:vm.phoneType
      };//end of signupObject

      //checks if object is filled out
      count = checkObject(signupObject);

      //only runs of object is correctly filled out
      if (count === 0) {
          console.log('object is ok');
      }


  };//end of submit funciton
}


function checkObject(object) {
    var count = 0;
    for(var x in object) {
        if (object.hasOwnProperty(x)) {
            if (object[x] === undefined || object[x] === null || object[x] === " ") {
                if (x === 'phone') {
                    alert('please enter a valid phone number');
                    count++;
                    break;
                } else if (x === 'typeUser' ) {
                    alert('Please choose Mentor/Mentee');
                    count++;
                    break;
                } else if (x === 'dateOfBirth'){
                    alert('please fill enter date of birth' );
                    count++;
                    break;
                } else {
                    alert('please fill out ' +  x);
                    count++;
                    break;
                }
            }//end of if
        }//end of if hasOwnProperty
    }//emd of for loop
    return count;
}