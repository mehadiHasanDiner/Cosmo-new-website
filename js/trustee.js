const trusteeMembersData = () => {
  fetch("js/trustee.json")
    .then((res) => res.json())
    .then((data) => setTrusteeMembersData(data.trusteeData));
};

const setTrusteeMembersData = (data) => {
  data.forEach((element) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("col-3", "col-md-3", "col-sm-2");
    console.log(memberDiv);
  });
};
trusteeMembersData();
