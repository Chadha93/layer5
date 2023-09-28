"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4864],{70722:function(e,t,n){var a=n(67294),l=n(71082);const o=n(85313).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);t.Z=function(e){let{contents:t}=e;const{0:n,1:r}=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=window.location.pathname;r(e)}),[]),a.createElement(o,null,a.createElement("div",{className:"intra-page"},a.createElement("ul",null,t.map((e=>a.createElement("li",{key:e.id,className:"list"},a.createElement(l.Link,{to:""+n+e.link,key:e.id,activeClassName:"active"},e.text)))))))}},30604:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return g}});var a=n(67294),l=n(17875),o=n(37242),r=n(72606),i=n(90075),s=n(12805),c=n(31992),u=n(70722),m=n(93723);const d=[{id:0,link:"#Clone your fork",text:"Clone your fork"},{id:1,link:"#Checkout a new branch",text:"Checkout a new branch"},{id:2,link:"#Commit your changes",text:"Commit your changes"},{id:3,link:"#Sign-off commits",text:"Sign-off commits"},{id:4,link:"#Push changes to Github",text:"Push changes to Github"},{id:5,link:"#Create a pull request",text:"Create a pull request"}];var h=()=>a.createElement(r.U,null,a.createElement("div",{className:"page-header-section"},a.createElement("h1",null,"Contribution")),a.createElement(i.Z,null),a.createElement("div",{className:"page-section"},a.createElement(o.W2,null,a.createElement("h2",null,"General contribution flow"),a.createElement("p",null,"Pull requests (PRs) are the best ways to propose changes to a project repository. At Layer5 org, we use the Github Flow:"),a.createElement("div",{className:"content"},a.createElement("a",{id:"Clone your fork"},"  ",a.createElement("h3",null,"Clone your fork to your local machine")," "),a.createElement("ul",null,a.createElement("li",null,"Fork the repository you are working on."),a.createElement("li",null,a.createElement("span",null,"Go to your GitHub account, open the forked repository, click on the code button and then click the “copy to clipboard” icon if you intend to use a command-line tool."," ")),a.createElement("li",null,a.createElement("span",null,"Open the terminal and run the following git command:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"git clone “URL you copied from the clipboard.”"}))))),a.createElement("h3",null,"Add 'upstream' repo to list of remotes"),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"Keeping your fork up to date while this isn't a necessary step. If you plan on doing anything more than a tiny quick fix, you'll want to make sure you keep your fork up to date by tracking the original \"upstream\" repo that you forked earlier.")),a.createElement("li",null,a.createElement("span",null,"To do this, you'll need to add a remote. An example of the command is given below:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"git remote add upstream https://github.com/layer5io/meshery.git "})),'Here “meshery" is used as the example repo. Be sure to reference the actual repo you are contributing to.'))),a.createElement("a",{id:"Checkout a new branch"},"  ",a.createElement("h3",null,"Create and checkout a new branch")," "),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"Whenever you begin to work on a new feature or bugfix, it's important that you create a new branch. Not only is it a proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task completed.")),a.createElement("li",null,a.createElement("span",null,"Perform the flow:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:" git checkout -b your-new-branch-name"})),"For example,",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"git checkout -b feature"}))," ","(feature being a branch name)"))),a.createElement("h3",null,"Make the necessary changes to your file."),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"To add the changes you have made to your branch, use:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"git add <file> "})))),a.createElement("li",null,a.createElement("span",null," ","If you add multiple file changes to the branch, you simply use:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:" git add ."}))))),a.createElement("a",{id:"Commit your changes"},"  ",a.createElement("h3",null,"Commit the changes made")," "),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"Now commit those changes using the git commit command:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"git commit -s -m “This is my commit message”"}))))),a.createElement("a",{id:"Sign-off commits"}," ",a.createElement("h3",null,"Make sure to"," ",a.createElement("a",{href:"https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#signing-off-on-commits"},"Sign-off")," ","on your Commits (Developer Certificate of Origin)")),a.createElement("p",null,"To contribute to this project, you must agree to the Developer Certificate of Origin (DCO) for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to contribute."," "),a.createElement("p",null,"To signify that you agree to the DCO for contributions, you simply add a line to each of your git commit messages:"),a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"Signed-off-by: Jane Smith <jane.smith@example.com>"})),a.createElement("p",null,"In most cases, you can add this signoff to your commit automatically with the -s or --signoff flag to git commit. You must use your real name and a reachable email address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:"),a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"$ commit -s -m “my commit message w/signoff”"})),a.createElement("p",null,"To ensure all your commits are signed, you may choose to add this alias to your global .gitconfig:"),a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"[alias] amend = commit -s --amend cm = commit -s -m commit = commit -s\n"})),a.createElement("p",null,"Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:"),a.createElement(m.S,{src:"../../../../.github/assets/images/git-signoff-vscode.webp",id:"sign-off",alt:"Signoff",__imageData:n(19930)}),a.createElement("a",{id:"Push changes to Github"},"  ",a.createElement("h3",null,"Push changes to Github")," "),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"To push your changes, run the git command:",a.createElement("div",{className:"codes"},a.createElement(s.ZP,{codeString:"git push origin your_branch_name"}))))),a.createElement("a",{id:"Create a pull request"},"  ",a.createElement("h3",null,"Create a pull request (PR)")," "),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"Head over to your forked repository on GitHub and you'll see a Compare & pull request button. Click on that button."),a.createElement("br",null),a.createElement("span",null,"Note: Please ensure that the right branch is selected for the PR."),a.createElement("div",null,a.createElement("br",null),a.createElement(m.S,{src:"../../../../.github/assets/images/compare-and-pr.webp",alt:"Compare and pull request",__imageData:n(20837)})))),a.createElement("ul",null,a.createElement("li",null,a.createElement("span",null,"Once you click on the button, you'll be taken to the Pull Request page. Here, you can add a title and description to your pull request that explains your contribution. Once you're done, click on the Create pull request button."),a.createElement("div",null,a.createElement("br",null),a.createElement(m.S,{src:"../../../../.github/assets/images/create-pr.webp",alt:"create pr",__imageData:n(24030)}),a.createElement("br",null))))),a.createElement("h2",null,"Handling PRs Made Without Being Assigned"),a.createElement("p",null,"At ",a.createElement("a",{href:"https://layer5.io/"},"Layer5"),", we usually suggest to contributors that they ask maintainers to assign them to the issue they want to work on. But sometimes, pull requests that aren't assigned to anyone can be found. In such cases, it's important to be flexible and ready to adapt. Here are some simple guidelines for dealing with these unassigned contributions:"),a.createElement("ol",null,a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"We value getting things done:")),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Evaluate the PR:")," First, assess the quality and significance of the PR. Is it a valuable contribution to the project? Does it fix a bug or add a meaningful feature? If the PR aligns with the project's goals and standards, it's worth considering.")),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Review the code:")," Ensure that the code in the PR meets the project's coding guidelines and standards. If the code quality is high and the changes are beneficial, it's a positive sign.")))),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"We value our contributors' feelings:")),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Communication:")," Reach out to the contributor who made the unassigned PR in a friendly and respectful manner. Express gratitude for their contribution and explain the importance of assigning PRs to maintain transparency and collaboration within the community.")),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Offer assistance:")," If the contributor is willing, help them understand the process of assigning PRs and offer guidance on how to do it correctly in the future.")),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Encourage participation:")," Emphasize that their contribution is valuable and that the project welcomes their involvement. Encourage them to continue contributing.")))),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Attempt to uphold the spirit of #2 while ensuring that #1 happens:")),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Balance:")," Strive to strike a balance between maintaining a welcoming and inclusive community (#2) and ensuring that the project continues to make progress (#1).")),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Collaboration:")," If the contributor is receptive and willing to work together, consider helping them assign the PR correctly, and possibly collaborate on improving the PR if necessary.")),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"If necessary, reassign:")," If the contributor is unresponsive or unable to assign the PR correctly, you may consider reassigning the PR to an appropriate contributor or assigning it to yourself to ensure it doesn't go unnoticed.")))),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Contributor Guidance:")),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"How you should:")," As a contributor, it's important to follow the project's guidelines. Start by identifying a suitable issue or create one if necessary. Afterward, kindly request assignment or express your interest in working on the issue by commenting on it. This ensures that maintainers are aware of your intentions and can provide guidance or assign the issue appropriately. Once assigned, proceed with your work and submit a pull request.",a.createElement("br",null),a.createElement("strong",null,"Example:")," ",a.createElement("a",{href:"https://github.com/layer5io/layer5/issues/3889"},"Hover animation on different integration category #3889"))),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"How you should not:")," Avoid starting work on an issue and creating a pull request without prior communication or assignment. Jumping directly into the code can lead to misunderstandings and duplicate efforts. Instead, take a moment to engage with the maintainers and community by discussing your interest in the issue and seeking assignment before submitting a pull request. This promotes transparency and effective collaboration within the project.",a.createElement("br",null),a.createElement("strong",null,"Example:")," ",a.createElement("a",{href:"https://github.com/meshery/meshery/issues/8757"},"[MeshModel] [UX]: Icon for Kubernetes Component - Endpoints #8757"))),a.createElement("li",null,a.createElement("p",null,a.createElement("strong",null,"Requesting Reassignment:")," If you are interested in working on an issue that is already assigned to someone else, it's important to respect their efforts and contributions. First, politely reach out to the assignee and express your interest in collaborating on the issue. Discuss the possibility of working together or sharing the workload. If the assignee agrees or is open to collaboration, you can proceed. If the assignee is not responsive or there has been no progress on the issue for a long time and the issue aligns with your skills and interests, kindly request reassignment from the maintainers, providing a clear and courteous explanation for the request.",a.createElement("br",null),a.createElement("strong",null,"Example:")," ",a.createElement("a",{href:"https://github.com/meshery/meshery-nsm/issues/169"},"[chore] update Go to 1.21, and update relevant pkgs #169")))))),a.createElement(c.Z,null)),a.createElement(u.Z,{contents:d})));var g=()=>a.createElement(a.Fragment,null,a.createElement(h,null));const p=()=>a.createElement(l.Z,{title:"Contribution",description:"A detailed contribution guide."})},20837:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAABwAwCdASoUAAEAPtFWpEuoJKOhsAgBABoJZAAAW+lsaU5o0TAA/vHU44LeZv+qtLZsrtCxIjzNb//1t+Of5yaAAAA="},"images":{"fallback":{"src":"/static/1899dc09f2d5583f7905ad2dcd217117/cd453/compare-and-pr.webp","srcSet":"/static/1899dc09f2d5583f7905ad2dcd217117/cf582/compare-and-pr.webp 226w,\\n/static/1899dc09f2d5583f7905ad2dcd217117/4cde9/compare-and-pr.webp 452w,\\n/static/1899dc09f2d5583f7905ad2dcd217117/cd453/compare-and-pr.webp 903w","sizes":"(min-width: 903px) 903px, 100vw"},"sources":[]},"width":903,"height":67}')},24030:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAwAwCdASoUAA8ALplotFoiqCgoCACYSygABi0zhnfIAgBAAP74v07EA8/uwx02t2pW5xVC/bNLvFOnLtURrXNsItgxG9uCQOeq+PLPMmGCnQQAAAA="},"images":{"fallback":{"src":"/static/f9f3cc9e1d971b51aa1d7d2eac2cdeca/188e0/create-pr.webp","srcSet":"/static/f9f3cc9e1d971b51aa1d7d2eac2cdeca/aa654/create-pr.webp 234w,\\n/static/f9f3cc9e1d971b51aa1d7d2eac2cdeca/5207f/create-pr.webp 468w,\\n/static/f9f3cc9e1d971b51aa1d7d2eac2cdeca/188e0/create-pr.webp 935w","sizes":"(min-width: 935px) 935px, 100vw"},"sources":[]},"width":935,"height":706}')},19930:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAABwAwCdASoUAAYAPtFUo0uoJKMhsAgBABoJZwCdACHe2KmwAAAA/u6xLYWO/yZpdqUkgRfVoOO0VtgA"},"images":{"fallback":{"src":"/static/44e07f1a61afdfaf2cf2904e02eaeee9/88195/git-signoff-vscode.webp","srcSet":"/static/44e07f1a61afdfaf2cf2904e02eaeee9/15087/git-signoff-vscode.webp 322w,\\n/static/44e07f1a61afdfaf2cf2904e02eaeee9/3a6ff/git-signoff-vscode.webp 644w,\\n/static/44e07f1a61afdfaf2cf2904e02eaeee9/88195/git-signoff-vscode.webp 1288w","sizes":"(min-width: 1288px) 1288px, 100vw"},"sources":[]},"width":1288,"height":404}')}}]);
//# sourceMappingURL=component---src-pages-community-handbook-contribution-js-58895392062ca27825dd.js.map