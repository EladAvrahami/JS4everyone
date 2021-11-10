function Movie(_image,_name)
{
this.image=_image;
this.name=_name;
}

Movie.prototype.addtohtml = function()   //פרוטוטייפ יציין ***שהמתהוד הנ"ל*** בשם הוספהלשבלונה יהיה חלק מהתבנית שלמעלה
{
    this.newBox=document.createElement("div");//נייצר אלמנט דיב 
    this.newBox.className="box_movie";//נעתיק את השםשל הדיב שכבר מופיע בשבלונה(עם תמונה של סימפסון)בשם קופסאת סרט
    id_left.appendChild(this.newBox);//תוסיף לדיב בשם תז שמאלה את הדיב בשם קופסא חדשה שתכיל בתוכה תמונה ושם בהתאם לפונקציה מעלה 
    //הפונקציה מעלה בשם סרט מקבלת את ערכי המאפיינים שלה מקובץ הסקריפט השני
   // this.newBox.innerHTML="<img src='_images/private.jpg'>";//אופציה א :כדי שנוכל לראות את הניו בוקס בלייב נגדיר לו 
    this.newBox.innerHTML="<img src='_images/"+this.image+"'>";//אופציה ב: כדי שנוכל לראות את הניו בוקס בלייב נגדיר לו שהתמונה תהיה לפי מה שאני מקבל מהקלאס 
}