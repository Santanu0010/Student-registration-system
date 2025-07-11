const form = document.querySelector(".registration-form");

const studentName = document.getElementById("studentName");
const studentId = document.getElementById("studentId");
const emailId = document.getElementById("emailId");
const contactNo = document.getElementById("contactNo");


form.addEventListener("submit",function(e){
    e.preventDefault();

    console.log(studentName.value);
    console.log(studentId.value);
    console.log(emailId.value);
    console.log(contactNo.value);


    if(isNaN(studentId.value.trim("")) || isNaN(contactNo.value.trim(""))){
        alert("enter proper no ");
        return;
    }

    const studentList = document.querySelector(".student-details");

    const row=document.createElement("tr");

    //taking values 
    const stuName = document.createElement("td");
    stuName.innerHTML=studentName.value;
    
   const stuId = document.createElement("td");
    stuId.innerHTML = studentId.value;

    const stuEmail = document.createElement("td");
    stuEmail.innerHTML = emailId.value;

    const stuContact = document.createElement("td");
    stuContact.innerHTML = contactNo.value;

    const actionsTd = document.createElement("td");
    

    row.appendChild(stuName);
    row.appendChild(stuId);
    row.appendChild(stuEmail);
    row.appendChild(stuContact);
    row.appendChild(actionsTd);

    studentList.appendChild(row);
    //form reset
     form.reset();

     //button creation 
    const editbtn = document.createElement("button");
    editbtn.innerHTML= `<i class="fa-solid fa-user-pen"></i>`;
    editbtn.classList.add("edit-btn");
    

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML= `<i class="fas fa-trash"></i>`;
    deletebtn.classList.add("delete-btn");
    

    actionsTd.appendChild(editbtn);
    actionsTd.appendChild(deletebtn);

    editbtn.addEventListener("click", function () {
  studentName.value = stuName.textContent;
  studentId.value = stuId.textContent;
  emailId.value = stuEmail.textContent;
  contactNo.value = stuContact.textContent;

  // Remove the original row
  row.remove();
    });

    deletebtn.addEventListener("click", function() {
        row.remove();
        
    })

     
})

