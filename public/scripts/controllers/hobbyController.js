function hobbyController(UserInfoService) {
  var vm = this;
  var count = 0;
  vm.hobbiesArr = [];


  vm.submitHobby = function(index) {
    console.log(vm.hobbyArr[index].name);
    vm.hobbiesArr.push(vm.hobbyArr[index].name);
  };



  vm.submit = function() {
    console.log('clicked ');
    var hobbies = document.getElementsByName('hobby');
    vm.hobbiesArr.push(vm.otherHobby);


    //creates a date stamp
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var day = new Date().getDate();
    var dateUserCreated = month + "/" + day + "/" + year;


    //adds hobbies to vm.hobbiesArr
    for (var i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) {
        vm.hobbiesArr.push(hobbies[i].defaultValue);
      }
    } //end of for loop

    var hobbiesObject = {
      id: 'hobbies',
      hobbies: vm.hobbiesArr,

      dateStamp: dateUserCreated
    }; //end of hobbiesArr
    console.log(hobbiesObject);
    count = checkObjectArr(hobbiesObject);

    //only runs if array has 3 or more items
    if (count === 0) {
      UserInfoService.getUserInfo(hobbiesObject);
      UserInfoService.sendRegistration();
    } //end of conditional statement
  }; //end of submit


  vm.hobbyArr = [{
      name: 'Baking',
      url: 'images/gusustock/baking.jpg',
    },
    {
      name: 'Billards',
      url: 'images/gusustock/billiards2.jpg'
    },
    {
      name: 'Fishing',
      url: 'images/gusustock/fishing.jpg'
    },
    {
      name: 'Cooking',
      url: 'images/gusustock/cooking.jpg'
    },
    {
      name: 'Reading',
      url: 'images/gusustock/reading.jpg'
    },
    {
      name: 'Writing',
      url: 'images/gusustock/writing.jpg'
    },
    {
      name: 'Crafts',
      url: 'images/gusustock/crafts.jpg'
    },
    {
      name: 'Wilderness/Hiking',
      url: 'images/gusustock/hiking.jpg'
    },
    {
      name: 'Photography',
      url: 'images/gusustock/photo.jpg'
    },
    {
      name: 'Board/Video Games',
      url: 'images/gusustock/gaming.jpg'
    },
    {
      name: 'Drawing',
      url: 'images/gusustock/drawing.jpg'
    },
    {
      name: 'Beer/Wine',
      url: 'images/gusustock/beerandwine.jpg'
    },
    {
      name: 'Painting',
      url: 'images/gusustock/painting.jpg'
    },
    {
      name: 'Sports/Recreation',
      url: 'images/gusustock/sports.jpg'
    },
    {
      name: 'Gardening',
      url: 'images/gusustock/gardening.jpg'
    },
    {
      name: 'Swimming',
      url: 'images/gusustock/swimming.jpg'
    },
    {
      name: 'Traveling',
      url: 'images/gusustock/traveling.jpg'
    },
    {
      name: 'Movies/Television',
      url: 'images/gusustock/movies.jpg'
    },
    {
      name: 'Music',
      url: 'images/gusustock/music.jpg'
    }

  ]; //end hoobyArr

} //end of controller

//checks if array is valid
function checkObjectArr(object) {
  var count = 0;
  for (var x in object) {
    if (object.hasOwnProperty(x)) {
      if (object[x].length < 3) {
        sweetAlert({
          title: "Hobbies",
          text: "Please choose atleast three hobbies",
          type: "warning"
        }); //end of sweetAlert
        count++;
        break;
      }
    }
  }
  return count;
}
