var movies_ar;//הכרזה על מערך של סרטים
var movie1;

function init()
{
createMovies()
}

function createMovies()//פונקציה זו תקרא לקלאסים שנייצר 
{
movie1 = new Movie("terminator.jpg","The Terminator");//שים לב שפונקציה סרט מושאלת מהסקריפט השני שייצרתי בשם סרט
movie1.addtohtml()//כאן נקרא ל***מתהוד*** שיצרתי בסקריפט סרט 
}
