import { kobisBoxoffice as boxOffice} from './8.kobis2.js';

initForm();

function initForm() {
  const output = `    
    <input type="text" id="searchDate" placeholder="예)20240314">
    <button type="button" id="btnSearch">search</button>
    <div id="searchResult"></div>
  `;

  document.querySelector("#content").innerHTML = output; 
  document.querySelector("#btnSearch").addEventListener('click', () => {
    const searchDate = document.querySelector("#searchDate");
    if(searchDate.value === '') {
        alert('검색 날짜를 입력해주세요');
        searchDate.focus();
    }
    searchDaily(searchDate.value);
  });
}


function searchDaily(searchDate) {

  let output = ``;

    // kobis 일별 박스오피스
    boxOffice('Daily', searchDate)
      .then(result => {
        const list = result.boxOfficeResult.dailyBoxOfficeList;
        output += `<h3>Type : ${result.boxOfficeResult.boxofficeType}</h3>`;
        output += `<h3>Range : ${result.boxOfficeResult.showRange}</h3>`;

        output += `
          <table border="1">
            <tr>
              <th>순위</th>
              <th>제목</th>
              <th>개봉일</th>
              <th>누적매출액</th>
            </tr>
      `;

        list.forEach(obj => {
          output += `
              <tr>
                <td>${obj.rank}</td>
                <td>${obj.movieNm}</td>
                <td>${obj.openDt}</td>
                <td>${obj.salesAcc}</td>
              </tr>
          `;
        });
        output += `</table>`;
        document.querySelector("#searchResult").innerHTML = output;
      })
      .catch(error => console.log(error));

  
}