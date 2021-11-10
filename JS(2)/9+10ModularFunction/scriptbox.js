function init()
{
    
}

function clickchangeboxes()
{
    changebox(box1,"blue","i am king")
    changebox(box3,"green","")
    changebox(box5,"Red","")
}

/*function changebox()/*במקרה הנל נבחר אובייקט מסויים ונשנה רק אותו */
{/*ניתן להמשיך פה ולכתוב את הפונקציות עם שינוי באובייקט בכל פעם אבל זה לא יעיל ...ח*/
    /*box1.style.backgroundColor="blue";
    box1.innerHTML = "this is box";
    /*box2.innerHTML... וכו וכו*/ 
}
function changebox(obj,color,text)/* הצבע ייכתב בפונקציית קליק בתוך הסוגריים וליד שם האובייקט ובכך ניתן להשפיע במהירות ולתת לכל אחד 
צבעים שונים*/
/*אובגקט אומר שייבצע את הפעולות שכתובות פה רק על האובייקטים שנבחר בפונקציההמקשרת למעלה */
/*כלומר מה שרשום בציינג בוקס בסוגריים*/
{
    obj.style.backgroundColor=color;
    obj.innerHTML = text;
}
