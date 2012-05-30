# validate_helper 
  
  validate_helper.js is a jquery plugin that helps you use [validate.js](http://rickharrison.github.com/validate.js/) to validate forms, without the need for creating the validation object. Rather you simply add few attributes to the form elements as stated below.
  visit [validatehelper.cloudfoundry.com](http://validatehelper.cloudfoundry.com/) to check out the form validation example and documentation.
  
  In addition to that validate_helper uses [bootstrap](http://twitter.github.com/bootstrap/) to display the error messages.

### Form attributes to be added 

* Add name,id for the form tag. 
* Add class "validate" for the form elements you want to validate. 
* Add "data-rules" attribute to specify the rules in validate.js 
* Add "data-display" attribute to specify the display attribute in validate.js (optional) 

```html
 <form name="loginForm" id= "loginForm">
   <input type="email" <input type="email" name="email" id="email" class="validate"  data-rules="required|valid_email">data-display="Email address">
 </form> 
```
* Add the function call as shown below 

```html
<script>
var $my_form =  $("#loginForm")
$my_form.validate( self, self.onloginFormSubmit )
</script>
```

* Visit [validatehelper.cloudfoundry.com](http://validatehelper.cloudfoundry.com/) to check out the form validation example.

Contact Email: mahilis@live.com