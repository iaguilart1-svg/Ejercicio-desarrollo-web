EJERCICIO DE RAMAS EN GITHUB



RAMA FEATURE/README



1\. CREACIÓN DE LA RAMA



Primero se creó la rama feature/README desde la rama master con el siguiente comando:



git checkout -b feature/README



Después se utilizó git branch para comprobar que la rama se creó correctamente.



2\. CREACIÓN DEL ARCHIVO



Dentro de la carpeta RamasGitBash se creó el archivo README.md utilizando:



touch README.md



3\. PUBLICACIÓN DEL ARCHIVO



Primero se agregó el archivo para poder hacer el commit:



git add README.md



Después se realizó el commit:



git commit -m "Agrega README en rama feature"



Por último, se subió la rama a GitHub con:



git push -u origin feature/README



4\. SINCRONIZACIÓN



Al finalizar, se comprobó que la rama feature/README quedó creada tanto localmente como en GitHub y que los cambios se sincronizaron correctamente.

