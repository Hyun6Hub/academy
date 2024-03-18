initForm();

function initForm() {
  let output =

</table>
<form>
  <select id="type">
    <option value="daily">일별</option>
    <option value="weekly">주간/주말</option>
  </select>
  <input type="text" id="targetDT" placeholder="조회날짜 입력">
  <button type="button" id="btnsearch">조회</button>
</form>


  `  <table border="1">
  <tr>
    <td>순위</td>
    <td>제목</td>
    <td>개봉일</td>
    <td>누적매출액</td>
  </tr>
`;
  const result = getBoxOfficeResult("20240317");
  console.log("result", result);

  document.querySelector("#main").innerHTML.output;
}

getBoxOfficeResult("20240317");
result(data =>{return data.json();})
then.


//일별 박스오피스 가져오기
function getBoxOfficeResult(targetDt) {
  let targetDt = "20240317";
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/
  searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101=${targetDt}`;

  const result = fetch(url);
  return result;

}