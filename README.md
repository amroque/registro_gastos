# 5. Registro_gastos
Registro de gastos
Descripción genérica:
Una aplicación donde el usuario registra sus gastos diarios, indicando fecha, categoría y monto; puede ver la lista de gastos y el total acumulado.

**Funcionalidades:**

- Agregar gasto: formulario con tres campos — fecha (input type=date), categoría (select con opciones: Alimentación, Transporte, Ocio, Otros) y monto (input type=number) — y un botón “Añadir” que inserta el gasto en la lista.
- Mostrar lista de gastos: al añadir un gasto, se muestra en una tabla o lista en el DOM con columnas Fecha, Categoría y Monto.
- Calcular total: cada vez que se actualiza la lista, se recalcula y muestra el total de todos los gastos registrados.
