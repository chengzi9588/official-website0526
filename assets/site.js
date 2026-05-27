// ─────────────── Shared site js ───────────────

// Render top navbar
window.SITE_NAV = [
  { href: 'index.html', key: 'index', label: '首页' },
  { href: 'ai-talent.html', key: 'ai-talent', label: 'AI人才' },
  { href: 'consulting.html', key: 'consulting', label: '人才咨询' },
  { href: 'assessment.html', key: 'assessment', label: 'AI测评' },
  {
    href: 'index.html#services',
    key: 'online-learning',
    label: '在线学习',
    children: [
      { href: 'index.html#services', key: 'online-course-content', label: '在线课程内容', desc: '企业技术学习内容库', icon: 'fas fa-book-open' },
      { href: 'index.html#services', key: 'online-operation', label: '在线运营服务', desc: '学习运营与数据看板', icon: 'fas fa-chart-line' },
      { href: 'cases.html', key: 'online-cases', label: '客户案例', desc: '标杆企业实践样本', icon: 'fas fa-briefcase' },
      { href: 'course.html', key: 'online-bootcamp', label: '在线训练营', desc: '项目制线上训战', icon: 'fas fa-graduation-cap' },
      { href: 'pro-certification.html', key: 'online-certification', label: 'IT职业认证', desc: '认证课程与能力评估', icon: 'fas fa-certificate' },
    ],
  },
  {
    href: 'course.html',
    key: 'course',
    label: '定制课程',
    children: [
      { href: 'course.html', key: 'course', label: '实战课程', desc: '面向业务场景定制交付', icon: 'fas fa-laptop-code' },
      { href: 'pro-certification.html', key: 'pro-certification', label: '职业认证课程', desc: '岗位认证与厂商认证体系', icon: 'fas fa-award' },
    ],
  },
  { href: 'ai-research.html', key: 'ai-research', label: 'AI智研会' },
  { href: 'cases.html', key: 'cases', label: '客户案例' },
  { href: 'about.html', key: 'about', label: '关于我们' },
];

function renderNav(activeKey){
  const nav = document.getElementById('site-nav');
  if(!nav) return;
  const menu = window.SITE_NAV.map(item => {
    const isActive = activeKey===item.key || (item.children || []).some(child => child.key === activeKey);
    if(item.children){
      const children = item.children.map(child => `
        <a class="nav-drop-card ${activeKey===child.key?'active-child':''}" href="${child.href}" data-key="${child.key}">
          <span class="nav-drop-ic"><i class="${child.icon}"></i></span>
          <span class="nav-drop-copy">
            <strong>${child.label}</strong>
          </span>
        </a>
      `).join('');
      return `
        <div class="nav-drop ${isActive?'active':''}">
          <a href="${item.href}" data-key="${item.key}" class="nav-drop-trigger ${isActive?'active':''}" onclick="return false;">${item.label} <i class="fas fa-chevron-down"></i></a>
          <div class="nav-drop-menu">
            <div class="nav-drop-inner">
              <div class="nav-drop-grid">${children}</div>
            </div>
          </div>
        </div>
      `;
    }
    return `<a href="${item.href}" data-key="${item.key}" class="${isActive?'active':''}">${item.label}</a>`;
  }).join('');
  nav.innerHTML = `
    <div class="container">
      <a class="brand" href="index.html">
        <img src="assets/logo.png" alt="51CTO" onerror="this.style.display='none'">
        <span class="name">企业学院</span>
      </a>
      <div class="menu">${menu}</div>
      <div class="nav-tail">
        <div class="phone-chip"><i class="fas fa-phone-alt"></i><span>400-101-1651</span></div>
        <a class="nav-cta" href="#">申请试用</a>
        <div class="nav-right-drop">
          <a class="nav-right-trigger" href="#" onclick="return false;">51CTO <i class="fas fa-chevron-down"></i></a>
          <div class="nav-right-menu">
            <a href="https://edu.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO学堂</a>
            <a href="https://e.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO精培</a>
            <a href="https://www.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO媒体</a>
            <a href="https://blog.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO博客</a>
          </div>
        </div>
      </div>
    </div>`;
}

