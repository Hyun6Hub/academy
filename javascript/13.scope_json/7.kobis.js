// kobis의 일별 박스오피스 정보 가져오기 - JSON

fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240314')
  .then( response => { return response.json() })  // json 타입으로 변환!!
  .then( result => {
    console.log(result.boxOfficeResult.boxofficeType);
    console.log(result.boxOfficeResult.showRange);
    console.log(result.boxOfficeResult.dailyBoxOfficeList);
    //등수(rank), 영화이름(movieNm), 개봉일(openDt), 누적매출액(salesAcc) 
    const list = result.boxOfficeResult.dailyBoxOfficeList;
    list.forEach( obj => {
      const output = `${obj.rank}, ${obj.movieNm}, ${obj.openDt}, ${obj.salesAcc}`;
      console.log(output);
    });

  })
  .catch( error => console.log(error));