

var bmw;
var mazda;
var toyota;

function init(){

    createObjects();
}

function createObjects(){

    bmw ={//יצירת האובייקט והכנסת מאפיינים
        model:"x6",
        price:"150000",
        year: 2019,
        color:"black",
        showinfo:function()//נתינת שם לפונקציה שמציגה אינפורציה לגבי האובייקט
        {
            id_h2.innerHTML ="the car model is: "+bmw.model+"and it color is "+bmw.color//ניתן לרשום במקום במוו את המילה דיס
            //לדוגמא ניתן לרשום גם כך "...model is"+this.model"......"+this.color בגללשהפונקציה היא חלק מהטובייקט אז הןא מזהה אוטומטית
        }
    }

    mazda ={
        model:"3",
        price:"60000",
        year: 2012,
        color:"silver",
        showinfo:function()
        {
            id_h2.innerHTML ="the car model is: "+mazda.model+" and it color is "+mazda.color
        }
       
    }

    toyota ={
        model:"corola",
        price:"75000",
        year: 2010,
        color:"red",
    }
}
function onBmwclick()//הפעלת פונקציה בלחיצת כפתור הנגזרת מהשבלונה
{
bmw.showinfo();//פעולת השואואינפו נונתנת אפשרות להכניס פונקציה כחלק מהמאפיינים של האובייקט
}

function onMazdaclick()
{
    mazda.showinfo();
}
// ניתן גם להמשיך את התרגיל להוסיף כפתור לטיוטה בשבלונהלהוסיף מתהוד שואואינפו לאטובייקט טויוטה וליצור עוד פונקציה
//נוספת שתציג את המתהוד באחד המאפיינים כנו בפונקציה מעלה 