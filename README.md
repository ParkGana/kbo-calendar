# 야구 캘린더

응원하는 프로야구 팀의 일정을 기록하고 관리하는 캘린더이다.

<br />
<br />

## 기술 스택

<img src="https://img.shields.io/badge/react-%2301d2f6?style=for-the-badge">
<img src="https://img.shields.io/badge/javascript-%23f7cf00?style=for-the-badge">
<img src="https://img.shields.io/badge/styled%20components-%23e5648f?style=for-the-badge">
<img src="https://img.shields.io/badge/zustand-%236b46c1?style=for-the-badge">
<img src="https://img.shields.io/badge/tanstack%20query-%23f71c49?style=for-the-badge">
<img src="https://img.shields.io/badge/pwa-%230063f7?style=for-the-badge">
<img src="https://img.shields.io/badge/supabase-%233cc88b?style=for-the-badge">
<img src="https://img.shields.io/badge/vercel-%23000000?style=for-the-badge">

<br />
<br />

## 주요 기능

#### 회원가입 및 로그인
-   서비스를 체험해볼 수 있는 게스트 계정 제공
-   응원하는 팀이 있어야 이용 가능하기 때문에 회원가입 시 응원하는 팀을 선택

<br />

<p align="center">
<img src='https://res.cloudinary.com/ddvqgtmmc/image/upload/v1740461138/signup_reho1p.png' width='49%'>
<img src='https://res.cloudinary.com/ddvqgtmmc/image/upload/v1740461137/signin_ary0f4.png' width='49%'>
</p>

<br />

#### 경기 일정 CRUD
- 캘린더 내 날짜 클릭 시 경기 일정 등록 가능
- 캘린더 내 일정 클릭 시 경기 일정 조회, 수정, 삭제 가능

<br />

<p align="center">
<img src='https://res.cloudinary.com/ddvqgtmmc/image/upload/v1740461842/create1_bfrzc5.png' width='49%'>
<img src='https://res.cloudinary.com/ddvqgtmmc/image/upload/v1740461851/create2_vt7hcn.png' width='49%'>
</p>

<br />

#### 경기 일정 캘린더
- 월 단위로 경기 일정 데이터 조회
- 응원하는 팀이 졌으면 회색으로 흐릿하게, 이겼으면 상대 팀의 색으로 표시

<br />

<p align="center">
<img src='https://res.cloudinary.com/ddvqgtmmc/image/upload/v1740461138/calendar_zxwwvj.png' width='98%'>
</p>

<br />

#### 시즌 전적
- 년 단위로 팀별 시즌 전적 데이터 조회
- 승률 내림차순으로 정렬

<br />

<p align="center">
<img src='https://res.cloudinary.com/ddvqgtmmc/image/upload/v1740461463/record_zyltma.png' width='98%'>
</p>

<br />
<br />

## 리팩토링

#### 앱 형태로 서비스 이용이 가능하도록 구현
- 푸시 알림, 지문 인증 등 모바일에 특화된 기능보다는 단순히 앱 형태로 서비스를 제공하는 것이 목적이었기 때문에 React Native가 아닌 PWA 활용