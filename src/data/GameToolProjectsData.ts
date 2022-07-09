import ProjectData from '@/data/ProjectData.ts'

export default [

    new ProjectData("project-16", "IMI Game Templates for casual games and music games", "img/projects/toolProjects/imitemplate.png", 
    `<div class="paragraph">
     A template project for game developers was created.
    <br>The developer can focus on coding the game mechanics instead of creating features that are common to any IMI game.
    <br>These templates made it easier to train new members in following the process of making a game for IMI.
     </div>
     <div class="paragraph">
     Project details :
     <ul>
     <li>Includes many common features of an IMI game such as Language selection, main UI flows, leaderboards and API calls. </li>
     <li>Game art was also templated into spritesheets where artists can draw on a predefined pixel region.</li>
     <li>A general template and a template to make new music games were created in this process.</li>
     <li>The template was made on NodeJS environment withPixiJS for rendering and Webpack for building the game</li>
     </ul>
 </div>

 <div class="paragraph center">
 <img class="large-screenshot" src="img/projects/toolProjects/spritesheets.png" alt="template spritesheets" />
     <img class="large-screenshot" src="img/projects/toolProjects/imitemplate.png" alt="games made with IMI Games template" />
     <img class="large-screenshot" src="img/projects/toolProjects/musictemplate.png" alt="template spritesheets" />
     <img class="large-screenshot" src="img/projects/toolProjects/musicgametemplate.png" alt="games made with IMI Games template" />
 </div>

    `, "#381462", false, true),

    new ProjectData("project-17", "State machine based game session validator", "img/projects/toolProjects/secuityThumb.jpg", 
    `<div class="paragraph">
     A javascript module to record and capture fraudulent score submissions.
    <br>The security function is made as a template but internal settings are exposed for individual developers to change and make a unique security function.
     </div>
     <div class="paragraph">
     Project details :
     <ul>
     <li>Gameplay is encrypted and decrypted using a security function uniquely made by the game developer</li>
     <li>The function actively runs with the gameplay</li>
     <li>Automated testing implemented into the security function so that developers can test complex state machines in less time.</li>
     </ul>
 </div>`,
  "#b71f40", false, false),
];