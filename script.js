const lines = [
  "/home/user",
  "0. ../",
  "1. 📁 Documents",
  "2. 📁 Projects",
  "3. 📄 notes.txt",
  "4. 📄 main.rs",
  "",
  "Enter (q. exit, a. create directory, f. create file, d. delete): ",
  "> 2",
  "",
  "/home/user/Projects",
  "0. ../",
  "1. 📁 AExplorer",
  "2. 📄 Cargo.toml",
  "",
  "> _"
];

const terminal = document.getElementById("terminal-output");

let i = 0;

function addLine() {
  if (i >= lines.length) return;

  const div = document.createElement("div");

  div.className = "line";
  div.style.animationDelay = `${i * 0.05}s`;
  div.textContent = lines[i];

  terminal.appendChild(div);

  terminal.scrollTop = terminal.scrollHeight;

  i++;

  setTimeout(addLine, 150);
}

addLine();
