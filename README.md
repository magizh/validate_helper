# validate_helper 
  
  validate_helper.js is a jquery plugin that helps you use validate.js to validate forms, without the need for creating the validation object. Rather you simply add few attributes to the form elements as stated below.

### Form attributes to be added 

* name,id for the form tag. 
  * ```html
           <form name="login" id= "login">
    ```
* class "validate" for the form elements you want to validate. (eg) <input type="email" class="validate">

