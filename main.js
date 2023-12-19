function displayResult() {
  var title = document.getElementById("titleInput").value;
  var content = document.getElementById("contentInput").value;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<strong>RESULT</strong><hr><strong>Title:</strong> " + title + "<br><strong>Content:</strong> " + content;

  // Show the result with fade-in animation
  resultDiv.style.opacity = 1;
}

function clearResult() {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.style.opacity = 0;

  // Clear the text in the title and content fields
  document.getElementById("titleInput").value = "";
  document.getElementById("contentInput").value = "";
}
 