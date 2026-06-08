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
      { href: 'online-course.html', target: '_self', key: 'online-course-content', label: '在线课程内容', desc: '企业技术学习内容库', icon: 'fas fa-book-open' },
      { href: 'online-operation.html', target: '_self', key: 'online-operation', label: '在线运营服务', desc: '学习运营与数据看板', icon: 'fas fa-chart-line' },
      { href: 'online-cases-mock.html', target: '_self', key: 'online-cases', label: '客户案例', desc: '标杆企业实践样本', icon: 'fas fa-briefcase' },
      { href: 'online-bootcamp.html', target: '_self', key: 'online-bootcamp', label: '在线训练营', desc: '项目制线上训战', icon: 'fas fa-graduation-cap' },
      { href: 'pro-certification.html', key: 'online-certification', label: 'IT职业认证', desc: '认证课程与能力评估', icon: 'fas fa-certificate' },
    ],
  },
  { href: 'course.html', key: 'course', label: '实战课程' },
  { href: 'pro-certification.html', key: 'pro-certification', label: '认证课程' },
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
        <a class="nav-drop-card ${activeKey===child.key?'active-child':''}" href="${child.href}" data-key="${child.key}" target="${child.target || '_self'}">
          <span class="nav-drop-ic"><i class="${child.icon}"></i></span>
          <span class="nav-drop-copy">
            <strong>${child.label}</strong>
            <em>${child.desc || ''}</em>
          </span>
        </a>
      `).join('');
      return `
        <div class="nav-drop ${isActive?'active':''}">
          <a href="${item.href}" data-key="${item.key}" class="nav-drop-trigger ${isActive?'active':''}" onclick="return false;">${item.label} <i class="fas fa-chevron-down"></i></a>
          <div class="nav-drop-menu" data-count="${item.children.length}">
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
        <img src="assets/common/logo.png" alt="51CTO" onerror="this.style.display='none'">
        <span class="name">企业学院</span>
      </a>
      <div class="menu">${menu}</div>
      <div class="nav-tail">
        <a class="nav-cta js-trial-btn" href="#" data-type="trial">申请试用</a>
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
        <div class="footer-logo" style="margin-top: 42px; margin-left: -20px;">
          <img src="assets/common/logo.png" alt="51CTO 企业学院" style="height: 80px; width: auto; filter: brightness(0) invert(1); opacity: 0.9;">
        </div>
      </div>
      <div class="footer-col">
        <h5>商务合作</h5>
        <ul>
          <li><a href="#" class="js-phone-btn">招商合作</a></li>
          <li><a href="#" class="js-phone-btn">师资合作</a></li>
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
    <div class="advisor" title="专属顾问"><img src="assets/common/advisor.png" alt="顾问"></div>
    <div class="side-item"><i class="fas fa-phone"></i><span>电话咨询</span></div>
    <div class="side-divider"></div>
    <div class="side-item"><i class="fab fa-weixin"></i><span>微信咨询</span></div>
    <div class="side-divider"></div>
    <div class="side-item side-cta" data-type="demo"><i class="far fa-calendar-check"></i><span>预约演示</span></div>
    <div class="side-divider"></div>
    <div class="side-item side-cta" data-type="material"><i class="far fa-file-lines"></i><span>领取资料</span></div>
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
  injectWechatModal();
});

