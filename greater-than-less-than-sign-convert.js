const input = document.getElementById('inputText');
const output = document.getElementById('outputText');
const convertBtn = document.getElementById('convertBtn');

// Convert button click
convertBtn.addEventListener('click', () => {
    let converted = input.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    output.value = converted;
    input.value = ''; // clear input
    output.focus();
    output.select();
});

// Clear output on ESC or Ctrl+Space
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.code === 'Space') || e.code === 'Escape') {
        output.value = '';
    }
});

function copyOutput() {
  navigator.clipboard.writeText(output.value);
  alert("Copied HTML! Paste into your File.");
}
