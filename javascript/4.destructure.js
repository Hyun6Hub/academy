//구조분해할당

function createEmoji(){
    return { name: 'apple', emoji}
}
const [name, emoji]= createEmoji()


//다른서버에는 메모리 객체없다 그럼 데이터 못넘어감 객체들 넘길때 메모리 힙 덩어리채로 보냄 ㅈ쪼개서 보내지않음
// 직렬화가 덩어리로 보냄

