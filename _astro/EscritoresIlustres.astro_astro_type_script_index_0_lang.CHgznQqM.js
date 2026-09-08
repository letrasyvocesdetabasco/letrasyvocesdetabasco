(function(){const D=document.getElementById("datos-ilustres-json");if(!D)return;const H=JSON.parse(D.textContent||"[]"),S=document.querySelectorAll(".card-3d");window.matchMedia("(prefers-reduced-motion: reduce)").matches||S.forEach(t=>{const e=t,a=e.querySelector(".card-shine");e.addEventListener("mousemove",l=>{const s=e.getBoundingClientRect(),c=l.clientX-s.left,n=l.clientY-s.top,$=s.width/2,o=s.height/2,A=(n-o)/o*-5,M=(c-$)/$*5;e.style.transform=`perspective(1000px) rotateX(${A}deg) rotateY(${M}deg) scale3d(1.01, 1.01, 1.01)`,a&&(a.style.setProperty("--mouse-x",`${c/s.width*100}%`),a.style.setProperty("--mouse-y",`${n/s.height*100}%`))}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})});const r=document.getElementById("canvas-atmosfera-lvt");if(r){const t=r.getContext("2d");if(t){let e=function(){!n||!t||(t.clearRect(0,0,a,l),s.forEach(o=>{o.x+=o.dx,o.y+=o.dy,o.y<0&&(o.y=l),o.x<0&&(o.x=a),o.x>a&&(o.x=0),t.beginPath(),t.arc(o.x,o.y,o.r,0,Math.PI*2),t.fillStyle=`rgba(197, 160, 89, ${o.a})`,t.fill()}),c=requestAnimationFrame(e))},a=r.width=r.parentElement?.clientWidth||window.innerWidth,l=r.height=r.parentElement?.clientHeight||800;window.addEventListener("resize",()=>{a=r.width=r.parentElement?.clientWidth||window.innerWidth,l=r.height=r.parentElement?.clientHeight||800});const s=[];for(let o=0;o<24;o++)s.push({x:Math.random()*a,y:Math.random()*l,r:Math.random()*2+1,dx:(Math.random()-.5)*.4,dy:-Math.random()*.5-.1,a:Math.random()*.4+.1});let c,n=!0;new IntersectionObserver(o=>{n=o[0].isIntersecting,n?e():cancelAnimationFrame(c)}).observe(r),e()}}const i=document.getElementById("audio-player-global"),q=document.getElementById("btn-reproductor-toggle"),B=document.getElementById("icon-play"),C=document.getElementById("icon-pause"),d=document.getElementById("select-audio-track"),f=document.getElementById("player-track-name"),I=document.getElementById("slider-volumen"),m=document.getElementById("visualizer-bars");i&&q&&d&&(i.src=d.value,i.volume=parseFloat(I?.value||"0.35"),q.addEventListener("click",()=>{i.paused?i.play().then(()=>{B?.classList.add("hidden"),C?.classList.remove("hidden"),m?.classList.remove("hidden"),m?.classList.add("flex")}).catch(t=>console.log("Audio play error:",t)):(i.pause(),B?.classList.remove("hidden"),C?.classList.add("hidden"),m?.classList.add("hidden"),m?.classList.remove("flex"))}),d.addEventListener("change",()=>{const t=!i.paused;i.src=d.value,f&&(f.textContent=d.options[d.selectedIndex].text),t&&i.play()}),I?.addEventListener("input",()=>{i.volume=parseFloat(I.value)}),i.addEventListener("ended",()=>{const t=(d.selectedIndex+1)%d.options.length;d.selectedIndex=t,d.dispatchEvent(new Event("change")),i.play()}));const P=document.querySelectorAll(".category-btn"),T=document.getElementById("input-buscar-ilustres");let F="all";function z(){const t=(T?.value||"").toLowerCase().trim();S.forEach(e=>{const a=e,l=a.getAttribute("data-category")||"",s=a.getAttribute("data-search")||"",c=F==="all"||l.includes(F),n=!t||s.includes(t);c&&n?a.style.display="flex":a.style.display="none"})}P.forEach(t=>{t.addEventListener("click",()=>{P.forEach(e=>{e.classList.remove("active","bg-[#EF7B38]","text-white"),e.classList.add("bg-white","text-[#191614]")}),t.classList.add("active","bg-[#EF7B38]","text-white"),t.classList.remove("bg-white","text-[#191614]"),F=t.getAttribute("data-filter")||"all",z()})}),T?.addEventListener("input",z);const u=document.getElementById("dialog-biografia-ilustre"),R=document.getElementById("btn-cerrar-modal"),h=document.getElementById("modal-content-target"),W=document.querySelectorAll(".btn-abrir-modal"),g=document.getElementById("tab-btn-semblanza"),b=document.getElementById("tab-btn-dossier"),j=document.getElementById("view-semblanza"),v=document.getElementById("view-dossier"),y=document.getElementById("dossier-rendered-content"),k=document.getElementById("btn-descargar-dossier-md"),E=document.getElementById("dossier-reading-box"),O=document.getElementById("dossier-font-dec"),X=document.getElementById("dossier-font-inc");let L=null,p=16;function Y(t){if(!t)return"";let e=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return e=e.replace(/^# (.*$)/gim,'<h1 class="text-2xl sm:text-3xl font-serif font-black text-[#191614] mt-6 mb-4 pb-2 border-b-2 border-[#C5A059]">$1</h1>'),e=e.replace(/^## (.*$)/gim,'<h2 class="text-xl sm:text-2xl font-serif font-black text-[#EF7B38] mt-6 mb-3">$1</h2>'),e=e.replace(/^### (.*$)/gim,'<h3 class="text-lg font-serif font-bold text-[#7A5B1E] mt-5 mb-2">$1</h3>'),e=e.replace(/^#### (.*$)/gim,'<h4 class="text-base font-serif font-bold text-[#191614] mt-4 mb-1">$1</h4>'),e=e.replace(/^\> (.*$)/gim,'<blockquote class="p-3 my-3 bg-[#FAF7F0] border-l-4 border-[#EF7B38] italic font-serif text-sm text-[#191614] rounded-r-lg">$1</blockquote>'),e=e.replace(/^---$/gim,'<hr class="my-6 border-[#E3D7C5]"/>'),e=e.replace(/\*\*(.*?)\*\*/gim,'<strong class="font-bold text-[#191614]">$1</strong>'),e=e.replace(/\*(.*?)\*/gim,'<em class="italic">$1</em>'),e=e.replace(/^\* (.*$)/gim,'<li class="ml-4 list-disc">$1</li>'),e=e.replace(/^- (.*$)/gim,'<li class="ml-4 list-disc">$1</li>'),e=e.split(`

`).map(a=>(a=a.trim(),a?a.startsWith("<h")||a.startsWith("<blockquote")||a.startsWith("<hr")||a.startsWith("<li")?a:`<p class="my-3 leading-relaxed font-serif text-[#2D2926]">${a.replace(/\n/g,"<br/>")}</p>`:"")).join(""),e}function N(t){if(!y)return;y.innerHTML='<p class="italic text-center py-8 text-gray-500">Cargando texto canónico integral...</p>';const e=`/dossiers/${t}.md`;fetch(e).then(a=>{if(!a.ok)throw new Error("No se pudo cargar el dossier");return a.text()}).then(a=>{y.innerHTML=Y(a)}).catch(a=>{y.innerHTML=`
            <div class="p-6 bg-red-50 text-red-800 rounded-xl border border-red-200 text-center">
              <p class="font-bold">Aviso del Consejo Editorial:</p>
              <p class="text-xs mt-1">El texto canónico está resguardado en el archivo maestro. Puede descargarlo directamente en el botón superior.</p>
            </div>
          `})}function w(t){t==="semblanza"?(g?.classList.add("bg-[#EF7B38]","text-white"),g?.classList.remove("bg-white","text-[#191614]"),b?.classList.remove("bg-[#EF7B38]","text-white"),b?.classList.add("bg-white","text-[#191614]"),j?.classList.remove("hidden"),v?.classList.add("hidden"),v?.classList.remove("flex")):(b?.classList.add("bg-[#EF7B38]","text-white"),b?.classList.remove("bg-white","text-[#191614]"),g?.classList.remove("bg-[#EF7B38]","text-white"),g?.classList.add("bg-white","text-[#191614]"),j?.classList.add("hidden"),v?.classList.remove("hidden"),v?.classList.add("flex"),L&&N(L.dossierSlug||L.id))}g?.addEventListener("click",()=>w("semblanza")),b?.addEventListener("click",()=>w("dossier")),O?.addEventListener("click",()=>{p=Math.max(14,p-1),E&&(E.style.fontSize=`${p}px`)}),X?.addEventListener("click",()=>{p=Math.min(24,p+1),E&&(E.style.fontSize=`${p}px`)}),W.forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation();const a=t.getAttribute("data-autor-id"),l=t.getAttribute("data-tab")||"semblanza",s=H.find(o=>o.id===a);if(!s||!h||!u)return;L=s,k&&(k.href=`/dossiers/${s.dossierSlug||s.id}.md`,k.download=`${s.dossierSlug||s.id}_dossier_canonico.md`);const c=s.bloqueCanon==="tabasquenos"?"🌴 Tabasco":s.bloqueCanon==="mexicanos"?"🦅 México":"🌍 Universal";h.innerHTML=`
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Columna Izquierda: Placa / Retrato y Datos Clave -->
            <div class="lg:col-span-4 space-y-4">
              <div class="rounded-2xl overflow-hidden border-2 border-[#C5A059] bg-[#FAF7F0] shadow-md">
                <img 
                  src="${s.foto}" 
                  alt="${s.nombre}" 
                  class="w-full h-auto object-cover"
                />
              </div>
              
              <div class="bg-white p-4 rounded-xl border border-[#E3D7C5] shadow-xs text-xs space-y-2">
                <p><strong>Nacimiento:</strong> ${s.nacimiento}</p>
                <p><strong>Fallecimiento:</strong> ${s.fallecimiento}</p>
                <p><strong>Origen:</strong> ${s.municipioOrigen}</p>
                <p><strong>Movimiento:</strong> ${s.movimiento}</p>
                <p><strong>Canon:</strong> ${c} (⏱️ ${s.tiempoLecturaMinutos||30} min lectura)</p>
              </div>

              <!-- Pista recomendada de este autor -->
              <div class="bg-[#FAF7F0] p-4 rounded-xl border border-[#C5A059]/50 text-xs">
                <p class="font-title font-bold text-[#7A5B1E] uppercase tracking-wider text-[10px] mb-1">
                  Música recomendada para su lectura:
                </p>
                <p class="font-serif font-bold text-[#191614]">${s.audioSugerido.titulo}</p>
                <p class="text-[11px] text-[#7A7268]">${s.audioSugerido.compositor}</p>
                <button 
                  type="button" 
                  class="btn-escuchar-autor mt-2.5 w-full py-1.5 px-3 rounded-lg bg-[#EF7B38] hover:bg-[#8F3812] text-white text-[11px] font-title font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                  data-audio="${s.audioSugerido.archivo}"
                  data-name="${s.audioSugerido.titulo}"
                >
                  <span>▶ Reproducir esta obra</span>
                </button>
              </div>

              <!-- Botón rápido al dossier -->
              <button 
                type="button" 
                class="btn-ir-a-dossier w-full py-2.5 px-4 rounded-xl bg-[#191614] hover:bg-[#EF7B38] text-white text-xs font-title font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>📖 Leer Dossier Completo</span>
              </button>
            </div>

            <!-- Columna Derecha: Biografía Extensa, Obras y Citas -->
            <div class="lg:col-span-8 space-y-6">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-title font-bold uppercase tracking-wider bg-[#EF7B38]/10 text-[#EF7B38] mb-2 border border-[#EF7B38]/20">
                  ${c} · ${s.badge}
                </div>
                <h2 class="text-3xl sm:text-4xl font-serif font-black text-[#191614]">${s.nombre}</h2>
                <p class="text-sm font-serif italic text-[#7A5B1E] font-semibold mt-1">«${s.tituloHonorifico}»</p>
              </div>

              <!-- Párrafos de Biografía Extensa -->
              <div class="prose prose-sm font-serif text-[#2D2926] leading-relaxed space-y-3.5 border-t border-[#E3D7C5] pt-4">
                ${s.biografiaCompleta.map(o=>`<p>${o}</p>`).join("")}
              </div>

              <!-- Legado Patrimonial -->
              <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs">
                <p class="font-title font-bold text-amber-900 uppercase tracking-widest text-[10px] mb-1">🏛️ Legado para Tabasco y las Letras Universales</p>
                <p class="font-serif italic text-[#2D2926] leading-relaxed">${s.legadoPatrimonial}</p>
              </div>

              <!-- Obras Capitales Detalladas -->
              <div class="space-y-3">
                <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">📚 Obras Capitales & Bibliografía</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${s.obrasCapitales.map(o=>`
                    <div class="p-3 bg-white rounded-xl border border-[#E3D7C5] shadow-xs">
                      <div class="flex items-center justify-between gap-1 mb-1">
                        <span class="font-serif font-bold text-xs text-[#191614]">${o.titulo}</span>
                        <span class="text-[10px] font-mono font-bold text-[#EF7B38]">${o.anio}</span>
                      </div>
                      <p class="text-[10px] font-title text-[#7A5B1E] font-semibold uppercase">${o.genero}</p>
                      <p class="text-[11px] font-sans text-[#4A443E] mt-1 line-clamp-2">${o.descripcion}</p>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Citas Célebres -->
              <div class="space-y-3">
                <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">💬 Citas Textuales Célebres</h3>
                <div class="space-y-2">
                  ${s.citasMemorables.map(o=>`
                    <div class="p-3.5 bg-white rounded-xl border-l-2 border-[#EF7B38] border-r border-t border-b border-[#E3D7C5] shadow-xs">
                      <p class="font-serif italic text-xs text-[#191614]">«${o.cita}»</p>
                      <p class="text-[10px] text-[#7A7268] font-title font-bold mt-1 text-right">— ${o.obra}</p>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Datos Curiosos -->
              <div class="space-y-2">
                <h3 class="font-title font-bold text-xs uppercase tracking-widest text-[#191614]">💡 Datos Biográficos Curiosos</h3>
                <ul class="list-disc pl-5 space-y-1 text-xs font-sans text-[#4A443E]">
                  ${s.datosCuriosos.map(o=>`<li>${o}</li>`).join("")}
                </ul>
              </div>

            </div>

          </div>
        `;const n=h.querySelector(".btn-escuchar-autor");n?.addEventListener("click",()=>{const o=n.getAttribute("data-audio"),A=n.getAttribute("data-name");i&&o&&(i.src=o,f&&(f.textContent=A||"Pista de Autor"),i.play().then(()=>{B?.classList.add("hidden"),C?.classList.remove("hidden"),m?.classList.remove("hidden"),m?.classList.add("flex")}).catch(M=>console.log(M)))}),h.querySelector(".btn-ir-a-dossier")?.addEventListener("click",()=>{w("dossier")}),w(l==="dossier"?"dossier":"semblanza"),u.showModal()})}),R?.addEventListener("click",()=>u?.close()),u?.addEventListener("click",t=>{const e=u.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&u.close()});const x=document.getElementById("toast-copia");document.querySelectorAll(".btn-copiar-cita").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation();const a=t.getAttribute("data-cita");a&&navigator.clipboard.writeText(a).then(()=>{x&&(x.classList.remove("translate-y-20","opacity-0","pointer-events-none"),x.classList.add("translate-y-0","opacity-100"),setTimeout(()=>{x.classList.add("translate-y-20","opacity-0","pointer-events-none"),x.classList.remove("translate-y-0","opacity-100")},2500))})})})})();
