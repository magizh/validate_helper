# validate_helper 
  
  validate_helper.js is a jquery plugin that helps you use [validate.js]http://rickharrison.github.com/validate.js/ to validate forms, without the need for creating the validation object. Rather you simply add few attributes to the form elements as stated below.

### Form attributes to be added 

* Add name,id for the form tag. 
```html
 <form name="login" id= "login">
```
* Add class "validate" for the form elements you want to validate. 
```html
 <input type="email" name="email" id="email" **class="validate"**>
```
* Add data-rules to specify the rules in validate.js 
```html
 <input type="email" name="email" id="email" class="validate" data-rules="required|valid_email">
```
* Add data-display to specify the display attribute in validate.js (optional)
```html
 <input type="email" name="email" id="email" class="validate" data-rules="required|valid_email" data-display="Email address">
```
*Call the validate_helper function by including the following lines before 
```html
 </body>
```tag 
 *```html 
    <script>
    </script>
  ```

Contact Email: mahilis@live.com