const trusteeMembersData = () => {
  fetch("js/trustee.json")
    .then((res) => res.json())
    .then((data) => setTrusteeMembersData(data.trusteeData));
};

const setTrusteeMembersData = (data) => {
  const trusteeContainer = document.getElementById("trustee-container");
  data.slice(0, 29).forEach((element) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("col-6", "col-md-3", "col-xs-6");
    memberDiv.innerHTML = `
    <div>
    <img style="margin-bottom: 20px;" src="${element.image}" class="img-thumbnail img-fluid"
						alt="">
    
    `;
    trusteeContainer.appendChild(memberDiv);
  });
};

trusteeMembersData();
