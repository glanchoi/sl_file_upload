# sl_file_upload
##간단한 ajax파일 업로드


##예제
<pre>
<code>
<button class="ajax_upload">파일 업로드</button>
$('button.ajax_upload').sl_upload(function(){
  save_url : '파일객체를 보낼 서버주소',
  after_upload : function(image){
    //파일이 처리 된 후, callback 함수 입니다.
  }
});
</code>
</pre>



