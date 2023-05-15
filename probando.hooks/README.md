# ¿Qué es un Hook?

Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una function. 
Esto, antes, no era posible y nos obligaba a crear un componente con class para poder acceder a todas las posibilidades de la librería. Y de ahí viene el nombre. Hooks es gancho y, precisamente, lo que hacen, es que te permiten enganchar tus componentes funcionales a todas las características que ofrece React.


## ¿Por qué usar Hooks?

Los Hooks nos permiten reutilizar lógica de estado sin tener que cambiar la jerarquía de nuestros componentes. Esto hace que sea más fácil compartir lógica entre componentes o incluso entre aplicaciones, como veremos más adelante.



## El hook de estado: useState

El hook useState es el que nos permite agregarle un estado local a un componente funcional y cambiar ese estado.

Inicializando el hook:
Importamos el hooks
E inicializa el estado llamando useState en nuestro componente
useState un estado inicial y retorna dos valores: el estado actual y una función que actualiza el estado.

## El hook de efecto: useEffect

El hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente. Es decir, nos permite tener efectos secundarios en nuestros componentes funcionales.