/* ─── 申请试用弹窗（全站注入） ─── */
function injectTrialModal(){

  function showToast(msg) {
    var toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = msg;
    document.body.appendChild(toast);
    void toast.offsetWidth; // trigger reflow
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        if(toast.parentNode) document.body.removeChild(toast);
      }, 300);
    }, 2000);
  }

  var el = document.createElement('div');
  el.className = 'trial-overlay';
  el.id = 'trialOverlay';
  el.innerHTML = `<div class="trial-dialog">
    <button class="trial-close" id="trialClose"><i class="fas fa-times"></i></button>
    <div class="trial-hd">
      <h3>欢迎体验</h3>
      <p>提交信息后，专属顾问将会在1个工作日内与您联系</p>
    </div>
    <div class="trial-bd">
      <div class="trial-field">
        <div class="trial-input">
          <input type="text" placeholder="请输入您的姓名" id="trialName" maxlength="10">
        </div>
      </div>
      <div class="trial-field">
        <div class="trial-input">
          <input type="tel" placeholder="请输入手机号码" id="trialPhone" maxlength="11">
        </div>
      </div>
      <div class="trial-field">
        <div class="trial-input">
          <input type="text" placeholder="请输入公司名称" id="trialCompany" maxlength="20">
        </div>
      </div>
      <div class="trial-field">
        <div class="trial-input custom-select-wrap" id="trialProductWrap">
          <div class="custom-select-val" id="trialProductVal">选择您想咨询的产品</div>
          <i class="fas fa-chevron-down select-arrow"></i>
          <div class="custom-select-dropdown" id="trialProductDropdown">
            <div class="custom-select-option" data-value="实战培训">实战培训</div>
            <div class="custom-select-option" data-value="在线学习平台">在线学习平台</div>
            <div class="custom-select-option" data-value="人才咨询">人才咨询</div>
            <div class="custom-select-option" data-value="AI测评">AI测评</div>
            <div class="custom-select-option" data-value="实战课程">实战课程</div>
            <div class="custom-select-option" data-value="认证课程">认证课程</div>
            <div class="custom-select-option" data-value="AI智研会">AI智研会</div>
            <div class="custom-select-option" data-value="其他">其他</div>
          </div>
          <input type="hidden" id="trialProduct" value="">
        </div>
      </div>
      <div class="trial-field">
        <div class="trial-input textarea-input">
          <textarea id="trialDemand" rows="3" placeholder="请简单描述您的需求" maxlength="100"></textarea>
        </div>
      </div>
      <button class="trial-submit" id="trialSubmit">
        <i class="fas fa-paper-plane"></i> 立即提交
      </button>
    </div>
  </div>`;
  document.body.appendChild(el);

  var ov = el;
  var dg = document.getElementById('trialClose');
  var sb = document.getElementById('trialSubmit');

  function open(){ ov && ov.classList.add('open'); }
  function close(){
    if(ov) ov.classList.remove('open');
    // 等待弹窗关闭动画结束后清除表单内容
    setTimeout(function(){
      var els = ['trialName', 'trialPhone', 'trialCompany', 'trialProduct', 'trialDemand'];
      els.forEach(function(id){
        var el = document.getElementById(id);
        if(el) el.value = '';
      });
      var pVal = document.getElementById('trialProductVal');
      if(pVal) {
        pVal.textContent = '选择您想咨询的产品';
        pVal.style.color = '#b0bcca';
      }
    }, 350);
  }

  // 点击 .nav-cta, .side-cta 或 .js-trial-btn 打开
  document.body.addEventListener('click', function(e){
    var cta = e.target.closest('.nav-cta, .side-cta, .js-trial-btn');
    if(cta){ 
      e.preventDefault(); 
      
      // 动态修改主副标题
      var type = cta.getAttribute('data-type');
      var titleEl = el.querySelector('.trial-hd h3');
      var subtitleEl = el.querySelector('.trial-hd p');
      
      if(titleEl && subtitleEl) {
        if(type === 'consult') {
          titleEl.textContent = '预约咨询';
          subtitleEl.textContent = '提交信息后，专属顾问将会在1个工作日内与您联系';
        } else if(type === 'demo') {
          titleEl.textContent = '预约演示';
          subtitleEl.textContent = '提交信息后，专属顾问将会在1个工作日内与您联系';
        } else if(type === 'material') {
          titleEl.textContent = '领取资料';
          subtitleEl.textContent = '提交信息后，我们将尽快为您发送相关资料';
        } else {
          titleEl.textContent = '申请试用';
          subtitleEl.textContent = '提交信息后，专属顾问将会在1个工作日内与您联系';
        }
      }
      
      open(); 
    }
  });

  // 关闭按钮
  dg && dg.addEventListener('click', close);

  // 点击遮罩关闭
  ov && ov.addEventListener('click', function(e){ if(e.target === ov) close(); });

  // ESC 关闭
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  
  // Custom dropdown logic
  var productWrap = document.getElementById('trialProductWrap');
  var productVal = document.getElementById('trialProductVal');
  var productInput = document.getElementById('trialProduct');
  var productDropdown = document.getElementById('trialProductDropdown');
  
  if (productWrap) {
    productWrap.addEventListener('click', function(e) {
      e.stopPropagation();
      productWrap.classList.toggle('open');
    });
    
    var options = productDropdown.querySelectorAll('.custom-select-option');
    options.forEach(function(opt) {
      opt.addEventListener('click', function(e) {
        e.stopPropagation();
        var val = this.getAttribute('data-value');
        productVal.textContent = val;
        productVal.style.color = 'var(--ink)';
        productInput.value = val;
        productWrap.classList.remove('open');
      });
    });
    
    document.addEventListener('click', function() {
      productWrap.classList.remove('open');
    });
  }

  // 手机号输入限制：正则校验只允许输入数字
  var phoneInputEl = document.getElementById('trialPhone');
  if(phoneInputEl) {
    phoneInputEl.addEventListener('input', function() {
      this.value = this.value.replace(/[^\d]/g, '');
    });
  }

  // 提交
  sb && sb.addEventListener('click', function(){
    var name = document.getElementById('trialName').value.trim();
    var phone = document.getElementById('trialPhone').value.trim();
    var company = document.getElementById('trialCompany').value.trim();
    var product = document.getElementById('trialProduct').value;
    var demand = document.getElementById('trialDemand').value.trim();
    
    if(!name){ showToast('请输入您的姓名'); return; }
    if(!phone){ showToast('请输入手机号码'); return; }
    if(!/^1[3-9]\d{9}$/.test(phone)){ showToast('请输入正确的11位手机号码'); return; }
    if(!company){ showToast('请输入公司名称'); return; }
    if(!product){ showToast('请选择您想咨询的产品'); return; }

    showToast('感谢您的申请，' + name + '！我们将尽快与您联系。');
    close();
    document.getElementById('trialName').value = '';
    document.getElementById('trialPhone').value = '';
    document.getElementById('trialCompany').value = '';
    document.getElementById('trialProduct').value = '';
    if(productVal) { productVal.textContent = '选择您想咨询的产品'; productVal.style.color = '#b0bcca'; }
    document.getElementById('trialDemand').value = '';
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

  // 点击侧边栏"电话咨询"或带有.js-phone-btn的按钮打开
  document.body.addEventListener('click', function(e){
    var item = e.target.closest('.side-item');
    var phoneBtn = e.target.closest('.js-phone-btn');
    if((item && item.textContent.includes('电话咨询')) || phoneBtn){ e.preventDefault(); open(); }
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

/* ─── 微信咨询弹窗（全站注入） ─── */
function injectWechatModal(){
  var el = document.createElement('div');
  el.className = 'wechat-overlay';
  el.id = 'wechatOverlay';
  el.innerHTML = `<div class="wechat-dialog">
    <button class="wechat-close" id="wechatClose"><i class="fas fa-times"></i></button>
    <div class="wechat-hd">
      <div class="wechat-icon"><i class="fab fa-weixin"></i></div>
      <h3>微信咨询</h3>
      <p>扫一扫添加专属顾问微信</p>
    </div>
    <div class="wechat-bd">
      <div class="wechat-qr">
        <img src="assets/common/weixin_qr.png" alt="微信二维码">
      </div>
      <p class="wechat-tip">扫描二维码，获取专业服务</p>
    </div>
  </div>`;
  document.body.appendChild(el);

  var ov = el;
  var dg = document.getElementById('wechatClose');

  function open(){ ov && ov.classList.add('open'); }
  function close(){ ov && ov.classList.remove('open'); }

  // 点击侧边栏"微信咨询"打开
  document.body.addEventListener('click', function(e){
    var item = e.target.closest('.side-item');
    if(item && item.textContent.includes('微信咨询')){ e.preventDefault(); open(); }
  });

  // 关闭按钮
  dg && dg.addEventListener('click', close);

  // 点击遮罩关闭
  ov && ov.addEventListener('click', function(e){ if(e.target === ov) close(); });

  // ESC 关闭
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
}
