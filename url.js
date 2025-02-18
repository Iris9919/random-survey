/*
 * 將要隨機派發的網址放入下方（不需排序）
 *
 * 並請注意：
 * 1. 網址請用引號（或稱「撇號」，單引號或雙引號皆可）包起來
 * 2. 包起來的網址之間用逗號分隔
 */


const urls = [
	'https://www.surveycake.com/s/46rkB',
	'https://www.surveycake.com/s/3l0qN',
	'https://www.surveycake.com/s/re4P3',
	'https://www.surveycake.com/s/yWbQD',
];
const randomUrl = urls[Math.floor(Math.random() * urls.length)];

window.location.href = randomUrl;
