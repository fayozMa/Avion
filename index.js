  // JavaScript to show the input when the button is clicked
  document.getElementById('showButton').addEventListener('click', function() {
    var inputField = document.getElementById('hiddenInput');
    
    // Toggle visibility
    if (inputField.style.display === 'none') {
      inputField.style.display = 'block';
      inputField.style.marginRight = '-220px';
      inputField.style.marginBottom = '-5px'
    } 
    else {
      inputField.style.display = 'none';
    }
  });
