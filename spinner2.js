const spinnerMovement = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
for (let i = 0; i < spinnerMovement.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerMovement[i] + '     ');
  }, 1000 * (i + 0));
}

