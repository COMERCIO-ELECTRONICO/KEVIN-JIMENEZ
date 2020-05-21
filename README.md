## Instalar dependencias npm

`La instalacion de dependencias se realiza una sola vez, debe realizarse dentro del proyecto donde se encuentre el archivo de package.json, debe usarse el siguiente comando`

```
npm install
npm i
```

`Nota: se les crear un carpeta node_module la cual contine todas las dependencias instaladas, dicha carperta se puede borrar, cuando se instala las dependecias la carpeta se crear nuevamente.`

`Nota: al realizar un commit en github se debe omitir la carpeta node_modules ya que contine demasiados archivos`

## Instalacion de paquetes npm

```
npm i nombreDelPaquete
```

## Comandos para el CLI de angular

### Crear un proyecto nuevo

```
ng new nombreDelProyecto
```

### Crear un nuevo componente

```
ng generate component nombreDelComponente
ng g c nombreDelComponente
```

### Crear un nuevo modulo

```
ng generate module nombreModulo
ng g m nombreModulo
```

### Crear un nuevo modulo con el archivo de rutas

```
ng generate module nombreModulo --routing
ng g m nombreModulo --routing
```
