const trusteeMembersData = () => {
  fetch("js/trustee.json")
    .then((res) => res.json())
    .then((data) => setTrusteeMembersData(data.trusteeData));
};

const setTrusteeMembersData = (data) => {
  const trusteeContainer = document.getElementById("trustee-container");
  data.slice(0, 37).forEach((element) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("col-6", "col-md-3", "col-xs-6");
    memberDiv.innerHTML = `
    <div>
    <img onclick = "openPhotoDetails('${element.image}', '${element.name_english}', '${element.category}')" style="margin-bottom: 20px;" src="${element.image}" class="img-thumbnail img-fluid"
						alt="">
    
    `;
    trusteeContainer.appendChild(memberDiv);
  });
};

const memberContainer = document.getElementById("member-container");
memberContainer.style.display = "none";

const openPhotoDetails = (photo, name, category) => {
  const photoContainer = document.getElementById("photo-container");
  photoContainer.innerHTML = "";
  // console.log("Photo Details", photo, name, category);
  photoContainer.innerHTML += `
    <img class="img-fluid" style="max-width: 100%; height: auto;"  src="${photo}" alt="">
    <h3>Name: ${name}</h3>
    <h4>Designation: ${category}</h4>
  
  `;
  memberContainer.style.display = "block";
  memberContainer.scrollIntoView();
};

trusteeMembersData();
