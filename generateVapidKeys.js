const webpush = require('web-push');
require('dotenv').config();

// .env 파일에 저장된 공개키와 개인키를 사용
//webpush.setVapidDetails(
//  'mailto:example@domain.com',  // 이메일 주소
//  process.env.VAPID_PUBLIC_KEY, // .env 파일에서 공개 키를 읽어옴
//  process.env.VAPID_PRIVATE_KEY // .env 파일에서 개인 키를 읽어옴
//);

// 만약 새로 VAPID 키를 생성하고 싶다면, 아래 코드로 생성할 수 있습니다.
const vapidKeys = webpush.generateVAPIDKeys();

console.log(vapidKeys);