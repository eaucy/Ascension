
window.api.receive("fromMain", (data) => {
    console.log(`Received ${data} from main process`);
    if(data.remove==false){
        var element = document.getElementById("list-group");
        let div = document.createElement('a');
        div.classList.add("list-group-item")
      
        div.classList.add("flex-column")
        
        div.classList.add("align-items-start")
        
        div.href="#"
        div.innerHTML=`
      
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Trade with ${data.content.user}</h5>
            <small>${data.content.time}</small>
          </div>
          <h4>Items you will give:</h4>`
          data.content.give.forEach(x=>{
            div.innerHTML=div.innerHTML+`<p class="mb-1">${x}</p>`
          })
          div.innerHTML=div.innerHTML+`<h4>Items you will get:</h4>`
          data.content.get.forEach(x=>{
            div.innerHTML=div.innerHTML+`<p class="mb-1">${x}</p>`
          })
          div.innerHTML=div.innerHTML+`<img src="data:image/jpg;base64,${data.content.buffer}" style="
          max-width: 30%;
      ">`
      function notifyMe() {
        // Let's check if the browser supports notifications
        function httpGetAsync(theUrl, callback)
      {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function() { 
              if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                  callback(xmlHttp.responseText);
          }
          xmlHttp.open("GET", theUrl, true); // true for asynchronous 
          xmlHttp.send(null);
      }
      var indexed={}
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }
      
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
          // If it's okay let's create a notification
      
     //     new Notification("Trade queued with "+data.content.user+"\nItems you will give:\n"+data.content.give.join("\n")+"\nItems you will get:\n"+data.content.get.join("\n"),{icon: "https://www.roblox.com/headshot-thumbnail/image?userId=" + data.userid + "&width=420&height=420&format=png"})
      
        }
      
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
             // new Notification("Trade queued with "+data.content.user+"\nItems you will give:\n"+data.content.give.join("\n")+"\nItems you will get:\n"+data.content.get.join("\n"),{icon: "https://www.roblox.com/headshot-thumbnail/image?userId=" + data.userid + "&width=420&height=420&format=png"})
      
            }else{
              alert("permission denied")
            }
          });
        }
        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them any more.
      }
      notifyMe()
 element.appendChild(div)
 var x = document.getElementById("list-group").firstElementChild
 x.classList.add("active")
    }else{
      var x = document.getElementById("list-group")
     x.removeChild(x.childNodes[0]);  
     var x = document.getElementById("list-group").firstElementChild
     x.classList.add("active")
    }
});