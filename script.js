// Your code here.
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;

  const leftHalf = document.createElement('div');
  leftHalf.classList.add('left-half');
  
  const profilePicture = document.createElement('img');
  profilePicture.src = 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg';
  profilePicture.classList.add('profile-picture');
  profilePicture.alt = 'Profile Picture';
  
  const name = document.createElement('h1');
  name.textContent = 'Name: Manish Dubey';
  
  const profile = document.createElement('p');
  profile.textContent = 'Profile: Software Developer';
  
  const email = document.createElement('p');
  email.textContent = 'Email: msdubey95@gmail.com';
  
  const skillsLabel = document.createElement('h2');
  skillsLabel.textContent = 'Skills';
  
  const reactLabel = document.createElement('label');
  reactLabel.classList.add('skills-label');
  
  const reactIcon = document.createElement('img');
  reactIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';
  reactIcon.classList.add('skill-icon');
  reactIcon.alt = 'React Logo';
  
  const reactText = document.createTextNode('React');
  
  const reactRange = document.createElement('input');
  reactRange.type = 'range';
  reactRange.classList.add('skill-range');
  
  reactLabel.appendChild(reactIcon);
  reactLabel.appendChild(reactText);
  reactLabel.appendChild(reactRange);
  
  // Repeat similar steps for other skills
  
  leftHalf.appendChild(profilePicture);
  leftHalf.appendChild(name);
  leftHalf.appendChild(profile);
  leftHalf.appendChild(email);
  leftHalf.appendChild(skillsLabel);
  leftHalf.appendChild(reactLabel);
  // Append other skills labels here
  
  const rightHalf = document.createElement('div');
  rightHalf.classList.add('right-half');
  
  const aboutMeLabel = document.createElement('h2');
  const underline = document.createElement('u');
  underline.textContent = 'About Me';
  aboutMeLabel.appendChild(underline);
  
  const aboutMeText = document.createElement('p');
  aboutMeText.textContent = `
    Your about me content goes here.
    // Add your about me content here
  `;
  
  rightHalf.appendChild(aboutMeLabel);
  rightHalf.appendChild(aboutMeText);
  
  body.appendChild(leftHalf);
  body.appendChild(rightHalf);
});

