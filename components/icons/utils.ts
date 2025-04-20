let ioniconsLoaded = false;

export function loadIonicons() {
  if (ioniconsLoaded || typeof window === 'undefined') return;
  ioniconsLoaded = true;

  const esm = document.createElement('script');
  esm.type = 'module';
  esm.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
  document.head.appendChild(esm);

  const nomodule = document.createElement('script');
  nomodule.setAttribute('nomodule', '');
  nomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
  document.head.appendChild(nomodule);
}