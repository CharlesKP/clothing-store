import React from 'react';



function bubbles() {
    //array of skills
    let array = ["Javascript", "Java", "PHP", "CSS", "HTML", "KaboomJS", "VueJS", "React", "GitHub", "Docker", "Bootstrap", "MySQL", "Jira", "jQuery", "SCSS"]
    array.sort()
    let objectArray = []

    for (var i in array) {
        //push line break half way
        if (i === 7) {
            objectArray.push(<br/>)
         } else { 
             //else push object for skills
             objectArray.push(<button class="buttons btn btn-outline-primary"> { array[i] } </button>)
        }

    }
    //return pushed object
    return objectArray;
}



//Skills component
function Skills() {
    //return skill list with the class of bubbles
    return (
        <div>
            <div class="skills">
            <h3 class="header-text">Acquired Skills</h3>
            <div class="skillset"> { bubbles() }  </div>
             </div>
             <hr></hr>
        </div>
    )
}

//export component
export default Skills;
