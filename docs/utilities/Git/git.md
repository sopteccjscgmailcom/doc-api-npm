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
```
    git add *
    git add leeme.txt       

### commit
```bash
```
    git commit -m "primer commit"   

## 🟡2 Funcionalidades

### log   
```bash
```              
    git log                         
muestra commits

### checkout
```bash
```
    git checkout `<nombredelarchivo>`
restaura los cambios antes de subir al stage

### reset
```bash
```
    git reset                       
deshace cambios agregados al area de stage (git add)

### diff
```bash
```
    git diff                        
ver las difrencias entre nuestros archivos recien editados

### reflog
```bash
```
    git reflog                      
muestra el historial completo de interacciones en git un log completo

### tag   
```bash
```              
    git tag version_1               
agregamos un nombre a nuestra version de nuestro proyecto

### switch
```bash
```
    git switch nombreDeLaRama       
cambiamos de lugar de trabajo a otra rama

### merge
```cmd
```
    git merge otrarama              
combina 2 ramas

### stash
```cmd
```
    git stash                       
un commit temporal

## 🟡3 GITHUB
subida de proyecto
### remote    
```cmd
```             
    git remote add origin https://github.com/sopteccjscgmailcom/doc-git.git
nos conectamos al repositorio de github - solo la primera vez

### push    
```cmd
```            
    git push -u origin main
subir nuestro proyecto - luego usamos solo push

### fetch
```cmd
```
    git fetch                       
descarga el historial de cambios

### pull
```cmd
```
    git pull                        
combinamos remoto con local

## 🟡4 Descargar un proyecto
### clone
```cmd
```
    git clone https://github.com/sopteccjscgmailcom/doc-git.git     
copia sincronizada del proyecto

## 🟣 trabajar con otro proyecto en la pagina de github NO-local

fork   `<creamos un fork> `       
clone   `<una vez creado clonamos nuestro repositorio y empezamos a trabajar>`
Contribute `-> pull request    <una vez haciendo add, commit, en github hacemos el pull>`

sinc fork   `<para que estemos actualizador con el proyecto original>`

## 🟣 Tipos Adicionales
### abrir nuestra visual estudio code en la ruta donde nos encontramos 
    code .

### ingresamos a esta ruta para ver la configuracion de nuestro git
    C:\Users\clive_pfl66ry\.gitconfig
donde veremos nuestro user y email

### lo usamos para evitar ficheros que no queremos agregar
[.gitignore](.gitignore)

### comentamos el codigo en visualStudio

`crlt + }`
