(function(){
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
})();


(function(){
  const splash = document.getElementById('splash');
  const rain = document.getElementById('rain');
  const COLORS = ['#CC1111','#1155CC','#22AA44','#FFD700','#FF8800'];
  for(let i=0;i<18;i++){
    const d=document.createElement('div');
    d.className='lb';
    d.style.cssText=`
      position:absolute;left:${Math.random()*100}vw;top:-60px;
      background:${COLORS[Math.floor(Math.random()*5)]};
      width:${36+Math.random()*30}px;opacity:0.55;
      animation:rainFall ${3+Math.random()*5}s linear ${-Math.random()*6}s infinite;`;
    rain.appendChild(d);
  }
  const style=document.createElement('style');
  style.textContent='@keyframes rainFall{to{transform:translateY(110vh) rotate(360deg)}}';
  document.head.appendChild(style);
  function dismiss(){splash.style.display='none';}
  const enterTimer=setTimeout(dismiss,2800);
  setTimeout(()=>splash.classList.add('ready'),2200);
  splash.addEventListener('click',()=>{if(!splash.classList.contains('ready'))return;clearTimeout(enterTimer);dismiss();});
  document.addEventListener('keydown',()=>{if(!splash.classList.contains('ready'))return;clearTimeout(enterTimer);dismiss();});
})();


(function(){
  const c=document.getElementById('isoBlocks');
  if(!c)return;
  const cols=['#CC1111','#1155CC','#FFD700','#22AA44','#FF8800','#AA44CC','#CC1111','#FFD700','#1155CC','#22AA44'];
  const heights=[1,2,1,3,2,1,2,1,3,2];
  cols.forEach((col,i)=>{
    const stack=document.createElement('div');
    stack.style.cssText='display:flex;flex-direction:column;justify-content:flex-end;gap:0;';
    for(let j=0;j<heights[i];j++){
      const b=document.createElement('div');
      b.className='lb';
      b.style.cssText=`background:${col};width:60px;height:30px;border-radius:2px;margin-top:2px;`;
      stack.appendChild(b);
    }
    c.appendChild(stack);
  });
})();


(function(){
  const c=document.getElementById('heroRain');
  if(!c)return;
  const cols=['#CC1111','#1155CC','#FFD700','#22AA44','#FF8800','#AA44CC'];
  const isMobile=window.innerWidth<768;
  const total=isMobile?18:36;
  for(let i=0;i<total;i++){
    const b=document.createElement('div');
    b.className='fall-brick';
    const w=24+Math.random()*32;
    const drift=-80+Math.random()*160;
    b.style.setProperty('--x',Math.random()*100+'vw');
    b.style.setProperty('--w',w+'px');
    b.style.setProperty('--c',cols[Math.floor(Math.random()*cols.length)]);
    b.style.setProperty('--dur',(7+Math.random()*7)+'s');
    b.style.setProperty('--delay',(-Math.random()*12)+'s');
    b.style.setProperty('--drift',drift+'px');
    b.style.setProperty('--drift-end',(drift*.4+(-60+Math.random()*120))+'px');
    b.style.setProperty('--op',(isMobile?0.18:0.28+Math.random()*0.28).toFixed(2));
    c.appendChild(b);
  }
})();


