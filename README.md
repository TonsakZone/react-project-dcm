React-App
DCM viewer and CSV viewer

Steps

  1.Clone this repository
  
  2.Run "npm install"
  
  3.Run "npm run dev" or run "npm start" if you want to run react-app only
  
*** Use "npm run dev" to run all localhost simultaneously***

Patch date: 13/11/21

react-backend folder contains
  1. index.js (nodejs server)
  2. miniserverdcm.py (python flask server)

Description
  1. through1.js (//react-backend/server/) วน folder images เพื่อนำข้อมูลที่ได้มาสร้างเป็น directory tree
  2. ImageViewer.js (//src/) แสดง directory tree และแสดงภาพ .dcm
  3. App.js (//src/) จัดการ route ต่างๆของตัวเว็บ และแสดงผล
  4. convert.js (//src/content) แปลงไฟล์ .csv -> .json แล้วนำข้อมูลมานับว่าอะไรมีกี่ตัวบ้าง จากนั้นเขียนไฟล์ .json เพื่อเก็บจำนวนที่นับได้


Project changes in changelog.txt

