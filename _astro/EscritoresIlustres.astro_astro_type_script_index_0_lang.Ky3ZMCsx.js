(function(){const O=document.getElementById("datos-ilustres-json");if(!O)return;const K=JSON.parse(O.textContent||"[]"),j=document.querySelectorAll(".canon-card"),m=document.getElementById("canvas-atmosfera-lvt");if(m){const t=m.getContext("2d");if(t){let s=function(){!d||!t||(t.clearRect(0,0,e,c),o.forEach(n=>{n.x+=n.dx,n.y+=n.dy,n.y<0&&(n.y=c),n.x<0&&(n.x=e),n.x>e&&(n.x=0),t.beginPath(),t.arc(n.x,n.y,n.r,0,Math.PI*2),t.fillStyle=`rgba(197, 160, 89, ${n.a})`,t.fill()}),g=requestAnimationFrame(s))},e=m.width=m.parentElement?.clientWidth||window.innerWidth,c=m.height=m.parentElement?.clientHeight||800;window.addEventListener("resize",()=>{e=m.width=m.parentElement?.clientWidth||window.innerWidth,c=m.height=m.parentElement?.clientHeight||800});const o=[];for(let n=0;n<24;n++)o.push({x:Math.random()*e,y:Math.random()*c,r:Math.random()*2+1,dx:(Math.random()-.5)*.4,dy:-Math.random()*.5-.1,a:Math.random()*.4+.1});let g,d=!0;new IntersectionObserver(n=>{d=n[0].isIntersecting,d?s():cancelAnimationFrame(g)}).observe(m),s()}}const r=document.getElementById("audio-player-global"),N=document.getElementById("btn-reproductor-toggle"),W=document.getElementById("icon-play"),H=document.getElementById("icon-pause"),p=document.getElementById("select-audio-track"),y=document.getElementById("player-track-name"),S=document.getElementById("slider-volumen"),A=document.getElementById("visualizer-bars");r&&N&&p&&(r.src=p.value,r.volume=parseFloat(S?.value||"0.35"),r.addEventListener("play",()=>{W?.classList.add("hidden"),H?.classList.remove("hidden"),A?.classList.remove("hidden"),A?.classList.add("flex");const t=document.querySelector(".btn-escuchar-autor");if(t){const s=t.getAttribute("data-audio");s&&r.src.endsWith(s)&&(t.innerHTML="<span>⏸ Pausar reproducción</span>")}}),r.addEventListener("pause",()=>{W?.classList.remove("hidden"),H?.classList.add("hidden"),A?.classList.add("hidden"),A?.classList.remove("flex");const t=document.querySelector(".btn-escuchar-autor");t&&(t.innerHTML="<span>▶ Reproducir esta obra</span>")}),N.addEventListener("click",()=>{r.paused?r.play().catch(t=>console.log("Audio play error:",t)):r.pause()}),p.addEventListener("change",()=>{const t=!r.paused;r.src=p.value,y&&(y.textContent=p.options[p.selectedIndex].text),t&&r.play().catch(s=>console.log("Audio play error:",s))}),S?.addEventListener("input",()=>{r.volume=parseFloat(S.value)}),r.addEventListener("ended",()=>{const t=(p.selectedIndex+1)%p.options.length;p.selectedIndex=t,r.src=p.value,y&&(y.textContent=p.options[t].text),r.play().catch(s=>console.log("Autoplay error:",s))}));const R=document.querySelectorAll(".category-btn"),U=document.getElementById("input-buscar-ilustres");let D="all";function Q(){const t=(U?.value||"").toLowerCase().trim();j.forEach(s=>{const e=s,c=e.getAttribute("data-category")||"",o=e.getAttribute("data-search")||"",g=D==="all"||c.includes(D),d=!t||o.includes(t);g&&d?e.style.display="flex":e.style.display="none"})}R.forEach(t=>{t.addEventListener("click",()=>{R.forEach(s=>{s.classList.remove("active","bg-[#EF7B38]","text-white"),s.classList.add("bg-white","text-[#191614]")}),t.classList.add("active","bg-[#EF7B38]","text-white"),t.classList.remove("bg-white","text-[#191614]"),D=t.getAttribute("data-filter")||"all",Q()})}),U?.addEventListener("input",Q);const f=document.getElementById("dialog-biografia-ilustre"),Z=document.getElementById("btn-cerrar-modal"),I=document.getElementById("modal-content-target"),tt=document.querySelectorAll(".btn-abrir-modal"),L=document.getElementById("tab-btn-semblanza"),C=document.getElementById("tab-btn-compendio"),V=document.getElementById("view-semblanza"),k=document.getElementById("view-compendio"),B=document.getElementById("compendio-rendered-content"),v=document.getElementById("compendio-reading-box"),et=document.getElementById("compendio-font-dec"),ot=document.getElementById("compendio-font-inc");let x=null,E=16;const nt=document.querySelector(".btn-cerrar-modal-mobile"),q={};function st(t){if(!t)return"";const c=t.replace(/^\uFEFF/,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").split(/\r?\n/),o=[];let g=[],d=null,i=[];function n(){if(g.length>0){const h=g.join("<br/>");o.push(`<p class="my-3 leading-relaxed font-serif text-[#2D2926]">${h}</p>`),g=[]}}function l(){if(i.length>0){const h=i.join("<br/>");o.push(`<blockquote class="p-3 my-3 bg-[#FAF7F0] border-l-4 border-[#EF7B38] italic font-serif text-sm text-[#191614] rounded-r-lg">${h}</blockquote>`),i=[]}}let F=!1,T=[];function u(){d&&(o.push(d==="ul"?"</ul>":"</ol>"),d=null)}function Y(){F&&(o.push(`<pre class="p-3 my-3 bg-[#1C1814] text-[#FAF7F0] rounded-xl overflow-x-auto text-xs font-mono border border-[#383129] leading-relaxed"><code>${T.join(`
`)}</code></pre>`),T=[],F=!1)}function b(h){return h.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#EF7B38] underline hover:text-[#8F3812] font-semibold">$1</a>').replace(/\*\*(.*?)\*\*/g,'<strong class="font-bold text-[#191614]">$1</strong>').replace(/\*(.*?)\*/g,'<em class="italic">$1</em>').replace(/`([^`]+)`/g,'<code class="px-1.5 py-0.5 rounded bg-[#FAF7F0] border border-[#E3D7C5] font-mono text-xs text-[#EF7B38]">$1</code>')}for(let h=0;h<c.length;h++){const _=c[h],a=_.trim();if(a.startsWith("```")){F?Y():(n(),l(),u(),F=!0,T=[]);continue}if(F){T.push(_);continue}if(!a){n(),l(),u();continue}if(/^(_{3,}|-{3,}|\*{3,})$/.test(a)){n(),l(),u(),o.push('<hr class="my-6 border-[#E3D7C5]"/>');continue}if(/^(DOSSIER|COMPENDIO)\s+(DOCUMENTAL|CANÓNICO)/i.test(a)){n(),l(),u(),o.push('<div class="text-xs font-title font-bold uppercase tracking-widest text-[#C5A059] mb-1">COMPENDIO CANÓNICO PATRIMONIAL</div>');continue}if(/^AUTOR\s+N[°ºo]?\s+[0-9]+:.*$/i.test(a)){n(),l(),u();const z=a.replace(/^AUTOR\s+N[°ºo]?\s+[0-9]+:\s*/i,"");o.push(`<h1 class="text-2xl sm:text-3xl font-serif font-black text-[#191614] mt-2 mb-3 pb-2 border-b-2 border-[#C5A059]">${b(z)}</h1>`);continue}if(/^(SECCIÓN\s+[0-9]+:.*$)/i.test(a)){n(),l(),u(),o.push(`<h2 class="text-xl sm:text-2xl font-serif font-black text-[#EF7B38] mt-8 mb-3 pb-1 border-b border-[#EF7B38]/30">${b(a)}</h2>`);continue}if(/^([IVXLCDM]+\.\s+.*$)/.test(a)){n(),l(),u(),o.push(`<h3 class="text-lg sm:text-xl font-serif font-bold text-[#7A5B1E] mt-6 mb-2">${b(a)}</h3>`);continue}if(a.startsWith("# ")){n(),l(),u(),o.push(`<h1 class="text-2xl sm:text-3xl font-serif font-black text-[#191614] mt-6 mb-4 pb-2 border-b-2 border-[#C5A059]">${b(a.slice(2))}</h1>`);continue}if(a.startsWith("## ")){n(),l(),u(),o.push(`<h2 class="text-xl sm:text-2xl font-serif font-black text-[#EF7B38] mt-6 mb-3">${b(a.slice(3))}</h2>`);continue}if(a.startsWith("### ")){n(),l(),u(),o.push(`<h3 class="text-lg font-serif font-bold text-[#7A5B1E] mt-5 mb-2">${b(a.slice(4))}</h3>`);continue}if(a.startsWith("#### ")){n(),l(),u(),o.push(`<h4 class="text-base font-serif font-bold text-[#191614] mt-4 mb-1">${b(a.slice(5))}</h4>`);continue}if(a.startsWith("&gt; ")||a.startsWith("> ")){n(),u();const z=a.startsWith("&gt; ")?a.slice(5):a.slice(2);i.push(b(z));continue}else l();const J=a.match(/^[\*\-]\s+(.*)$/);if(J){n(),l(),d!=="ul"&&(u(),o.push('<ul class="my-3 space-y-1 list-disc pl-5">'),d="ul"),o.push(`<li class="text-sm font-serif text-[#2D2926] my-1">${b(J[1])}</li>`);continue}const G=a.match(/^([0-9]+)\.\s+(.*)$/);if(G){n(),l(),d!=="ol"&&(u(),o.push('<ol class="my-3 space-y-1 list-decimal pl-5">'),d="ol"),o.push(`<li class="text-sm font-serif text-[#2D2926] my-1">${b(G[2])}</li>`);continue}u(),g.push(b(a))}return n(),l(),u(),Y(),o.join(`
`)}function it(t){if(!B)return;if(q[t]){B.innerHTML=q[t];return}B.innerHTML='<p class="italic text-center py-8 text-gray-500">Cargando compendio canónico integral...</p>';const s=`/dossiers/${t}.md`;fetch(s).then(e=>{if(!e.ok)throw new Error("No se pudo cargar el compendio");return e.text()}).then(e=>{const c=st(e);q[t]=c,(x?x.dossierSlug||x.id:"")===t&&(B.innerHTML=c)}).catch(()=>{(x?x.dossierSlug||x.id:"")===t&&(B.innerHTML=`
              <div class="p-6 bg-amber-50 text-amber-900 rounded-xl border border-amber-200 text-center">
                <p class="font-bold">Aviso del Consejo Editorial:</p>
                <p class="text-xs mt-1">El texto de este compendio está en proceso de digitalización o actualización patrimonial.</p>
              </div>
            `)})}function M(t){t==="semblanza"?(L?.classList.add("bg-[#EF7B38]","text-white"),L?.classList.remove("bg-white","text-[#191614]"),C?.classList.remove("bg-[#EF7B38]","text-white"),C?.classList.add("bg-white","text-[#191614]"),V?.classList.remove("hidden"),k?.classList.add("hidden"),k?.classList.remove("flex")):(C?.classList.add("bg-[#EF7B38]","text-white"),C?.classList.remove("bg-white","text-[#191614]"),L?.classList.remove("bg-[#EF7B38]","text-white"),L?.classList.add("bg-white","text-[#191614]"),V?.classList.add("hidden"),k?.classList.remove("hidden"),k?.classList.add("flex"),x&&it(x.dossierSlug||x.id))}L?.addEventListener("click",()=>M("semblanza")),C?.addEventListener("click",()=>M("compendio")),et?.addEventListener("click",()=>{E=Math.max(14,E-1),v&&(v.style.fontSize=`${E}px`)}),ot?.addEventListener("click",()=>{E=Math.min(24,E+1),v&&(v.style.fontSize=`${E}px`)});function X(t,s="semblanza"){const e=K.find(i=>i.id===t);if(!e||!I||!f)return;x=e;const c=e.bloqueCanon==="tabasquenos"?"🌴 Voces de Tabasco":e.bloqueCanon==="mexicanos"?"🦅 Letras de México":"🌍 Horizonte Internacional";I.innerHTML=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Columna Izquierda: Retrato y Ficha Técnica -->
          <div class="lg:col-span-4 space-y-4">
            <div class="rounded-2xl overflow-hidden border-2 border-[#C5A059] bg-[#FAF7F0] shadow-md aspect-[4/5]">
              <img 
                src="${e.foto}" 
                alt="${e.nombre}" 
                class="w-full h-full object-cover object-top"
                onerror="this.onerror=null; this.src='${e.fotoFallback||"/assets/images/placeholder-autor.webp"}'; this.onerror=function(){this.src='/assets/images/placeholder-autor.webp';};"
              />
            </div>
            
            <div class="bg-white p-4 rounded-xl border border-[#E3D7C5] shadow-xs text-xs space-y-2">
              <p><strong>Nacimiento:</strong> ${e.nacimiento}</p>
              <p><strong>Fallecimiento:</strong> ${e.fallecimiento}</p>
              <p><strong>Origen:</strong> ${e.municipioOrigen}</p>
              <p><strong>Movimiento:</strong> ${e.movimiento}</p>
              <p><strong>Ámbito:</strong> ${c}</p>
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

            <!-- Botón rápido al compendio -->
            <button 
              type="button" 
              class="btn-ir-a-compendio min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-[#191614] hover:bg-[#EF7B38] text-white text-xs font-title font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>📖 Leer Compendio Canónico</span>
            </button>
          </div>

          <!-- Columna Derecha: Biografía Extensa, Obras y Citas -->
          <div class="lg:col-span-8 space-y-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-title font-bold uppercase tracking-wider bg-[#EF7B38]/10 text-[#EF7B38] mb-2 border border-[#EF7B38]/20">
                ${c} · ${e.badge}
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

            <!-- Datos Biográficos Curiosos -->
            <div class="space-y-2">
              <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">💡 Datos Biográficos Relevantes</h3>
              <ul class="list-disc pl-5 space-y-1 text-xs font-sans text-[#4A443E]">
                ${e.datosCuriosos.map(i=>`<li>${i}</li>`).join("")}
              </ul>
            </div>

          </div>

        </div>
      `;const o=I.querySelector(".btn-escuchar-autor");if(o&&r&&!r.paused){const i=o.getAttribute("data-audio");i&&r.src.endsWith(i)&&(o.innerHTML="<span>⏸ Pausar reproducción</span>")}o?.addEventListener("click",()=>{const i=o.getAttribute("data-audio"),n=o.getAttribute("data-name");if(r&&i)if(r.src.endsWith(i)&&!r.paused)r.pause();else{r.src=i,y&&(y.textContent=n||"Pista de Autor");for(let l=0;l<p.options.length;l++)if(p.options[l].value===i){p.selectedIndex=l;break}r.play().catch(l=>console.log(l))}}),I.querySelector(".btn-ir-a-compendio")?.addEventListener("click",()=>{M("compendio")}),M(s==="compendio"?"compendio":"semblanza");const d=f.querySelector(".custom-scrollbar");d&&(d.scrollTop=0),v&&(v.scrollTop=0),w=document.activeElement,document.body.style.overflow="hidden",f.showModal()}let w=null;tt.forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation();const e=t.getAttribute("data-autor-id"),c=t.getAttribute("data-tab")||"semblanza";e&&X(e,c)})}),j.forEach(t=>{t.addEventListener("click",s=>{const e=s.target;if(e.closest("button")||e.closest("a"))return;const c=t.getAttribute("data-id");c&&X(c,"semblanza")})});function P(){f&&f.open&&f.close()}Z?.addEventListener("click",P),nt?.addEventListener("click",P),f?.addEventListener("close",()=>{document.body.style.overflow="",w&&typeof w.focus=="function"&&(w.focus(),w=null)}),"closedBy"in HTMLDialogElement.prototype||f?.addEventListener("click",t=>{if(t.target!==f)return;const e=(f.firstElementChild||f).getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.bottom&&e.left<=t.clientX&&t.clientX<=e.right||P()});const $=document.getElementById("toast-copia");document.querySelectorAll(".btn-copiar-cita").forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation();const e=t.getAttribute("data-cita");if(!e)return;function c(){$&&($.classList.remove("translate-y-20","opacity-0","pointer-events-none"),$.classList.add("translate-y-0","opacity-100"),setTimeout(()=>{$.classList.add("translate-y-20","opacity-0","pointer-events-none"),$.classList.remove("translate-y-0","opacity-100")},2500))}if(navigator.clipboard&&typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(e).then(c).catch(()=>{try{const o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),c()}catch{}});else try{const o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),c()}catch{}})})})();