(function(){
  const cv=document.getElementById('charCanvas');
  if(!cv)return;
  const ctx=cv.getContext('2d');
  ctx.clearRect(0,0,cv.width,cv.height);
  function r(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h);}
  const hair='#A97716',hairDark='#8A5D10',skin='#F0C7A8',skinShade='#E8B894';
  const jacket='#BDB6A2',jacketShade='#A9A18F',tie='#9E1B1E',pants='#676A5F',shoes='#6A4216',eye='#2A2D2E';
  r(35,151,63,4,'rgba(0,0,0,.22)');
  r(28,12,14,50,hair);r(20,28,14,31,hair);r(34,42,64,19,hair);r(42,31,64,16,hair);r(92,47,18,17,hairDark);r(98,60,13,25,hairDark);
  r(34,62,70,42,skin);r(28,77,7,18,skinShade);r(104,78,11,13,skinShade);r(45,86,35,12,'#F3D0BA');
  r(51,75,8,8,eye);r(68,75,8,8,eye);r(56,95,24,5,'#E7BCA3');
  r(58,103,18,15,skin);
  r(34,118,70,56,jacket);r(48,118,18,56,'#E9DDC4');r(66,118,17,56,tie);r(61,118,22,10,tie);r(34,118,15,55,jacketShade);r(89,118,15,55,jacketShade);
  r(35,173,12,14,skin);r(92,173,12,14,skin);
  r(47,184,23,52,pants);r(75,184,23,52,pants);r(70,184,6,30,'#F6F3EB');
  r(35,236,35,11,shoes);r(75,236,31,11,shoes);
})();


const SKILLS=[
  {n:'HTML / CSS',p:95,c:'#CC1111'},
  {n:'JavaScript',p:85,c:'#FFD700'},
  {n:'React / Next.js',p:78,c:'#1155CC'},
  {n:'Git / GitHub',p:88,c:'#22AA44'},
  {n:'SEO',p:80,c:'#FF8800'},
  {n:'UI / UX Dizayn',p:82,c:'#AA44CC'},
];
const sb=document.getElementById('skillBars');
SKILLS.forEach(s=>{
  const d=document.createElement('div');
  d.className='skill-row';
  d.innerHTML=`<div class="skill-lbl"><b>${s.n}</b><em>${s.p}%</em></div>
    <div class="skill-track"><div class="skill-fill" data-w="${s.p}" style="background:${s.c};"></div></div>`;
  sb.appendChild(d);
});


const ITEMS=['HTML5','CSS3','JavaScript','React','Next.js','Git','GitHub','Figma','SEO','Moslashuvchan dizayn','Brending','UI/UX','Vercel','Node.js','Web tezlik'];
const ig=document.getElementById('invGrid');
ITEMS.forEach(s=>{
  const d=document.createElement('div');
  d.className='inv-item';
  d.textContent=s;
  ig.appendChild(d);
});


const PROJS={
  manage:{title:'DARAJA 01 — MANAGE',body:'Vazifalarni boshqarish mahsuloti uchun toza va zamonaviy landing sahifa. To\'liq moslashuvchan, aniqlik va konversiyaga yo\'naltirilgan. Texnologiyalar: HTML, CSS, JavaScript.',link:'https://manage-six-kappa.vercel.app/'},
  ilmla:{title:'DARAJA 02 — ILMLA',body:'O\'zbek auditoriyasiga mo\'ljallangan ta\'lim platformasi. Web dizayn strategik konsalting bilan birlashtirilib, ishlaydigan va konversiya beradigan mahsulot yaratildi.',link:'https://ilmla.uz'},
  uztitr:{title:'DARAJA 03 — UZTITR FILMLAR',body:'O\'zbek filmlari va seriallari uchun to\'liq ma\'lumotlar bazasi. Foydalanuvchilar janr, reyting va til bo\'yicha saralay oladi. Maxsus server-side backend asosida qurilgan.',link:'https://uztitr.uz'},
  wallet:{title:'DARAJA 04 — MY WALLET',body:'Raqamli hamyon mahsuloti uchun konversiyaga yo\'naltirilgan landing sahifa. Aniq UI, to\'liq moslashuvchan tuzilma va Vercel orqali deploy qilingan.',link:'https://my-wallet-dusky.vercel.app/'},
};
function openDlg(k){
  const p=PROJS[k];
  document.getElementById('dlgTitle').textContent=p.title;
  document.getElementById('dlgBody').textContent=p.body;
  document.getElementById('dlgLink').href=p.link;
  document.getElementById('dlg').classList.add('on');
}
function closeDlg(){document.getElementById('dlg').classList.remove('on');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDlg();});


