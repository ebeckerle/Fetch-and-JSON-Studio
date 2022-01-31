// TODO: add code here

window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            for (let i=0; i<json.length; i++){
                const div = document.getElementById("container");
                // if (json[i].hoursInSpace >500){
                // let hoursInSpaceArray = 
                // console.log(Math.max(json.hoursInSpace))
                div.innerHTML += `
                   <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                `;
            // }

                // console.log("on the loop");

                
            };
        });
    });
});