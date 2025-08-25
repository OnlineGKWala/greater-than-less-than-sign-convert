
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

// Clear output on space key press
document.addEventListener('keydown', (e) => {
     if(e.code === 'Space' || e.code === 'Backspace'){
        output.value = '';
    }
});


function copyOutput(){
  navigator.clipboard.writeText(document.getElementById('output').textContent);
  alert("Copied HTML! Paste into Blogger post.");
}
