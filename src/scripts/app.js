var isSmallScreen = window.matchMedia('(max-width: 640px)').matches;

var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  },
  trashcan: true,
  zoom: {
    controls: true,
    wheel: true,
    startScale: isSmallScreen ? 0.7 : 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true
  },
  move: {
    scrollbars: true,
    drag: true,
    wheel: true
  }
});

function resizeBlocklyWorkspace() {
  Blockly.svgResize(workspace);
}

window.addEventListener('resize', resizeBlocklyWorkspace);
window.addEventListener('orientationchange', function() {
  setTimeout(resizeBlocklyWorkspace, 300);
});

function showCopySuccess() {
  var btn = document.getElementById('copyBtn');
  var originalText = btn.innerText;
  btn.innerText = "Skopiowano!";
  btn.style.backgroundColor = "#1e8e3e";
  setTimeout(function() {
    btn.innerText = originalText;
    btn.style.backgroundColor = "";
  }, 2000);
}

function legacyCopy(text) {
  var successful = false;
  try {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    successful = document.execCommand('copy');
    document.body.removeChild(textarea);
  } catch (err) {
    successful = false;
  }
  if (successful) {
    showCopySuccess();
  } else {
    window.prompt("Skopiuj kod ręcznie (Ctrl+C, potem Enter):", text);
  }
}

function copyTextToClipboard(text) {
  if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopySuccess).catch(function(err) {
      console.error('navigator.clipboard nie zadziałał, próbuję metody zapasowej: ', err);
      legacyCopy(text);
    });
  } else {
    legacyCopy(text);
  }
}

var SIMPLYSKRIPT_BANNER_LINES = [
  " _____ _                 _       _____ _         _       _       ",
  "/  ___(_)               | |     /  ___| |       (_)     | |      ",
  "\\ `--. _ _ __ ___  _ __ | |_   _\\ `--.| | ___ __ _ _ __ | |_ ___ ",
  " `--. \\ | '_ ` _ \\| '_ \\| | | | |`--. \\ |/ / '__| | '_ \\| __/ __|",
  "/\\__/ / | | | | | | |_) | | |_| /\\__/ /   <| |  | | |_) | |_\\__ \\",
  "\\____/|_|_| |_| |_| .__/|_|\\__, \\____/|_|\\_\\_|  |_| .__/ \\__|___/",
  "                  | |       __/ |                 | |            ",
  "                  |_|      |___/                  |_|            "
];

function buildSimplySkriptBanner() {
  var lines = SIMPLYSKRIPT_BANNER_LINES.map(function(l) { return '# ' + l; });
  lines.push('#');
  lines.push('# Stworzone przy użyciu SimplySkript');
  return lines.join('\n') + '\n\n';
}

function copyCode() {
  var code = '';
  try {
    code = skriptGenerator.workspaceToCode(workspace);
  } catch (err) {
    console.error('Błąd generowania kodu: ', err);
    alert("Błąd podczas generowania kodu: " + err.message);
    return;
  }

  if (!code.trim()) {
    alert("Obszar roboczy jest pusty. Nie ma czego skopiować.");
    return;
  }

  var finalCode = buildSimplySkriptBanner() + code;

  copyTextToClipboard(finalCode);
}

document.getElementById('copyBtn').addEventListener('click', copyCode);
