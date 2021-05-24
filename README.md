# PruebasE2EGeneracionDatos

# Instrucciones

## Instrucciones para Ejecución de Escenarios con Cypress
Luego de haber clonado el repositorio debe:
1.	Reemplazar la base de datos de la versión local de ghost (3.42.5) con la base de datos Databases/ghost-local 
2.	Cambiar la propiedad “baseUrl” del archivo cypress/cypress.json para que apunte a la versión local de ghost (3.42.5)
3.	Ubicarse en la carpeta cypress
4.	Ejecutar el comando npm install
5.	Ejecutar el comando npx cypress open

## Instrucciones para Ejecución de Escenarios con Kraken
Luego de haber clonado el repositorio debe:
1.	Reemplazar la base de datos de la versión local de ghost (3.42.5) con la base de datos Databases/ghost-local 
2.	Cambiar el contenido del archivo kraken/.baseUrl para que apunte a la versión local de ghost (3.42.5)
3.	Ubicarse en la carpeta kraken
4.	Ejecutar el comando bundle exec kraken-mobile run

# Estrategias Utilizadas para Generación de Datos

## Pool de datos a-priori

- login.spec.js: Se utilizó la función cy.fixture para cargar datos locales en 3 escenario.
- create-post-scenario1.feature: Se utilizó scenario outline para 4 sets de datos.
- create-post-scenario2.feature: Se utilizó scenario outline para 4 sets de datos.
- create-post-scenario3.feature: Se utilizó scenario outline para 4 sets de datos.
- create-post-scenario4.feature: Se utilizó scenario outline para 4 sets de datos.
- edit-post-scenario1.feature: Se utilizó scenario outline para 4 sets de datos.
- edit-post-scenario2.feature: Se utilizó scenario outline para 4 sets de datos.

## Pool de datos (pseudo) aleatorio dinámico

- create-tag.spec.js: Se utilizó Mockaroo en 2 escenarios.

## Escenario aleatorio

- create-tag.spec.js: Se utilizó Faker en 1 escenario.
