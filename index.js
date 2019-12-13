const section = document.getElementById("main");
const navigation = document.getElementById("navigation");
const content = {
    about: 
    `<section class="about-section">
        <h3 class="section-header">About me</h3>
        <p class="about-text">I'm a junior front-end developer. I've decided to become a front-end dev on my second year in the university. There were some classes about web-dev basics. After few doubles I understood, that it's the thing I really like. My goal is to learn as much as possible to be proud of things I do. It's not about prestige or something like that, front-end is something inspiring, kind of art, where you can create beautiful and useful applications and every time tou will learn a lot of new information. So, my goal is to do my best.</p>
    </section>`,
    skills: 
    `<section class="skills-section">
        <h3 class="section-header">Professional skills</h3>
        <ul class="skills-list">
            <li>Programming languages: <em>HTML/SCC/Javascript (3.5 years), TypeScript/flow basics</em></li>
            <li>Frameworks: <em>Angular basics, ReactNative (8 months), GQL-ApolloClient (4 months)</em></li>
            <li>Libraries: <em>React (1 year), CSS frameworks (bootstrap, foundation, skeleton)</em></li>
            <li>Version control: <em>GitHub/Lab</em></li>
            <li>Tools (IDEs): <em>VSCode, WebStorm, Notepad++</em></li>
            <li>Methodologies: <em>Scrum experience (about 2 months - Trello, 5 months - Jira)</em></li>
        </ul>
    </section>`,
    examples: 
    `<section class="examples-section">
        <h3 class="section-header">Code examples</h3>
        <p class="examples-text">You can find some examples of my code <a href="https://github.com/jrzlve">HERE</a></p>
        <ul class="examples-list">
            <lh>The latest examples are:</lh>
            <li>Sweep commits (few screens for SweepTravel app) - ReactNative</li>
        </ul>
    </section>`,
    experience: 
    `<section class="experience-section">
        <h3 class="section-header">Front-end experience</h3>
        <ul class="experience-list">
            <li>ITechArt students lab - <a href="https://github.com/jrzlve/rn-proj">ReactNative</a></li>
            <li>RollingScopesSchool - <a href="https://github.com/jrzlve/game">Game</a></li>
            <li>Course projects - few landing pages</li>
            <li>Diploma project - modernization of the web-site using React to improve performance + accessibility changes</li>
        </ul>
    </section>`,
    education: 
    `<section class="education-section">
        <h3 class="section-header">Education</h3>
        <ul class="education-list">
            <li>BSUIR, e-business economics, Economist-Programmer (2014-2019)</li>
            <li>BSUIR, electronic economics master course, (2019-2021)</li>
            <li>RSS (2 stages in 2018)</li>
            <li>ITechArt front-end lab</li>
            <li>Minsk css/js conferences</li>
            <li>UI/UX conferences</li>
            <li>Web-standards day conf + podcasts</li>
            <li>self-learning (documentation, learnjs, medium, mdn, etc.)</li>
            <li>English - Intermediate (B1)</li>
        </ul>
    </section>`,
}
navigation.addEventListener("click", function(event){
    const element = event.target;
    if(element.tagName == "A") fillContent(element);
}, false);

function fillContent(element) {
    switch(element.className) {
        case "about":
            section.innerHTML = content.about;
            break;
        case "skills":
            section.innerHTML = content.skills;
            break;
        case "examples":
            section.innerHTML = content.examples;
            break;
        case "experience":
            section.innerHTML = content.experience;
            break;
        case "education":
            section.innerHTML = content.education;
            break;
    }
}