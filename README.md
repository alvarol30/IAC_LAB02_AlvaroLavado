# IAC_LAB02_AlvaroLavado

## Stack

**API**
- Node.js + Express (Minimal API)
- Retorna un mensaje incluyendo mi nombre de usuario
- 3 copias corriendo mediante Docker Compose (puertos 3000, 3001, 3002)

**BD**
- PostgreSQL (imagen oficial de Docker Hub)

# Indicaciones

## Comandos

Levantar el proyecto:
```bash
docker compose up -d --build
```

Detener el proyecto:
```bash
docker compose down
```

## Configuración por entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
MESSAGE=holalvaritol
POSTGRES_USER=admin
POSTGRES_PASSWORD=contrasena
POSTGRES_DB=lab02db

## Redes en Docker

Docker maneja varios tipos de red para los contenedores:

- **bridge**: es la red por defecto que usa Docker Compose. Crea una red privada donde los contenedores se pueden comunicar entre sí usando el nombre del servicio como si fuera un hostname. En este proyecto, las APIs se conectan a la base de datos usando el nombre `db` gracias a este tipo de red.
- **host**: el contenedor usa directamente la red de la máquina anfitriona, sin aislamiento. Se gana rendimiento pero se pierde separación entre contenedor y host.
- **none**: el contenedor no tiene ninguna conexión de red, queda completamente aislado.
- **overlay**: conecta contenedores que corren en distintas máquinas físicas, se usa en entornos de clústeres como Docker Swarm.

## Volúmenes en Docker

Docker ofrece distintas formas de persistir datos:

- **Named volumes**: Docker los crea y administra internamente. Es el tipo usado en este proyecto (`db_data`) para que los datos de PostgreSQL no se pierdan aunque el contenedor se elimine y se vuelva a crear.
- **Bind mounts**: conectan una carpeta específica del sistema anfitrión a una ruta dentro del contenedor. Se usan mucho en desarrollo para reflejar cambios de código en tiempo real.
- **tmpfs mounts**: los datos se almacenan solo en la memoria RAM del host, nunca se escriben en disco, y se pierden al detener el contenedor. Sirven para datos temporales o sensibles.

## Evidencias

<img width="673" height="461" alt="image" src="https://github.com/user-attachments/assets/18acc86d-b477-4407-9ed5-4c337796b748" />
Comprobar si levanta bien con comandos de down y up

<img width="905" height="188" alt="image" src="https://github.com/user-attachments/assets/ca5a1d35-89be-4f8f-938a-b90748a37560" />
Comprobar si los 4 contenedores fueron creados
  
<img width="959" height="563" alt="image" src="https://github.com/user-attachments/assets/30041722-5d81-4a13-8305-b81497210905" />
<img width="959" height="562" alt="image" src="https://github.com/user-attachments/assets/98d5d3dc-d820-4368-91a6-ddbd5596b242" />
<img width="959" height="563" alt="image" src="https://github.com/user-attachments/assets/2951cb32-f3c0-4c07-a499-76015be2d403" />
Comprobar que las tres apis estan repondiendo con diferenetes puertos

# Creditos
- Alvaro Lavado
