// <tag attribure="value" onevent = "name of function">
//content : text/element
// </tag>
//יש שני ארגומנטים מיוחדים שניתן להעביר לפונקציה: משתנה אחד שנקרא איוונט,ומשתנה אחד שנקרא דיס- event,this
//this-מייצג את הערך של האובייקט המתאר את האלמנט
//כלומר במקום לעשות כל פעם גט אלמנט ביי איי די מעבירים את דיס וזה אומר שמעבירים את האלמנט הספציפי.
//event- זה אובייקט מסוג ספציפי בהתאם לסוג האירוע אז לכל סוג אירוע יהיה אובייקט אחר המתואר באמצעות האיוונט וצריך לבדוק בדוקומנטציה איך הוא נראה או לעשות קונסול לוג
//האיוונט נותן פרטים נוספים לגבי האירוע שקרה הפעם
//event- אובייקט המתאר את האירוע שקרה 
//איוונטים מעניינים לדוגמא
//onclick
//onkeydown-כאשר מקש לחוץ במקלדת
//oninput- כאשר הערך שבתוך האינפוט או בתוך טקסט ארייאה משתנה, כל שינוי באינפוט מסוג טקסט
//onchange- בדומה לאוןאינפוט הוא מתרחש כאשר הערך שבתוך האינפוט משתנה, הוא עם <select> 
//For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.

//This event is similar to the oninput event. The difference is that the oninput event occurs immediately after the value of an element has changed, while onchange occurs when the element loses focus, after the content has been changed. The other difference is that the onchange event also works on <select> elements.

//onmouseenter - כאשר המשתמש עולה על האלמנט עם העכבר
//mouseleave - כאשר המשתמש מזיז את העבבר מהאלמנט



//onevent = fn(arguments,event,this)
//