function checkPhishing() {
  const result = document.getElementById('result');
  result.innerHTML = `
    <h2>⚠️ Warning: Phishing Detected</h2>
    <p>This link uses a fake domain and scare tactics to trick users. Always check the URL carefully and don’t click on suspicious links.</p>
  `;
}
