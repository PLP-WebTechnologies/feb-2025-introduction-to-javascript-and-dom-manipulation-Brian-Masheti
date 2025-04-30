// Function to change the text content of the main heading
function changeText() {
    // Select the element with ID 'main-heading' and change its text
    document.getElementById("main-heading").textContent = "New DOM Manipulation Heading!";
  }

// Function to modify the style of the elements on the page
function changeStyle() {
    // CHangge the background color of the entire page to light blue
    document.body.style.backgroundColor = 'lightblue';

    // Select the element with ID 'descriptin' and update its style
    const description = document.getElementById('description');
    description.style.color = 'red'; // Change the text color to red
    description.style.fontSize = '20px'; // Change the font size to 20px;
    description.style.fontFamily = 'garamond'; // Change the font family to Arial
    description.style.fontWeight = 'bold'; // Make the font bold
}

// Set the text content to dynamically add a new paragrapgh element to the section
function addElement() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // set the text content f the new paragraph
    newParagraph.textContent = 'This is a new dynamically added paragraph.';

    // Add a class name for styling purposes
    newParagraph.className = 'dynamic';

    // Appendt the new paragraph with ID 'dynamic-section'
    document.getElementById('dynamic-section').appendChild(newParagraph);
}

// Function to remove the last element inside the dynamic section
function removeElement() {
    // Select the section element
    const section = document.getElementById("dynamic-section");

    // Get the last child element of the section
  const lastElement = section.lastElementChild;

  // If there is a child element, remove it
  if (lastElement) {
    section.removeChild(lastElement);
  }
}
