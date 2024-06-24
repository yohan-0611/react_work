//person 객체를 파람으로 받아서, 이미지에 대한 속성 정보를 리턴해주는 함수 정의함. 랜더링 목적이 아니기 때문에 일반함수로 정의
export function getImgURL(person){
    return(

        'https://i.imgur.com/' +
        person.imageId +
        person.imageSize +'.jpg'
    );
}

export function getImgURL2(person, size='s'){//여기 주목! props에서 size 값이 없으면 기본값으로 s를 할당하라는 default할당 코드임
    return(

        'https://i.imgur.com/' +
        person.imageId +
        size +'.jpg'
    );
}

export function getImgURL3(imageId, imageSize = 's'){
    return(

        'https://i.imgur.com/' +
        imageId +
        imageSize +'.jpg'
    );
}