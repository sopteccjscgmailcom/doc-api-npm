# 🚀 API RESTful  

### ¿Qué es un API RESTful? 🤔💻
API significa Application Programming Interface (Interfaz de Programación de Aplicaciones). Es como un puente o traductor que permite que dos programas o sistemas diferentes se comuniquen entre sí.

### ¿Y RESTful? 🌐
REST significa Representational State Transfer. Es un conjunto de reglas o principios para diseñar APIs que sean fáciles de usar, rápidas y escalables.

Cuando decimos que un API es RESTful, quiere decir que es sencillo acceder a datos o recursos (como usuarios, productos, mensajes, etc.) usando URLs (direcciones web).

---

## 🔍 **Características Clave**  

### 1️⃣ **Recursos Identificables (URI/URL)** 📌  
Todo se modela como un **recurso** único identificado por una URL.  
✅ Ejemplo:  
```
https://api.ejemplo.com/usuarios/123  
https://api.ejemplo.com/productos/456  
```

### 2️⃣ **Sin Estado (Stateless)** 🧩  
Cada solicitud (**request**) debe contener toda la información necesaria. El servidor **no guarda contexto** entre peticiones.  

✅ **Correcto:** Cada petición lleva autenticación (token).  
❌ **Incorrecto:** El servidor "recuerda" al usuario entre llamadas.  

### 3️⃣ **Métodos HTTP Estándar** 📡  
Se usan los verbos HTTP para definir acciones:  

| Método | Acción           | Ejemplo                     |
|--------|------------------|-----------------------------|
| GET    | 🔍 Obtener datos  | `GET /api/usuarios`         |
| POST   | ➕ Crear datos    | `POST /api/usuarios`        |
| PUT    | ✏️ Actualizar (completo) | `PUT /api/usuarios/123` |
| PATCH  | 🖊️ Actualizar (parcial) | `PATCH /api/usuarios/123` |
| DELETE | 🗑️ Eliminar       | `DELETE /api/usuarios/123` |

### 4️⃣ **Formatos de Respuesta (JSON, XML, etc.)** 📦  
Los recursos pueden representarse en diferentes formatos:  
```json
{
  "id": 123,
  "nombre": "Ana López",
  "email": "ana@ejemplo.com"
}
```
```xml
<usuario>
  <id>123</id>
  <nombre>Ana López</nombre>
  <email>ana@ejemplo.com</email>
</usuario>
```

### 5️⃣ **HATEOAS (Hipermedia como Motor de Estado)** 🔗  
Las respuestas incluyen **enlaces** a recursos relacionados (similar a navegar en una web).  
```json
{
  "id": 123,
  "nombre": "Ana López",
  "_links": {
    "self": { "href": "/usuarios/123" },
    "amigos": { "href": "/usuarios/123/amigos" }
  }
}
```

---

## ✅ **Ventajas de las APIs RESTful**  

✔️ **Escalabilidad** 🏗️ → Al ser stateless, se puede balancear carga fácilmente.  
✔️ **Portabilidad** 📲 → Funciona en web, móvil, IoT, etc.  
✔️ **Flexibilidad** 🧩 → Soporta múltiples formatos (JSON, XML, YAML).  
✔️ **Simplicidad** 🎯 → Usa HTTP, un estándar conocido.  

---

## 🔥 **Ejemplo Completo: API de Usuarios**  

### **1. Obtener todos los usuarios**  
```http
GET /api/usuarios HTTP/1.1
Host: ejemplo.com
Accept: application/json
```
**Respuesta (200 OK):**  
```json
[
  { "id": 1, "nombre": "Ana" },
  { "id": 2, "nombre": "Carlos" }
]
```

### **2. Crear un nuevo usuario**  
```http
POST /api/usuarios HTTP/1.1
Content-Type: application/json

{ "nombre": "Luisa", "email": "luisa@ejemplo.com" }
```
**Respuesta (201 Created):**  
```json
{
  "id": 3,
  "nombre": "Luisa",
  "email": "luisa@ejemplo.com",
  "_links": { "self": { "href": "/api/usuarios/3" } }
}
```

### **3. Eliminar un usuario**  
```http
DELETE /api/usuarios/3 HTTP/1.1
```
**Respuesta (204 No Content)** → Éxito sin cuerpo de respuesta.  

---

## 📌 **Conclusión**  
Una **API RESTful** es la forma más popular de diseñar APIs modernas porque:  
✅ **Usa estándares web (HTTP/URI/JSON)**  
✅ **Es fácil de entender y consumir**  
✅ **Escala bien en sistemas distribuidos**  

¡Es la base de servicios como Twitter, GitHub y Google Maps! 🚀💻  

¿Quieres un ejemplo práctico en Node.js o Python? ¡Dímelo! 😊