const syncParticlesCanvas = () => {
  const container = document.getElementById('particles-js');
  const activeMain = document.querySelector('main');
  if (!container) {
    return;
  }

  const pageHeight = Math.max(window.innerHeight, activeMain ? activeMain.scrollHeight : document.documentElement.scrollHeight);
  const pageWidth = document.documentElement.clientWidth || window.innerWidth;
  container.style.height = `${pageHeight}px`;
  container.style.minHeight = `${pageHeight}px`;

  const canvas = container.querySelector('.particles-js-canvas-el');
  if (canvas) {
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.style.width = `${pageWidth}px`;
    canvas.style.height = `${pageHeight}px`;
    canvas.width = Math.ceil(pageWidth * pixelRatio);
    canvas.height = Math.ceil(pageHeight * pixelRatio);
  }

  const pJS = window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS;
  if (pJS) {
    pJS.canvas.w = pageWidth;
    pJS.canvas.h = pageHeight;
  }
  if (pJS && pJS.fn && pJS.fn.canvasSize) {
    pJS.fn.canvasSize();
    if (pJS.fn.vendors && pJS.fn.vendors.densityAutoParticles) {
      pJS.fn.vendors.densityAutoParticles();
    }
  }
};
const requestParticlesCanvasSync = () => {
  requestAnimationFrame(syncParticlesCanvas);
};

window.addEventListener('load', requestParticlesCanvasSync);
window.addEventListener('resize', requestParticlesCanvasSync);

window.addEventListener('DOMContentLoaded', () => {
  // ローディング画面要素を作成
  const loader = document.createElement('div');
  loader.id = 'custom-loader';
  loader.style.position = 'fixed';
  loader.style.top = '0';
  loader.style.left = '0';
  loader.style.width = '100vw';
  loader.style.height = '100vh';
  loader.style.background = 'rgb(5, 11, 29)';
  loader.style.zIndex = '9999';
  loader.style.display = 'flex';
  loader.style.flexDirection = 'column';
  loader.style.alignItems = 'center';
  loader.style.justifyContent = 'center';
  loader.style.color = '#fff';

  // ローディングアニメーション（シンプルなCSSスピナー）
  const spinner = document.createElement('div');
  spinner.style.width = '48px';
  spinner.style.height = '48px';
  spinner.style.border = '6px solid #ccc';
  spinner.style.borderTop = '6px solid #333';
  spinner.style.borderRadius = '50%';
  spinner.style.animation = 'spin-loader 1s linear infinite';

  // 「Now loading...」のテキスト
  const loadingText = document.createElement('div');
  loadingText.textContent = 'Now loading...';
  loadingText.style.marginTop = '20px';
  loadingText.style.fontSize = '18px';
  loadingText.style.color = '#fff';
  loadingText.style.letterSpacing = '0.05em';

  // スピナーのアニメーション用CSSを埋め込み
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes spin-loader {
      0% { transform: rotate(0deg);}
      100% { transform: rotate(360deg);}
    }
  `;
  document.head.appendChild(style);

  loader.appendChild(spinner);
  loader.appendChild(loadingText);
  document.body.appendChild(loader);

  // ページロード完了後、ローディングを消す
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s';
      new WOW().init();
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 500);
    }, 600); // お好みで表示時間調整
  });
  requestParticlesCanvasSync();
});
