// 박스오피스 함수
export async function kobisBoxoffice(searchType, targetDt) {
  let URL = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${searchType}BoxOfficeList.json`;
  URL += '?key=f5eef3421c602c6cb7ea224104795888';
  URL += '&targetDt='+ targetDt;

  const kobis = await fetch(URL)
  const kobis_result = await kobis.json();
  return kobis_result;
}
