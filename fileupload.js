var _sl_upload = function(option)
{
    this.options = {
        //버튼 자신
        me : {},
        // 이미지를 보낼 서버 URL을 입력합니다.
        save_url : '',

        key_name : 'useFile',
        //업로드가 완료된 후에 실행되는 함수 입니다
        after_upload : function(image){}
    }
    this.options.file_input_tag = $('<input type="file" style="display:none;" class="__file_input"/>');
    $.extend(this.options,option);
    this._init();
}

_sl_upload.prototype =
    {
        _init : function () {
            var that = this;
            $(this.options.me).after(this.options.file_input_tag);

            $(this.options.me).on('click',function(e){
                $(this).next().trigger('click');
                e.preventDefault();
            })
            this.options.file_input_tag.on('change',function(e){
                var _file = e.target.files[0];
                var formData = new FormData();
                formData.append(that.options.key_name,_file);
                formData.append('file_key',that.options.key_name);
                if( that.options.save_url !== '' ) {
                    $.ajax({ url: that.options.save_url , data: formData, processData: false, contentType: false, type: 'POST', dataType : 'json', success: function(data){
                        that.options.after_upload(data);
                    } });
                }
            })
        }
    }


jQuery.fn.sl_upload = function(option)
{
    option.me = this;
    new _sl_upload(option);
};
