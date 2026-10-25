MAIL SEARCHER ZONE — সহজ বাংলা নির্দেশিকা
===========================================

এটি তোমার ওয়েবসাইটের প্রথম নমুনা (starter demo)। এতে আছে:
- আধুনিক responsive design
- Email format check
- Email থেকে domain আলাদা করে দেখানো
- Public profile search ও breach check-এর জন্য placeholder

গুরুত্বপূর্ণ:
এই সংস্করণটি এখনও Behind the Email-এর মতো পূর্ণ reverse-email lookup করে না।
এটি কারও পরিচয় নিশ্চিত করে না, mailbox আছে কি না প্রমাণ করে না এবং breach/profile API-তে সংযুক্ত নয়।
সত্যিকারের advanced feature যোগ করতে অনুমোদিত API/data source লাগবে; কিছু পরিষেবা পেইড হতে পারে।

কম্পিউটারে চালানোর সহজ উপায়:
1. ZIP ফাইলটি Extract করো।
2. mail_searcher_zone ফোল্ডারে index.html-এ ডাবল-ক্লিক করো।
3. ওয়েবসাইট ব্রাউজারে খুলবে।
4. সার্চ বক্সে নিজের test email (যেমন test@example.com) লিখে Check Email চাপো।

অনলাইনে প্রকাশ করার সহজ পথ:
1. https://github.com এ account তৈরি করো।
2. নতুন repository তৈরি করো; নাম দিতে পারো mail-searcher-zone।
3. এই ফোল্ডারের index.html, style.css, script.js এবং README_BN.txt upload করো।
4. repository Settings > Pages-এ যাও।
5. Deploy from a branch বেছে Branch: main এবং folder: /(root) নির্বাচন করে Save করো।
6. প্রকাশ হতে কিছু সময় লাগতে পারে। GitHub Pages-এর বর্তমান নির্দেশনা দেখো: https://pages.github.com/

নোট: GitHub-এর interface বদলাতে পারে। কোনো step না মিললে screenshot পাঠাও, আমি বলে দেব কোথায় click করতে হবে।

পরের ধাপে কী লাগবে:
- Domain/MX lookup-এর জন্য backend/DNS API
- Breach check-এর জন্য অনুমোদিত provider ও API key
- Public profile lookup-এর জন্য অনুমোদিত data source
- Privacy policy, rate limits, abuse prevention এবং নিরাপদ backend
- পেইড plan চাইলে payment provider ও server-side verification

API key কখনও index.html বা script.js-এর মধ্যে লিখবে না। Frontend-এ রাখলে অন্যরা সেটি দেখে নিতে পারে।
