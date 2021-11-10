function init(){
    createElement1();
}
function createElement(){
    var newDiv =document.createElement("div");/*נגדיר משתנה בשם דיבחדש ונשווה אותו לפקודה שאומרת ליצור אלמנט במסמך שלנו*/
    newDiv.className="box";/*באמצעות קלאסניים ניתן הפנייה לעיצוב מסוג קלאס שייצרנו בקובץ סיאסאס(כאן למעלה רק בשביל הדוגמא)*/
    all_site.appendChild(newDiv);
    newDiv.innerHTML="this is div";
}