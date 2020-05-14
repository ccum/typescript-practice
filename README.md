1. [El lenguaje de programación TypeScript](types-ts/src/)
2. [Instalación de herramientas](types-ts/src/)
3. [Instalación de herramientas en Windows](types-ts/src/)
4. [Navegación y refactorización](types-ts/src/)
5. [El compilador de TypeScript](types-ts/src/)
6. [El archivo de configuración de TypeScript](types-ts/src/)
7. [Mi primer proyecto TypeScript](types-ts/src/)
8. [Tipado en TypeScript](types-ts/src/)
9. [Number, Boolean y String](types-ts/src/tipoDato.ts)
10. [Any](types-ts/src/type-any.ts)
11. [Void y never](types-ts/src/type-void.ts)
12. [null y undefined](types-ts/src/type-null-undefined.ts)
13. [Object](types-ts/src/type-object.ts)
14. [Array](types-ts/src/type-array.ts)
15. [Tupla](types-ts/src/type-tuple.ts)
16. [Enum](types-ts/src/type-enum.ts)
17. [Unión de Tipos, Alias y Tipos Literales](types-ts/src/type-union.ts)
18. [Aserciones de tipo](types-ts/src/type-assert.ts)
19. [Interfaces](types-ts/src/interfaces.ts)
20. [Interfaces: propiedades opcionales](types-ts/src/interfaces.ts)
21. [Herencia de interfaces](types-ts/src/herencia-interfaces.ts)
22. [Clases](types-ts/src/clases.ts)
23. [Clases públicas y privadas](types-ts/src/clases-private.ts)
24. [Clases privadas en ecmascript](types-ts/src/clases-private-ecmascript.ts)
25. [Métodos Get y Set](types-ts/src/clases-get-set.ts)
26. [Herencia de clases y propiedades estáticas](types-ts/src/clases-herencia.ts)
27. [Clase abstracta](types-ts/src/clases-herencia.ts)
28. [Import y export en TS](photo-app/src/main.ts)
29. Resolviendo módulos
    
    `tsc --moduleResolution node` -> Modulos AMD, System, ES2015, poco configurable

    `tsc --moduleResolution classic`-> node: Modulos CommonJs o UMD, mas opciones de configuración en tsconfig.json
    ```
    "moduleResolution": "node|classic"
    "traceResolution":true 
    ```
29. Webpack y agrupación de Módulos
    Webpack --> empaquetador de modulos
    ```
    npm init -y
    npm install typescript webpack webpack-cli --save-dev
    npm install ts-loader --save-dev
    npm run build 
    ```