function renderFooter(){
  const f = document.getElementById('site-footer');
  if(!f) return;
  f.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-col footer-col-1">
        <h5>售前咨询</h5>
        <div class="phone">400-101-1651 (转2)</div>
        <p class="time">周一至周五 10:00-19:00</p>
      </div>
      <div class="footer-col">
        <h5>商务合作</h5>
        <ul>
          <li><a href="#">招商合作</a></li>
          <li><a href="#">师资合作</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>友情链接</h5>
        <ul>
          <li><a href="https://www.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO官网</a></li>
          <li><a href="https://edu.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO学堂</a></li>
          <li><a href="https://blog.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO博客</a></li>
          <li><a href="https://e.51cto.com/" target="_blank" rel="noopener noreferrer">51CTO精培</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>关于我们</h5>
        <ul>
          <li><a href="about.html">公司介绍</a></li>
          <li><a href="about.html">加入我们</a></li>
        </ul>
      </div>
      <div class="footer-col footer-contact">
        <h5>联系我们</h5>
        <div class="company-info">
          <strong>北京无忧创想信息技术有限公司</strong>
          <p>地址：北京市海淀区中关村南一条甲一号<br>ECO中科爱克大厦6-7层</p>
          <p>邮编：100190</p>
          <p>联系电话：010-68476636</p>
        </div>
        <div class="company-info">
          <strong>无忧创想（武汉）信息技术有限公司</strong>
          <p>地址：湖北省武汉市洪山区关山大道111号<br>光谷时代广场A座1002</p>
          <p>邮编：430074</p>
          <p>联系电话：027-59533557</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bottom">
        <span>Copyright © 2005-2025 51CTO.com 版权所有京ICP证060544号京ICP备09067568号京公网安备 110108002980号</span>
      </div>
    </div>`;
}

function renderSide(){
  const s = document.getElementById('site-side');
  if(!s) return;
  s.innerHTML = `
    <div class="advisor" title="专属顾问"><img src="assets/advisor.jpg" alt="顾问"></div>
    <div class="side-item"><i class="fas fa-phone"></i><span>电话咨询</span></div>
    <div class="side-divider"></div>
    <div class="side-item"><i class="fab fa-weixin"></i><span>微信咨询</span></div>
    <div class="side-divider"></div>
    <div class="side-item"><i class="far fa-calendar-check"></i><span>预约演示</span></div>
    <div class="side-divider"></div>
    <div class="side-item"><i class="far fa-file-lines"></i><span>领取资料</span></div>
    <a class="side-top" href="#top" title="回到顶部" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;"><i class="fas fa-arrow-up"></i></a>`;
}

// Reveal-on-scroll
function initReveal(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// Marquee filler
function fillMarquee(id, items){
  const row = document.getElementById(id);
  if(!row) return;
  const html = items.map(n => {
    if(typeof n === 'string'){
      return `<div class="logo-pill"><img src="assets/logos/${n}.png" alt="" onerror="this.outerHTML='<span style=&quot;font-weight:700;color:var(--ink-2)&quot;>${n}</span>'"></div>`;
    }
    return `<div class="logo-pill"><span style="font-weight:700;color:var(--ink-2)">${n}</span></div>`;
  }).join('');
  row.innerHTML = html + html;
}

// Auto init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderNav(document.body.dataset.page);
  renderFooter();
  renderSide();
  initReveal();
  injectTrialModal();
  injectPhoneModal();
});

