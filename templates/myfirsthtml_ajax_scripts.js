$(document).ready(function() {
  $('#form').on('submit',function(e){
    var listresponse =
    $.ajax({
      data: jQuery.param({
        name: $('#spellname').val()
      }),
      type : 'GET',
      url : 'http://www.dnd5eapi.co/api/spells/',
      dataType : 'json'
    })

    .done(function(listData){
        // console.log('response retrieved successfully');
        // console.log(data);
        // console.log();
        if(listData.results.length > 0){
          var spell_response =
          $.ajax({
            type : 'GET',
            url : 'http://www.dnd5eapi.co' + listData.results[0].url,
            dataType : 'json'
          })
          
          .done(function(spellData){
            document.getElementById('output_name').innerHTML = spellData.name;
            var spell_desc = '';
            for(var i = 0; i < spellData.desc.length; i++){
              console.log(spellData.desc[i]);
              spell_desc += spellData.desc[i];
              spell_desc += '<br>';
            }
            document.getElementById('output_desc').innerHTML = spell_desc;
          });
        }else{
          document.getElementById('output_name').innerHTML = 'not found';
          document.getElementById('output_desc').innerHTML = '';
        }
        e.preventDefault();
    });
    e.preventDefault();
  });
});