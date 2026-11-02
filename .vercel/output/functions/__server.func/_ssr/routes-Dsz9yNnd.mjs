import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Volume2, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dsz9yNnd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BOT_NAMES = [
	"Макс",
	"Луна",
	"Борис",
	"Кира",
	"Гром",
	"Ника",
	"Фома"
];
var EXAMPLES = ["Что нельзя класть в общую пельменную?", "Как назвать породу собак, которая боится лаять?"];
var SAFETY = [
	"я моргнул, и шутка ушла",
	"кнопка была дальше, чем думал",
	"связь упала вместе с панчем",
	"здесь должен был быть гений",
	"сейф: тишина тоже ответ",
	"не успел, зато пережил"
];
var GENERIC = [
	"это было в договоре мелким шрифтом",
	"спросите голубя, он здесь главный",
	"план был хороший, исполнитель — нет",
	"я видел это во сне, и там платили",
	"слишком честно для буднего дня",
	"так решил чат без меня",
	"сначала блёстки, потом последствия",
	"это не баг, это характер",
	"трижды проверил, стало смешнее",
	"потому что обычный вариант скучный",
	"мне сказали, так все взрослые делают",
	"научный термин: ну такое",
	"сохраняй лицо, остальное уже уехало",
	"я голосовал против, протокол потеряли",
	"коротко: не надо было",
	"это временно, как всё важное"
];
var BOT_QUESTIONS = [
	"Что хуже всего крикнуть в библиотеке?",
	"Какой памятник городу точно не согласуют?",
	"Как назвать соус, которым нельзя гордиться?",
	"Что ставит будильник, если хочет разозлить тебя сразу?",
	"Какой аттракцион закроют в первый же день?",
	"Что написать на медали за третье место?",
	"Худший тост на чужой свадьбе?",
	"Какое хобби нельзя указывать в резюме?",
	"Что шепчут друг другу тележки в магазине?",
	"Как называется болезнь людей, которые говорят «уже выхожу»?",
	"Что продают в сувенирной лавке при налоговой?",
	"Какой курс наберёт группу и ничему не научит?",
	"Что нельзя писать на торте для босса?",
	"Как объяснить бабушке слово «дедлайн»?",
	"Худшее имя для умного дома?",
	"Что должно быть написано на двери в никуда?"
];
var BUILTINS = [
	{
		id: "b01",
		text: "Самая странная причина опоздать на собственную свадьбу?",
		replies: [
			"голубь унёс кольцо в налоговую",
			"репетировал счастье и застрял",
			"лифт попросил отдельный тост",
			"будильник обиделся и ушёл"
		]
	},
	{
		id: "b02",
		text: "Что нельзя говорить роботу-пылесосу?",
		replies: [
			"ты опять под кроватью",
			"в этой семье мусор — это я",
			"у тебя нет личности, только угол",
			"давай без свидетелей"
		]
	},
	{
		id: "b03",
		text: "Как назвать ресторан, где подают только лёд?",
		replies: [
			"хруст и отрицание",
			"градус ниже достоинства",
			"холодно, зато честно",
			"меню тает"
		]
	},
	{
		id: "b04",
		text: "Худшее имя для супергероя?",
		replies: [
			"капитан извините",
			"человек-который-потом",
			"батарейка на одном проценте",
			"господин не сегодня"
		]
	},
	{
		id: "b05",
		text: "Что точно не стоит брать на первое свидание?",
		replies: [
			"справку о бывших",
			"клетку с голубем-адвокатом",
			"презентацию на сорок слайдов",
			"маму в наушнике"
		]
	},
	{
		id: "b06",
		text: "Что написать на кнопке, которую нельзя нажимать?",
		replies: [
			"здесь начинается характер",
			"для смелых и уволенных",
			"нажимай, если готов объяснять",
			"это не кнопка, это характер"
		]
	},
	{
		id: "b07",
		text: "Как объяснить инопланетянам, что такое очередь?",
		replies: [
			"священный танец усталых ног",
			"люди греются друг о друга",
			"надежда с талончиком",
			"мы стоим, значит существуем"
		]
	},
	{
		id: "b08",
		text: "Самая нелепая причина стать знаменитым?",
		replies: [
			"чихнул в прямом эфире бюджета",
			"победил голубя в гляделки",
			"случайно лайкнул конституцию",
			"продал тишину по подписке"
		]
	},
	{
		id: "b09",
		text: "Что способно испортить идеальный отпуск?",
		replies: [
			"общий чат родственников",
			"гид с личной драмой",
			"шезлонг, который помнит других",
			"ты сам, но в шлёпанцах"
		]
	},
	{
		id: "b10",
		text: "Какой закон ввели бы коты, если бы правили миром?",
		replies: [
			"запрет закрытых дверей",
			"налог на ранние подъёмы",
			"всё, что упало, уже наше",
			"люди спят, когда скажем"
		]
	},
	{
		id: "b11",
		text: "Что лежит в кармане у человека, который всегда «на пять минут»?",
		replies: [
			"чужое время и фантик",
			"извинение на салфетке",
			"билет на вчерашний автобус",
			"один план и много крошек"
		]
	},
	{
		id: "b12",
		text: "Как называется приложение, которым пользуются только ночью?",
		replies: [
			"стыд в тёмной теме",
			"не открывай при свете",
			"полуночный бардак",
			"утро об этом не узнает"
		]
	},
	{
		id: "b13",
		text: "Что написать на табличке у машины времени?",
		replies: [
			"обратно дороже",
			"не кормить динозавров собой",
			"прошлое не принимает наличные",
			"вы не опаздываете, вы уже были"
		]
	},
	{
		id: "b14",
		text: "Какой конкурс стоит добавить в Олимпиаду?",
		replies: [
			"синхронное оправдание",
			"бег от ответственности",
			"метание пассивной агрессии",
			"прыжки к выводам"
		]
	},
	{
		id: "b15",
		text: "Лучшее оправдание съеденного торта?",
		replies: [
			"он начал первым",
			"это был дипломатический жест",
			"проверял, не отравлен ли праздник",
			"торт сам нарушил границы"
		]
	},
	{
		id: "b16",
		text: "Что шепчет холодильник, когда ты открываешь его в третий раз?",
		replies: [
			"мы оба знаем, зачем ты здесь",
			"свет включи, герой",
			"сыр всё видел",
			"это уже третий визит, соберись"
		]
	},
	{
		id: "b17",
		text: "Худший подарок коллеге?",
		replies: [
			"кружка «так держать» после выговора",
			"календарь без выходных",
			"кактус по имени дедлайн",
			"сертификат на честность"
		]
	},
	{
		id: "b18",
		text: "Что должно быть написано на футболке злого гения?",
		replies: [
			"я же говорил, но красиво",
			"план б съел план а",
			"не клон, а улучшение",
			"аплодисменты после сирены"
		]
	},
	{
		id: "b19",
		text: "Какое правило спасёт любой семейный чат?",
		replies: [
			"один стикер — и тишина на час",
			"голосовые длиннее минуты сгорают",
			"споры только по чётным",
			"мама не отмечает всех"
		]
	},
	{
		id: "b20",
		text: "Что продаёт самый честный магазин города?",
		replies: [
			"почти счастье",
			"вещи, которые вы и так потеряете",
			"вторые шансы без гарантии",
			"хлеб и неприятную правду"
		]
	},
	{
		id: "b21",
		text: "Как начальник называет план, которого не существует?",
		replies: [
			"стратегическая туманность",
			"живой документ, очень живой",
			"концепт концепта",
			"согласовано с будущим"
		]
	},
	{
		id: "b22",
		text: "Худшее название для детского утренника?",
		replies: [
			"зайчик и налоговая",
			"день открытых обид",
			"клоун без обратного билета",
			"улыбайся, это отчёт"
		]
	}
];
var ctx = null;
var muted = false;
function readMuted() {
	if (typeof localStorage === "undefined") return false;
	return localStorage.getItem("sorashi-mute") === "1";
}
function setMuted(value) {
	muted = value;
	try {
		localStorage.setItem("sorashi-mute", value ? "1" : "0");
	} catch {}
}
function unlockAudio() {
	if (muted || typeof window === "undefined") return;
	const AC = window.AudioContext;
	if (!ctx) ctx = new AC();
	if (ctx.state === "suspended") ctx.resume();
}
function sfx(kind) {
	unlockAudio();
	if (!ctx || muted) return;
	const t = ctx.currentTime;
	const tone = (freq, at, dur, type, gain) => {
		const osc = ctx.createOscillator();
		const amp = ctx.createGain();
		osc.type = type;
		osc.frequency.setValueAtTime(freq, at);
		amp.gain.setValueAtTime(gain, at);
		amp.gain.exponentialRampToValueAtTime(1e-4, at + dur);
		osc.connect(amp);
		amp.connect(ctx.destination);
		osc.start(at);
		osc.stop(at + dur + .02);
	};
	if (kind === "tap") tone(240, t, .05, "square", .035);
	if (kind === "send") {
		tone(330, t, .07, "square", .04);
		tone(494, t + .07, .09, "square", .035);
	}
	if (kind === "vote") {
		tone(160, t, .08, "square", .04);
		tone(240, t + .05, .1, "square", .03);
	}
	if (kind === "score") {
		tone(523, t, .08, "square", .04);
		tone(659, t + .08, .1, "square", .04);
		tone(784, t + .16, .12, "square", .035);
	}
	if (kind === "sweep") {
		tone(523, t, .08, "square", .045);
		tone(659, t + .07, .08, "square", .045);
		tone(784, t + .14, .08, "square", .04);
		tone(1046, t + .22, .16, "square", .04);
	}
	if (kind === "go") {
		tone(146, t, .1, "square", .04);
		tone(220, t + .09, .12, "square", .04);
	}
	if (kind === "fail") tone(110, t, .12, "square", .04);
}
function bindMute(value) {
	muted = value;
}
var TIMING = {
	customMs: 7e4,
	answerMs: 56e3,
	voteMs: 13e3,
	finalVoteMs: 16e3,
	revealMs: 5600,
	dealMs: 1700,
	boardMs: 8e3,
	settleMs: 700
};
function roller(seed) {
	let a = seed >>> 0;
	return {
		next() {
			a = a + 1831565813 | 0;
			let t = Math.imul(a ^ a >>> 15, 1 | a);
			t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
			return ((t ^ t >>> 14) >>> 0) / 4294967296;
		},
		state: () => a >>> 0
	};
}
function shuffle(items, rng) {
	const arr = [...items];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(rng.next() * (i + 1));
		const swap = arr[i];
		arr[i] = arr[j];
		arr[j] = swap;
	}
	return arr;
}
function formatPoints(n) {
	return (n < 0 ? "−" : "") + Math.abs(Math.round(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function duelPoints(counts, eligible) {
	return counts.map((count) => {
		const sweep = eligible >= 2 && count > 0 && count === eligible;
		return count * 1e3 * (sweep ? 2 : 1);
	});
}
function finalPayout(rows) {
	const cleaned = rows.map((row) => ({
		...row,
		wager: Math.max(0, Math.min(Math.round(row.wager), row.score))
	}));
	const pot = cleaned.reduce((sum, row) => sum + row.wager, 0);
	const high = cleaned.reduce((max, row) => Math.max(max, row.votes), 0);
	const winners = high > 0 ? cleaned.filter((row) => row.votes === high) : [];
	const share = winners.length ? Math.floor(pot / winners.length) : 0;
	const refund = winners.length === 0;
	return cleaned.map((row) => {
		let delta = 0;
		if (!refund) {
			delta = -row.wager;
			if (winners.some((winner) => winner.id === row.id)) delta += share;
			if (pot === 0) delta += row.votes * 1e3;
		}
		return {
			id: row.id,
			delta,
			score: Math.max(0, row.score + delta)
		};
	});
}
function createLobby() {
	return {
		phase: "lobby",
		round: 0,
		players: [],
		youName: "",
		botCount: 3,
		customOn: false,
		customTexts: ["", ""],
		customs: [],
		deck: [],
		roundQuestions: [],
		seenTexts: [],
		assignments: [],
		answers: [],
		votes: [],
		order: [],
		voteCursor: 0,
		draft: "",
		wager: 0,
		deadline: 0,
		phaseUntil: 0,
		plans: [],
		seq: 1,
		rng: 20905,
		awardedPairs: [],
		lastDeltas: {},
		toast: ""
	};
}
function setName(g, name) {
	if (g.phase !== "lobby") return g;
	return {
		...g,
		youName: name.slice(0, 16),
		toast: ""
	};
}
function setBotCount(g, count) {
	if (g.phase !== "lobby") return g;
	return {
		...g,
		botCount: Math.max(3, Math.min(7, Math.round(count)))
	};
}
function setCustomOn(g, on) {
	if (g.phase !== "lobby") return g;
	return {
		...g,
		customOn: on
	};
}
function setCustomText(g, index, text) {
	if (g.phase !== "custom") return g;
	const next = [g.customTexts[0], g.customTexts[1]];
	next[index] = text.slice(0, 140);
	return {
		...g,
		customTexts: next,
		toast: ""
	};
}
function fillExamples(g) {
	if (g.phase !== "custom") return g;
	return {
		...g,
		customTexts: [EXAMPLES[0], EXAMPLES[1]],
		toast: ""
	};
}
function setDraft(g, text) {
	if (g.phase !== "answer") return g;
	const clean = text.replace(/\s+/g, " ").slice(0, 80);
	return {
		...g,
		draft: clean.toLocaleLowerCase("ru-RU"),
		toast: ""
	};
}
function setWager(g, value) {
	if (g.phase !== "answer" || g.round !== 3) return g;
	const max = g.players.find((player) => player.id === "you")?.score ?? 0;
	return {
		...g,
		wager: Math.max(0, Math.min(max, Math.round(value)))
	};
}
function makePlayers(g) {
	const name = g.youName.trim() || "Ты";
	const bots = BOT_NAMES.slice(0, g.botCount).map((botName, index) => ({
		id: `bot-${index}`,
		name: botName,
		bot: true,
		score: 0
	}));
	return [{
		id: "you",
		name,
		bot: false,
		score: 0
	}, ...bots];
}
function startGame(g, now) {
	if (g.phase !== "lobby" || now <= 0) return g;
	const seeded = {
		...g,
		players: makePlayers(g),
		toast: "",
		round: 0,
		rng: (g.rng ^ Math.imul(now, 2654435761) ^ 2246822507) >>> 0,
		seenTexts: [],
		customs: [],
		answers: [],
		votes: [],
		plans: [],
		lastDeltas: {}
	};
	if (g.customOn) return enterCustom(seeded, now);
	const rng = roller(seeded.rng);
	return enterDeal({
		...seeded,
		deck: shuffle(BUILTINS, rng),
		rng: rng.state()
	}, 1, now);
}
function enterCustom(g, now) {
	const rng = roller(g.rng);
	const pool = [...BOT_QUESTIONS];
	const plans = [];
	let index = 0;
	for (const player of g.players) {
		if (!player.bot) continue;
		const first = pool.splice(Math.floor(rng.next() * pool.length), 1)[0];
		const second = pool.splice(Math.floor(rng.next() * pool.length), 1)[0];
		if (!first || !second) continue;
		plans.push({
			at: now + 700 + index * 480,
			kind: "custom",
			playerId: player.id,
			prompts: [first, second]
		});
		index += 1;
	}
	return {
		...g,
		phase: "custom",
		rng: rng.state(),
		plans,
		customs: [],
		customTexts: ["", ""],
		deadline: now + TIMING.customMs,
		phaseUntil: 0
	};
}
function submitCustom(g, now) {
	if (g.phase !== "custom") return g;
	if (g.customs.some((row) => row.playerId === "you")) return g;
	const texts = g.customTexts.map((text) => text.trim().replace(/\s+/g, " "));
	if (texts.some((text) => text.length < 8 || text.length > 140)) return {
		...g,
		toast: "Два вопроса, каждый от 8 до 140 символов"
	};
	if (texts[0].toLocaleLowerCase("ru-RU") === texts[1].toLocaleLowerCase("ru-RU")) return {
		...g,
		toast: "Нужны два разных вопроса"
	};
	const next = {
		...g,
		toast: "",
		customs: [
			...g.customs,
			{
				playerId: "you",
				text: texts[0]
			},
			{
				playerId: "you",
				text: texts[1]
			}
		]
	};
	return customComplete(next) ? finishCustom(next, now) : next;
}
function skipCustom(g, now) {
	if (g.phase !== "custom") return g;
	return finishCustom(applyDuePlans({
		...g,
		plans: g.plans.map((plan) => ({
			...plan,
			at: now
		}))
	}, now), now);
}
function customComplete(g) {
	return g.players.every((player) => g.customs.filter((row) => row.playerId === player.id).length >= 2);
}
function finishCustom(g, now) {
	const rng = roller(g.rng);
	const seen = /* @__PURE__ */ new Set();
	const customQs = [];
	g.customs.forEach((row, index) => {
		const key = row.text.toLocaleLowerCase("ru-RU");
		if (seen.has(key)) return;
		seen.add(key);
		customQs.push({
			id: `c${index}-${row.playerId}`,
			text: row.text,
			replies: []
		});
	});
	const rest = shuffle(BUILTINS.filter((prompt) => !seen.has(prompt.text.toLocaleLowerCase("ru-RU"))), rng);
	return enterDeal({
		...g,
		deck: [...shuffle(customQs, rng), ...rest],
		rng: rng.state(),
		plans: []
	}, 1, now);
}
function enterDeal(g, round, now) {
	const need = round === 3 ? 1 : g.players.length;
	const rng = roller(g.rng ^ round * 73244475);
	let deck = [...g.deck];
	if (deck.length < need) {
		const more = shuffle(BUILTINS.map((prompt, index) => ({
			...prompt,
			id: `${prompt.id}-r${round}-${index}`
		})), rng);
		deck = [...deck, ...more];
	}
	const picked = deck.slice(0, need);
	deck = deck.slice(need);
	const ring = shuffle(g.players, rng);
	const assignments = [];
	let seq = g.seq;
	const nextId = () => `a${seq++}`;
	if (round === 3) {
		const question = picked[0];
		if (!question) return g;
		for (const player of ring) assignments.push({
			id: nextId(),
			qid: question.id,
			playerId: player.id,
			pair: "final",
			slot: 1
		});
	} else for (let i = 0; i < ring.length; i++) {
		const question = picked[i];
		const left = ring[i];
		const right = ring[(i + 1) % ring.length];
		if (!question || !left || !right) continue;
		const pair = `p${i}`;
		assignments.push({
			id: nextId(),
			qid: question.id,
			playerId: left.id,
			pair,
			slot: 1
		});
		assignments.push({
			id: nextId(),
			qid: question.id,
			playerId: right.id,
			pair,
			slot: 2
		});
	}
	const pairs = round === 3 ? ["final"] : shuffle(Array.from({ length: ring.length }, (_, index) => `p${index}`), rng);
	const you = g.players.find((player) => player.id === "you");
	const wager = round === 3 && you && you.score > 0 ? Math.floor(you.score / 2 / 50) * 50 : 0;
	return {
		...g,
		phase: "deal",
		round,
		rng: rng.state(),
		deck,
		seq,
		assignments,
		roundQuestions: picked,
		seenTexts: [...g.seenTexts, ...picked.map((question) => question.text)],
		answers: [],
		votes: [],
		order: pairs,
		voteCursor: 0,
		awardedPairs: [],
		lastDeltas: {},
		plans: [],
		draft: "",
		wager,
		deadline: 0,
		phaseUntil: now + TIMING.dealMs,
		toast: ""
	};
}
function enterAnswer(g, now) {
	const rng = roller(g.rng);
	const usedLines = /* @__PURE__ */ new Map();
	const plans = shuffle(g.assignments.filter((assignment) => g.players.find((player) => player.id === assignment.playerId)?.bot), rng).map((assignment) => {
		const question = g.roundQuestions.find((item) => item.id === assignment.qid);
		const used = usedLines.get(assignment.pair) ?? /* @__PURE__ */ new Set();
		const pool = (question && question.replies.length ? question.replies : GENERIC).filter((line) => !used.has(line));
		const source = pool.length ? pool : GENERIC;
		const text = source[Math.floor(rng.next() * source.length)] ?? SAFETY[0];
		used.add(text);
		usedLines.set(assignment.pair, used);
		const player = g.players.find((item) => item.id === assignment.playerId);
		let wager = 0;
		if (g.round === 3 && player && player.score > 0) {
			const ratio = .25 + rng.next() * .55;
			wager = Math.min(player.score, Math.max(50, Math.round(player.score * ratio / 50) * 50));
		}
		return {
			at: now + 900 + rng.next() * (TIMING.answerMs - 6e3),
			kind: "answer",
			playerId: assignment.playerId,
			assignmentId: assignment.id,
			text,
			wager
		};
	});
	return {
		...g,
		phase: "answer",
		plans,
		deadline: now + TIMING.answerMs,
		phaseUntil: 0,
		rng: rng.state()
	};
}
function playerAssignments(g, playerId) {
	return g.assignments.filter((assignment) => assignment.playerId === playerId).sort((a, b) => a.slot - b.slot);
}
function openAssignment(g, playerId) {
	return playerAssignments(g, playerId).find((assignment) => !g.answers.some((answer) => answer.assignmentId === assignment.id)) ?? null;
}
function everyoneAnswered(g) {
	return g.assignments.every((assignment) => g.answers.some((answer) => answer.assignmentId === assignment.id));
}
function armClose(g, now) {
	if (!everyoneAnswered(g)) return g;
	return {
		...g,
		deadline: Math.min(g.deadline || now + 350, now + 350)
	};
}
function submitAnswer(g, now) {
	if (g.phase !== "answer") return g;
	const assignment = openAssignment(g, "you");
	if (!assignment) return g;
	const text = g.draft.trim().replace(/\s+/g, " ").toLocaleLowerCase("ru-RU");
	if (text.length < 1) return {
		...g,
		toast: "Нужна хотя бы одна буква"
	};
	if (text.length > 80) return {
		...g,
		toast: "Короче — так смешнее"
	};
	const you = g.players.find((player) => player.id === "you");
	return armClose({
		...addAnswer(g, assignment, text, g.round === 3 ? Math.max(0, Math.min(g.wager, you?.score ?? 0)) : 0, false),
		draft: "",
		toast: ""
	}, now);
}
function addAnswer(g, assignment, text, wager, safety) {
	if (g.answers.some((answer) => answer.assignmentId === assignment.id)) return g;
	const answer = {
		id: `n${g.seq}`,
		assignmentId: assignment.id,
		qid: assignment.qid,
		playerId: assignment.playerId,
		text,
		wager,
		safety
	};
	return {
		...g,
		seq: g.seq + 1,
		answers: [...g.answers, answer]
	};
}
function closeAnswers(g, now) {
	const rng = roller(g.rng ^ 2654435769);
	let seq = g.seq;
	const answers = [...g.answers];
	for (const assignment of g.assignments) {
		if (answers.some((answer) => answer.assignmentId === assignment.id)) continue;
		const text = SAFETY[Math.floor(rng.next() * SAFETY.length)] ?? SAFETY[0];
		answers.push({
			id: `s${seq++}`,
			assignmentId: assignment.id,
			qid: assignment.qid,
			playerId: assignment.playerId,
			text,
			wager: 0,
			safety: true
		});
	}
	return enterVote({
		...g,
		answers,
		seq,
		rng: rng.state(),
		plans: []
	}, 0, now);
}
function assignmentsInPair(g, pair) {
	return g.assignments.filter((assignment) => assignment.pair === pair);
}
function answersInPair(g, pair) {
	const ordered = [];
	for (const assignment of g.assignments) {
		if (assignment.pair !== pair) continue;
		const answer = g.answers.find((item) => item.assignmentId === assignment.id);
		if (answer) ordered.push(answer);
	}
	return ordered;
}
function eligiblePlayers(g, pair) {
	if (g.round === 3) return g.players;
	const authors = new Set(assignmentsInPair(g, pair).map((assignment) => assignment.playerId));
	return g.players.filter((player) => !authors.has(player.id));
}
function enterVote(g, cursor, now) {
	const pair = g.order[cursor];
	if (!pair) return enterBoard(g, now);
	const rng = roller(g.rng + cursor * 97 >>> 0);
	const answers = answersInPair(g, pair);
	const authors = new Set(assignmentsInPair(g, pair).map((assignment) => assignment.playerId));
	const plans = [];
	g.players.forEach((player, index) => {
		if (!player.bot) return;
		if (g.round !== 3 && authors.has(player.id)) return;
		const options = g.round === 3 ? answers.filter((answer) => answer.playerId !== player.id) : answers;
		const pick = options[Math.floor(rng.next() * options.length)];
		if (!pick) return;
		plans.push({
			at: now + 450 + index * 260 + rng.next() * 800,
			kind: "vote",
			playerId: player.id,
			pair,
			answerId: pick.id
		});
	});
	const window = g.round === 3 ? TIMING.finalVoteMs : TIMING.voteMs;
	return {
		...g,
		phase: "vote",
		voteCursor: cursor,
		plans,
		deadline: now + window,
		phaseUntil: 0,
		rng: rng.state(),
		lastDeltas: {},
		toast: ""
	};
}
function everyoneVoted(g, pair) {
	return eligiblePlayers(g, pair).every((player) => g.votes.some((vote) => vote.pair === pair && vote.voterId === player.id));
}
function castVote(g, answerId, now) {
	if (g.phase !== "vote") return g;
	const pair = g.order[g.voteCursor];
	if (!pair) return g;
	if (g.votes.some((vote) => vote.pair === pair && vote.voterId === "you")) return g;
	const target = answersInPair(g, pair).find((answer) => answer.id === answerId);
	if (!target) return g;
	const authors = new Set(assignmentsInPair(g, pair).map((assignment) => assignment.playerId));
	if (g.round !== 3 && authors.has("you")) return {
		...g,
		toast: "В своей паре ты не голосуешь"
	};
	if (target.playerId === "you") return {
		...g,
		toast: "Свой ответ выбрать нельзя"
	};
	return settleVote({
		...g,
		votes: [...g.votes, {
			pair,
			voterId: "you",
			answerId
		}],
		toast: ""
	}, now);
}
function settleVote(g, now) {
	const pair = g.order[g.voteCursor];
	if (!pair || !everyoneVoted(g, pair)) return g;
	if (g.phaseUntil && g.phaseUntil > now) return g;
	return {
		...g,
		phaseUntil: now + TIMING.settleMs
	};
}
function award(g, pair) {
	const answers = answersInPair(g, pair);
	const lastDeltas = {};
	if (g.round === 3) {
		const paid = finalPayout(g.players.map((player) => {
			const answer = answers.find((item) => item.playerId === player.id);
			return {
				id: player.id,
				score: player.score,
				wager: answer?.wager ?? 0,
				votes: g.votes.filter((vote) => vote.pair === pair && vote.answerId === answer?.id).length
			};
		}));
		return {
			lastDeltas: Object.fromEntries(paid.map((row) => [row.id, row.delta])),
			players: g.players.map((player) => {
				const row = paid.find((item) => item.id === player.id);
				return {
					...player,
					score: row?.score ?? player.score
				};
			})
		};
	}
	const eligible = eligiblePlayers(g, pair).length;
	const points = duelPoints(answers.map((answer) => g.votes.filter((vote) => vote.answerId === answer.id).length), eligible);
	return {
		players: g.players.map((player) => {
			const index = answers.findIndex((answer) => answer.playerId === player.id);
			const delta = index >= 0 ? points[index] ?? 0 : 0;
			lastDeltas[player.id] = delta;
			return {
				...player,
				score: player.score + delta
			};
		}),
		lastDeltas
	};
}
function enterReveal(g, now) {
	const pair = g.order[g.voteCursor];
	if (!pair) return enterBoard(g, now);
	if (g.awardedPairs.includes(pair)) return {
		...g,
		phase: "reveal",
		plans: [],
		phaseUntil: now + TIMING.revealMs
	};
	const paid = award(g, pair);
	return {
		...g,
		phase: "reveal",
		players: paid.players,
		lastDeltas: paid.lastDeltas,
		awardedPairs: [...g.awardedPairs, pair],
		plans: [],
		phaseUntil: now + TIMING.revealMs,
		toast: ""
	};
}
function advanceAfterReveal(g, now) {
	const next = g.voteCursor + 1;
	if (next < g.order.length) return enterVote(g, next, now);
	if (g.round >= 3) return enterPodium(g);
	return enterBoard(g, now);
}
function enterBoard(g, now) {
	return {
		...g,
		phase: "board",
		plans: [],
		deadline: 0,
		phaseUntil: now + TIMING.boardMs,
		toast: ""
	};
}
function enterPodium(g) {
	return {
		...g,
		phase: "podium",
		plans: [],
		deadline: 0,
		phaseUntil: 0,
		toast: ""
	};
}
function continueBoard(g, now) {
	if (g.phase === "reveal") return advanceAfterReveal(g, now);
	if (g.phase === "deal") return enterAnswer(g, now);
	if (g.phase !== "board") return g;
	if (g.round >= 3) return enterPodium(g);
	return enterDeal(g, g.round + 1, now);
}
function hurry(g, now) {
	if (g.phase === "lobby" || g.phase === "podium" || g.phase === "custom") return g;
	const pulled = applyDuePlans({
		...g,
		plans: g.plans.map((plan) => ({
			...plan,
			at: now
		}))
	}, now);
	if (pulled.phase === "answer") return closeAnswers(pulled, now);
	if (pulled.phase === "vote") return enterReveal(pulled, now);
	if (pulled.phase === "reveal") return advanceAfterReveal(pulled, now);
	if (pulled.phase === "deal" || pulled.phase === "board") return continueBoard(pulled, now);
	return pulled;
}
function replay(g) {
	return {
		...createLobby(),
		youName: g.youName,
		botCount: g.botCount,
		customOn: g.customOn
	};
}
function applyPlan(g, plan) {
	if (plan.kind === "custom") {
		if (g.customs.some((row) => row.playerId === plan.playerId)) return g;
		return {
			...g,
			customs: [
				...g.customs,
				{
					playerId: plan.playerId,
					text: plan.prompts[0]
				},
				{
					playerId: plan.playerId,
					text: plan.prompts[1]
				}
			]
		};
	}
	if (plan.kind === "answer") {
		const assignment = g.assignments.find((item) => item.id === plan.assignmentId);
		if (!assignment) return g;
		return addAnswer(g, assignment, plan.text.toLocaleLowerCase("ru-RU"), plan.wager, false);
	}
	const pair = plan.pair;
	if (g.votes.some((vote) => vote.pair === pair && vote.voterId === plan.playerId)) return g;
	const target = answersInPair(g, pair).find((answer) => answer.id === plan.answerId);
	if (!target || target.playerId === plan.playerId) return g;
	if (g.round !== 3) {
		if (new Set(assignmentsInPair(g, pair).map((assignment) => assignment.playerId)).has(plan.playerId)) return g;
	}
	return {
		...g,
		votes: [...g.votes, {
			pair,
			voterId: plan.playerId,
			answerId: plan.answerId
		}]
	};
}
function applyDuePlans(g, now) {
	const due = g.plans.filter((plan) => plan.at <= now);
	if (!due.length) return g;
	let next = {
		...g,
		plans: g.plans.filter((plan) => plan.at > now)
	};
	for (const plan of due) next = applyPlan(next, plan);
	if (next.phase === "answer") next = armClose(next, now);
	if (next.phase === "vote") next = settleVote(next, now);
	return next;
}
function step(g, now) {
	if (g.phase === "custom") {
		if (customComplete(g) || now >= g.deadline) return finishCustom(g, now);
		return g;
	}
	if (g.phase === "deal") return now >= g.phaseUntil ? enterAnswer(g, now) : g;
	if (g.phase === "answer") return now >= g.deadline ? closeAnswers(g, now) : g;
	if (g.phase === "vote") {
		const pair = g.order[g.voteCursor];
		if (!pair) return enterBoard(g, now);
		const ready = everyoneVoted(g, pair);
		if (ready && g.phaseUntil && now >= g.phaseUntil) return enterReveal(g, now);
		if (!ready && now >= g.deadline) return enterReveal(g, now);
		return g;
	}
	if (g.phase === "reveal") return now >= g.phaseUntil ? advanceAfterReveal(g, now) : g;
	if (g.phase === "board") return now >= g.phaseUntil ? continueBoard(g, now) : g;
	return g;
}
function tick(g, now) {
	if (g.phase === "lobby" || g.phase === "podium" || now <= 0) return g;
	return step(applyDuePlans(g, now), now);
}
function clock(total, deadline, now) {
	if (!deadline || total <= 0) return null;
	if (!now) return {
		left: Math.ceil(total / 1e3),
		ratio: 1,
		hot: false
	};
	const leftMs = Math.max(0, deadline - now);
	const left = Math.ceil(leftMs / 1e3);
	return {
		left,
		ratio: Math.max(0, Math.min(1, leftMs / total)),
		hot: left <= 5 && leftMs > 0
	};
}
function personDone(g, playerId) {
	if (g.phase === "custom") return g.customs.filter((row) => row.playerId === playerId).length >= 2;
	if (g.phase === "answer") {
		const need = g.assignments.filter((assignment) => assignment.playerId === playerId);
		return need.length > 0 && need.every((assignment) => g.answers.some((answer) => answer.assignmentId === assignment.id));
	}
	return false;
}
function present(g, now) {
	const you = g.players.find((player) => player.id === "you");
	const players = g.players.map((player) => {
		const done = personDone(g, player.id);
		return {
			id: player.id,
			name: player.name,
			score: player.score,
			you: player.id === "you",
			bot: player.bot,
			done,
			typing: player.bot && !done && (g.phase === "answer" || g.phase === "custom"),
			delta: g.phase === "reveal" ? g.lastDeltas[player.id] ?? 0 : 0
		};
	});
	const ranked = [...players].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "ru"));
	const yourPlace = Math.max(1, ranked.findIndex((player) => player.you) + 1);
	const mine = openAssignment(g, "you");
	const question = mine ? g.roundQuestions.find((item) => item.id === mine.qid) : void 0;
	const waiting = g.phase === "answer" && !mine;
	const answerDone = g.assignments.filter((assignment) => g.answers.some((answer) => answer.assignmentId === assignment.id)).length;
	let timer = null;
	if (g.phase === "custom") timer = clock(TIMING.customMs, g.deadline, now);
	if (g.phase === "answer") timer = clock(TIMING.answerMs, g.deadline, now);
	if (g.phase === "vote") timer = clock(g.round === 3 ? TIMING.finalVoteMs : TIMING.voteMs, g.deadline, now);
	if (g.phase === "board") timer = clock(TIMING.boardMs, g.phaseUntil, now);
	let cards = null;
	if ((g.phase === "vote" || g.phase === "reveal") && g.order[g.voteCursor]) {
		const pair = g.order[g.voteCursor];
		const answers = answersInPair(g, pair);
		const prompt = g.roundQuestions.find((item) => item.id === answers[0]?.qid)?.text ?? "";
		const authors = new Set(assignmentsInPair(g, pair).map((assignment) => assignment.playerId));
		const youAreAuthor = g.round !== 3 && authors.has("you");
		const youVote = g.votes.find((vote) => vote.pair === pair && vote.voterId === "you");
		const eligible = eligiblePlayers(g, pair).length;
		const counts = answers.map((answer) => g.votes.filter((vote) => vote.answerId === answer.id).length);
		const sweep = g.phase === "reveal" && g.round !== 3 && eligible >= 2 && counts.some((count) => count === eligible && count > 0);
		cards = {
			mode: g.round === 3 ? "final" : "duel",
			prompt,
			index: g.voteCursor + 1,
			total: g.order.length,
			canVote: g.phase === "vote" && !youVote && !youAreAuthor,
			youVoted: Boolean(youVote),
			youAreAuthor,
			sweep,
			items: answers.map((answer, index) => ({
				id: answer.id,
				text: answer.text,
				votes: counts[index] ?? 0,
				you: answer.playerId === "you",
				safety: answer.safety,
				author: g.phase === "reveal" ? g.players.find((player) => player.id === answer.playerId)?.name ?? null : null,
				points: g.phase === "reveal" ? g.lastDeltas[answer.playerId] ?? 0 : null,
				wager: answer.wager,
				side: index % 2 === 0 ? "lime" : "coral"
			}))
		};
	}
	const announce = g.phase === "lobby" ? "Лобби шоу" : g.phase === "custom" ? "Фаза своих вопросов" : g.phase === "deal" ? g.round === 3 ? "Финальный раунд" : `Раунд ${g.round}` : g.phase === "answer" ? "Пиши ответ" : g.phase === "vote" ? "Голосование" : g.phase === "reveal" ? "Вскрываем авторов" : g.phase === "board" ? "Счёт раунда" : "Итоги шоу";
	return {
		phase: g.phase,
		round: g.round,
		youName: g.youName,
		botCount: g.botCount,
		customOn: g.customOn,
		customTexts: g.customTexts,
		youSubmittedCustom: g.customs.some((row) => row.playerId === "you"),
		players,
		timer,
		prompt: g.phase === "answer" ? question?.text ?? null : cards?.prompt ?? null,
		slotLabel: g.phase !== "answer" ? null : g.round === 3 ? "Финал · один на всех" : mine ? `Вопрос ${mine.slot} из 2` : "Оба ответа сданы",
		draft: g.draft,
		wager: g.wager,
		wagerMax: you?.score ?? 0,
		currentAssignmentId: mine?.id ?? null,
		waiting,
		answerProgress: {
			done: answerDone,
			total: g.assignments.length
		},
		cards,
		ranked,
		yourPlace,
		toast: g.toast,
		announce,
		dealKicker: g.round === 3 ? "Последний заход" : `Раунд 0${g.round}`,
		dealTitle: g.round === 3 ? "Банк" : "Пиши",
		dealSub: g.round === 3 ? "Один вопрос на всех. Поставь очки, если есть что ставить." : "Два вопроса. На каждый отвечают двое. Строчными."
	};
}
function PartyShow() {
	const [game, setGame] = (0, import_react.useState)(createLobby);
	const [now, setNow] = (0, import_react.useState)(0);
	const [rules, setRules] = (0, import_react.useState)(false);
	const [muted, setMute] = (0, import_react.useState)(false);
	const view = present(game, now);
	const phaseKey = `${view.phase}-${view.round}-${view.cards?.index ?? 0}-${view.currentAssignmentId ?? "wait"}`;
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			const t = Date.now();
			setNow(t);
			setGame((current) => tick(current, t));
		}, 100);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		const stored = readMuted();
		setMute(stored);
		bindMute(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		if (view.phase === "answer") inputRef.current?.focus();
	}, [view.phase, view.currentAssignmentId]);
	const prev = (0, import_react.useRef)(view.phase);
	(0, import_react.useEffect)(() => {
		if (prev.current === view.phase) return;
		if (view.phase === "deal" || view.phase === "custom") sfx("go");
		if (view.phase === "reveal") sfx(view.cards?.sweep ? "sweep" : "score");
		if (view.phase === "podium") sfx(view.yourPlace === 1 ? "sweep" : "score");
		prev.current = view.phase;
	}, [
		view.phase,
		view.cards?.sweep,
		view.yourPlace
	]);
	const act = (fn, sound) => {
		const time = Date.now();
		unlockAudio();
		if (sound) sfx(sound);
		setNow(time);
		setGame((current) => fn(current, time));
	};
	const you = view.players.find((player) => player.you);
	const wide = view.phase === "vote" || view.phase === "reveal" || view.phase === "podium";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "stage",
		onPointerDown: () => unlockAudio(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "watermark",
				"aria-hidden": "true",
				children: "ПАТИ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "frame",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sr-only",
						"aria-live": "polite",
						children: view.announce
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "topbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "brand",
							children: ["Сораши ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Пати" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mode",
							children: "Острослов"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "top-actions",
							children: [
								view.phase !== "lobby" && view.phase !== "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pips",
									"aria-label": `Раунд ${view.round} из 3`,
									children: [
										1,
										2,
										3
									].map((round) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: round === view.round ? "pip now" : round < view.round ? "pip on" : "pip" }, round))
								}) : null,
								you ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "scorebug",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ты" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: formatPoints(you.score) })]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "icon-btn",
									"aria-label": muted ? "Включить звук" : "Выключить звук",
									onClick: () => {
										const next = !muted;
										setMute(next);
										setMuted(next);
										bindMute(next);
									},
									children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 18 })
								})
							]
						})]
					}),
					view.players.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "strip",
						children: view.players.map((player) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: player.you ? "chip you" : player.done ? "chip done" : "chip",
							children: [
								player.delta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: player.delta < 0 ? "delta down pop" : "delta pop",
									children: player.delta > 0 ? `+${formatPoints(player.delta)}` : formatPoints(player.delta)
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "who",
									children: player.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pts",
									children: formatPoints(player.score)
								}),
								player.bot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tag",
									children: " · бот"
								}) : null,
								player.typing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tag dots",
									children: " пишет"
								}) : null
							]
						}, player.id))
					}) : null,
					view.timer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: view.timer.hot ? "timer hot" : "timer",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { transform: `scaleX(${view.timer.ratio})` } })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: wide ? "sheet wide slam-in" : "sheet slam-in",
						children: [
							view.phase === "lobby" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lobby, {
								name: view.youName,
								bots: view.botCount,
								customOn: view.customOn,
								rules,
								onRules: () => setRules((open) => !open),
								onName: (value) => act((current) => setName(current, value)),
								onBots: (count) => act((current) => setBotCount(current, count), "tap"),
								onCustom: (on) => act((current) => setCustomOn(current, on), "tap"),
								onStart: () => act((current, time) => startGame(current, time))
							}) : null,
							view.phase === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPhase, {
								texts: view.customTexts,
								submitted: view.youSubmittedCustom,
								left: view.timer?.left ?? 0,
								players: view.players,
								onChange: (index, value) => act((current) => setCustomText(current, index, value)),
								onExamples: () => act((current) => fillExamples(current), "tap"),
								onSubmit: () => act((current, time) => submitCustom(current, time), "send"),
								onSkip: () => act((current, time) => skipCustom(current, time), "tap")
							}) : null,
							view.phase === "deal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker",
									children: view.dealKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "display",
									children: view.dealTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "lead",
									children: view.dealSub
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "stack",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "btn btn-ghost",
										onClick: () => act((current, time) => hurry(current, time), "tap"),
										children: "Пропустить заставку"
									})
								})
							] }) : null,
							view.phase === "answer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerPhase, {
								inputRef,
								prompt: view.prompt,
								slot: view.slotLabel,
								draft: view.draft,
								waiting: view.waiting,
								progress: view.answerProgress,
								round: view.round,
								wager: view.wager,
								wagerMax: view.wagerMax,
								left: view.timer?.left ?? 0,
								players: view.players,
								onDraft: (value) => act((current) => setDraft(current, value)),
								onWager: (value) => act((current) => setWager(current, value)),
								onSubmit: () => act((current, time) => submitAnswer(current, time), "send"),
								onHurry: () => act((current, time) => hurry(current, time), "tap")
							}) : null,
							view.cards && (view.phase === "vote" || view.phase === "reveal") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VotePhase, {
								cards: view.cards,
								phase: view.phase,
								left: view.timer?.left ?? 0,
								onVote: (id) => act((current, time) => castVote(current, id, time), "vote"),
								onHurry: () => act((current, time) => hurry(current, time), "tap")
							}) : null,
							view.phase === "board" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, {
								round: view.round,
								ranked: view.ranked,
								onNext: () => act((current, time) => continueBoard(current, time), "tap")
							}) : null,
							view.phase === "podium" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Podium, {
								ranked: view.ranked,
								place: view.yourPlace,
								onReplay: () => {
									sfx("tap");
									setGame((current) => replay(current));
								}
							}) : null
						]
					}, phaseKey)
				]
			}),
			view.toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "toast",
				role: "status",
				children: view.toast
			}) : null
		]
	});
}
function Lobby({ name, bots, customOn, rules, onRules, onName, onBots, onCustom, onStart }) {
	const cast = ["Ты", ...BOT_NAMES.slice(0, bots)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "kicker",
			children: "Шоу коротких ответов"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "display",
			children: [
				"Время",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "острить." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lead",
			children: "Два ответа на абсурдные вопросы, потом зал выбирает, что смешнее. В финале свои очки можно поставить в банк."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stack",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "field-label",
					htmlFor: "player-name",
					children: "Как тебя объявить"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "player-name",
					className: "field",
					maxLength: 16,
					placeholder: "Ты",
					value: name,
					autoComplete: "nickname",
					onChange: (event) => onName(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "roster",
					children: cast.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [person, person === "Ты" ? "" : " · бот"] }, person))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stepper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Меньше ботов",
							disabled: bots <= 3,
							onClick: () => onBots(bots - 1),
							children: "−"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["В зале: ", bots + 1] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Больше ботов",
							disabled: bots >= 7,
							onClick: () => onBots(bots + 1),
							children: "+"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Свои вопросы" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub",
						children: "Каждый пишет два вопроса. Не сдашь — возьмём из колоды шоу."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "switch",
						"aria-checked": customOn,
						className: customOn ? "switch on" : "switch",
						onClick: () => onCustom(!customOn),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-lime",
					onClick: onStart,
					children: "Начать шоу"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost",
					onClick: onRules,
					children: rules ? "Скрыть правила" : "Как считают очки"
				})
			]
		}),
		rules ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rules",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Правила"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Раунды 1 и 2 — пары. У каждого два вопроса, на каждый отвечают двое." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Голосуют те, кто этот вопрос не писал. Голос стоит 1000. Если все голоса на одной стороне — ×2." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Финал — один вопрос на всех. Победитель забирает банк. Если ставить было нечего, голос стоит 1000." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Не успел — шоу ставит сейф. Его тоже можно выбрать. Пиши строчными." })
			] })]
		}) : null
	] });
}
function CustomPhase({ texts, submitted, left, players, onChange, onExamples, onSubmit, onSkip }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "kicker",
			children: [
				"Своя колода · ",
				left,
				" с"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "prompt",
			children: "Два вопроса, на которые стыдно отвечать всерьёз"
		}),
		submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lead",
			children: "Принято. Ждём, пока допишут остальные."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stack",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					htmlFor: "q1",
					children: ["Первый вопрос ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [texts[0].length, "/140"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "q1",
					className: "area",
					maxLength: 140,
					value: texts[0],
					onChange: (event) => onChange(0, event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					htmlFor: "q2",
					children: ["Второй вопрос ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [texts[1].length, "/140"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "q2",
					className: "area",
					maxLength: 140,
					value: texts[1],
					onChange: (event) => onChange(1, event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-ghost",
					onClick: onExamples,
					children: "Подставить пример"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-lime",
					onClick: onSubmit,
					children: "Сдать два вопроса"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roster, { players }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stack",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-ghost",
				onClick: onSkip,
				children: "Дальше с тем, что уже есть"
			})
		})
	] });
}
function AnswerPhase({ inputRef, prompt, slot, draft, waiting, progress, round, wager, wagerMax, left, players, onDraft, onWager, onSubmit, onHurry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "kicker",
			children: [
				slot,
				" · ",
				left,
				" с · сдано ",
				progress.done,
				"/",
				progress.total
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "prompt",
			children: waiting ? "Ждём остальные панчи" : prompt
		}),
		waiting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lead",
			children: "Твои ответы уже в зале. Боты ещё дописывают — или ускорь шоу."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "stack",
			onSubmit: (event) => {
				event.preventDefault();
				onSubmit();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					htmlFor: "punch",
					children: ["Ответ строчными", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [draft.length, "/80"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					id: "punch",
					className: "field",
					maxLength: 80,
					placeholder: "коротко и больнее",
					value: draft,
					enterKeyHint: "send",
					autoCapitalize: "none",
					autoCorrect: "off",
					spellCheck: false,
					onChange: (event) => onDraft(event.target.value)
				}),
				round === 3 && wagerMax > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						htmlFor: "wager",
						children: ["Ставка в банк", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPoints(wager) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "wager",
						className: "slider",
						type: "range",
						min: 0,
						max: wagerMax,
						step: wagerMax >= 200 ? 50 : 10,
						value: Math.min(wager, wagerMax),
						onChange: (event) => onWager(Number(event.target.value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub",
						children: "Победитель по голосам забирает весь банк. Ничья делит его."
					})
				] }) : null,
				round === 3 && wagerMax === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sub",
					children: "Ставить нечего. Если банк пуст, каждый голос в финале стоит 1000."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn btn-lime",
					children: "Отправить ответ"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roster, { players }),
		waiting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stack",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-ink",
				onClick: onHurry,
				children: "К голосованию"
			})
		}) : null
	] });
}
function VotePhase({ cards, phase, left, onVote, onHurry }) {
	const note = cards.youAreAuthor ? "Ты в этой паре — голосует зал." : cards.youVoted ? "Голос принят. Смотрим, куда клонится зал." : phase === "reveal" ? "Авторы вскрыты." : cards.mode === "final" ? "Один голос. Свой ответ не выбрать." : "Что смешнее?";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "kicker",
			children: [
				cards.mode === "final" ? "Финал · банк" : `Пара ${cards.index} из ${cards.total}`,
				phase === "vote" ? ` · ${left} с` : "",
				cards.sweep ? " · все согласны ×2" : ""
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "prompt",
			children: cards.prompt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lead",
			children: note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cards.mode === "final" ? "vote-grid final" : "vote-grid duel",
			style: { marginTop: "1rem" },
			children: cards.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFace, {
				item,
				phase,
				interactive: cards.canVote && !item.you,
				onVote,
				showVs: cards.mode === "duel" && index === 0
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stack",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-ghost",
				onClick: onHurry,
				children: phase === "reveal" ? "Дальше" : "К итогам"
			})
		})
	] });
}
function CardFace({ item, phase, interactive, onVote, showVs }) {
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				gap: "0.4rem",
				flexWrap: "wrap"
			},
			children: [
				item.you ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stamp",
					children: "твой"
				}) : null,
				item.safety ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "stamp",
					children: "сейф"
				}) : null,
				phase === "reveal" && item.points !== null && item.points !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "float-pts pop",
					children: item.points > 0 ? `+${formatPoints(item.points)}` : formatPoints(item.points)
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "punch",
			children: item.text
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-meta",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phase === "reveal" ? item.author ?? "игрок" : item.you ? "это ты" : "аноним" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "votes pop",
				children: item.votes
			}, item.votes)]
		}),
		phase === "reveal" && item.wager > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "stamp",
			children: ["ставка ", formatPoints(item.wager)]
		}) : null,
		interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "stamp",
			children: "это смешнее"
		}) : null
	] });
	const className = `vcard ${item.side}${item.you ? " mine" : ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className,
		onClick: () => onVote(item.id),
		children: body
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className,
		children: body
	}), showVs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "vs",
		"aria-hidden": "true",
		children: "VS"
	}) : null] });
}
function Board({ round, ranked, onNext }) {
	const max = Math.max(1, ...ranked.map((player) => player.score));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "kicker",
			children: ["После раунда ", round]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display",
			children: "Счёт"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "board",
			children: ranked.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: player.you ? "board-row you" : "board-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: index + 1 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: player.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bar",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { transform: `scaleX(${player.score / max})` } })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: formatPoints(player.score) })
				]
			}, player.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stack",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-lime",
				onClick: onNext,
				children: round >= 3 ? "К финалу зала" : "Следующий раунд"
			})
		})
	] });
}
function Podium({ ranked, place, onReplay }) {
	const [first, ...rest] = ranked;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { position: "relative" },
		children: [
			place === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "confetti",
				"aria-hidden": "true",
				children: Array.from({ length: 10 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, index))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: place === 1 ? "Зал выбрал тебя" : `Ты на ${place} месте`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display",
				children: place === 1 ? "Твой зал." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Шоу",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"закрыто."
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "podium",
				children: [first ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "place first",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rank",
							children: "01"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "who",
							children: first.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: formatPoints(first.score) })
					]
				}) : null, rest.slice(0, 4).map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "place rest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rank",
							children: [
								"0",
								index + 2,
								player.you ? " · это ты" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "who",
							children: player.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: formatPoints(player.score) })
					]
				}, player.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stack",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-lime",
					onClick: onReplay,
					children: "Ещё партию"
				})
			})
		]
	});
}
function Roster({ players }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "roster",
		children: players.map((player) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: player.done ? "done" : void 0,
			children: [player.name, player.done ? " · сдал" : player.typing ? " · пишет" : ""]
		}, player.id))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyShow, {});
}
//#endregion
export { Home as component };
