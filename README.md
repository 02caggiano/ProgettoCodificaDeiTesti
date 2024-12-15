# Progetto-Codifica

Repository del progetto e degli esercizi del corso di Codifica di Testi 23/24 
delle studentesse del corso triennale di Informatica Umanistica Irene Pallassini (MAT.634925) e Carla Caggino (MAT.640201)


Per validare l'XML ho usato il comando:

```
java -cp "xerces-2_12_1/*" dom.Counter -v Progetto.xml
```

Per applicare il foglio di stile XSLT ho usato il comando:

```
java -jar "./SaxonHE10-3J/saxon-he-10.3.jar" -s:Progetto.xml -xsl:stileprogetto.xsl -o:progetto.html
```
