# Entrega-1.1-ToDo-list

### Actualizar npm a la última versión:
npm install -g npm@latest

### Instalar TypeScript globalmente:
npm i -g typescript

## Dentro del proyecto:
### Inicializar el archivo package.json:
npm init -y

## Dependencias y TypeScript:
### Instalar ts-node como dependencia de desarrollo:
npm install --save-dev ts-node

### Si no tiene los tipos de Node, instálelos también:
npm install --save-dev @types/node

## Configurar scripts en package.json:
### Agrega un script para ejecutar tus archivos TypeScript:

```sh
JSON

"scripts": {
  "run:<nombre_fichero_ts>": "ts-node <nombre_fichero_ts>.ts"
}
```

## Instalar Jest:
### Instala Jest como dependencia de desarrollo:
npm install jest -D

### También instalar ts-jest para trabajar con TypeScript:
npm install --save-dev ts-jest

## Tipos de Jest para TypeScript:
### Asegúrate de tener los tipos de Jest:
npm i -D @types/jest ts-jest

## Configuración de Jest en package.json:
### Agrega la siguiente configuración en tu archivo package.json:

```sh
JSON

"jest": {
  "preset": "ts-jest",
  "verbose": true,
  "testEnvironment": "node",
  "moduleFileExtensions": [
    "ts", "tsx", "js", "jsx", "json", "node"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/dist/"
  ]
}
```

## Ejecutar pruebas:
npm run test
