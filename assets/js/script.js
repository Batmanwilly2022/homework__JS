const className = document.querySelector("#className");
const year = document.querySelector("#year");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const phoneNumber = document.querySelector("#phoneNumber");
const email = document.querySelector("#email");
const CLASS_INFO_REF = document.querySelector("#classInfo");
const STUDENT_INFO_REF = document.querySelector("#studentInfo");
const addClass = document.querySelector("#addClass");
const enrollBtn = document.querySelector("#enrollBtn");

//CREATE CLASS

const CLASS_ARRAY = [];

const saveArray = (classArray) =>{
    sessionStorage.setItem('MyStudentInfo',JSON.stringify(CLASS_ARRAY));
    classArray = JSON.parse(sessionStorage.getItem("classArray"));
   
}

addClass.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let student = {
        className : className.value,
        year : year.value,
    }
    
    if(!className.value|| !year.value){
        alert("Please fill all boxes");
        return;
    }
    
    if(year.value<2022){
        alert("Please update your school year")
        return;
    }
    
    CLASS_ARRAY.push(student)

    //document.forms[0].reset();
    className.value = ""
    year.value = "" 

    saveArray(CLASS_ARRAY);
   
    CLASS_ARRAY.map((classInfo) =>{
        
        const {className, year} = classInfo
        
        const classListTR = document.createElement("tr")
        const classListTDClassName = document.createElement("td")
        const classListTDClassYear = document.createElement("td")


        classListTDClassName.textContent = className
        classListTDClassYear.textContent = year

        classListTR.append(classListTDClassName,classListTDClassYear)

        CLASS_INFO_REF.appendChild(classListTR)
    })
    
    console.log(CLASS_ARRAY);
})


// Add a student

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

enrollBtn.addEventListener("click",(e) =>{
    e.preventDefault();

    let addStudent = {
        firstName : firstName.value,
        lastName : lastName.value,
        phoneNumber : phoneNumber.value,
        email : email.value,
    }

    if(!firstName.value|| !lastName.value || !phoneNumber.value || !email.value){
        alert("Please fill all boxes");
        return;
    }

    if (!isEmail(email.value)) {
		alert("Not a valid email");
    }

    CLASS_ARRAY.push(addStudent)

    //document.forms[0].reset();
    
    firstName.value = ""
    lastName.value = ""
    phoneNumber.value = ""
    email.value = ""


    saveArray(CLASS_ARRAY);

    console.log(CLASS_ARRAY);

   
    CLASS_ARRAY.map((studentInfo) =>{
        
        const {firstName, lastName, phoneNumber, email} = studentInfo
        
        const studentListTR = document.createElement("tr")
        const studentListTDFistName = document.createElement("td")
        const studentListTDLastName = document.createElement("td")
        const studentListTDPhoneNumber = document.createElement("td")
        const studentListTDEmail = document.createElement("td")


        studentListTDFistName.textContent = firstName
        studentListTDLastName.textContent = lastName
        studentListTDPhoneNumber.textContent = phoneNumber
        studentListTDEmail.textContent = email

        studentListTR.append(studentListTDFistName,studentListTDLastName,studentListTDPhoneNumber,studentListTDEmail)

        STUDENT_INFO_REF.appendChild(studentListTR)
    })
    
})





    
    
    















































