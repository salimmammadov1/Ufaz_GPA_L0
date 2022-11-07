// Function for calculating grades
const calculate = () => {
    // Getting input from user into height variable.
    let math1 = document.querySelector("#math1").value;
    let math2 = document.querySelector("#math2").value;
    let mathfinal = document.querySelector("#mathfinal").value;

    let mechanics = document.querySelector("#mechanics").value;
    let thermodynamics = document.querySelector("#thermodynamics").value;
    let electrostatics = document.querySelector("#electrostatics").value;

    let aom1 = document.querySelector("#aom1").value;
    let aom2 = document.querySelector("#aom2").value;
    let aomfinal = document.querySelector("#aomfinal").value;
    
    let tom1 = document.querySelector("#tom1").value;
    let tom2 = document.querySelector("#tom2").value;
    let tomfinal = document.querySelector("#tomfinal").value;
    
    let pw1 = document.querySelector("#pw1").value;
    let pw2 = document.querySelector("#pw2").value;
    
    let hem1 = document.querySelector("#hem1").value;
    let hemfinal = document.querySelector("#hemfinal").value;
    
    let fr1 = document.querySelector("#fr1").value;
    let fr2 = document.querySelector("#fr2").value;
    let frfinal = document.querySelector("#frfinal").value;
    
    let en1 = document.querySelector("#en1").value;
    let en2 = document.querySelector("#en2").value;
    let enfinal = document.querySelector("#enfinal").value;
    
    let geo1 = document.querySelector("#geo1").value;
    let geo2 = document.querySelector("#geo2").value;

    let pe = document.querySelector("#pe").value;




    if(math1 == ""){
      math1=0;
   }
   if(math2 == ""){
      math2=0;
   }
   if(mathfinal == ""){
      mathfinal=0;
   }
   if(mechanics == ""){
      mechanics=0;
   }
   if(thermodynamics == ""){
      thermodynamics=0;
   }
   if(electrostatics == ""){
      electrostatics=0;
   }
   if(aom1 == ""){
      aom1=0;
   }
   if(aom2 == ""){
      aom2=0;
   }
   if(aomfinal == ""){
      aomfinal=0;
   }
   if(tom1 == ""){
      tom1=0;
   }
   if(tom2 == ""){
      tom2=0;
   }
   if(tomfinal == ""){
      tomfinal=0;
   }
   if(pw1 == ""){
      pw1=0;
   }
   if(pw2 == ""){
      pw2=0;
   }
   if(hem1 == ""){
      hem1=0;
   }
   if(hemfinal == ""){
      hemfinal=0;
   }
   if(fr1 == ""){
      fr1=0;
   }
   if(fr2 == ""){
      fr2=0;
   }
   if(frfinal == ""){
      frfinal=0;
   }
   if(en1 == ""){
      en1=0;
   }
   if(en2 == ""){
      en2=0;
   }
   if(enfinal == ""){
      enfinal=0;
   }
   if(geo1 == ""){
      geo1=0;
   }
   if(geo2 == ""){
      geo2=0;
   }
   if(pe == ""){
      pe=0;
   }








    let grades = "";
 
    // Input is string so typecasting is necessary. */

   let mathave =
   (parseFloat(math1)*1 +
   parseFloat(math2)*2 +
   parseFloat(mathfinal)*3);   

   let physicsave = 
   (parseFloat(mechanics)*2 +
   parseFloat(thermodynamics)*2 +
   parseFloat(electrostatics)*2);

   let aomave = 
   (parseFloat(aom1)*0.5 +
   parseFloat(aom2)*0.5 +
   parseFloat(aomfinal)*1);

   let tomave = 
   (parseFloat(tom1)*0.5 +
   parseFloat(tom2)*0.5 +
   parseFloat(tomfinal)*1);

   let pwave = 
   (parseFloat(pw1)*1 +
   parseFloat(pw2)*1);

   let hemave = 
   (parseFloat(hem1)*1 +
   parseFloat(hemfinal)*1);

   let frave = 
   (parseFloat(fr1)*0.5 +
   parseFloat(fr2)*0.75 +
   parseFloat(frfinal)*0.75);

   let enave = 
   (parseFloat(en1)*0.5 +
   parseFloat(en2)*0.75 +
   parseFloat(enfinal)*0.75);

   let geoave = 
   (parseFloat(geo1)*2 +
   parseFloat(geo2)*2);

   let peave = 
   (parseFloat(pe)*2);


   let totalgrades = (mathave+physicsave+aomave+tomave+pwave+hemave+frave+enave+geoave+peave)/30;

    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 20) * 100;  
    let gpa = totalgrades;
   
    if (gpa <= 20 && gpa >= 13.5) {
       grades = "A";
    } else if (gpa <= 13.4999999 && gpa >= 12) {
       grades = "B";
    } else if (gpa <= 11.99999 && gpa >= 10) {
       grades = "C";
    } else {
       grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (5>10
    ) { document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass
       let gpa = (percentage * 0.2);
       gpa = gpa.toFixed(4);
       percentage = percentage.toFixed(2);
       if (percentage >= 0) {
       document.querySelector(
          "#showdata"
       ).innerHTML =
          `<button
          id="resu"
          style = "border-radius:10px;border-color:black;
         background-image: linear-gradient(to right bottom,rgb(110, 110, 110),rgb(148, 148, 148));"
         >   
         <h1><b>GPA : ${gpa}<sub style="color:rgb(201, 201, 201);font-size: small;">${grades}</sub></b></h1><br>
         <h3><b>PG : ${percentage}%</b></h3><br>
         Math - ${(mathave/6).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((mathave/6)/0.2).toFixed(1)}%</sub> <br>
         Physics - ${(physicsave/6).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((physicsave/6)/0.2).toFixed(1)}%</sub> <br>
         Chemistry - ${((aomave+tomave+pwave)/6).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${(((aomave+tomave+pwave)/6)/0.2).toFixed(1)}%</sub> <br>
         - Aom - ${(aomave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((aomave/2)/0.2).toFixed(1)}%</sub> <br>
         - Tom - ${(tomave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((tomave/2)/0.2).toFixed(1)}%</sub> <br>
         - CPW - ${(pwave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((pwave/2)/0.2).toFixed(1)}%</sub> <br>
         Higher Ed Meth - ${(hemave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((hemave/2)/0.2).toFixed(1)}%</sub> <br>
         French - ${(frave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((frave/2)/0.2).toFixed(1)}%</sub> <br>
         English - ${(enave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((enave/2)/0.2).toFixed(1)}%</sub> <br>
         Geo - ${(geoave/4).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((geoave/4)/0.2).toFixed(1)}%</sub> <br>
         Petroleum - ${(peave/2).toFixed(2)}<sub style="color:rgb(201, 201, 201);font-size:xx-small;">${((peave/2)/0.2).toFixed(1)}%</sub> <br>
          
         <br><br> 
         </button>
          `;
       } 
    }
 };