const revealEls=document.querySelectorAll('.reveal');
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill[data-w]').forEach(el=>{
        el.style.width=el.dataset.w+'%';
      });
    }
  });
},{threshold:.12});
revealEls.forEach(el=>revObs.observe(el));


(function(){
  const cv=document.getElementById('snakeCanvas');
  const ctx=cv.getContext('2d');
  const COLS=20,ROWS=20,CW=cv.width/COLS,CH=cv.height/ROWS;
  let snake,dir,ndir,food,score,hi=0,running=false,paused=false,loop;
  function rand(max){return Math.floor(Math.random()*max);}
  function init(){snake=[{x:10,y:10},{x:9,y:10},{x:8,y:10}];dir={x:1,y:0};ndir={x:1,y:0};score=0;updateHUD();placeFood();}
  function placeFood(){do{food={x:rand(COLS),y:rand(ROWS)};}while(snake.some(s=>s.x===food.x&&s.y===food.y));}
  function drawBrick(x,y,col,dark){
    const px=x*CW,py=y*CH;
    ctx.fillStyle=col;ctx.fillRect(px+1,py+1,CW-2,CH-2);
    ctx.fillStyle='rgba(255,255,255,0.14)';ctx.fillRect(px+1,py+1,CW-2,3);
    ctx.fillStyle=dark||col;ctx.beginPath();ctx.arc(px+CW/2,py+CH/2,3.5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.2)';ctx.beginPath();ctx.arc(px+CW/2,py+CH/2,1.5,0,Math.PI*2);ctx.fill();
  }
  function draw(){
    ctx.fillStyle='#000';ctx.fillRect(0,0,cv.width,cv.height);
    ctx.strokeStyle='#0d0d0d';ctx.lineWidth=.5;
    for(let i=0;i<=COLS;i++){ctx.beginPath();ctx.moveTo(i*CW,0);ctx.lineTo(i*CW,cv.height);ctx.stroke();}
    for(let i=0;i<=ROWS;i++){ctx.beginPath();ctx.moveTo(0,i*CH);ctx.lineTo(cv.width,i*CH);ctx.stroke();}
    drawBrick(food.x,food.y,'#CC1111','#990000');
    snake.forEach((seg,i)=>{drawBrick(seg.x,seg.y,i===0?'#FFD700':'#22AA44',i===0?'#AA8800':'#115522');});
  }
  function step(){
    dir=ndir;
    const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
    if(head.x<0||head.x>=COLS||head.y<0||head.y>=ROWS||snake.some(s=>s.x===head.x&&s.y===head.y)){end();return;}
    snake.unshift(head);
    if(head.x===food.x&&head.y===food.y){score++;if(score>hi)hi=score;updateHUD();placeFood();}else snake.pop();
    draw();
  }
  function updateHUD(){document.getElementById('snkScore').textContent=score;document.getElementById('snkHi').textContent=hi;}
  function end(){
    running=false;clearInterval(loop);
    ctx.fillStyle='rgba(0,0,0,.76)';ctx.fillRect(0,0,cv.width,cv.height);
    ctx.fillStyle='#CC1111';ctx.font='14px "Press Start 2P",monospace';ctx.textAlign='center';
    ctx.fillText('O\'YIN TUGADI',cv.width/2,cv.height/2-18);
    ctx.fillStyle='#FFD700';ctx.font='9px "Press Start 2P",monospace';
    ctx.fillText('HISOB: '+score,cv.width/2,cv.height/2+10);
    ctx.fillStyle='#555';ctx.fillText('QAYTA BOSHLASH: ENTER',cv.width/2,cv.height/2+38);
    document.getElementById('snkMsg').textContent='O\'YIN TUGADI';
  }
  function start(){
    init();running=true;paused=false;
    clearInterval(loop);loop=setInterval(step,140);
    document.getElementById('snkMsg').textContent='KETYAPTI...';
  }
  init();draw();
  ctx.fillStyle='rgba(0,0,0,.65)';ctx.fillRect(0,0,cv.width,cv.height);
  ctx.fillStyle='#FFD700';ctx.font='10px "Press Start 2P",monospace';ctx.textAlign='center';
  ctx.fillText('BOSHLASH UCHUN',cv.width/2,cv.height/2-8);ctx.fillText('ENTER BOSING',cv.width/2,cv.height/2+16);
  cv.addEventListener('click',()=>{if(!running)start();});
  const DIR={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},w:{x:0,y:-1},s:{x:0,y:1},a:{x:-1,y:0},d:{x:1,y:0},W:{x:0,y:-1},S:{x:0,y:1},A:{x:-1,y:0},D:{x:1,y:0}};
  document.addEventListener('keydown',e=>{
    if(e.key==='Enter'){start();return;}
    if(e.key==='p'||e.key==='P'){
      if(!running)return;
      paused=!paused;
      if(paused){clearInterval(loop);document.getElementById('snkMsg').textContent='PAUZA';}
      else{loop=setInterval(step,140);document.getElementById('snkMsg').textContent='KETYAPTI...';}
      return;
    }
    const nd=DIR[e.key];
    if(nd&&!(nd.x===-dir.x&&nd.y===-dir.y)){ndir=nd;e.preventDefault();}
  });
  document.getElementById('dUp')?.addEventListener('click',()=>{if(dir.y!==1)ndir={x:0,y:-1};if(!running)start();});
  document.getElementById('dDown')?.addEventListener('click',()=>{if(dir.y!==-1)ndir={x:0,y:1};if(!running)start();});
  document.getElementById('dLeft')?.addEventListener('click',()=>{if(dir.x!==1)ndir={x:-1,y:0};if(!running)start();});
  document.getElementById('dRight')?.addEventListener('click',()=>{if(dir.x!==-1)ndir={x:1,y:0};if(!running)start();});
})();


