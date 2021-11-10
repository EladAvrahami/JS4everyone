    //הגדרה :פונקציה בתוך אובייקט נקראת מתהוד
    
    var product1;
    var product2;
    var product3;
    var product4;

    function init(){
        createProducts()
    }

    //זוהי פונקציה מודולרית שאליה נעביר את את העצמים והיא תחזיראת האובייקט עם העצמים(מאפיינים)שנתנו לה 
   function createPoductObject(_name,_image,_info,_price)
    {
        return{
            name:_name,
            image:_image,
            info:_info,
            price:_price,
            addProduct:function()
            {
            //"פונקציה שרשמנו בשיעור 2 בשם "אד פרודקט לשבלונה
            var newSection=document.createElement("section");//ניצור משתנה חדש ניוסקשין שייצור תגית מסוג סקשיין
            newSection.className="product";//למשתנה ניוסקשיין ניתן את השם מוצר
            products.appendChild(newSection);//בתוך הדיב שמכיל את כלל המוצרים נוסיף ילד שייצרנו בשורות הקודמות ניוסקשיין
    
            newSection.innerHTML+="<h2>"+this.name+"</h2>"//באמצעות האינהירט נכניס לניוסקשיין כותרת שהמלל שלה יהיה המלל של המאפיין שם באובייקט
            
            var newimg=document.createElement("img");//יצירת משתנהואמרנו לו לייצר אלמנט מסוג אימג
            newimg.src="images/"+ this.image//הכנסתי למשתנה את המקור של התמונה
            newSection.appendChild(newimg);
    
            newSection.innerHTML+= "<div>"+this.info+"</div>";//יכניס לסקשיין דיב המכיל בתוכו את תוכן האינפורמציה מהאובייקט מוצר 1
            newSection.innerHTML+= "<div>"+this.price+"</div>";//יכיל את המחיר מאובייקט בשם מוצר 1
            }
        }
    }

    function createProducts()
    {
        product1 = createPoductObject("coca cola","cola.png","coce with ice","10")
        product1.addProduct();//צריך לרשום שוב את השם של הפונקציה כאן שוב כדי שתוצג 
        product2 = createPoductObject("SPRITE","sprite.jpg","Sprite with ice","8")
        product2.addProduct();

       
       
       
       
       
       
       
       
       
       
        // product1={
        //     name:"Cola",
        //     image:"cola.png",
        //     info:"coca cola with ice",
        //     price:10,
        //     addPoduct:function()
        //     {
        //         // alert("the product is "+this.name)//המילה דיס תדע לשייך לאובייקט שהפונקציה כלואה בתוכה ולהחיל עליו שינויים 
        //     }
           
    }

        // product2={
        //     name:"SPRITE",
        //     image:"sprite.jpg",
        //     info:"Sprite with ice",
        //     price:8,
        //     addPoduct:function()
        //     {
        //         //alert("the product is "+this.name)
        //     }
        // }

        //product1.addPoduct();
        //product2.addPoduct();


//}

    