/* ─── 申请试用弹窗（全站注入） ─── */
function injectTrialModal(){
  var el = document.createElement('div');
  el.className = 'trial-overlay';
  el.id = 'trialOverlay';
  el.innerHTML = `<div class="trial-dialog">
    <button class="trial-close" id="trialClose"><i class="fas fa-times"></i></button>
    <div class="trial-hd">
      <div class="trial-icon"><i class="fas fa-hand-sparkles"></i></div>
      <h3>欢迎体验</h3>
      <p>填写以下信息，将有专业顾问联系您</p>
    </div>
    <div class="trial-bd">
      <div class="trial-field">
        <label>如何称呼您？</label>
        <div class="trial-input">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="请输入您的姓名" id="trialName">
        </div>
      </div>
      <div class="trial-field">
        <label>联系方式</label>
        <div class="trial-input">
          <i class="fas fa-mobile-alt"></i>
          <input type="tel" placeholder="请输入手机号码" id="trialPhone">
        </div>
      </div>
      <div class="trial-field">
        <label>公司名称</label>
        <div class="trial-input">
          <i class="fas fa-building"></i>
          <input type="text" placeholder="请输入公司名称" id="trialCompany">
        </div>
      </div>
      <button class="trial-submit" id="trialSubmit">
        <i class="fas fa-paper-plane"></i> 立即申请
      </button>
    </div>
  </div>`;
  document.body.appendChild(el);

  var ov = el;
  var dg = document.getElementById('trialClose');
  var sb = document.getElementById('trialSubmit');

  function open(){ ov && ov.classList.add('open'); }
  function close(){ ov && ov.classList.remove('open'); }

  // 点击 .nav-cta 打开
  document.body.addEventListener('click', function(e){
    if(e.target.closest('.nav-cta')){ e.preventDefault(); open(); }
  });

  // 关闭按钮
  dg && dg.addEventListener('click', close);

  // 点击遮罩关闭
  ov && ov.addEventListener('click', function(e){ if(e.target === ov) close(); });

  // ESC 关闭
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  // 提交
  sb && sb.addEventListener('click', function(){
    var name = document.getElementById('trialName').value.trim();
    var phone = document.getElementById('trialPhone').value.trim();
    var company = document.getElementById('trialCompany').value.trim();
    if(!name){ alert('请输入您的称呼'); return; }
    if(!phone){ alert('请输入联系方式'); return; }
    if(!company){ alert('请输入公司名称'); return; }
    alert('感谢您的申请，' + name + '！我们将尽快与您联系。');
    close();
    document.getElementById('trialName').value = '';
    document.getElementById('trialPhone').value = '';
    document.getElementById('trialCompany').value = '';
  });
}

/* ─── 电话咨询弹窗（全站注入） ─── */
function injectPhoneModal(){
  var el = document.createElement('div');
  el.className = 'phone-overlay';
  el.id = 'phoneOverlay';
  el.innerHTML = `<div class="phone-dialog">
    <button class="phone-close" id="phoneClose"><i class="fas fa-times"></i></button>
    <div class="phone-hd">
      <div class="phone-icon"><i class="fas fa-phone-alt"></i></div>
      <h3>电话咨询</h3>
      <p>欢迎致电，我们将竭诚为您服务</p>
    </div>
    <div class="phone-bd">
      <div class="phone-number" id="phoneNumber">
        <i class="fas fa-phone-alt"></i>
        <span>400-101-1651</span>
      </div>
      <p class="phone-tip">周一至周五 10:00-19:00</p>
      <button class="phone-copy-btn" id="phoneCopyBtn">
        <i class="far fa-copy"></i> 复制号码
      </button>
    </div>
  </div>`;
  document.body.appendChild(el);

  var ov = el;
  var dg = document.getElementById('phoneClose');
  var cp = document.getElementById('phoneCopyBtn');

  function open(){ ov && ov.classList.add('open'); }
  function close(){ ov && ov.classList.remove('open'); }

  // 点击侧边栏"电话咨询"打开
  document.body.addEventListener('click', function(e){
    var item = e.target.closest('.side-item');
    if(item && item.textContent.includes('电话咨询')){ e.preventDefault(); open(); }
  });

  // 关闭按钮
  dg && dg.addEventListener('click', close);

  // 点击遮罩关闭
  ov && ov.addEventListener('click', function(e){ if(e.target === ov) close(); });

  // ESC 关闭
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  // 复制号码
  cp && cp.addEventListener('click', function(){
    navigator.clipboard.writeText('400-101-1651').then(function(){
      cp.innerHTML = '<i class="fas fa-check"></i> 已复制';
      cp.style.background = 'linear-gradient(135deg,#10b981,#059669)';
      setTimeout(function(){
        cp.innerHTML = '<i class="far fa-copy"></i> 复制号码';
        cp.style.background = 'linear-gradient(135deg,var(--red),#e6212a)';
      }, 2000);
    }).catch(function(){
      alert('复制失败，请手动记录：400-101-1651');
    });
  });
}
