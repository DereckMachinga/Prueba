# Prueba
Pasos para Ejecutar Proyecto

1. Instalar las librerias requerias del proyecto con el siguienete comando: 
   # npm install / npm i 
2. Una vez instalados todas las librerias correr el proyecto con el siguiente comando:
   # npm run dev
3. Las librerias usadas para el multilenguaje fueron las siguentes: 
   # i18next, i18next-browser-languagedetector, i18next-http-backend, react-i18next

# Para la implemenatacion del lenguaje
1. Se configuro el archivo i18n.jsx  dentro de src/lang/ para el uso del detector de lenguajes del navegador asimismo se inicializo el provider de idioma (initReactI18next)
2. En el archivo prueba.jsx dentro de src/lang/ se agrego un objeto json llamado idioma con los respectivos idiomas en json y se añadio dos objetos json en el mismo con la direccion url en cada respectivo idioma. 
3. En el archivo prueba.jsx se agrego una función llamada GetIdioma la cual recibe de parametro un lenguaje, dicha función retorna un objeto json con la url del objeto json mencionado en el punto anterior.
4. En el Componente Prueba.jsx dentro de src/components/ se usaron los hooks useTranslation y Trans de react-i18next los cuales tienen la siguiente función:
	  - useTransalation es el hook encargada de hacer la traducción, del cual se extraen dos finciones una de ellas es "t" la cual es la encargada de comunicar el archivo tranlate.json de cada idioma dentro de la carpeta public/
	  - Trans el cual es el Componente encargado de renderizar cada tracdución.
	  - Asimismo se creo el objeto lngs el cual contiene los idiomas. Dicho objeto es usado en un .map para imprimir los botones correspondientes de cada idioma.
	  - En dicho archivo se agrego la función ChangeLanguage la cual hace uso de  i18n.changeLanguage el cual es el encargado de cambiar el idioma para su posterior renderización. 
	  - Cada idioma se guarda en el localStorage dentro de la variable i18nextLng la cual se usa en la funcion GetIdioma, el cual se usa para cambiar la url dependiendo el idoma.

