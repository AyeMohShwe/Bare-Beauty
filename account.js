var app = new Vue({
  el:'#app',
  data: {
      fname:'',
      lname:'',
      email:'',
      selected:'',
      options:[
        { text: 'USA', value: 'USA' },
        { text: 'UK', value: 'UK' },
        { text: 'Australia', value: 'Australia' },
        { text: 'Canada', value: 'Canada'},
        { text: 'Germany', value:'Germany'},
        { text: 'Italy', value:'Italy'},
        { text: 'Myanmar', value:'Myanmar'},
        { text: 'Singapore', value: 'Singapore' },
        { text: 'South Korea', value: 'South Korea' }
      ]
      
  }
})
//Password Validation
var myInput = document.getElementById("psw");
      var letter = document.getElementById("letter");
      var capital = document.getElementById("capital");
      var number = document.getElementById("number");
      var length = document.getElementById("length");
      
      myInput.onfocus = function() {
        document.getElementById("message").style.display = "block";
      }
      
      myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
      }
      
      myInput.onkeyup = function() {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if(myInput.value.match(lowerCaseLetters)) {  
          letter.classList.remove("invalid");
          letter.classList.add("valid");
        } else {
          letter.classList.remove("valid");
          letter.classList.add("invalid");
        }
        
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) {  
          capital.classList.remove("invalid");
          capital.classList.add("valid");
        } else {
          capital.classList.remove("valid");
          capital.classList.add("invalid");
        }
      
        // Validate numbers
        var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) {  
          number.classList.remove("invalid");
          number.classList.add("valid");
        } else {
          number.classList.remove("valid");
          number.classList.add("invalid");
        }
        
        // Validate length
        if(myInput.value.length >= 8) {
          length.classList.remove("invalid");
          length.classList.add("valid");
        } else {
          length.classList.remove("valid");
          length.classList.add("invalid");
        }
    }

  
