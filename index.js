function findDay(){
      let dayElement = document.getElementById('day').value;
      let sonuc;
      let showDay = document.getElementById('gun');
      
      if(dayElement == 1){
          sonuc = "Pazartesi";
      }else if(dayElement == 2){
          sonuc = "Salı";
      }else if(dayElement == 3){
          sonuc = "Çarşamba";
      }else if(dayElement == 4){
          sonuc = "Perşembe";
      }else if(dayElement == 5){
          sonuc = "Cuma";
      }else if(dayElement == 6){
          sonuc = "Cumartesi";
      }else if(dayElement == 7){
          sonuc = "Pazar";
      }else{
        
          
        showDay.innerHTML = "<span style='color:red;'> Geçersiz Değer Girdiniz! </span>"
        return;
      }
  

      showDay.innerHTML = "Günlerden:" + sonuc; 
  }


