(function(){const z=document.getElementById("datos-ilustres-json");if(!z)return;const G=JSON.parse(z.textContent||"[]"),j=document.querySelectorAll(".canon-card"),f=document.getElementById("canvas-atmosfera-lvt");if(f){const t=f.getContext("2d");if(t){let n=function(){!d||!t||(t.clearRect(0,0,e,r),s.forEach(o=>{o.x+=o.dx,o.y+=o.dy,o.y<0&&(o.y=r),o.x<0&&(o.x=e),o.x>e&&(o.x=0),t.beginPath(),t.arc(o.x,o.y,o.r,0,Math.PI*2),t.fillStyle=`rgba(197, 160, 89, ${o.a})`,t.fill()}),g=requestAnimationFrame(n))},e=f.width=f.parentElement?.clientWidth||window.innerWidth,r=f.height=f.parentElement?.clientHeight||800;window.addEventListener("resize",()=>{e=f.width=f.parentElement?.clientWidth||window.innerWidth,r=f.height=f.parentElement?.clientHeight||800});const s=[];for(let o=0;o<24;o++)s.push({x:Math.random()*e,y:Math.random()*r,r:Math.random()*2+1,dx:(Math.random()-.5)*.4,dy:-Math.random()*.5-.1,a:Math.random()*.4+.1});let g,d=!0;new IntersectionObserver(o=>{d=o[0].isIntersecting,d?n():cancelAnimationFrame(g)}).observe(f),n()}}const l=document.getElementById("audio-player-global"),W=document.getElementById("btn-reproductor-toggle"),H=document.getElementById("icon-play"),O=document.getElementById("icon-pause"),p=document.getElementById("select-audio-track"),y=document.getElementById("player-track-name"),T=document.getElementById("slider-volumen"),A=document.getElementById("visualizer-bars");l&&W&&p&&(l.src=p.value,l.volume=parseFloat(T?.value||"0.35"),l.addEventListener("play",()=>{H?.classList.add("hidden"),O?.classList.remove("hidden"),A?.classList.remove("hidden"),A?.classList.add("flex");const t=document.querySelector(".btn-escuchar-autor");if(t){const n=t.getAttribute("data-audio");n&&l.src.endsWith(n)&&(t.innerHTML="<span>⏸ Pausar reproducción</span>")}}),l.addEventListener("pause",()=>{H?.classList.remove("hidden"),O?.classList.add("hidden"),A?.classList.add("hidden"),A?.classList.remove("flex");const t=document.querySelector(".btn-escuchar-autor");t&&(t.innerHTML="<span>▶ Reproducir esta obra</span>")}),W.addEventListener("click",()=>{l.paused?l.play().catch(t=>console.log("Audio play error:",t)):l.pause()}),p.addEventListener("change",()=>{const t=!l.paused;l.src=p.value,y&&(y.textContent=p.options[p.selectedIndex].text),t&&l.play().catch(n=>console.log("Audio play error:",n))}),T?.addEventListener("input",()=>{l.volume=parseFloat(T.value)}),l.addEventListener("ended",()=>{const t=(p.selectedIndex+1)%p.options.length;p.selectedIndex=t,l.src=p.value,y&&(y.textContent=p.options[t].text),l.play().catch(n=>console.log("Autoplay next track error:",n))}));const N=document.querySelectorAll(".category-btn"),R=document.getElementById("input-buscar-ilustres");let D="all";function U(){const t=(R?.value||"").toLowerCase().trim();j.forEach(n=>{const e=n,r=e.getAttribute("data-category")||"",s=e.getAttribute("data-search")||"",g=D==="all"||r.includes(D),d=!t||s.includes(t);g&&d?e.style.display="flex":e.style.display="none"})}N.forEach(t=>{t.addEventListener("click",()=>{N.forEach(n=>{n.classList.remove("active","bg-[#EF7B38]","text-white"),n.classList.add("bg-white","text-[#191614]")}),t.classList.add("active","bg-[#EF7B38]","text-white"),t.classList.remove("bg-white","text-[#191614]"),D=t.getAttribute("data-filter")||"all",U()})}),R?.addEventListener("input",U);const b=document.getElementById("dialog-biografia-ilustre"),K=document.getElementById("btn-cerrar-modal"),k=document.getElementById("modal-content-target"),Z=document.querySelectorAll(".btn-abrir-modal"),L=document.getElementById("tab-btn-semblanza"),C=document.getElementById("tab-btn-dossier"),Q=document.getElementById("view-semblanza"),I=document.getElementById("view-dossier"),B=document.getElementById("dossier-rendered-content"),v=document.getElementById("dossier-reading-box"),tt=document.getElementById("dossier-font-dec"),et=document.getElementById("dossier-font-inc");let x=null,E=16;const st=document.querySelector(".btn-cerrar-modal-mobile"),q={};function ot(t){if(!t)return"";const r=t.replace(/^\uFEFF/,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").split(/\r?\n/),s=[];let g=[],d=null,i=[];function o(){if(g.length>0){const h=g.join("<br/>");s.push(`<p class="my-3 leading-relaxed font-serif text-[#2D2926]">${h}</p>`),g=[]}}function c(){if(i.length>0){const h=i.join("<br/>");s.push(`<blockquote class="p-3 my-3 bg-[#FAF7F0] border-l-4 border-[#EF7B38] italic font-serif text-sm text-[#191614] rounded-r-lg">${h}</blockquote>`),i=[]}}let F=!1,S=[];function u(){d&&(s.push(d==="ul"?"</ul>":"</ol>"),d=null)}function V(){F&&(s.push(`<pre class="p-3 my-3 bg-[#1C1814] text-[#FAF7F0] rounded-xl overflow-x-auto text-xs font-mono border border-[#383129] leading-relaxed"><code>${S.join(`
`)}</code></pre>`),S=[],F=!1)}function m(h){return h.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#EF7B38] underline hover:text-[#8F3812] font-semibold">$1</a>').replace(/\*\*(.*?)\*\*/g,'<strong class="font-bold text-[#191614]">$1</strong>').replace(/\*(.*?)\*/g,'<em class="italic">$1</em>').replace(/`([^`]+)`/g,'<code class="px-1.5 py-0.5 rounded bg-[#FAF7F0] border border-[#E3D7C5] font-mono text-xs text-[#EF7B38]">$1</code>')}for(let h=0;h<r.length;h++){const Y=r[h],a=Y.trim();if(a.startsWith("```")){F?V():(o(),c(),u(),F=!0,S=[]);continue}if(F){S.push(Y);continue}if(!a){o(),c(),u();continue}if(/^(_{3,}|-{3,}|\*{3,})$/.test(a)){o(),c(),u(),s.push('<hr class="my-6 border-[#E3D7C5]"/>');continue}if(/^DOSSIER\s+(DOCUMENTAL|CANÓNICO)/i.test(a)){o(),c(),u(),s.push(`<div class="text-xs font-title font-bold uppercase tracking-widest text-[#C5A059] mb-1">${m(a)}</div>`);continue}if(/^AUTOR\s+N[°ºo]?\s+[0-9]+:.*$/i.test(a)){o(),c(),u(),s.push(`<h1 class="text-2xl sm:text-3xl font-serif font-black text-[#191614] mt-2 mb-3 pb-2 border-b-2 border-[#C5A059]">${m(a)}</h1>`);continue}if(/^(SECCIÓN\s+[0-9]+:.*$)/i.test(a)){o(),c(),u(),s.push(`<h2 class="text-xl sm:text-2xl font-serif font-black text-[#EF7B38] mt-8 mb-3 pb-1 border-b border-[#EF7B38]/30">${m(a)}</h2>`);continue}if(/^([IVXLCDM]+\.\s+.*$)/.test(a)){o(),c(),u(),s.push(`<h3 class="text-lg sm:text-xl font-serif font-bold text-[#7A5B1E] mt-6 mb-2">${m(a)}</h3>`);continue}if(a.startsWith("# ")){o(),c(),u(),s.push(`<h1 class="text-2xl sm:text-3xl font-serif font-black text-[#191614] mt-6 mb-4 pb-2 border-b-2 border-[#C5A059]">${m(a.slice(2))}</h1>`);continue}if(a.startsWith("## ")){o(),c(),u(),s.push(`<h2 class="text-xl sm:text-2xl font-serif font-black text-[#EF7B38] mt-6 mb-3">${m(a.slice(3))}</h2>`);continue}if(a.startsWith("### ")){o(),c(),u(),s.push(`<h3 class="text-lg font-serif font-bold text-[#7A5B1E] mt-5 mb-2">${m(a.slice(4))}</h3>`);continue}if(a.startsWith("#### ")){o(),c(),u(),s.push(`<h4 class="text-base font-serif font-bold text-[#191614] mt-4 mb-1">${m(a.slice(5))}</h4>`);continue}if(a.startsWith("&gt; ")||a.startsWith("> ")){o(),u();const it=a.startsWith("&gt; ")?a.slice(5):a.slice(2);i.push(m(it));continue}else c();const _=a.match(/^[\*\-]\s+(.*)$/);if(_){o(),c(),d!=="ul"&&(u(),s.push('<ul class="my-3 space-y-1 list-disc pl-5">'),d="ul"),s.push(`<li class="text-sm font-serif text-[#2D2926] my-1">${m(_[1])}</li>`);continue}const J=a.match(/^([0-9]+)\.\s+(.*)$/);if(J){o(),c(),d!=="ol"&&(u(),s.push('<ol class="my-3 space-y-1 list-decimal pl-5">'),d="ol"),s.push(`<li class="text-sm font-serif text-[#2D2926] my-1">${m(J[2])}</li>`);continue}u(),g.push(m(a))}return o(),c(),u(),V(),s.join(`
`)}function nt(t){if(!B)return;if(q[t]){B.innerHTML=q[t];return}B.innerHTML='<p class="italic text-center py-8 text-gray-500">Cargando texto canónico integral...</p>';const n=`/dossiers/${t}.md`;fetch(n).then(e=>{if(!e.ok)throw new Error("No se pudo cargar el dossier");return e.text()}).then(e=>{const r=ot(e);q[t]=r,(x?x.dossierSlug||x.id:"")===t&&(B.innerHTML=r)}).catch(e=>{(x?x.dossierSlug||x.id:"")===t&&(B.innerHTML=`
              <div class="p-6 bg-amber-50 text-amber-900 rounded-xl border border-amber-200 text-center">
                <p class="font-bold">Aviso del Consejo Editorial:</p>
                <p class="text-xs mt-1">El texto canónico está en proceso de consulta o actualización.</p>
              </div>
            `)})}function M(t){t==="semblanza"?(L?.classList.add("bg-[#EF7B38]","text-white"),L?.classList.remove("bg-white","text-[#191614]"),C?.classList.remove("bg-[#EF7B38]","text-white"),C?.classList.add("bg-white","text-[#191614]"),Q?.classList.remove("hidden"),I?.classList.add("hidden"),I?.classList.remove("flex")):(C?.classList.add("bg-[#EF7B38]","text-white"),C?.classList.remove("bg-white","text-[#191614]"),L?.classList.remove("bg-[#EF7B38]","text-white"),L?.classList.add("bg-white","text-[#191614]"),Q?.classList.add("hidden"),I?.classList.remove("hidden"),I?.classList.add("flex"),x&&nt(x.dossierSlug||x.id))}L?.addEventListener("click",()=>M("semblanza")),C?.addEventListener("click",()=>M("dossier")),tt?.addEventListener("click",()=>{E=Math.max(14,E-1),v&&(v.style.fontSize=`${E}px`)}),et?.addEventListener("click",()=>{E=Math.min(24,E+1),v&&(v.style.fontSize=`${E}px`)});function X(t,n="semblanza"){const e=G.find(i=>i.id===t);if(!e||!k||!b)return;x=e;const r=e.bloqueCanon==="tabasquenos"?"🌴 Tabasco":e.bloqueCanon==="mexicanos"?"🦅 México":"🌍 Universal";k.innerHTML=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Columna Izquierda: Placa / Retrato y Datos Clave -->
          <div class="lg:col-span-4 space-y-4">
            <div class="rounded-2xl overflow-hidden border-2 border-[#C5A059] bg-[#FAF7F0] shadow-md aspect-[4/5]">
              <img 
                src="${e.foto}" 
                alt="${e.nombre}" 
                class="w-full h-full object-cover object-top"
                onerror="this.onerror=null; this.src='${e.fotoFallback||e.foto}';"
              />
            </div>
            
            <div class="bg-white p-4 rounded-xl border border-[#E3D7C5] shadow-xs text-xs space-y-2">
              <p><strong>Nacimiento:</strong> ${e.nacimiento}</p>
              <p><strong>Fallecimiento:</strong> ${e.fallecimiento}</p>
              <p><strong>Origen:</strong> ${e.municipioOrigen}</p>
              <p><strong>Movimiento:</strong> ${e.movimiento}</p>
              <p><strong>Canon:</strong> ${r} (⏱️ ${e.tiempoLecturaMinutos||30} min lectura)</p>
            </div>

            <!-- Pista recomendada de este autor -->
            <div class="bg-[#FAF7F0] p-4 rounded-xl border border-[#C5A059]/50 text-xs">
              <p class="font-title font-bold text-[#7A5B1E] uppercase tracking-wider text-[10px] mb-1">
                Música recomendada para su lectura:
              </p>
              <p class="font-serif font-bold text-[#191614]">${e.audioSugerido.titulo}</p>
              <p class="text-[11px] text-[#7A7268]">${e.audioSugerido.compositor}</p>
              <button 
                type="button" 
                class="btn-escuchar-autor min-h-[44px] mt-2.5 w-full py-2 px-3 rounded-xl bg-[#EF7B38] hover:bg-[#8F3812] text-white text-xs font-title font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                data-audio="${e.audioSugerido.archivo}"
                data-name="${e.audioSugerido.titulo}"
              >
                <span>▶ Reproducir esta obra</span>
              </button>
            </div>

            <!-- Botón rápido al dossier -->
            <button 
              type="button" 
              class="btn-ir-a-dossier min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-[#191614] hover:bg-[#EF7B38] text-white text-xs font-title font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>📖 Leer Dossier Completo</span>
            </button>
          </div>

          <!-- Columna Derecha: Biografía Extensa, Obras y Citas -->
          <div class="lg:col-span-8 space-y-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-title font-bold uppercase tracking-wider bg-[#EF7B38]/10 text-[#EF7B38] mb-2 border border-[#EF7B38]/20">
                ${r} · ${e.badge}
              </div>
              <h2 class="text-3xl sm:text-4xl font-serif font-black text-[#191614]">${e.nombre}</h2>
              <p class="text-sm font-serif italic text-[#7A5B1E] font-semibold mt-1">«${e.tituloHonorifico}»</p>
            </div>

            <!-- Párrafos de Biografía Extensa -->
            <div class="prose prose-sm font-serif text-[#2D2926] leading-relaxed space-y-3.5 border-t border-[#E3D7C5] pt-4">
              ${e.biografiaCompleta.map(i=>`<p>${i}</p>`).join("")}
            </div>

            <!-- Legado Patrimonial -->
            <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs">
              <p class="font-title font-bold text-amber-900 uppercase tracking-widest text-[10px] mb-1">🏛️ Legado para Tabasco y las Letras Universales</p>
              <p class="font-serif italic text-[#2D2926] leading-relaxed">${e.legadoPatrimonial}</p>
            </div>

            <!-- Obras Capitales Detalladas -->
            <div class="space-y-3">
              <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">📚 Obras Capitales & Bibliografía</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${e.obrasCapitales.map(i=>`
                  <div class="p-3 bg-white rounded-xl border border-[#E3D7C5] shadow-xs">
                    <div class="flex items-center justify-between gap-1 mb-1">
                      <span class="font-serif font-bold text-xs text-[#191614]">${i.titulo}</span>
                      <span class="text-[10px] font-mono font-bold text-[#EF7B38]">${i.anio}</span>
                    </div>
                    <p class="text-[10px] font-title text-[#7A5B1E] font-semibold uppercase">${i.genero}</p>
                    <p class="text-[11px] font-sans text-[#4A443E] mt-1 line-clamp-2">${i.descripcion}</p>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Citas Célebres -->
            <div class="space-y-3">
              <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">💬 Citas Textuales Célebres</h3>
              <div class="space-y-2">
                ${e.citasMemorables.map(i=>`
                  <div class="p-3.5 bg-white rounded-xl border-l-2 border-[#EF7B38] border-r border-t border-b border-[#E3D7C5] shadow-xs">
                    <p class="font-serif italic text-xs text-[#191614]">«${i.cita}»</p>
                    <p class="text-[10px] text-[#7A7268] font-title font-bold mt-1 text-right">— ${i.obra}</p>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Datos Curiosos -->
            <div class="space-y-2">
              <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">💡 Datos Biográficos Curiosos</h3>
              <ul class="list-disc pl-5 space-y-1 text-xs font-sans text-[#4A443E]">
                ${e.datosCuriosos.map(i=>`<li>${i}</li>`).join("")}
              </ul>
            </div>

          </div>

        </div>
      `;const s=k.querySelector(".btn-escuchar-autor");if(s&&l&&!l.paused){const i=s.getAttribute("data-audio");i&&l.src.endsWith(i)&&(s.innerHTML="<span>⏸ Pausar reproducción</span>")}s?.addEventListener("click",()=>{const i=s.getAttribute("data-audio"),o=s.getAttribute("data-name");if(l&&i)if(l.src.endsWith(i)&&!l.paused)l.pause();else{l.src=i,y&&(y.textContent=o||"Pista de Autor");for(let c=0;c<p.options.length;c++)if(p.options[c].value===i){p.selectedIndex=c;break}l.play().catch(c=>console.log(c))}}),k.querySelector(".btn-ir-a-dossier")?.addEventListener("click",()=>{M("dossier")}),M(n==="dossier"?"dossier":"semblanza");const d=b.querySelector(".custom-scrollbar");d&&(d.scrollTop=0),v&&(v.scrollTop=0),w=document.activeElement,document.body.style.overflow="hidden",b.showModal()}let w=null;Z.forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const e=t.getAttribute("data-autor-id"),r=t.getAttribute("data-tab")||"semblanza";e&&X(e,r)})}),j.forEach(t=>{t.addEventListener("click",n=>{const e=n.target;if(e.closest("button")||e.closest("a"))return;const r=t.getAttribute("data-id");r&&X(r,"semblanza")})});function P(){b&&b.open&&b.close()}K?.addEventListener("click",P),st?.addEventListener("click",P),b?.addEventListener("close",()=>{document.body.style.overflow="",w&&typeof w.focus=="function"&&(w.focus(),w=null)}),"closedBy"in HTMLDialogElement.prototype||b?.addEventListener("click",t=>{if(t.target!==b)return;const e=(b.firstElementChild||b).getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.bottom&&e.left<=t.clientX&&t.clientX<=e.right||P()});const $=document.getElementById("toast-copia");document.querySelectorAll(".btn-copiar-cita").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const e=t.getAttribute("data-cita");if(!e)return;function r(){$&&($.classList.remove("translate-y-20","opacity-0","pointer-events-none"),$.classList.add("translate-y-0","opacity-100"),setTimeout(()=>{$.classList.add("translate-y-20","opacity-0","pointer-events-none"),$.classList.remove("translate-y-0","opacity-100")},2500))}if(navigator.clipboard&&typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(e).then(r).catch(()=>{try{const s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),r()}catch{}});else try{const s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),r()}catch{}})})})();
