# 🔐 CORS
(Cross-Origin Resource Sharing / Intercambio de Recursos de Origen Cruzado) 

Es un mecanismo de seguridad que usan los navegadores 🌐 para controlar cómo una página web puede hacer solicitudes a **otros dominios** diferentes del que la cargó 🛡️.

---

### ❓¿Por qué existe CORS?

Supón que visitas `https://mipagina.com` 🏠, y desde ahí tu app quiere pedir datos a `https://api.otrodominio.com` 🌍.
Por seguridad, **el navegador bloquea** estas solicitudes ⚠️ a menos que el servidor **permita explícitamente** recibirlas ✅.

---

### 📬 ¿Cómo permite el servidor estas solicitudes?

El servidor responde con ciertos encabezados HTTP 📄, por ejemplo:

```http
Access-Control-Allow-Origin: https://mipagina.com
```

O, si quiere permitir solicitudes de *cualquier origen* 🌐:

```http
Access-Control-Allow-Origin: *
```

Otros headers comunes son:

* `Access-Control-Allow-Methods` 📥: Métodos permitidos (GET, POST, etc.)
* `Access-Control-Allow-Headers` 🧾: Qué headers acepta
* `Access-Control-Allow-Credentials` 🍪: Si se permiten cookies/autenticación

---

### 🧪 Ejemplo práctico

Tienes una app en React en `http://localhost:3000` ⚛️, y haces un `fetch` a una API en `http://api.miservidor.com` 🌐.
Si el servidor **no responde con los headers CORS adecuados**, el navegador **bloquea la respuesta** 🚫 aunque el servidor la haya enviado ✅.

---

### 🧑‍💻 ¿Afecta al back-end?

¡Sí! El back-end debe configurarse para permitir estos accesos 🔧.

* En **Express (Node.js)**:

  ```js
  const cors = require('cors');
  app.use(cors()); // 🎉 Habilita CORS
  ```

* En **PHP**:

  ```php
  header("Access-Control-Allow-Origin: *"); // ✅
  ```

---