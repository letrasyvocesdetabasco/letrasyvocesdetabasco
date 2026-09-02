// src/data/voces.ts - Catálogo Oficial de Grabaciones Sonoras en Audio Nativo MP3 (Audioteca LVT)

export type OrigenAutor = 'miembro_lvt' | 'externo_universal';
export type GeneroVoz = 'Lírica / Poesía' | 'Narrativa / Relato';

export interface GrabacionSonora {
  id: string;
  pista: number;
  titulo: string;
  autor: string;
  declamador: string;
  pais: string;
  origen: OrigenAutor;
  genero: GeneroVoz;
  audioUrl: string; // Audio nativo MP3
  descripcion: string;
  textoPoema: string;
}

export const CATALOGO_VOCES_HISTORICAS: GrabacionSonora[] = [
  {
    id: 'girondo-espantapajaros',
    pista: 1,
    titulo: 'Espantapájaros (1)',
    autor: 'Oliverio Girondo',
    declamador: 'Lic. Juan David Pérez Cabrera (Letras y Voces de Tabasco)',
    pais: 'Tabasco / Buenos Aires, Argentina',
    origen: 'miembro_lvt',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/espantapajaros_oliverio_girondo_david_cabrera.mp3',
    descripcion: 'Grabación de estudio preservada en el archivo sonoro de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., declamada por Juan David Pérez Cabrera.',
    textoPoema: `No se me importa un pito que las mujeres tengan los senos como magnolias o como pasas de higo; un cutis de durazno o de papel de lija. Le doy una importancia igual a cero, al hecho de que amanezcan con un aliento afrodisíaco o con un aliento insecticida. Soy perfectamente capaz de soportarles una nariz que sacaría el primer premio en una exposición de zanahorias; ¡pero eso sí! -y en esto soy irreductible- no les perdono, bajo ningún pretexto, que no sepan volar. Si no saben volar ¡pierden el tiempo las que pretendan seducirme!

Ésta fue -y no otra- la razón de que me enamorase, tan locamente, de María Luisa. ¿Qué me importaban sus labios por entregas y sus encelos sulfurosos? ¿Qué me importaban sus extremidades de palmípedo y sus miradas de pronóstico reservado? ¡María Luisa era una verdadera pluma!

Desde el amanecer volaba del dormitorio a la cocina, volaba del comedor a la despensa. Volando me preparaba el baño, la camisa. Volando realizaba sus compras, sus quehaceres... ¡Con qué impaciencia yo esperaba que volviese, volando, de algún paseo por los alrededores! Allí lejos, perdido entre las nubes, un puntito rosado. "¡María Luisa! ¡María Luisa!"... y a los pocos segundos, ya me abrazaba con sus piernas de pluma, para llevarme, volando, a cualquier parte.

Durante kilómetros de silencio planeábamos una caricia que nos aproximaba al paraíso; durante horas enteras nos anidábamos en una nube, como dos ángeles, y de repente, en tirabuzón, en hoja muerta, el aterrizaje forzoso de un espasmo. ¡Qué delicia la de tener una mujer tan ligera..., aunque nos haga ver, de vez en cuando, las estrellas! ¡Que voluptuosidad la de pasarse los días entre las nubes... la de pasarse las noches de un solo vuelo!

Después de conocer una mujer etérea, ¿puede brindarnos alguna clase de atractivos una mujer terrestre? ¿Verdad que no hay diferencia sustancial entre vivir con una vaca o con una mujer que tenga las nalgas a setenta y ocho centímetros del suelo? Yo, por lo menos, soy incapaz de comprender la seducción de una mujer pedestre, y por más empeño que ponga en concebirlo, no me es posible ni tan siquiera imaginar que pueda hacerse el amor más que volando.`
  },
  {
    id: 'rulfo-hidrante',
    pista: 2,
    titulo: 'Pedro Páramo (Fragmento de El Hidrante)',
    autor: 'Juan Rulfo',
    declamador: 'Juan Rulfo (Voz del Autor · Colección UNAM)',
    pais: 'Jalisco, México',
    origen: 'externo_universal',
    genero: 'Narrativa / Relato',
    audioUrl: '/assets/audios/rulfo_hidrante.mp3',
    descripcion: 'Grabación fonográfica histórica donde Juan Rulfo da lectura al pasaje sensorial y onírico del hidrante de Pedro Páramo.',
    textoPoema: `En el hidrante las gotas caen una tras otra. Uno oye, salida de la piedra, el agua clara caer sobre el cántaro. Uno oye. Oye rumores; pies que raspan el suelo, que caminan, que van y vienen. Las gotas siguen cayendo sin cesar. El cántaro se desborda haciendo rodar el agua sobre un suelo mojado.

«¡Despierta!», le dicen.

Reconoce el sonido de la voz. Trata de adivinar quién es; pero el cuerpo se afloja y cae adormecido, aplastado por el peso del sueño. Unas manos estiran las cobijas prendiéndose de ellas, y debajo de su calor el cuerpo se esconde buscando la paz.

«¡Despiértate!», vuelven a decir.

La voz sacude los hombros. Hace enderezar el cuerpo. Entreabre los ojos. Se oye el goteo del hidrante.

—Tu padre ha muerto.

La voz se quiebra. Dice algo más; murmura algo más. La cabeza vuelve a caer sobre las cobijas, sintiendo el peso del sueño.`
  },
  {
    id: 'lorca-alberti-balada',
    pista: 3,
    titulo: 'La balada del agua del mar',
    autor: 'Federico García Lorca',
    declamador: 'Rafael Alberti (Voz del Poeta)',
    pais: 'Granada / Cádiz, España',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/lorca_alberti_balada.mp3',
    descripcion: 'Rafael Alberti declama los versos marinos del Libro de poemas de su entrañable compañero de la Generación del 27, Federico García Lorca.',
    textoPoema: `El mar
sonríe a lo lejos.
Dientes de espuma,
labios de cielo.

—¿Qué vendes, oh joven turbia
con los senos al aire?
—Vendo, señor, el agua
de los mares.

—¿Qué llevas, oh negro joven,
mezclado con tu sangre?
—Llevo, señor, el agua
de los mares.

—Esas lágrimas salobres,
¿de dónde vienen, madre?
—Lloro, señor, el agua
de los mares.

—Corazón, y esta amargura
seria, ¿de dónde nace?
—¡Amarga mucho el agua
de los mares!

El mar
sonríe a lo lejos.
Dientes de espuma,
labios de cielo.`
  },
  {
    id: 'mutis-palabra',
    pista: 4,
    titulo: 'Una palabra',
    autor: 'Álvaro Mutis',
    declamador: 'Álvaro Mutis (Voz del Autor · Voz Viva de América Latina)',
    pais: 'Bogotá, Colombia',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/mutis_palabra.mp3',
    descripcion: 'Álvaro Mutis recita su poema fundamental de Los elementos del desastre (1953), recogido en la Summa de Maqroll el Gaviero.',
    textoPoema: `Cuando de repente en mitad de la vida llega una palabra jamás antes pronunciada, una densa marea nos recoge en sus brazos y comienza el largo viaje entre la magia recién iniciada, que se levanta como un grito en un inmenso hangar abandonado donde el musgo cobija las paredes, entre el óxido de olvidadas criaturas que habitan un mundo en ruinas, una palabra basta, una palabra y se inicia la danza pausada que nos lleva por entre un espeso polvo de ciudades, hasta los vitrales de una oscura casa de salud, a patios donde florece el hollín y anidan densas sombras, húmedas sombras, que dan vida a cansadas mujeres.

Ninguna verdad reside en estos rincones y, sin embargo, allí sorprende el mudo pavor que llena la vida con su aliento de vinagre —rancio vinagre— que corre por la mojada despensa de una humilde casa de placer.

Y tampoco es esto todo.
Hay también las conquistas de calurosas regiones donde los insectos vigilan la copulación de los guardianes del sembrado que pierden la voz entre los cañaduzales sin límite surcados por rápidas acequias y opacos reptiles de blanca y rica piel.

¡Oh el desvelo de los vigilantes que golpean sin descanso sonoras latas de petróleo para espantar los acuciosos insectos que envía la noche como una promesa de vigilia!

Camino del mar pronto se olvidan estas cosas. Y si una mujer espera con sus blancos y espesos muslos abiertos como las ramas de un florido pinsapo centenario, entonces el poema llega a su fin, no tiene ya sentido su monótono treno de fuente turbia y siempre renovada por el cansado cuerpo de viciosos gimnastas.

Sólo una palabra.
Una palabra y se inicia la danza de una fértil miseria.`
  },
  {
    id: 'retamar-felices',
    pista: 5,
    titulo: 'Felices los normales',
    autor: 'Roberto Fernández Retamar',
    declamador: 'Roberto Fernández Retamar (Voz del Autor)',
    pais: 'La Habana, Cuba',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/retamar_felices.mp3',
    descripcion: 'El gran poeta cubano Roberto Fernández Retamar recita su célebre poema dedicado a la pintora Antonia Eiriz.',
    textoPoema: `Felices los normales, esos seres extraños.
Los que no tuvieron una madre loca, un padre borracho, un hijo delincuente,
Una casa en ninguna parte, una enfermedad desconocida,
Los que no han sido calcinados por un amor devorante,
Los que vivieron los diecisiete rostros de la sonrisa y un poco más,
Los llenos de zapatos, los arcángeles con sombreros,
Los satisfechos, los gordos, los lindos,
Los rintintín y sus secuaces, los que cómo no, por aquí,
Los que ganan, los que son queridos hasta la empuñadura,
Los flautistas acompañados por ratones,
Los vendedores y sus compradores,
Los caballeros ligeramente sobrehumanos,
Los hombres vestidos de truenos y las mujeres de relámpagos,
Los delicados, los sensatos, los finos,
Los amables, los dulces, los comestibles y los bebestibles.
Felices las aves, el estiércol, las piedras.

Pero que den paso a los que hacen los mundos y los sueños,
Las ilusiones, las sinfonías, las palabras que nos desbaratan
Y nos construyen, los más locos que sus madres, los más borrachos
Que sus padres y más delincuentes que sus hijos
Y más devorados por amores calcinantes.
Que les dejen su sitio en el infierno, y basta.`
  },
  {
    id: 'sabines-despues',
    pista: 6,
    titulo: 'Después de todo',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/sabines_despues.mp3',
    descripcion: 'Jaime Sabines da lectura a su poema de La señal (1951), explorando la soledad, el deseo y la mortalidad.',
    textoPoema: `Después de todo —pero después de todo—
sólo se trata de acostarnos juntos,
se trata de la carne, de los cuerpos desnudos,
lámpara de la muerte en el mundo.

Gloria degollada, sobreviviente
del tiempo sordomudo,
mezquina paga de los que mueren juntos.

A la miseria del placer, eternidad,
condenaste la búsqueda,
al injusto fracaso encadenaste sed,
clavaste el corazón a un muro.

Se trata de mi cuerpo al que bendigo,
contra el que lucho,
el que ha de darme todo en un silencio robusto
y el que se muere y mata a menudo.

Soledad, márcame con tu pie desnudo.
Aprieta mi corazón como las uvas
y lléname la boca con su licor maduro.`
  },
  {
    id: 'neruda-fabula',
    pista: 7,
    titulo: 'Fábula de la sirena y los borrachos',
    autor: 'Pablo Neruda',
    declamador: 'Pablo Neruda (Voz del Autor · Premio Nobel)',
    pais: 'Parral, Chile',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/neruda_fabula.mp3',
    descripcion: 'Lectura ceremonial de Pablo Neruda del poema incluido en su libro Estravagario (1958).',
    textoPoema: `Todos estos señores estaban dentro
cuando ella entró completamente desnuda
ellos habían bebido y comenzaron a escupirla
ella no entendía nada recién salía del río
era una sirena que se había extraviado
los insultos corrían sobre su carne lisa
la inmundicia cubrió sus pechos de oro
ella no sabía llorar por eso no lloraba
no sabía vestirse por eso no se vestía
la tatuaron con cigarrillos y con corchos quemados
y reían hasta caer al suelo de la taberna
ella no hablaba porque no sabía hablar
sus ojos eran color de amor distante
sus brazos construidos de topacios gemelos
sus labios se cortaron en la luz del coral
y de pronto salió por esa puerta
apenas entró al río quedó limpia
relució como una piedra blanca en la lluvia
y sin mirar atrás nadó de nuevo
nadó hacia nunca más hacia morir.`
  },
  {
    id: 'sabines-cuerpo',
    pista: 8,
    titulo: 'No es nada de tu cuerpo',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/sabines_cuerpo.mp3',
    descripcion: 'Lectura conmovedora de Jaime Sabines de uno de sus poemas amorosos y existenciales más hondos de Yuria.',
    textoPoema: `No es nada de tu cuerpo, ni tu piel, ni tus ojos, ni tu vientre,
ni ese lugar secreto que los dos conocemos,
fosa de nuestra muerte, final de nuestro entierro.
No es tu boca —tu boca que es igual que tu sexo—,
ni la reunión exacta de tus pechos,
ni tu espalda dulcísima y suave,
ni tu ombligo en que bebo.
Ni son tus muslos duros como el día,
ni tus rodillas de marfil al fuego,
ni tus pies diminutos y sangrantes,
ni tu olor, ni tu pelo.
No es tu mirada —¿qué es una mirada?—
triste luz descarriada, paz sin dueño,
ni el álbum de tu oído, ni tus voces,
ni las ojeras que te deja el sueño.
Ni es tu lengua de víbora tampoco,
flecha de avispas en el aire ciego,
ni la humedad caliente de tu asfixia
que sostiene tu beso.
No es nada de tu cuerpo, ni una brizna,
ni un pétalo, ni una gota, ni un grano, ni un momento:
Es sólo este lugar donde estuviste,
estos mis brazos tercos.`
  },
  {
    id: 'dario-gelman-metempsicosis',
    pista: 9,
    titulo: 'Metempsicosis',
    autor: 'Rubén Darío',
    declamador: 'Juan Gelman (Voz del Poeta)',
    pais: 'Nicaragua / Argentina',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/dario_gelman_metempsicosis.mp3',
    descripcion: 'Juan Gelman recita con voz solemne el poema Metempsicosis del fundador del Modernismo, Rubén Darío.',
    textoPoema: `Yo fui un soldado que durmió en el lecho
de Cleopatra la reina. Su blancura
y su mirada astral y omnipotente.
Eso fue todo.

¡Oh mirada! ¡oh blancura! y oh, aquel lecho
en que estaba radiante la blancura!
¡Oh, la rosa marmórea omnipotente!
Eso fue todo.

Y crujió su espinazo por mi brazo;
y yo, liberto, hice olvidar a Antonio.
(¡Oh el lecho y la mirada y la blancura!)
Eso fue todo.

Yo, Rufo Galo, fui soldado y sangre
tuve de Galia, y la imperial becerra
me dio un minuto audaz de su capricho.
Eso fue todo.

¿Por qué en aquel espasmo las tenazas
de mis dedos de bronce no apretaron
el cuello de la blanca reina en broma?
Eso fue todo.

Yo fui llevado a Egipto. La cadena
tuve al pescuezo. Fui comido un día
por los perros. Mi nombre, Rufo Galo.
Eso fue todo.`
  },
  {
    id: 'dario-gelman-fatal',
    pista: 10,
    titulo: 'Lo fatal',
    autor: 'Rubén Darío',
    declamador: 'Juan Gelman (Voz del Poeta)',
    pais: 'Nicaragua / Argentina',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/dario_gelman_fatal.mp3',
    descripcion: '«Dichoso el árbol que es apenas sensitivo...» interpretado con estremecedora gravedad por el poeta Juan Gelman.',
    textoPoema: `Dichoso el árbol, que es apenas sensitivo,
y más la piedra dura porque esa ya no siente,
pues no hay dolor más grande que el dolor de ser vivo,
ni mayor pesadumbre que la vida consciente.

Ser, y no saber nada, y ser sin rumbo cierto,
y el temor de haber sido y un futuro terror...
y el espanto seguro de estar mañana muerto,
y sufrir por la vida y por la sombra y por

lo que no conocemos y apenas sospechamos,
y la carne que tienta con sus frescos racimos,
y la tumba que aguarda con sus fúnebres ramos,
¡y no saber adónde vamos,
ni de dónde venimos!...`
  },
  {
    id: 'neruda-sabines-manos',
    pista: 11,
    titulo: 'Me tienes en tus manos',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/neruda_sabines_manos.mp3',
    descripcion: 'Jaime Sabines recita su célebre poema de amor «Me tienes en tus manos», una de las piezas más entrañables de la poesía mexicana.',
    textoPoema: `Me tienes en tus manos y me lees lo mismo que un libro.
Sabes lo que yo ignoro y me dices las cosas que no me digo.
Me aprendo en ti más que en mí mismo.
Eres como un milagro de todas horas, como un dolor sin sitio.
Si no fueras mujer fueras mi amigo.
A veces quiero hablarte de mujeres que a un lado tuyo persigo.
Eres como el perdón y yo soy como tu hijo.
¡Qué buenos ojos tienes cuando estás conmigo!
¡Qué distante te haces y qué ausente cuando a la soledad te sacrifico!
Dulce como tu nombre, como un higo, me esperas en tu amor hasta que arribo.
Tú eres como mi casa, eres como mi muerte, amor mío.`
  },
  {
    id: 'cortazar-angeles',
    pista: 12,
    titulo: 'Álbum con fotos (La verdadera cara de los ángeles)',
    autor: 'Julio Cortázar',
    declamador: 'Julio Cortázar (Voz del Autor)',
    pais: 'Bruselas / Argentina',
    origen: 'externo_universal',
    genero: 'Narrativa / Relato',
    audioUrl: '/assets/audios/cortazar_angeles.mp3',
    descripcion: 'Julio Cortázar con su inconfundible cadencia lúdica y crítica lee el poema «Álbum con fotos» de su libro Último round (1969).',
    textoPoema: `La verdadera cara de los ángeles es que hay napalm y hay niebla y hay tortura.
La cara verdadera es el zapato entre la mierda, el lunes de mañana, el diario.
La verdadera cara cuelga de perchas y liquidación de saldos.
De los ángeles la cara verdadera es un álbum que cuesta treinta francos y está lleno de caras (las verdaderas caras de los ángeles): la cara de un negrito hambriento, la cara de un cholito mendigando, un vietnamita, un argentino, un español, la cara verde del hambre verdadera de los ángeles.
Por tres mil francos la emoción en casa.
La cara verdadera de los ángeles, la cara verdadera de los hombres, la verdadera cara de los ángeles.`
  },
  {
    id: 'varela-escucharas',
    pista: 13,
    titulo: 'Si me escucharas',
    autor: 'Blanca Varela',
    declamador: 'Blanca Varela (Voz de la Autora)',
    pais: 'Lima, Perú',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/varela_escucharas.mp3',
    descripcion: 'La lúcida e intensa poeta peruana Blanca Varela recita «Si me escucharas», de su libro Concierto animal.',
    textoPoema: `Si me escucharas
tú muerto y yo muerta de ti
si me escucharas
hálito de la rueda
cencerro de la tempestad
burbujeo del cieno
viva insepulta de ti
con tu oído postrero
si me escucharas`
  },
  {
    id: 'roby-boston',
    pista: 14,
    titulo: 'Boston, tú y yo',
    autor: 'Isabel Carlota Roby',
    declamador: 'Isabel Carlota Roby (Voz de la Autora)',
    pais: 'Caracas, Venezuela / EE.UU.',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/roby_boston.mp3',
    descripcion: 'Lectura íntima y apasionada de la poeta venezolana Isabel Carlota Roby, entrelazando el amor, la intimidad y la conmoción de los atentados de Boston.',
    textoPoema: `Háblame de... sé que se convierte en poesía.
Te hablo de existencialismo,
el juego de nuestras manos más que Sartre.
Te ríes, no quieres nada de los poetas.
Te levantas y te veo desnuda,
arrastrando la tiranía de tu cuerpo.
Pechos firmes me hablan de guerra,
con sus pezones duros, pero me dan paz.
Es un hotel de una ciudad que no conozco,
pero el olor de tu pubis me rescata de él,
con esa línea inocente que divide tus labios,
tu sonrisa vertical,
tan desnuda como la tristeza.
No hay domesticación que cobre tanto
como para perderme lo que veo.

Estalló una bomba en Boston
y estallas esto en mi boca.
Bombardeos, guerras,
se cae el mundo ahora.
Dos bombas estallan en Boston,
pero tú y yo... nos amamos,
tiramos las sábanas.
Mueren sus ciudadanos:
nuestra venganza contra el mundo es el placer prohibido,
desafiar la fragilidad y el frío.
El mundo tiembla. Fuimos nosotras.

La gente habla de terrorismo y lo entiendo,
porque veo la explosión en esta habitación,
ya no hay fronteras.
Lo digo de tu cuerpo cuando pasas:
sobresales como lo extraordinario en la cotidianidad,
y mi lengua espera que grites en el silencio.
Hay muertos y heridos en Boston,
pero tú y yo estamos bastante vivas,
con ese olor que reconozco,
que bebo y recojo cada vez que respiras.

Nuestra excusa es la condena del placer.
Si morimos ahora, seremos cadáveres felices:
no sentiremos el olor del invierno,
ni el olor de las heridas.
Sentiremos el calor del amor
que reconozco en cualquier ciudad desconocida,
en cualquier hotel de paso
que se vuelve mi casa cuando llega tu aliento.`
  }
];
