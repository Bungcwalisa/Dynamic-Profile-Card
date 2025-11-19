
    const profileName = document.getElementById("profileName");
    const profileRole = document.getElementById("profileRole");
    const profileCard = document.getElementById("profileCard");
    const profileImage = document.getElementById("profileImage");

    const updateNameBtn = document.getElementById("updateNameBtn");
    const updateRoleBtn = document.getElementById("updateRoleBtn");
    const toggleStatusBtn = document.getElementById("toggleStatusBtn");
    const changeImageBtn = document.getElementById("changeImageBtn");

   
    updateNameBtn.addEventListener("click", () => {
        const newName = prompt("Enter a new name:");
        if (newName) profileName.textContent = newName;
    });

 
    updateRoleBtn.addEventListener("click", () => {
        const newRole = prompt("Enter a new role:");
        if (newRole) profileRole.textContent = newRole;
    });

   
    toggleStatusBtn.addEventListener("click", () => {
        profileCard.classList.toggle("active-status");
    });

    
    changeImageBtn.addEventListener("click", () => {
        const newImageURL = prompt("Enter a new image URL:");
        if (newImageURL) profileImage.src = newImageURL;
    });
