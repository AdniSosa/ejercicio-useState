# Ejercicio: Cambio de Nombre del Profesor
En este ejercicio tendrás que poner en práctica lo aprendido con useState. Para ello se pide que hagas una lista de nombres de tus profesores y que cada vez que cliques en uno de ellos cambie el nombre del profesor. Los pasos a seguir son los siguientes:

1. Clonate este repositorio y en el componente funcional `App`, importa `useState` desde React.
2. Define dos variables de estado utilizando `useState`:
   - `name`: inicializada con el valor `"Sofía"`, que representa el nombre actual del profesor.
   - `newName`: inicializada con el valor `''`, que representa el nuevo nombre ingresado por el usuario.
3. En el JSX del componente, renderiza un título `<h2>` con el texto "Teacher Name" seguido del valor de `name`.
4. Renderiza una lista `<ul>` con tres elementos `<li>`, cada uno con un nombre de profesor diferente:
   - El texto de cada elemento `<li>` debe ser uno de los nombres predefinidos ("Data", "Reyes", "Yolanda").
   - Al hacer clic en cada elemento de la lista, se debe cambiar el nombre del profesor mostrado en el título a uno de los nombres predefinidos correspondientes.
   - Utiliza la función `setName` proporcionada por `useState` para actualizar el nombre del profesor cuando se haga clic en un elemento de la lista.




## Bonus
Como reto, te proponemos que modifiques el ejercicio anterior y en vez de tener que clicar en el nombre para cambiar su valor crees un formulario que cuando se envíe cambie el nombre: 
1. Modifica el componente `App`.
2. Implementa una función `changeName` que se encargue de actualizar el nombre del profesor:
   - Verifica que `newName` no esté vacío antes de actualizar el nombre.👌
   - Actualiza el estado `name` con el valor de `newName`.👌
   - Restablece `newName` a una cadena vacía después de actualizar el nombre.👌
4. En el JSX del componente, renderiza un formulario `<form>` con los siguientes elementos:
   - Un campo de entrada de texto `<input>` con el atributo `type` establecido en `"text"`, el atributo `value` vinculado a `newName`, el atributo `onChange` que actualiza `newName` cuando cambia el valor y el atributo `placeholder` con el texto "add a name".
   - Un botón `<button>` con el tipo establecido en `"submit"` y el texto "Add".:👌
5. Utiliza la función `changeName` para manejar el evento `onSubmit` del formulario. Esto asegurará que el nombre se actualice cuando el formulario se envíe.👌
6. Exporta el componente `App` al final del archivo.👌