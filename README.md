# validate_helper

  validate_helper.js is a jquery plugin that helps you use [validate.js](http://rickharrison.github.com/validate.js/) to validate forms, without the need for creating the validation object. Rather you simply add few attributes to the form elements as stated below.
  visit [validatehelper.herokuapp.com](http://validatehelper.herokuapp.com/) to check out the form validation example and documentation.

In addition to that validate_helper uses [bootstrap](http://twitter.github.com/bootstrap/) to display the error messages.

### Special thanks to [Rick Harrison](https://github.com/rickharrison/) for [Validate.js](http://rickharrison.github.com/validate.js/). Its awesome!

### Libraries required
* jquery-1.7.1.min.js
* bootstrap.min.css
* validate.js
* validate_helper.js

### Form attributes to be added

* Add name,id for the form tag.
* Add class "validate" for the form elements you want to validate.
* Add "data-rules" attribute to specify the rules in validate.js
* Add "data-display" attribute to specify the display attribute in validate.js (optional)
* Add control-group, help-block to display the errors

```html
<form name="loginForm" id= "loginForm" action="#" method="POST">
  <div class="control-group">
    <input type="text" name="email" id="email" data-rules="required|valid_email" data-rules="Email" class="validate">
    <p class="help-block"></p>
  </div>
  <div class="control-group">
    <input type="password" name="password" id="password" data-rules="required" class="validate">
    <p class="help-block"></p>
  </div>
  <button type="submit" class="btn">Sign in</button>
</form>
```
* Add the function call as shown below

```html
<script>
var $my_form =  $("#loginForm")
$my_form.validate()
</script>
```

* Having an optional callback after validation


```html
<script>
var $my_form =  $("#loginForm")
$my_form.validate(function($form, e){ alert("submitted") })
</script>
```

* Visit [validatehelper.herokuapp.com](http://validatehelper.herokuapp.com/) to check out the form validation example.

Contact Email: mahilis@live.com
