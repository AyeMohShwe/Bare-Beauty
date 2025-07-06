// Vue Contact Us form 
var contactform = new Vue({
    el: '#contactform',
    data: {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      selected: 'selected',
      feedback: '',
      rating: '',
      errors: [],
    },
    methods: {
      processForm: function(e) {
          if (this.fname && this.lname && this.phone && this.email && this.feedback) {
              return true;
          }
        
         this.errors = [];

         if (!this.fname) {
             this.errors.push('First Name required');
         }

         if (!this.lname) {
          this.errors.push('Last Name required');
        }
        if (!this.email) {
            this.errors.push('Email required');
        }

         if (this.phone < 12) {
            this.errors.push('Please Enter a Valid Phone Number');
         }

         if (!this.feedback) {
          this.errors.push('Write Your Feedback');
         }
       
          if (!this.errors.length) {
            return true;
        }

         e.preventDefault();
      },
    
      value: ({
        data: {
          rating: 5
        }
      })
    }
 });