(function(){
  const cv=document.getElementById('flappyCanvas');
  const ctx=cv.getContext('2d');
  const W=cv.width,H=cv.height;
  const GRAV=0.28,FLAP=-6.3,PIPE_W=48,GAP=132,PIPE_SPEED=2;
  let bird,pipes,fScore,fHi=0,fRunning=false,fFrame;
  function initFlappy(){bird={x:95,y:H/2,vy:0,size:24};pipes=[];fScore=0;document.getElementById('fScore').textContent=0;}
  function spawnPipe(){const topH=45+Math.random()*(H-GAP-100);pipes.push({x:W,topH});}
  function drawBrickRect(x,y,w,h,col){
    const bh=14,bw=20;
    for(let by=y;by<y+h;by+=bh){
      for(let bx=x;bx<x+w;bx+=bw){
        ctx.fillStyle=col;ctx.fillRect(bx+1,by+1,Math.min(bw,x+w-bx)-2,Math.min(bh,y+h-by)-2);
        ctx.fillStyle='rgba(255,255,255,0.11)';ctx.fillRect(bx+1,by+1,Math.min(bw,x+w-bx)-2,2);
        ctx.fillStyle='rgba(0,0,0,0.22)';ctx.beginPath();ctx.arc(bx+bw/2,by+bh/2,3,0,Math.PI*2);ctx.fill();
      }
    }
  }
  function drawFlappy(){
    ctx.fillStyle='#0B1A2E';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='rgba(255,255,255,0.35)';
    [20,60,110,160,200,250,310,360].forEach((x,i)=>{ctx.fillRect(x,(i*37)%H,2,2);});
    pipes.forEach(p=>{
      drawBrickRect(p.x,0,PIPE_W,p.topH,'#22AA44');
      drawBrickRect(p.x,p.topH+GAP,PIPE_W,H-p.topH-GAP,'#22AA44');
      ctx.fillStyle='#115522';ctx.fillRect(p.x-4,p.topH-12,PIPE_W+8,12);ctx.fillRect(p.x-4,p.topH+GAP,PIPE_W+8,12);
    });
    const bx=bird.x-bird.size/2,by=bird.y-bird.size/2;
    ctx.fillStyle='#FFD700';ctx.fillRect(bx,by,bird.size,bird.size-4);
    ctx.fillStyle='#AA8800';ctx.fillRect(bx,by+bird.size-4,bird.size,4);
    ctx.fillStyle='#EEC900';ctx.beginPath();ctx.arc(bird.x,by-4,5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#000';ctx.fillRect(bx+bird.size-7,by+4,4,4);
    ctx.fillStyle='#fff';ctx.fillRect(bx+bird.size-6,by+5,2,2);
    drawBrickRect(0,H-20,W,20,'#5C3010');
  }
  function updateFlappy(){
    bird.vy+=GRAV;bird.y+=bird.vy;
    if(fFrame>0&&fFrame%105===0)spawnPipe();
    fFrame++;
    pipes.forEach(p=>{p.x-=PIPE_SPEED;});
    pipes=pipes.filter(p=>p.x>-PIPE_W-10);
    pipes.forEach(p=>{if(!p.passed&&p.x+PIPE_W<bird.x){p.passed=true;fScore++;if(fScore>fHi)fHi=fScore;document.getElementById('fScore').textContent=fScore;document.getElementById('fHi').textContent=fHi;}});
    const bx=bird.x-bird.size/2+3,by=bird.y-bird.size/2+3,bw=bird.size-6,bh=bird.size-6;
    if(bird.y+bird.size/2>H-20||bird.y<0){endFlappy();return;}
    for(const p of pipes){if(bx<p.x+PIPE_W&&bx+bw>p.x){if(by<p.topH||by+bh>p.topH+GAP){endFlappy();return;}}}
    drawFlappy();
    if(fRunning)requestAnimationFrame(updateFlappy);
  }
  function endFlappy(){
    fRunning=false;
    ctx.fillStyle='rgba(0,0,0,.7)';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#CC1111';ctx.font='13px "Press Start 2P",monospace';ctx.textAlign='center';ctx.fillText('O\'YIN TUGADI',W/2,H/2-16);
    ctx.fillStyle='#FFD700';ctx.font='9px "Press Start 2P",monospace';ctx.fillText('HISOB: '+fScore,W/2,H/2+10);
    ctx.fillStyle='#555';ctx.fillText('QAYTA O\'YNASH UCHUN BOSING',W/2,H/2+36);
    document.getElementById('fMsg').textContent='TUGADI — QAYTA BOSING';
  }
  function startFlappy(){initFlappy();fRunning=true;fFrame=0;document.getElementById('fMsg').textContent='KETYAPTI...';spawnPipe();requestAnimationFrame(updateFlappy);}
  function flap(){if(!fRunning){startFlappy();return;}bird.vy=FLAP;}
  cv.addEventListener('click',flap);
  document.addEventListener('keydown',e=>{if(e.code==='Space'&&document.activeElement===cv){flap();e.preventDefault();}});
  initFlappy();
  ctx.fillStyle='#0B1A2E';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#1155CC';ctx.font='10px "Press Start 2P",monospace';ctx.textAlign='center';
  ctx.fillText('BOSHLASH: BOSING',W/2,H/2-8);ctx.fillText('UCHAR G\'ISHT',W/2,H/2+16);
  drawBrickRect(0,H-20,W,20,'#5C3010');
})();


(function(){
  const toast=document.getElementById('eggToast');
  const title=document.getElementById('eggTitle');
  const body=document.getElementById('eggBody');
  const overlay=document.getElementById('eggOverlay');
  let toastTimer;
  let buffer='';
  function showEgg(t,b){title.textContent=t;body.textContent=b;toast.classList.add('on');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('on'),3800);}
  function clearOverlay(delay=1600){setTimeout(()=>{overlay.innerHTML='';},delay);}
  function sparks(count=34){
    overlay.innerHTML='';
    for(let i=0;i<count;i++){
      const s=document.createElement('span');s.className='egg-spark';
      s.style.left=(48+Math.random()*4)+'vw';s.style.top=(44+Math.random()*8)+'vh';
      s.style.setProperty('--dx',(-180+Math.random()*360)+'px');s.style.setProperty('--dy',(-130+Math.random()*260)+'px');
      overlay.appendChild(s);
    }
    clearOverlay(1200);
  }
  const eggs=[
    {code:'force',run:()=>{document.body.classList.add('force-mode');showEgg('FORCE EGG','Kuchli energiya tarqaldi.');}},
    {code:'anime',run:()=>{document.body.classList.add('anime-mode');sparks();showEgg('ANIME EGG','Anime rejimi yoqildi.');}},
    {code:'jjk',run:()=>{document.body.classList.add('jjk-mode');sparks(24);showEgg('JJK EGG','Gojo purple rejimi.');}},
    {code:'42',run:()=>{showEgg('NERD EGG: 42','Savol noma\'lum, javob esa tayyor.');}},
    {code:'67',run:()=>{const stage=document.getElementById('siteStage');document.body.classList.remove('move67-mode');void stage.offsetWidth;document.body.classList.add('move67-mode');}},
  ];
  window.addEventListener('load',()=>{
    console.log('%cMAHMUD.EXE','color:#FFD700;font-size:22px;font-weight:bold;');
    console.log('%cHidden: force, anime, jjk, 42, 67','color:#22AA44;');
  });
  document.addEventListener('keydown',e=>{
    if(e.metaKey||e.ctrlKey||e.altKey)return;
    if(e.key.length===1){
      buffer=(buffer+e.key.toLowerCase()).slice(-28);
      eggs.forEach(egg=>{if(buffer.endsWith(egg.code)){buffer='';egg.run();}});
    }
  });
})();


