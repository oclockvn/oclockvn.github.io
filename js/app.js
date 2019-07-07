function buildQuickJump() {
  const title = document.querySelectorAll('.content-inner.oclockvn > h3');
  const list = [...title].map(t => `<a href='#${t.id}'>${t.innerText}</a>`).join("");

  if (list == null || list.length == 0) {
    return;
  }

  const quickJump = document.getElementById('quick-jump');
  if (quickJump != null) {
    quickJump.innerHTML = list;
  }
}

(function () {
  console.log(`%c
  Contact me via:
  P: 091.658.1461
  E: oclockvn@gmail.com
  G: gh.com/oclockvn
  S: oclockvn`, 'background: #4caf50; color: #fff; font-size: 32px;');

  buildQuickJump();
})();
