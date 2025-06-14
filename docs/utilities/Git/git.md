# Documentación Git

## ⚙️ 1: Configuración

### config

#### Configuración a nivel de repositorio _(recomendado)_
```bash
git config user.name "sopteccjscgmailcom"
```
```bash
git config user.email "sopteccjsc@gmail.com"
```

#### Configuración a nivel global `--global`
Configuración de `user.name` y `user.email` a nivel global
```bash
git config --global user.name "sopteccjscgmailcom"
```
```bash
git config --global user.email "sopteccjsc@gmail.com"
```

#### Comandos personalizados con alias
alias es usado para crear alias de comandos en git para facilitar su uso
```bash
git config --global alias.tree "log -graph --decorate --all --oneline"
```
:::tip
Para ver todos los alias que tenemos configurados
```bash
git config --global --list
```
tambien podemos editarlo directamente en la carpeta de configuracion de git
```bash
C:\Users\clive_pfl66ry\.gitconfig
```
:::

#### Obtener configuracion de usuario nombre y correo de github
```bash	    
git config --get user.name
git config --get user.email
```
tambien podemos verlo con una linea de comando
```bash
git config --get-regexp user.*
```

---

### init
Con este comando inicializaremos nuestro proyecto usando git
```bash
git init
```

---

### branch
cambia el nombre de nuestra rama principal de master a main `-m` significa modificar
```bash
git branch -m main
```
crea una nueva rama
```bash
git branch nuevarama
```
borra una rama `-d` significa delete
```bash
git branch -d nuevarama
```

---      

### status
```bash
git status 
```
                         

### add
```bash
git add *
git add leeme.txt 
```
         

### commit
```bash
git commit -m "primer commit" 
```
      

## 🟡2 Funcionalidades

### log   
```bash
git log
```              
muestra commits

### checkout
```bash
git checkout `<nombredelarchivo>`
```
restaura los cambios antes de subir al stage

### reset
```bash
git reset
```
deshace cambios agregados al area de stage (git add)

### diff
```bash
git dif
```
ver las difrencias entre nuestros archivos recien editados

### reflog
```bash
git reflog
```
muestra el historial completo de interacciones en git un log completo

### tag   
```bash
git tag version_1
```              
agregamos un nombre a nuestra version de nuestro proyecto

### switch
```bash
git switch nombreDeLaRama
```
cambiamos de lugar de trabajo a otra rama

### merge
```bash
git merge otrarama
```
combina 2 ramas

### stash
```bash
git stash
```
un commit temporal

## 🟡3 GITHUB
subida de proyecto
### remote    
```bash
git remote add origin https://github.com/sopteccjscgmailcom/doc-api-npm.git
```             
nos conectamos al repositorio de github - solo la primera vez

### push    
```bash
git push -u origin main
```            
    
subir nuestro proyecto - luego usamos solo push

### fetch
```bash
git fetch
```
descarga el historial de cambios

### pull
```bash
git pull
```
combinamos remoto con local

## 🟡4 Descargar un proyecto
### clone
```bash
git clone https://github.com/sopteccjscgmailcom/doc-api-npm.git 
```
        
copia sincronizada del proyecto

## 🟣 trabajar con otro proyecto en la pagina de github NO-local
1. creamos un fork haciendo click en el boton arriba a la derecha `fork`
2. clonamos nuestro proyecto con el comando `git clone`
3. trabajamos en nuestro proyecto
4. hacemos add, commit, push
5. hacemos un pull request en github haciendo click en el boton `Contribute` y luego `Open pull request`

para estar actualizados con el proyecto original podemos hacer click en `sinc fork`

## 🟣 Tipos Adicionales
### abrir nuestra visual estudio code en la ruta donde nos encontramos 
    code .

### ingresamos a esta ruta para ver la configuracion de nuestro git
    C:\Users\clive_pfl66ry\.gitconfig
donde veremos nuestro user y email

### lo usamos para evitar ficheros que no queremos agregar
.gitignore
### comentamos el codigo en visualStudio

`crlt + }`
