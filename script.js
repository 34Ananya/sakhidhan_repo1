async function connectMetaMask() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      localStorage.setItem('walletAddress', accounts[0]);
      alert('Connected to MetaMask: ${accounts[0]}');
    } catch (error) {
      alert('Failed to connect MetaMask');
      console.error(error);
    }
  } else {
    alert('MetaMask not installed');
  }
}

document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const walletAddress = localStorage.getItem('walletAddress') || 'Not Connected';

  if (!walletAddress || walletAddress === 'Not Connected') {
    alert('Please connect MetaMask before submitting.');
    return;
  }
  const userData = {
    name,
    contact,
    walletAddress
  };

  localStorage.setItem('userData', JSON.stringify(userData)); // Save data in local storage

  alert('Account created successfully!');

  window.location.href = 'save.html';
});