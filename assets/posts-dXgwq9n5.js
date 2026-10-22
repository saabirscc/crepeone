import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m}from"./social-CvsRrNjX.js";const h=`# Crepe One · captions for the 10 posts

One block per post. Image files: \`social/out/NN-slug.png\` (feed, 1080×1350) and \`NN-slug-story.png\` (story, 1080×1920).
Every caption ends with the order line and the same four hashtags; add more per post if you like.

---

## 01 · Yaad la qeybsan lahayd? (\`01-share-it.png\`)

Crepe Dubai Pistachio, laba qeybood. Badh adiga, badh isaga. 🍴
Yaad la qeybsan lahayd? Tag-garee hoos 👇

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 02 · Crepe Dubai (\`02-crepe-dubai.png\`)

Trend-ka Dubai wuxuu yimid Crepe One. 🍫💚
Shukulaato iyo pistachio, oo lagu marmariyay crepe kulul.

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 03 · Lotus ama Chocolate? (\`03-this-or-that.png\`)

Kee dooran lahayd? 👇
Lotus 🤎 ama Chocolate 🍫 — comment-ka ku qor.

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 04 · Halxiraale Jimce (\`04-riddle-friday.png\`)

Halxiraale Jimce! 🧠
Waxaan leeyahay daaqado yaryar oo badan, laakiin guri ma ihi. Shukulaato ayaa la igu shubaa. Maxaan ahay?
Jawaabta comments-ka ku qor 👇

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

_(Answer for the team: waffle.)_

---

## 05 · Menu-ga oo dhan (\`05-whole-menu.png\`)

36 cunto, 4 qaybood, hal meel. 😋
Crepe, waffle, burger iyo wings — maxaad maanta dalbanaysaa?

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 06 · First crepe in Somalia (\`06-first-crepe.png\`)

Crepe-kii ugu horreeyay Soomaaliya. 🇸🇴
Saddex laamood: Taleex Mall, Airport Road iyo Aleen Square.

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 07 · Furan ilaa 12:30 (\`07-late-night.png\`)

Gaajo habeen? 🌙 Waan furan nahay ilaa 12:30.
Maalin kasta, 3 pm – 12:30 am.

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 08 · Sidee loo laabaa? (\`08-the-fold.png\`)

Sidee loo laabaa? 4 tallaabo: fidi, laab, mar kale laab, qurxi. 🥞
Adigu sidee jeceshahay crepe-gaaga?

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 09 · 3 laamood (\`09-branches-map.png\`)

3 laamood. Hal dhadhan. 📍
Taleex Mall · 0619700055
Airport Road · 0619543335
Aleen Square · 0619543336
Kee kuugu dhow?

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

---

## 10 · CUSUB: MacMac Crepe (\`10-new-drop.png\`)

CUSUB 🔥 MacMac Crepe.
Hadda ku jira menu-ga. Isku day maanta.

Dalbo hadda ⬇️ 1980

#xamarcadey #somalitiktok #crepeone #mogadishu

_(Check with the shop that MacMac really is new before posting; if not, change "CUSUB" to "Ma tijaabisay?")_
`,i="/crepeone/",c={};h.split(/\n---\n/).forEach(a=>{const n=a.match(/^##\s*(\d\d)[^\n]*\n([\s\S]*)$/m);n&&(c[n[1]]=n[2].replace(/^\s*\n/,"").trim())});const r=document.getElementById("grid"),l=document.querySelector(".toast");let s="post";const d=a=>{l.textContent=a,l.classList.add("on"),clearTimeout(d.t),d.t=setTimeout(()=>l.classList.remove("on"),1800)};function p(){r.className="grid"+(s==="story"?" story":""),r.innerHTML=m.map((a,n)=>{const e=String(n+1).padStart(2,"0"),o=`crepe-one-${e}-${a.id.replace(/^\d+-/,"")}${s==="story"?"-story":""}.jpg`,t=s==="story"?`${i}social/${a.id}-story-540.webp`:`${i}social/${a.id}-480.webp`,u=c[e]||a.caption;return`<li class="card">
      <div class="shot"><img src="${t}" alt="${a.alt}" loading="lazy" decoding="async"><span class="num">${e}</span></div>
      <div class="body">
        <h2>${a.title}</h2>
        <p class="cap" lang="so">${u.replace(/</g,"&lt;")}</p>
        <div class="acts">
          <a class="btn btn-red" href="${i}social/dl/${o}" download="${o}">⬇ Download</a>
          <button type="button" class="btn btn-line" data-copy="${e}">Copy caption</button>
          <a class="btn btn-line" href="${i}social/dl/${o}" target="_blank" rel="noopener">Open</a>
        </div>
      </div>
    </li>`}).join("")}document.querySelectorAll(".seg button").forEach(a=>a.addEventListener("click",()=>{s=a.dataset.size,document.querySelectorAll(".seg button").forEach(n=>n.setAttribute("aria-pressed",String(n===a))),p()}));r.addEventListener("click",async a=>{const n=a.target.closest("[data-copy]");if(!n)return;const e=n.dataset.copy,o=c[e]||m[+e-1].caption;try{await navigator.clipboard.writeText(o),d("Caption copied")}catch{const t=document.createElement("textarea");t.value=o,document.body.append(t),t.select(),document.execCommand("copy"),t.remove(),d("Caption copied")}});p();
