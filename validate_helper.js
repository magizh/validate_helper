; !function( $ ){
$.fn.extend({
validate: function( that, callback ) {

        // Checks if instance is already created 
        if ( this.data("instance") ) {
          return;
        }

        var $this = this
        var temp=[]

        $this.find(".validate").each(function (i, el) {
          var $el = $(el)
          temp.push({name: $el.attr("name"), 
                     rules: $el.attr("data-rules"),
                     display: $el.attr("data-display")
                   })
        })
        console.log(temp)
        // Create FormValidator object
        var validator = new FormValidator($this.attr('name'), temp, function(errors, event) {
          // Clear all error fields
          $this.find(".error").removeClass("error")
          $this.find(".help-block").html("")
          // Check for errors 
          if(errors.length > 0) {
              $.each(errors, function (index, err) {
                // Displays the erros message in the help-block
                var $target = $this
                    .find("*[name='" + err.id + "']")
                    .next(".help-block")
                    .html("<i class='icon-remove-sign icon-space-r'></i>"+err.message)
                // Adds error class to the controlgroup (bootstrap)
                $target.closest(".control-group").removeClass("error").addClass("error")
              })
             return false 
          } else {
            if (typeof callback === "function") {
              callback ( that, $this, event ) //execute callback on form success
            }
          }
        });
        this.data("instance", validator)
      }

      })

} ( window.jQuery )
