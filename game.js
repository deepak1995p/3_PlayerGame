<script>
    var height1, height2, height3;
    var age1, age2, age3;
    var total1, total2, total3;

    height1 = prompt("what is the height of player1?");
    height2 = prompt("what is the height of player2?");


    age1 = prompt("what is age of player1?");
    age2 = prompt("what is the age of player2");


    total1 = parseInt(height1) + (parseInt(age1) * 5);
    // console.log(total1);
    total2 = parseInt(height2) + (parseInt(age2) * 5);


    if (total1 > total2) {
        console.log(`player1 is  winner with total of: ${total1}`);
    } else if (total2 > total1) {
        console.log(`player2 is winner with total of  ${total2}`);
    }
    //else if(total3 >total1 && total2){
    //console.log("player3 is winner with total of " +total3);}
    else {
        console.log("both player player have same total, hence its draw");
    }
    console.log("what if third player added in this game");
    height3 = prompt("enter the height of third player");
    age3 = prompt("enter the age of third player");

    total3 = parseInt(height3) + (5 * parseInt(age3));
    //  console.log(total3);

    if (total3 > total2 && total1) {
        console.log(`player3 is winner with total of  ${total3}`);

    } else if (total1 > total2 && total3) {
        console.log(`player1 is winner with total of ${total1}`)

    } else if (total2 > total1 && total3) {
        console.log(`player1 is winner with total of ${total1}`)

    } else if (total3 == total1 && total3 != total2) {
        console.log(`player1 and player3 have same total , hence its draw between them with total of ${total3} `);

    } else if (total3 == total2 && total3 != total1) {
        console.log(`player3 and player2 have same value hence its draw between them with total of ${total3}`);

    } else {
        console.log("all player have the same value , hence its draw");
    }
</script>