(function(){
  const KONAMI=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let k=0;
  document.addEventListener('keydown',e=>{
    if(e.key===KONAMI[k])k++;else k=0;
    if(k===KONAMI.length){
      k=0;
      document.body.style.transition='filter 0.5s';
      document.body.style.filter='hue-rotate(180deg) saturate(3)';
      const title=document.getElementById('eggTitle');
      const body=document.getElementById('eggBody');
      const toast=document.getElementById('eggToast');
      title.textContent='GAME EGG: KONAMI';
      body.textContent='+30 jon qo\'shildi. Aslida yo\'q, lekin urinish yaxshi.';
      toast.classList.add('on');
      setTimeout(()=>toast.classList.remove('on'),3800);
    }
  });
})();


(function(){
  const term=new Terminal({
    cursorBlink:true,
    fontFamily:'"Roboto Mono",monospace',
    fontSize:16,cols:80,rows:22,
    theme:{background:'#000',foreground:'#FFD700',cursor:'#FFD700',selection:'rgba(255,215,0,0.3)'}
  });
  const container=document.getElementById('terminal-container');
  term.open(container);
  term.write('MAHMUD ULASHEV.EXE Terminal v1.0\r\n');
  term.write('"help" yozing yordam uchun.\r\n\r\n');
  term.write('mahmud@portfolio:~$ ');
  let commandBuffer='';let history=[];let historyIndex=-1;
  function clearThemes(){document.body.classList.remove('anime-mode','force-mode','jjk-mode','move67-mode');document.body.style.filter='none';document.getElementById('eggOverlay').innerHTML='';}
  const commands={
    help:()=>{term.write('\r\nMavjud buyruqlar:\r\n  whoiam  ls  pwd  echo  clear  date  uname  theme  konami  anime  force  jjk  42  67\r\n\r\n');},
    whoiam:()=>{term.write('\r\nIsm: Mahmud Ulashev\r\nKasb: Web dasturchi\r\nShahar: Samarkand, Uzbekistan\r\nLoyihalar: 30+ | Mijozlar: 34+\r\n\r\n');},
    ls:()=>{term.write('\r\nindex.html  portfolio.js  styles.css  games/  projects/\r\n\r\n');},
    pwd:()=>{term.write('\r\n/home/mahmud/portfolio\r\n\r\n');},
    echo:(args)=>{term.write('\r\n'+args.join(' ')+'\r\n\r\n');},
    clear:()=>{term.clear();term.write('MAHMUD ULASHEV.EXE Terminal v1.0\r\nmahmud@portfolio:~$ ');},
    date:()=>{term.write('\r\n'+new Date().toString()+'\r\n\r\n');},
    uname:()=>{term.write('\r\nMAHMUD ULASHEV.EXE Portfolio OS\r\n\r\n');},
    theme:(args)=>{
      const t=args[0]?.toLowerCase();
      if(!t){term.write('\r\ntheme anime/force/jjk/off\r\n\r\n');return;}
      clearThemes();
      if(t==='anime')document.body.classList.add('anime-mode');
      else if(t==='force')document.body.classList.add('force-mode');
      else if(t==='jjk')document.body.classList.add('jjk-mode');
      term.write('\r\nTheme: '+t+'\r\n\r\n');
    },
    konami:()=>{document.body.style.filter='hue-rotate(180deg) saturate(3)';term.write('\r\n  ↑↑↓↓←→←→BA — Konami!\r\n  (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\r\n\r\n');},
    anime:()=>{document.body.classList.add('anime-mode');term.write('\r\n  ANIME MODE\r\n  ┌( ಠ‿ಠ)┘\r\n\r\n');},
    force:()=>{document.body.classList.add('force-mode');term.write('\r\n  ⚡ FORCE MODE ⚡\r\n  (ง •̀_•́)ง\r\n\r\n');},
    jjk:()=>{document.body.classList.add('jjk-mode');term.write('\r\n  🌀 JUJUTSU KAISEN 🌀\r\n  (눈_눈)\r\n\r\n');},
    '42':()=>{term.write('\r\n  42\r\n  The answer to life, the universe, and everything.\r\n  ( ͡° ͜ʖ ͡°)\r\n\r\n');},
    '67':()=>{const stage=document.getElementById('siteStage');document.body.classList.remove('move67-mode');void stage.offsetWidth;document.body.classList.add('move67-mode');term.write('\r\n  67 SHAKE MODE\r\n  (╯°□°）╯︵ ┻━┻\r\n\r\n');},
  };
  term.onData(data=>{
    if(data==='\r'||data==='\n'){
      term.write('\r\n');
      const cmd=commandBuffer.trim();
      if(cmd){
        history.push(cmd);historyIndex=-1;
        const parts=cmd.split(' '),command=parts[0].toLowerCase(),args=parts.slice(1);
        if(commands[command])commands[command](args);
        else{term.write(`\r\nbuyruq topilmadi: ${command}\r\n"help" yozing.\r\n\r\n`);}
      }
      commandBuffer='';term.write('mahmud@portfolio:~$ ');
    }else if(data==='\x7f'){
      if(commandBuffer.length>0){commandBuffer=commandBuffer.slice(0,-1);term.write('\b \b');}
    }else if(data==='\x1b[A'){
      if(history.length>0){
        if(historyIndex===-1)historyIndex=history.length-1;else if(historyIndex>0)historyIndex--;
        for(let i=0;i<commandBuffer.length;i++)term.write('\b \b');
        commandBuffer=history[historyIndex];term.write(commandBuffer);
      }
    }else if(data==='\x1b[B'){
      if(historyIndex>=0){
        historyIndex++;
        for(let i=0;i<commandBuffer.length;i++)term.write('\b \b');
        if(historyIndex<history.length){commandBuffer=history[historyIndex];}
        else{commandBuffer='';historyIndex=-1;}
        term.write(commandBuffer);
      }
    }else{commandBuffer+=data;term.write(data);}
  });
})();
