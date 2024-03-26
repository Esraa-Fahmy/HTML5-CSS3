let mainBtn = document.getElementById('mainButton')
let locationmainbranch=document.getElementById('locationMainBranch')
let branch=document.getElementById('branch')
let secondBranch = document.getElementById('secondBranch')
function mainBranch(){
locationmainbranch.classList.add("mainbranch")
}
function anybranch(){
    secondBranch.classList.add("mainbranch");
    locationmainbranch.classList.remove("mainbranch");
}
