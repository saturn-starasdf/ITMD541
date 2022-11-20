//window.addEventListener('DOMContentLoaded',function() {
lcn.addEventListener("click", function() {
    function live_loc(){
   
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(livePosition);
    }
    function livePosition(position) { console.log(position.coords.latitude + "," + position.coords.longitude); 
        fetch(`https://weatherdbi.herokuapp.com/data/weather/`+position.coords.latitude + "," + position.coords.longitude)
        //fetch(`https://weatherdbi.herokuapp.com/data/weather/`+document.getElementById("location").value.toLowerCase().replace(" ",""))
        .then(function(res){
            return res.json();
        })
        .then(function(jsonData){
            console.log(jsonData);
            document.getElementById("place").innerHTML=jsonData.region;
            document.getElementById("dayhour").innerHTML = jsonData.currentConditions.dayhour;
            document.getElementById("temp").innerHTML=jsonData.currentConditions.temp.f;
            document.getElementById("precip").innerHTML=jsonData.currentConditions.precip;
            document.getElementById("humid").innerHTML=jsonData.currentConditions.humidity;
            document.getElementById("wind").innerHTML=jsonData.currentConditions.wind.mile;
            document.getElementById("cmt").innerHTML=jsonData.currentConditions.comment;
            let img=document.getElementById('icon');
            img.src=jsonData.currentConditions.iconURL;
            dDiv= document.getElementById('predict') ;
            dDiv.innerHTML="";
            for(i=0;i<8;i++)
        {
        //document.querySelectorAll(String('#predict')) = "";
        dayDiv=document.querySelector(String('#predict'));
        
        console.log(dayDiv)

        var pred_img = document.createElement("pred_img");
        pred_img.innerHTML = '<br/>' + "<img src=" + jsonData.next_days[i].iconURL +"><br/>"
        dayDiv.append(pred_img);

        var day1=document.createElement('day1');
        day1.innerHTML = '<br/>' + jsonData.next_days[i].day;
        dayDiv.append(day1);

        var comment1=document.createElement('comment1');
        comment1.innerHTML= '<br/>' +jsonData.next_days[i].comment;
        dayDiv.append(comment1);

        let hightemp1=document.createElement('hightemp1');
        hightemp1.innerHTML= '<br/>' + 'High Temp : ' +jsonData.next_days[i].max_temp.f+' °F';
        dayDiv.append(hightemp1);

        let lowtemp1=document.createElement('lowtemp1');
        lowtemp1.innerHTML= '<br/>' + 'Low Temp : ' +jsonData.next_days[i].min_temp.f+' °F';
        dayDiv.append(lowtemp1);
        }    
        }) 
        .catch(error => console.log(error));   
    }
    }
    live_loc();
})

btn.addEventListener("click", function() {
        function weather_Loc(){
            fetch(`https://weatherdbi.herokuapp.com/data/weather/`+document.getElementById("location").value.toLowerCase().replace(" ",""))
            .then(function(res){
                return res.json();
            })
            .then(function(jsonData){
                if(jsonData.region)
                    {
            
                    console.log(jsonData);
                    document.getElementById("place").innerHTML=jsonData.region;
                    document.getElementById("dayhour").innerHTML = jsonData.currentConditions.dayhour;
                    document.getElementById("temp").innerHTML=jsonData.currentConditions.temp.f;
                    document.getElementById("precip").innerHTML=jsonData.currentConditions.precip;
                    document.getElementById("humid").innerHTML=jsonData.currentConditions.humidity;
                    document.getElementById("wind").innerHTML=jsonData.currentConditions.wind.mile;
                    document.getElementById("cmt").innerHTML=jsonData.currentConditions.comment;
                    let img=document.getElementById('icon');
                    img.src=jsonData.currentConditions.iconURL;
                    dDiv= document.getElementById('predict') ;
                    dDiv.innerHTML="";
                    for(i=0;i<8;i++)
                    {
                    //document.querySelectorAll(String('#predict')) = "";
                    dayDiv=document.querySelector(String('#predict'));
                    
                    console.log(dayDiv)

                    var pred_img = document.createElement("pred_img");
                    pred_img.innerHTML = '<br/>' + "<img src=" + jsonData.next_days[i].iconURL +"><br/>"
                    dayDiv.append(pred_img);

                    var day1=document.createElement('day1');
                    day1.innerHTML = '<br/>' + jsonData.next_days[i].day;
                    dayDiv.append(day1);

                    var comment1=document.createElement('comment1');
                    comment1.innerHTML= '<br/>' +jsonData.next_days[i].comment;
                    dayDiv.append(comment1);

                    let hightemp1=document.createElement('hightemp1');
                    hightemp1.innerHTML= '<br/>' + 'High Temp : ' +jsonData.next_days[i].max_temp.f+' °F';
                    dayDiv.append(hightemp1);

                    let lowtemp1=document.createElement('lowtemp1');
                    lowtemp1.innerHTML= '<br/>' + 'Low Temp : ' +jsonData.next_days[i].min_temp.f+' °F';
                    dayDiv.append(lowtemp1);
                     }
                     
                    }
                    else
                    {
                    if(jsonData.code==0){
                        alert(jsonData.message+"\nLocation invalid , Please Check Spelling");
                    }
                    else{
                        console.log(jsonData)
                        console.log(jsonData.code)
                        alert(jsonData.message+"\nPlease avoid any special characters");
                    }
                }
                })  
            .catch(error => console.log(error));   
        }
        weather_Loc();
    })


    

