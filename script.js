
function generateCV() {
    let cv = document.getElementById('ctemp');
    let cvForm = document.getElementById('cv-form');
    cv.style.display = "block";
    cvForm.style.display = "none";
}

function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", 'Enter Here');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", 'Enter Here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}
function addNewAsField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("asField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", 'Enter Here');

    let asOb = document.getElementById("as");
    let asAddButtonOb = document.getElementById("asAddButton");

    asOb.insertBefore(newNode, asAddButtonOb);

}
function addWorkField() {

}
//generating CV
let t0 = document.getElementById('t0');
t0.addEventListener('click', function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");
    //let profile=document.getElementById("profilepic").value;
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;


    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;



    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;


    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //we

    let wes = document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName("aqField");

    let str1 = "";

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;
    //Additional skills
    let as = document.getElementsByClassName("asField");
    let str2 = "";
    for (let e of as) {
        str2 = str2 + `<li>${e.value}</li>`;
    }
    document.getElementById("asT").innerHTML = str2;
    //profile image
    let file = document.getElementById("profilpic").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
    }


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    document.getElementById("big").style.color = "black";
    document.getElementById('ctemp').style.display = "none";
    document.body.style.backgroundColor = "white";
});

//for cv 2
let t1 = document.getElementById('t1');

t1.addEventListener('click', function () {
    //about me
    let about = document.getElementById('abtme');
    let aboutMe = document.getElementById('detail');
    aboutMe.innerHTML = about.value;
    //social link
    let fb = document.getElementById('fbField');
    let linkedin = document.getElementById('linkedinField');
    let facebook = document.getElementById('faceb');
    let linkd = document.getElementById('linkd');
    facebook.innerHTML = fb.value;
    linkd.innerHTML = linkedin.value;
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weexp').innerHTML = str;
    //skills
    let s1 = document.getElementById('sk1');
    let s2 = document.getElementById('sk2');
    let s3 = document.getElementById('sk3');
    let s4 = document.getElementById('sk4');
    let per1 = document.getElementById('per1');
    let per2 = document.getElementById('per2');
    let per3 = document.getElementById('per3');
    let per4 = document.getElementById('per4');

    let st1 = document.getElementById('s1');
    let st2 = document.getElementById('s2');
    let st3 = document.getElementById('s3');
    let st4 = document.getElementById('s4');

    st1.innerHTML = s1.value;
    st2.innerHTML = s2.value;
    st3.innerHTML = s3.value;
    st4.innerHTML = s4.value;

    st1.style.width = per1.value + '%';
    st2.style.width = per2.value + '%';
    st3.style.width = per3.value + '%';
    st4.style.width = per4.value + '%';

    let award = document.getElementById('awardslist');
    let awd = document.getElementById('awlist');
    award.innerHTML = awd.value;

    //Interest
    let int1 = document.getElementById('I1');
    let int2 = document.getElementById('I2');
    let int3 = document.getElementById('I3');

    let i1 = document.getElementById('int1');
    let i2 = document.getElementById('int2');
    let i3 = document.getElementById('int3');

    i1.innerHTML = int1.value;
    i2.innerHTML = int2.value;
    i3.innerHTML = int3.value;
    //Refrences
    let refName = document.getElementById('rname');
    let rm = document.getElementById('rm');
    let refreEmail = document.getElementById('re');

    let rn = document.getElementById('refname');
    let rmob = document.getElementById('refnum');
    let redemail = document.getElementById('redemail');

    rn.innerHTML = refName.value;
    rmob.innerHTML = rm.value;
    redemail.innerHTML = refreEmail.value;

    //education
    let year = document.getElementById('eduyear');
    let eduschool = document.getElementById('eduschool');
    let educourse = document.getElementById('educourse');

    let year1 = document.getElementById('eduyear1');
    let eduschool1 = document.getElementById('eduschool1');
    let educourse1 = document.getElementById('educourse1');

    let year2 = document.getElementById('eduyear2');
    let eduschool2 = document.getElementById('eduschool2');
    let educourse2 = document.getElementById('educourse2');

    /* let y = document.getElementById('y1');
     let uni = document.getElementById('uni1');
     let cou = document.getElementById('cou1');

     let y1 = document.getElementById('y2');
     let uni1 = document.getElementById('uni2');
     let cou1 = document.getElementById('cou2');

     let y2 = document.getElementById('y3');
     let uni2 = document.getElementById('uni');
     let cou2 = document.getElementById('cou3');*/

    /*y.innerHTML = year.value;
    uni.innerHTML = eduschool.value;
    cou.innerHTML = educourse.value;

    y1.innerHTML = year1.value;
    uni1.innerHTML = eduschool1.value;
    cou1.innerHTML = educourse1.value;

    y2.innerHTML = year2.value;
    uni2.innerHTML = eduschool2.value;
    cou2.innerHTML = educourse2.value;*/

    let table = document.getElementById('edu');

    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = year.value;
    cell2.innerHTML = eduschool.value;
    cell3.innerHTML = educourse.value;

    let row1 = table.insertRow(2);
    let cell01 = row1.insertCell(0);
    let cell02 = row1.insertCell(1);
    let cell03 = row1.insertCell(2);
    cell01.innerHTML = year1.value;
    cell02.innerHTML = eduschool1.value;
    cell03.innerHTML = educourse1.value;

    let row2 = table.insertRow(3);
    let cell001 = row2.insertCell(0);
    let cell002 = row2.insertCell(1);
    let cell003 = row2.insertCell(2);
    cell001.innerHTML = year2.value;
    cell002.innerHTML = eduschool2.value;
    cell003.innerHTML = educourse2.value;

    //profile
    let name = document.getElementById('nameField');
    let cvname = document.getElementById('namehead');
    cvname.innerHTML = name.value;

    let file = document.getElementById("profilpic").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onloadend = function () {
        document.getElementById("img1").src = reader.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("template1").style.display = "block";
    document.getElementById('ctemp').style.display = "none";
    document.body.style.backgroundColor = "white";

});

let t2 = document.getElementById('t2');

t2.addEventListener('click', function () {
    //about me
    let about = document.getElementById('abtme');
    let aboutMe = document.getElementById('abtdetails');
    aboutMe.innerHTML = about.value;
    //social link

    let linkedin = document.getElementById('linkedinField');
    let linkd = document.getElementById('link');
    linkd.innerHTML = linkedin.value;

    //wexp
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weex').innerHTML = str;

    //skills
    let s1 = document.getElementById('sk1');
    let s2 = document.getElementById('sk2');
    let s3 = document.getElementById('sk3');
    let s4 = document.getElementById('sk4');
    let per1 = document.getElementById('per1');
    let per2 = document.getElementById('per2');
    let per3 = document.getElementById('per3');
    let per4 = document.getElementById('per4');

    let st1 = document.getElementById('si1');
    let st2 = document.getElementById('si2');
    let st3 = document.getElementById('si3');
    let st4 = document.getElementById('si4');

    st1.innerHTML = s1.value;
    st2.innerHTML = s2.value;
    st3.innerHTML = s3.value;
    st4.innerHTML = s4.value;

    st1.style.width = per1.value + '%';
    st2.style.width = per2.value + '%';
    st3.style.width = per3.value + '%';
    st4.style.width = per4.value + '%';


    //education
    let year = document.getElementById('eduyear');
    let eduschool = document.getElementById('eduschool');
    let educourse = document.getElementById('educourse');

    let year1 = document.getElementById('eduyear1');
    let eduschool1 = document.getElementById('eduschool1');
    let educourse1 = document.getElementById('educourse1');

    let year2 = document.getElementById('eduyear2');
    let eduschool2 = document.getElementById('eduschool2');
    let educourse2 = document.getElementById('educourse2');

    let y = document.getElementById('yr1');
    let uni = document.getElementById('clg1');
    let cou = document.getElementById('cor1');

    let y1 = document.getElementById('yr2');
    let uni1 = document.getElementById('clg2');
    let cou1 = document.getElementById('cor2');

    let y2 = document.getElementById('yr3');
    let uni2 = document.getElementById('clg3');
    let cou2 = document.getElementById('cor3');

    y.innerHTML = year.value;
    uni.innerHTML = eduschool.value;
    cou.innerHTML = educourse.value;

    y1.innerHTML = year1.value;
    uni1.innerHTML = eduschool1.value;
    cou1.innerHTML = educourse1.value;

    y2.innerHTML = year2.value;
    uni2.innerHTML = eduschool2.value;
    cou2.innerHTML = educourse2.value;


    //profile
    let name = document.getElementById('nameField');
    let jtitle = document.getElementById('titleField');
    let cvname = document.getElementById('naam');
    let tit = document.getElementById('title');
    let contct = document.getElementById('contactField');
    let  cont = document.getElementById('cont');
    let eml = document.getElementById('mailField');
    let email = document.getElementById('em');
    email.innerHTML = eml.value;
    let city = document.getElementById('cityField');
    let cit = document.getElementById('cit');
    cit.innerHTML = city.value;
    

    
    cvname.innerHTML = name.value;
    tit.innerHTML = jtitle.value;
    cont.innerHTML = contct.value;


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("template2").style.display = "block";
    document.getElementById('ctemp').style.display = "none";
    document.body.style.backgroundColor = "white";

});

//print cv

function printCV() {
    let  print = document.getElementById('pr2');
    print.style.display="none";
    let  print1 = document.getElementById('pr1');
    print1.style.display="none";
    let  print3 = document.getElementById('pr3');
    print3.style.display="none";
    window.print();
    
    print.style.display="block";
   
    print1.style.display="block";

    print3.style.display="block";
}