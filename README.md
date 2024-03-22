# Página web responsive
## Tema
Mi intento de Landing Page para atraer posibles clientes para que contacten por medio del formulario con la galería de rutas. 
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220558236479131658/image.png?ex=660f6070&is=65fceb70&hm=47be67d567a04b2df6d895c6554cc69f2382b8444e524f1ce44cb96659ea6309&=&format=webp&quality=lossless&width=550&height=342" width="800px">
## Tecnologías usadas
He utilizado el modelo de cajas Flex, además de CDN para algunos iconos. Para las animaciones he usado tanto transiciones empleando únicamente CSS como un mix de transiciones con JS.
## Principales características
- Hay bastantes animaciones tanto en botones como algunos elementos.
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220521060097855649/lol1.gif?ex=660f3dd0&is=65fcc8d0&hm=a1d4c482bd2caa0786016a289d41889db50434db7c66a33e43ddedb3cf16ca75&=&width=250&height=170" width="800px">
- Barra de navegación que responde al cursor.
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220553135899021393/lol3.gif?ex=660f5bb0&is=65fce6b0&hm=221fa92b3a4321fb2c4f921c31b567570242a5301e1f0b644d0e8f45c508b20a&=" width="800px">
- Hero image como portada con su botón CTA. el cual te lleva a la galería de rutas.
- Los iconos de redes sociales tienen un pequeño movimiento al colocar el cursor.
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220552234908123306/lol2.gif?ex=660f5ad9&is=65fce5d9&hm=714aa0ccc1e6246080feffd248ea63fa276997118688d6d3a75f2e1b78a14b56&=" width="800px">
- Logo y botón de contacto con modo oscuro y diurno, (Sé que en la ultima pagina no queda muy bien por el fondo oscuro.) 
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220516153944834178/lol.gif?ex=660f393f&is=65fcc43f&hm=56bcfae74d7e7cf837ad977dd8a9d232b9fe45d4f85f7433b783c3ad216a1909&=&width=532&height=300" width="800px">
- Pantalla de carga cada vez que carga una pagina
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220554959716880484/carga-ezgif.com-video-to-gif-converter.gif?ex=660f5d63&is=65fce863&hm=8c3551cebaf46ba9fdd31c9e030dd9d3df4f2fcfc3e0b5120097496a8727381e&=" width="800px">
- Selector de imagen automático
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220556908826595398/selector.gif?ex=660f5f33&is=65fcea33&hm=c126fdecc64ae51bfa97306b1d699e84fc833fb85b3f608ad0b887d2ee1e28cd&=" width="800px">
- Formulario que responde al submit.
<img src="https://media.discordapp.net/attachments/1220512525045465128/1220557888905416754/form.gif?ex=660f601d&is=65fceb1d&hm=88c4527382356df3ad22e4a9d891fe260bd7c0c1d39cfb0a9895302b2de31867&=" width="800px">
## Rendimiento
- La selección de fotos para la galería de rutas están en formato WEBP, un formato bastante ligero.
## Estructura de archivos
- `index.html`: Página principal.
- `rutas.html`: Galería de rutas.
- `sobre.html`: Página con información sobre la pagina.
- `contacto.html` : 
- `styles`: Carpeta contenedora de los distintos archivos CSS.
	- `default.css`: Archivo CSS contenedor de los elementos por defecto para las distintas paginas.
	- `index.css`: Archivo CSS que estiliza `index.html`.
	- `galeria.css`: Archivo CSS que estiliza `galeria.html`.
	- `sobre.css`: Archivo CSS que estiliza `sobre.html`.
	- `contacto.css`: Archivo CSS que estiliza `contacto.html`.
- `media`: Carpeta contenedora de de carpetas usadas par almacenar los recursos multimedia, una por cada pagina.
	- `general`: Contiene todos los recursos multimedia de proposito general que se llegar a encontrar en todas o varias paginas.
	- `index`: Contiene todos los recursos multimedia de la pagina `inicio`.
	- `rutas`: Contiene todos los recursos multimedia de la pagina `rutas`. La siguiente estructura es como he ordenado las imagenes que se encargan de aparecer en la selección de ruta y en el slider automatico.
		- `erosionbird`
		- `fauna`
		- `libre`
		- `navegar`
	- `sobre`: Contiene todos los recursos multimedia de la pagina `sobre`.
	- `contact`: Contiene todos los recursos multimedia de la pagina `contact`.
- scripts


### Pequeña nota
El motivo por el que entrego tarde el proyecto es porque he tenido que reescribir mucho codigo por que he rompí algunas cosas del codigo, las cuales me di cuenta que no estaban correctas del todo.