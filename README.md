# ¿Que es BEM? - _**Bloque, Elemento, Modificador**_

Es una metodologia de CSS, que nos ayuda a crear componentes reutilizables, código claro y mantener la especificidad al minimo. Esto gracias a su nomenclatura.

En resumen BEM nos permite:

- Matener especifisidad al minimo.
- Codigo modular.
- Codigo limpio.
- Nomenclatura(_**Bloque, Elemento, Modificador**_).

# ¿Que es un Bloque - Block?

Es una entidad independiente, que no necesita de nadie más para existir.

Ejemplo: Header, Nav, Form, Footer, Contenedor, ul etc...

## Como se nombran los bloques ?

se les nombra con la funcionalidad del bloque, es decir, describe su proposito(¿Que es? - menu boton card) NO su estado(¿Como se ve? rojo, azul, verde).

Ejemplo:

```html
<nav class="nav"></nav>
```

# ¿Que es un Elemento - Element?

Es una parte compuesta de un bloque, es decir, depende directamente de un bloque, por lo que debe estar dentro de un bloque(Es dependiente de un bloque y esta ligado a el).

## Como se les Nombra a los elementos?

se les nombra primero nombre de su bloque contenedor, dos guiones bajos **( __ )** y la descripcion del elemento.

describe su proposito (¿Que es esto? - item, texto, titulo, input) **NO** su estado (tipo ¿Cual es, Como luce? rojo, azul, verde).

Ejemplos:

```html
<form class="form">
  <input type="text" class="form__input" /> <!-- Elemeno --> 
  <input type="submit" class="form__submit" value="Enviar" /> <!-- Elemeno -->
</form>

<nav class="nav">
  <a href="" class="nav__link">Item 1</a> <!-- Elemeno -->
  <a href="" class="nav__link">Item 2</a> <!-- Elemeno -->
</nav>
```

# ¿Que es un Modificador - Modifier?
una entidad que define la apariencia, el estado o el comportamiento de un bloque o elemento.

## Como se les nombra a los modificadores?
se les nombra, con el nombre que tenian anteriormente(bloque o elemento) se les agrega dos guiones medios **(--)** y la descripcion de la modificacion. 

describe su apariencia(¿De que tamaño? o ¿Que tema? ¿Que color? size, tech, blue, red) su estado(¿Que lo diferencia de los demas? disabled, active) y su comportamiento(¿Como se comporta? o ¿Como responde al usuario? direction--left direccition-top).

Ejemplos: 
```html
<!-- Modificador: header--blue  -->
<header class="header header--blue"></header>

<nav class="nav">
  <!-- Modificador: nav__link--active  -->
  <a href="" class="nav__link nav__link--active">Item 1</a>
  <a href="" class="nav__link">Item 2</a>
</nav>      
<!-- Modificador: form__input--block  -->
<input type="text" class="form__input form__input--block">
```

**IMPORTANTE:** Un modificador **NO** reemplaza a un nombre de bloque o elemento, se agrega al nombre de la clase (Bloque o Elemento)