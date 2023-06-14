    //1. 화면에 출력되도록 1,2 의 코드를 완성하라

    let phoneNum = "010-1234-5678";
    let result_1 = phoneNum.substring(0,9);
    console.log(result_1,"****");

    let imgSrc = "images/bnt_out.jpg";
    let result_2 = imgSrc.replace("out", "over");
    console.log(result_2);

    //화면 출력 내용 : 010-1234-****, images/bnt_over.jpg

    const lunch = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
    // lunch(math.floor(math.random()*4))

    const lunchNum = lunch[Math.floor(Math.random()*lunch.length)];
    console.log(lunchNum)

