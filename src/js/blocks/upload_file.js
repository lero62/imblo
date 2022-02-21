

var maxFileSize = 5 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
var queue = {};
var imagesList = $('.uploadImagesList');
var form = $('form#uploadImages');


$('.addImages').on('change', function (event) {
   var files = event.target.files;
   var filesMax = $(this).data('max');
   
   if (files.length <= filesMax && $(this).closest('.upload').find('.upload-images__item').length < filesMax) {
      for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var output = $(this).closest('.upload').find('.upload-images');
			

         if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
				
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Фотография должна быть в формате jpg, png или gif</div>	')
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}

			if ( file.size > maxFileSize ) {
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Вы загрузили слишком большое фото. Рекомендуемый размер фото не более 5 МБ</div>	')
	
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}

         var picReader = new FileReader();
         picReader.addEventListener("load", function (event) {
             var picFile = event.target;

             var div = document.createElement("div");
            $(div).addClass('upload-images__item').html("<div class='upload-images__preview'><img src='" + picFile.result + "' alt='" + picFile.name + "'></div>"+
										"<div class='upload-images__remove'>удалить</div>")
             output.append(div, null);
             $(div).data('id', file.name);
            
             queue[file.name] = file;

         });
         picReader.readAsDataURL(file);
			 

      }

       imagesList.on('click', '.upload-images__remove', function () {
         var item = $(this).closest('.upload-images__item'),
         	 id = item.data('id');

         delete queue[id];
             
         item.remove();
         
     });

   	this.value = '';
   } else {
   	$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Максимальное количество загруженых файлов не должно привышать ' + filesMax+'</div>	')
   
   	this.value = '';
   }
});


$('.addImage').on('change', function (event) {
   var files = this.files;
	
	   for (var i = 0; i < files.length; i++) {
	       var file = files[i];
	       var output = $(this).closest('.upload').find('.upload-images');
	       
			if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
				
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Фотография должна быть в формате jpg, png или gif</div>	')
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}

			if ( file.size > maxFileSize ) {
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Вы загрузили слишком большое фото. Рекомендуемый размер фото не более 5 МБ</div>	')
	
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}
			if(!file.size > maxFileSize || file.type.match(/image\/(jpeg|jpg|png|gif)/)){
				output.addClass('_change')
			} else {
				output.removeClass('_change')
			}

			var picReader = new FileReader();
			picReader.addEventListener("load", function (event) {
				 var picFile = event.target;

				 var div = output.find('.upload-images__item');
				
				 output.find('img').attr('src', picFile.result)
				$(div).data('id', file.name);

				queue[file.name] = file;

			});
			picReader.readAsDataURL(file);



			imagesList.on('click', '.upload-images__remove', function () {
				var item = $(this).closest('.upload-images__item'),
				 id = item.data('id');

				delete queue[id];
				 
				item.closest('.upload-images').removeClass('_change').find('img').attr('src', ' ');

			});

			this.value = '';
	}

});

// Отправка формы
// form.on('submit', function(event) {

//    var formData = new FormData(this);

//    for (var id in queue) {
//        formData.append('images[]', queue[id]);
//    }

//    $.ajax({
//        url: $(this).attr('action'),
//        type: 'POST',
//        data: formData,
//        async: true,
//        success: function (res) {
//            alert(res)
//        },
//        cache: false,
//        contentType: false,
//        processData: false
//    });

//    return false;
// });

     // Удаление фотографий

