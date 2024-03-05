// Get all buttons with class "adopt-btn"
var buttons = document.querySelectorAll('.adopt-btn');

// Loop through each button and attach the event listener
//let user undo their action by clicking the button again
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.innerHTML === 'Adopt Now') {
      button.innerHTML = 'Request Sent';
      alert('You have just followed this pet');
      button.style.backgroundColor = 'teal';
      console.log(button.innerHTML);
    } else if (button.innerHTML === 'Request Sent') {
      alert('You have just unfollowed this pet');
      button.innerHTML = 'Adopt Now';
      button.style.backgroundColor = '#ff6b20';
    }
  });
});

//connection fuction
 
 // Function to open LinkedIn profile
   function connectLinkedIn(linkedInUrl) {
    window.open(linkedInUrl, "_blank");
  }

  // Function to open GitHub profile
  function connectGitHub(githubUrl) {
    window.open(githubUrl, "_blank");
  }

  // Define team member details
  const teamMembers = [
    {
      id: "ashlesha",
      linkedInUrl: "https://www.linkedin.com/in/ashlesha-n/",
      githubUrl: "https://github.com/AshleshaNandankar"
    },
    
    {
      id: "ana",
      linkedInUrl: "https://www.linkedin.com/in/ana-gonzalezdianez/",
      githubUrl: "https://github.com/Agondia"
    },

    // Add more team member details here
    {
      id: "agata",
      linkedInUrl: "https://www.linkedin.com/in/agata-mi%C5%9Bkiewicz-77b2b616a/",
      githubUrl: "https://github.com/agata0407"
    },

    {
      id: "natalia",
      linkedInUrl: "https://www.linkedin.com/in/natalia-figlarz/",
      githubUrl: "https://github.com/NatRads"
    },
  ];

  // Attach click event listeners to buttons
  teamMembers.forEach(member => {
    const linkedInBtn = document.querySelector(`#${member.id} .linkedin-btn`);
    const githubBtn = document.querySelector(`#${member.id} .github-btn`);

    linkedInBtn.addEventListener("click", () => connectLinkedIn(member.linkedInUrl));
    githubBtn.addEventListener("click", () => connectGitHub(member.githubUrl));
  });