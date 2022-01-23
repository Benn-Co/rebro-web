let lo = '';
let la = '';
function get_country_codes(lo,la) {
  $.ajax({
    type: "POST", // Type of request to be send, called as 
    dataType: 'json',
    data: { lo: lo, la: la},
    processData: true,
    url: api_server_url + '/cordova/get_country_codes.php',
    success: function searchSuccess(response) {
      try {
         let countries =response.countries;         
         let fLen = countries.length;
         
         for (let i = 0; i < fLen; i++) {
           if (i < 1) {
             $(".select_currency").html(countries[i].ccode);
             $(".mcode").html(countries[i].mcode);
             localStorage.setItem("mcode", countries[i].mcode);
             localStorage.setItem("ccode", countries[i].ccode);
             localStorage.setItem("exrate", countries[i].exrate);
      
             var curre = '<li><a class="dropdown-item active currency_option" mcode="' + countries[i].mcode + '" exchange_rate="' + countries[i].exrate + '" ccode="' + countries[i].ccode + '" currency_name="' + countries[i].ccode + '" country_name="' + countries[i].name + '" href="#">' + countries[i].ccode + '</a></li>' +
                         '<li><hr class="dropdown-divider"></li>';
                         $(".currency_list").append(curre);
                         
             var mcode_list = '<li><a class="dropdown-item currency_option" mcode="' + countries[i].mcode + '" exchange_rate="' + countries[i].exrate + '" ccode="' + countries[i].ccode + '" currency_name="' + countries[i].ccode + '" country_name="' + countries[i].name + '" href="#">' + countries[i].mcode + '</a></li>';
                         $(".mcode_list").append(mcode_list);
      
             $(".select_country").html(countries[i].name);
             var country = '<li><a class="dropdown-item active country_option" mcode="' + countries[i].mcode + '" exchange_rate="' + countries[i].exrate + '" ccode="' + countries[i].ccode + '" currency_name="' + countries[i].ccode + '" country_name="' + countries[i].name + '" href="#">' + countries[i].name + '</a></li>' +
                           '<li><hr class="dropdown-divider"></li>';
                           $(".country_list").append(country);            
           }else{
             var curre = '<li><a class="dropdown-item currency_option" mcode="' + countries[i].mcode + '" exchange_rate="' + countries[i].exrate + '" ccode="' + countries[i].ccode + '" currency_name="' + countries[i].ccode + '" country_name="' + countries[i].name + '" href="#">' + countries[i].ccode + '</a></li>' +
                         '<li><hr class="dropdown-divider"></li>';
                         $(".currency_list").append(curre);
             var mcode_list = '<li><a class="dropdown-item currency_option" mcode="' + countries[i].mcode + '" exchange_rate="' + countries[i].exrate + '" ccode="' + countries[i].ccode + '" currency_name="' + countries[i].ccode + '" country_name="' + countries[i].name + '" href="#">' + countries[i].mcode + '</a></li>';
                         $(".mcode_list").append(mcode_list);
      
             var country = '<li><a class="dropdown-item active country_option" mcode="' + countries[i].mcode + '" exchange_rate="' + countries[i].exrate + '" ccode="' + countries[i].ccode + '" currency_name="' + countries[i].ccode + '" country_name="' + countries[i].name + '" href="#">' + countries[i].name + '</a></li>' +
                           '<li><hr class="dropdown-divider"></li>';
                           $(".country_list").append(country);
           }
                            
         }
      } catch (error) {
        alert(error);
      }

    },
    error: function searchError(xhr, err) {
      alert(err);
      //mysnackbar("Error on ajax call: " + err  + " " + JSON.stringify(xhr));
    }
});
}
   
   