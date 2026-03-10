const projects = [
        {
            "id": 1,
            "name": "Project Management App",
            "images": [
                {
                    "imagePath": "img/gantt.png",
                    "imageAlt": "task tracking picture"
                },
                {
                    "imagePath": "img/timesheet.png",
                    "imageAlt": "timesheet"
                }
            ],
            "description": "Created a task tracker and intern timesheet as part of a project management application.  Worked on a four person team to create a project management application.  The application allowed customers to submit project requests to a manager, which could then be assigned to student interns to work on.  Customers were then given invoices by the system.  For each project students could be assigned tasks that could be tracked by the customer and the administrator.  Interns could then enter the time they spent each week on multiple projects and tasks.",
            "languages": [
                "ASP.Net",
                "Javascript"
            ],
            "link" : "https://github.com/ErinsCode/Concept-Center-Group-Project---CtrlAltDefeat"
        },
           {
            "id": 2,
            "name": "Symptom Tracker",
            "images": [
                {
                    "imagePath": "img/HomePage.png",
                    "imageAlt": "Home page"
                },
                 {
                    "imagePath": "img/MyLogsCalendarView.png",
                    "imageAlt": "Calendar"
                }
            ],
            "description": "Designed an application for individuals to document their symptoms, pain levels, and activity levels so that they can track their chronic illness over time and use it to better communicate with their doctors and see the effectiveness of treatment plans.  The app allows users to select a particular symptom and see the dates they recorded experiencing those symptoms.  Users can also document the medications they take, the time period they took it, and their dosage so they can easily share this with their medical provider.",
            "languages": [
                "Django",
                "Javascript"
            ],
            "link" : "https://github.com/ErinsCode/SymptomTracker"
        },
                {
            "id": 3,
            "name": "Workout App",
            "images": [
                {
                    "imagePath": "img/workoutapp.png",
                    "imageAlt": "workout app"
                }
            ],
            "description": "Worked in a group of four to create a workout tracking application.  I created the pages where a user can create and edit the exercises they can add to a workout and the page where the user can see how their progress over time.  For each exercise a user can set the number of sets, reps, and the weight they are lifting (if applicable).  When a user looks at their progress page they can see what their starting weight was, what their personal records were, and can see a graph of how much weight they are lifting for each exercise over different timeframes.",
            "languages": [
                "PHP",
                "Javascript"
            ],
            "link" : "https://github.com/zElement7/Shredi-Academy"
        },
        {
            "id": 4,
            "name": "Minesweeper",
            "images": [
                {
                    "imagePath": "img/minesweeper.png",
                    "imageAlt": "Minesweeper game"
                }
            ],
            "description": "Created the backend for a minesweeper game in a two person team.  The game made it so the user could select three different sized panels: Beginner (10 mines), Intermediate (40 mines), Advanced (99 mines).  Users can also save a game, and load a previous game.",
            "languages": [
                "Java"
            ],
            "link": "https://github.com/ErinsCode/mineSweeper"
        }
        
    ]
let projectDiv = document.getElementById("projectDiv");
// const projectRequest = new Request("products.json");

// fetch(projectRequest)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let project of data.projects) {
//            projectDiv.append(project.name);
//            console.log("hi");

//         }
//     });

for (let project of projects) {
    console.log(project);
    let card = createCard(project.name, project.images, project.description, project.languages, project.link);
    projectDiv.appendChild(card);

}

function createCard(name, images, description, languages, link) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("mb-5");
    cardDiv.classList.add("mt-5");

    let html = `
        <div class="row g-0">
            <div class="col-md-4">`;

    for (let image of images) {
        html += `<img src="${image.imagePath}" class="img-fluid rounded-start card-image mb-1" alt="${image.imageAlt}">`;

    }

    html += `</div>`;

    html += `
            <div class="col-md-8">
             <div class="card-body">
                <h4 class="card-title mt-3">${name}</h4>`;

    html += `<p class="card-text mt-5 me-5">${description}</p>`;
    html += `<a class='btn btn-link me-5 mb-2' href='${link}'>See code</a>`;
    html += "<div class='d-flex langDiv'>";
    for (let language of languages) {
        html += `<div class='lang'>${language}</div>`;
    }

    html += "</div>";
    html += `  </div>
            </div>
        </div>
    </div>`;

    // let html = `<img src='${imagePath}' class='card-img-left' alt='${imageAlt}'>`;
    // html += `<div class="card-body">`;
    // html += `<h5 class="card-title">${name}</h5>`;
    // html += `<p class="card-text">${description}</p>`;
    // html += `</div>`;

    cardDiv.innerHTML = html;


    return cardDiv;

}
