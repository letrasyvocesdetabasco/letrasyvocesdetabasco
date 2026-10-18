# Boletín «Entre ríos»

Carta mensual de la Sociedad de Escritores Letras y Voces de Tabasco. Gratis, la primera semana de cada mes.

## Cómo funciona

| Pieza | Dónde vive | Qué hace |
|---|---|---|
| Contenido de cada número | `src/data/boletin.ts` | Carta, eventos, novedad editorial, texto del mes, palabra, video, audio, participa |
| Ensamblado automático | `src/lib/boletin.ts` | Agrega solo la agenda del taller, las efemérides del mes y los datos del canon |
| Edición web | `/boletin/<slug>` | Archivo público y vista previa (los borradores no se indexan) |
| Versión para correo | `/boletin/<slug>/correo.html` y `correo.txt` | HTML con estilos en línea (Gmail, Outlook, Apple Mail) y texto plano |
| Lista de suscriptores | Hoja de cálculo de Google en la cuenta de LVT | Base de datos privada: nunca se guarda en el repositorio |
| Altas, bajas y envíos | `boletin/apps-script/Codigo.gs` | Doble confirmación, baja con un clic, envío con registro y reanudación |

Los datos personales viven solo en la hoja de cálculo. El repositorio es público: no copies ahí correos ni nombres.

## Datos de cada suscriptor (hoja «Suscriptores»)

| Columna | Para qué sirve |
|---|---|
| `correo` | Dirección a la que se envía (única) |
| `nombre` | Opcional; personaliza el saludo («Hola, Ana:») |
| `estado` | `pendiente` (falta confirmar), `confirmado` (recibe el boletín) o `baja` |
| `intereses` | Opcional: Taller, Publicaciones, Escuela, Lecturas y video; útil para avisos especiales |
| `origen` y `pagina` | Desde qué formulario se suscribió (pie, contacto, boletín, manual) |
| `alta`, `confirmacion`, `baja` | Fechas que prueban el consentimiento y su retiro |
| `ultimo_aviso` | Último correo de confirmación enviado (evita reenvíos seguidos) |
| `envios`, `ultimo_envio` | Cuántos números ha recibido y cuándo |
| `consentimiento` | Cómo dio su permiso y con qué versión del aviso de privacidad |
| `token` | Clave privada para confirmar y darse de baja (no la compartas) |
| `notas` | Uso interno |

La hoja «Envíos» registra cada correo enviado (fecha, número, destinatario, resultado). Así un envío interrumpido continúa sin repetir a nadie.

## Instalación (una sola vez, unos 10 minutos)

1. En la cuenta de Google de LVT (lvt.correo@gmail.com), crea una hoja de cálculo nueva llamada «Boletín Entre ríos · Suscriptores».
2. Menú **Extensiones → Apps Script**. Borra el contenido y pega `boletin/apps-script/Codigo.gs`. En **Configuración del proyecto** activa «Mostrar el archivo de manifiesto» y reemplaza `appsscript.json` con el del repositorio. Guarda.
3. Vuelve a la hoja y recarga. Aparecerá el menú **Boletín Entre ríos**. Elige **1. Preparar hojas** y acepta los permisos que pide Google (hoja de cálculo, enviar correo como tú, conectarse a servicios externos).
4. En Apps Script: **Implementar → Nueva implementación → Aplicación web**. «Ejecutar como»: *Yo*. «Quién tiene acceso»: *Cualquier usuario*. Implementa y copia la URL que termina en `/exec`.
5. Pega esa URL en `endpoint` dentro de `src/data/boletin.ts`, compila y publica el sitio. Desde ese momento los formularios guardan directo en la hoja y envían el correo de confirmación.
6. Da de alta a quienes ya lo pidieron por correo con **Agregar suscriptor…**. Si la persona escribió desde la misma dirección que quiere suscribir, elige «No» para marcarla confirmada. Si pidió otra dirección, elige «Sí» para que confirme.

> Si después modificas el script, usa **Implementar → Gestionar implementaciones → Editar → Nueva versión** para conservar la misma URL.

## Enviar un número

1. Escribe o ajusta el número en `src/data/boletin.ts` (copia el anterior como plantilla). Mientras `estado` sea `borrador`, la edición web no aparece en el archivo ni en buscadores.
2. Revisa la vista previa en `/boletin/<slug>` y la versión de correo en `/boletin/<slug>/correo.html`.
3. Cambia `estado` a `listo`, compila y publica.
4. En la hoja: **Enviar prueba a mi correo…**. Ábrela en el celular y en la computadora. Revisa enlaces, imágenes y ortografía.
5. **Enviar número a suscriptores…**. Si hay más destinatarios que la cuota diaria de Gmail (unos 100 por día en cuentas gratuitas), el resto sale solo al día siguiente.
6. Cambia `estado` a `enviado` y pon la `fechaEnvio` real. El número queda en el archivo público.

## Qué debe tener cada número

Estructura fija de ocho secciones, unos 4 minutos de lectura:

1. **Carta de la Sociedad**: 80 a 130 palabras, firmada por la presidencia o la mesa directiva. Tono culto y cercano, sin anglicismos (Manual de Marca).
2. **Agenda**: sesiones del taller del periodo (se agregan solas desde el calendario) y fechas especiales en `eventos`.
3. **Fondo editorial**: una sola novedad con imagen y un llamado claro.
4. **Texto del mes**: poema o relato breve de dominio público de la Sala de lectura (autores fallecidos antes de 1926).
5. **Palabra del oficio**: un término del glosario relacionado con el texto o con el taller.
6. **Efemérides**: natalicios del mes del canon (automático).
7. **Para ver y escuchar**: un video (producción de LVT o recomendado) y una pista de la audioteca.
8. **Participa**: dos llamados como máximo (taller, convocatorias, apoyo), más un agradecimiento si aplica.

Buenas prácticas:
- Asunto de menos de 70 caracteres con el nombre del boletín y dos temas concretos.
- Preencabezado que complemente el asunto (se ve junto a él en la bandeja).
- Una idea por bloque y un solo llamado por sección.
- Imágenes de correo en JPG o PNG dentro de `public/assets/boletin/`, porque Outlook no muestra WebP. Para un video nuevo crea `video_<id>.jpg` de 1040×585 con el botón de reproducir.
- Nunca enviar sin la prueba previa y nunca a direcciones sin confirmar.

## Cuándo cambiar de herramienta

Con más de unos 300 suscriptores, o si se quieren estadísticas de apertura, conviene mover la lista a un servicio de envío masivo (por ejemplo Brevo o MailerLite) importando la hoja. El diseño `correo.html` se puede reutilizar tal cual.

## Prueba local del script

```bash
npm run build
node boletin/apps-script/prueba-local.cjs .
```
Simula altas, confirmación, antispam, envío con baja personal y bajas contra el número compilado.
