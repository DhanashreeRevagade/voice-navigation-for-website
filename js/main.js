if (annyang) {
    var commands = {

      "play video": function () {
        document.getElementById('myVideo').click(function(){this.paused?this.play():this.pause();});      
    },

      "pause video": function () {
        document.getElementById('myVideo').pause();
      },

      "dark mode": function(){
        document.getElementById('videodiv').style.backgroundColor= '#000';
      
      },

      "light mode": function(){
        document.getElementById('videodiv').style.backgroundColor= '#fff';
        console.log("day mode");
        
      },


      'write name *tag':function(variable){
        if($('#loginbox').is(':visible'))
        {
          document.getElementById("name").value=variable;
        }

        else
        {
          let uname = document.getElementById("uname");
          uname.value=variable;
        }
          
      },

      'write email *tag':function(variable){
        if($('#loginbox').is(':visible'))
        {
          document.getElementById("email").value=variable;
        }

        else
        {
          let emailadd = document.getElementById("emailadd");
          emailadd.value=variable.split(" ").join("");
        }
          
      },

      'write phone number *tag':function(variable){
          let mobnum = document.getElementById("telnum");
          mobnum.value=variable;
      },

      'write query *tag':function(variable){
          let mymessage = document.getElementById("mymessage");
          mymessage.value=variable;
      },

      "submit *tag": function(tag){
        if(tag=="details")
        { 
          var name=document.getElementById('name').value;
          document.getElementById('modaluser').innerHTML="Hi "+name+"!!";
          $('#loginbox').modal("hide");
          $('#greetoverlay').modal("show");

          setTimeout(function() {
          $('#greetoverlay').modal("hide");
          }, 5000); 
        }
        else if (tag=="query")
        {
          let myform = document.getElementById("myform");  
          let formareainner = document.querySelector('.form-area-inner');  
          let formheading = document.querySelector('.form-area-inner h2'); 
          myform.remove();
          formheading.innerHTML = 'Your Form is successfully submitted'
          let html = '';
          html += `<p>Thanks for submitting your query. We  will shortly contact you.</p>`;
          formareainner.innerHTML += html;
        }
        
      },

      'Go to *tag': function(tag){
        var url = 'https://www.'+tag;
        $.getJSON(url);
        window.open(url +'.com','website');
        console.log(url);
    },

    'Search for *search': function(tag) {
        var url = 'https://www.google.com/search?q=' + tag;
        window.open(url,'website');
        console.log(url);
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp'
        });
        console.log(tag);
    },

    'say hello (to my dear friends)': function() {
      
          $('#greetoverlay').modal("show");

          setTimeout(function() {
               $('#greetoverlay').modal("hide");
           }, 5000);
        },

    'scroll up (little)': function () {
        window.scrollBy(0, -300);
      },

    'scroll down (little)': function () {
        window.scrollBy(0, 300);
      },

      'scroll to top': function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },

      'scroll to bottom': function () {
        //document.body.scrollTop = 0;
        //document.documentElement.scrollTop = 0;
        $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
      },

      'download all commands file': function () {
        document.getElementById("downloadfile").click(); 
      },
 
      
      'Open tab *tag': function (tag)
       {
         if(tag== "home"){
          document.getElementById("hometab").click(); 
         }
         else if(tag== "about"){
          document.getElementById("abouttab").click(); 
         }
         else if(tag== "how it works"){
          document.getElementById("hiwtab").click(); 
         }
         else if(tag== "what clients say"){
          document.getElementById("wcstab").click(); 
         }
         else if(tag== "contact"){
          document.getElementById("contacttab").click(); 
         }
        
      },

      'share feedback': function()
      {
        document.getElementById("sharefeedback").click(); 
      },

      'say commands': function()
      {
        document.getElementById("saycommands").click(); 
      },

      'login':function()
        {
          $('#loginbox').modal("show");
          
        },  
          
        'slide': function()
        {
          document.getElementById("slidenext").click(); 
        },
      
    };

   

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();


    //  SpeechKITT.setStartCommand(annyang.start); 
    //       annyang.setLanguage('en-IN');
    //             SpeechKITT.setSampleCommands(['Filter by *price', 'show me *item']);
    //             SpeechKITT.setInstructionsText('Some Commands to try..');
    //                  SpeechKITT.setStartCommand(annyang.start);     
    //                    SpeechKITT.setAbortCommand(annyang.abort); 

   // Tell KITT to use annyang
    //SpeechKITT.annyang();

    // Define a stylesheet for KITT to use
    //SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');
    
    // Render KITT's interface
    //SpeechKITT.vroom(); 


  
    
  }



  


