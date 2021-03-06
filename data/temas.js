const obj = [
    {
        "nome": "Tema Hacktober 2020",
        "corFundo": "#072540",
        "corTextoHeader": "white",
        "corTextoComum": "#072540",
        "corTabelaBorda": "#9c4668",
        "corTabelaPreenchimento": "#ff8ae2",
        "corCards": "#93c2db",
        "corInfos": "#93c2db"
    },
    {
        "nome": "Tema Claro",
        "corFundo": "#CCCCFF",
        "corTextoHeader": "black",
        "corTextoComum": "black",
        "corTabelaBorda": "#3E4097",
        "corTabelaPreenchimento": "#FEC5FB",
        "corCards": "#BBBBFF",
        "corInfos": "#BBBBFF"
    },
    {
        "nome": "Tema Escuro",
        "corFundo": "#31363b",
        "corTextoHeader": "white",
        "corTextoComum": "white",
        "corTabelaBorda": "white",
        "corTabelaPreenchimento": "#384E61",
        "corCards": "#777777",
        "corInfos": "#777777"
    }
]

const temasObj = JSON.stringify(obj);
localStorage.setItem('temasArray', temasObj);