/* Icons: Lucide (https://lucide.dev) — same set the Solid Plan app uses. */
export const svg = (paths: string) => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;

export const ICONS: Record<string, string> = {
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>',
  circleDollarSign: '<circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path>',
  banknote: '<rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path>',
  heartPulse: '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>',
  messageCircle: '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>',
  cake: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path><path d="M2 21h20"></path><path d="M7 8v3"></path><path d="M12 8v3"></path><path d="M17 8v3"></path><path d="M7 4h.01"></path><path d="M12 4h.01"></path><path d="M17 4h.01"></path>',
  bellRing: '<path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  clock: '<path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>',
  clipboardCheck: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path>',
  plus: '<path d="M5 12h14"></path><path d="M12 5v14"></path>',
  arrowUp: '<path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path>',
};

export const cases = [
  {
    tag: '01 · จดเอง',
    title: 'ได้กรมธรรม์มาแล้ว ต้องนั่งพิมพ์ลงฟอร์มเองทีละช่อง',
    image: 'before-transcription.jpg',
    alt: 'กรมธรรม์และคอมพิวเตอร์สำหรับกรอกข้อมูลทีละช่อง',
    question: 'เพิ่มกรมธรรม์จากไฟล์แนบให้คุณกานต์',
    heading: 'ข้อมูลที่อ่านได้ พร้อมให้ตรวจสอบ',
    rows: [['shield', 'แบบประกัน', 'ตลอดชีพ ชำระเบี้ย 20 ปี'], ['circleDollarSign', 'ทุนประกัน', '1,000,000 บาท'], ['banknote', 'เบี้ยประกัน', '24,000 บาท / ปี']],
    noteIcon: 'clock',
    note: 'รอยืนยัน · ยังไม่ได้บันทึก',
  },
  {
    tag: '02 · ค้นเอง',
    title: 'อยากรู้ข้อมูลลูกค้า ต้องไล่หาจากหลายที่',
    image: 'before-search.jpg',
    alt: 'หน้าจอ Windows ที่ข้อมูลลูกค้ากระจายอยู่ใน LINE, Excel และ Notes ด้วยข้อมูลสมมติ',
    question: 'คุณกานต์มีกรมธรรม์อะไรบ้าง?',
    heading: 'คุณกานต์ พูนสุข · พบ 2 กรมธรรม์',
    rows: [['shield', 'ตลอดชีพ', 'เบี้ย 24,000 บาท / ปี'], ['heartPulse', 'สุขภาพ', 'เบี้ย 18,500 บาท / ปี'], ['messageCircle', 'คุยล่าสุด', 'สนใจเพิ่มความคุ้มครองโรคร้ายแรง']],
    noteIcon: 'database',
    note: 'สรุปจากข้อมูลลูกค้าและกรมธรรม์',
  },
  {
    tag: '03 · ป้อนข้อมูลให้ AI',
    title: 'อยากให้ AI ช่วย ต้องก๊อปข้อมูลไปวางทุกครั้ง',
    image: 'before-ai-input.jpg',
    alt: 'หน้าจอ Mac ที่กำลังลากไฟล์ Excel และ TXT จำนวนมากเข้าแชต AI ด้วยข้อมูลสมมติ',
    question: 'เดือนนี้ใครเกิด และสัปดาห์นี้ควรติดต่อใคร?',
    heading: 'ค้นจากลูกค้า 312 ราย',
    rows: [['cake', 'วันเกิดเดือนนี้', '5 ราย'], ['bellRing', 'ควรติดตามสัปดาห์นี้', '3 ราย'], ['user', 'คุณวิชัย', 'ติดตามใบเสนอราคา']],
    noteIcon: 'clipboardCheck',
    note: 'ตรวจทานวันสำคัญและประวัติก่อนติดต่อ',
  },
];
