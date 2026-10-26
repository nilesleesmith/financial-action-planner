const apiButton = document.getElementById("check-api");
const apiStatus = document.getElementById("api-status");

if (apiButton && apiStatus) {
  apiButton.addEventListener("click", async function () {
    apiStatus.textContent = "Checking API...";

    try {
      const response = await fetch("/api/health");

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      apiStatus.textContent = "API status: " + data.status;
    } catch {
      apiStatus.textContent = "Could not reach the API. Check that the server is running.";
    }
  });
}

const form = document.getElementById("assessment-form");
const formStatus = document.getElementById("assessment-status");

if (form && formStatus) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const choice = form.querySelector('input[name="priority"]:checked');

    if (choice) {
      formStatus.textContent =
        "Selection recorded on this page only. Financial assessment is not implemented yet.";
    } else {
      formStatus.textContent = "Choose an option to continue.";
    }
  });
}
