//https://www.playbuzz.com/MultipleChoice
/*var outA = "<pre>[\n";
for (xyz=0; xyz<gameData.gameSpecificData.GSD.length; xyz++) {
	var tmpA = "";
    outA += "\t{\n\t\tq: '" + gameData.gameSpecificData.GSD[xyz].freeText.replace(/'/g, "&amp;#39") + "',\n\t\ta: [\n";
	for (zyx=0; zyx<gameData.gameSpecificData.GSD[xyz].answers.length; zyx++) {
    	tmpA +=
			"\t\t\t['" + gameData.gameSpecificData.GSD[xyz].answers[zyx].header.replace(/'/g, "&amp;#39") + "', " +
			gameData.gameSpecificData.GSD[xyz].answers[zyx].isCorrect + "]";
			if (zyx < gameData.gameSpecificData.GSD[xyz].answers.length - 1) {
				tmpA += ",\n";
    		}
    }
	outA += tmpA + "\n\t\t],\n\t\ti: './assets/images/" + gameData.gameSpecificData.GSD[xyz].images.question.originalImageURL.replace("\/\/cdn", "http:\/\/cdn") + "'\n\t}";
	if (xyz < gameData.gameSpecificData.GSD.length - 1) {
		outA += ",\n";
    }
}
outA += "\n];</pre>";
document.write(outA);*/

var quiz = [];

quiz.push({
	n: "Bob&#39s Burgers",
	q: [
		{
			q: 'When did Bob&#39s Burgers first air?',
			a: [
				['2011', true],
				['2013', false],
				['2010', false],
				['2012', false]
			],
			i: './assets/images/d6e97e40-f69a-41f3-8dde-9d3acabd9674.jpg'
		},
		{
			q: 'Which character is voiced by the only main female cast member?',
			a: [
				['Gene', false],
				['Tina', false],
				['Louise', true],
				['Linda', false]
			],
			i: './assets/images/460d7beb-adcf-48f0-be29-cf0216b213ce.gif'
		},
		{
			q: 'What song is referenced to the episode title "All Lice Things Are Lice" (S.6 Ep. 10)',
			a: [
				['Buckle It Up (Or You&#39ll Die)', false],
				['Electric Love (S.3)', false],
				['This is Working (S.3)', false],
				['None of the Above', true]
			],
			i: './assets/images/553170db-2a8b-4375-8570-0ba651107867.jpg'
		},
		{
			q: 'The voice behind Bob Belcher, H. Jon Benjamin, also stars on what show?',
			a: [
				['Family Guy', false],
				['American Dad', false],
				['Archer', true],
				['None of the Above', false]
			],
			i: './assets/images/3aceb74e-9886-4513-9fbe-46514beb2db2.jpg'
		},
		{
			q: 'We see the character Gyro for the second time in what episode?',
			a: [
				['Wag the Hog (S.6)', false],
				['Stand by Gene (S.6)', false],
				['Hawk & Chick (S.5)', false],
				['Sexy Dance Healing (S.6)', true]
			],
			i: './assets/images/ebf1e991-cbb3-4b8b-80e3-17d8d7d53b2a.jpg'
		},
		{
			q: 'Did Gene ever find the two-butted goat?',
			a: [
				['Yes!', true],
				['No...', false],
				['I don&#39t know', false]
			],
			i: './assets/images/42c4bba6-ca33-49a3-8268-fa412cd1cf33.jpg'
		},
		{
			q: 'How old are the Tina, Gene, and Louise?',
			a: [
				['14, 12, 10', false],
				['13, 11, 9', true],
				['12, 10, 8', false],
				['13, 11, 10', false]
			],
			i: './assets/images/c48a5bee-148e-4419-bdec-c81c9cc39c35.jpg'
		},
		{
			q: 'What holiday is Bob obsessed with?',
			a: [
				['Halloween', false],
				['Thanksgiving', true],
				['Christmas', false],
				['Valentine&#39s Day', false]
			],
			i: './assets/images/0083247e-93f1-4adb-b4c9-5fe7c2617663.jpg'
		},
		{
			q: 'What color is Tina&#39s berret?',
			a: [
				['Blue', false],
				['Red', false],
				['Orange', false],
				['Yellow', true]
			],
			i: './assets/images/399cbf37-57ce-42c2-ba9e-0853d3fb3ff7.jpg'
		},
		{
			q: 'What ethnicity are the Belchers?',
			a: [
				['White', false],
				['Italian', false],
				['Middle Eastern', false],
				['None of the Above', true]
			],
			i: './assets/images/8e9af0e1-4152-432b-81cb-39458ab56656.jpg'
		}
	]
});

quiz.push({
	n: "Family Guy",
	q: [
		{
			q: 'What is Peter&#39s middle name?',
			a: [
				['Lancelot', false],
				['Löwenbräu', true],
				['Lefenhaus', false],
				['Lester', false]
			],
			i: './assets/images/05f969de-40de-4ecf-a25f-ef2d4077c182.jpg'
		},
		{
			q: 'Why is Peter always fighting Ernie, the giant chicken?',
			a: [
				['Peter flirted with Ernie&#39s wife', false],
				['Ernie gave Peter an expired coupon', true],
				['Peter ran Ernie over with his car', false],
				['Ernie wants to steal Lois from Peter', false]
			],
			i: './assets/images/7938edd7-3cc6-4f61-850f-f6ff9350e7ff.jpg'
		},
		{
			q: 'What&#39s the name of the creepy old man who longingly lusts after Chris?',
			a: [
				['Herbert', true],
				['Hugh', false],
				['Douglas', false],
				['George', false]
			],
			i: './assets/images/e609dd6a-4f85-4217-894a-d511c5d8084c.jpg'
		},
		{
			q: 'Where does Peter Griffin primarily work throughout the series?',
			a: [
				['The Drunken Clam', false],
				['Cleveland&#39s Deli', false],
				['Birdy&#39s Soap Factory', false],
				['The Happy-Go-Lucky Toy Factory', true]
			],
			i: './assets/images/96e4cf44-3e2d-454b-9f84-ab0897fd4bc6.jpg'
		},
		{
			q: 'What&#39s the name of Lois&#39 father?',
			a: [
				['Carter', true],
				['Cameron', false],
				['John', false],
				['James', false]
			],
			i: './assets/images/8431a5f5-d263-4b40-9678-0b00aa80debb.jpg'
		},
		{
			q: 'What did Peter have his first experience with when he was 30?',
			a: [
				['Farting', true],
				['Having Sex', false],
				['Flying', false],
				['Taking Drugs', false]
			],
			i: './assets/images/cadabed2-01b1-46df-afaa-e18ab04a0ddb.jpg'
		},
		{
			q: 'True or False: The mascot for Quahog is a clam.',
			a: [
				['True', true],
				['False', false]
			],
			i: './assets/images/df37fb39-e11d-491b-ad13-18cae8047b45.jpg'
		},
		{
			q: 'When Peter gets a bunch of welfare money, what does he add to his house?',
			a: [
				['A Moat', true],
				['A Fence', false],
				['A Second Story', false],
				['A Pond', false]
			],
			i: './assets/images/2bb8bf78-e4ee-4c6f-b99d-0463dbebb8bd.jpg'
		},
		{
			q: 'In what state do the Griffins live?',
			a: [
				['Rhode Island', true],
				['New York', false],
				['New Jersey', false],
				['Deleware', false]
			],
			i: './assets/images/a86ab61a-cc79-4caf-8430-56fffe79a7d2.jpg'
		},
		{
			q: 'Who is older, Meg or Chris?',
			a: [
				['Meg', true],
				['Chris', false]
			],
			i: './assets/images/73b420b9-d568-4b75-8ee5-363b5a19b12a.jpg'
		},
		{
			q: 'What is Brian&#39s drink of choice?',
			a: [
				['Martini', true],
				['Beer', false],
				['Margarita', false],
				['Old Fashioned', false]
			],
			i: './assets/images/85408b08-d71b-4eaf-89fa-2187fc7e2f4b.jpg'
		},
		{
			q: 'What&#39s the name of the country that Peter created?',
			a: [
				['Petoria', true],
				['Peterland', false],
				['Petersburg', false],
				['Peterworld', false]
			],
			i: './assets/images/76152e76-6335-4e36-91fc-60971e10fc28.jpg'
		},
		{
			q: 'What does Peter eat that makes him go blind?',
			a: [
				['Nickels', true],
				['Poison', false],
				['Deodorant ', false],
				['Chapstick ', false]
			],
			i: './assets/images/20336638-d617-46ce-9db7-2d622d18602f.jpg'
		},
		{
			q: 'Which character does Seth MacFarlane not voice?',
			a: [
				['Chris Griffin', true],
				['Peter Griffin', false],
				['Stewie Griffin', false],
				['Glenn Quagmire', false]
			],
			i: './assets/images/6f969332-e531-4b6f-815c-65c3cdb6f709.jpg'
		},
		{
			q: 'What is the name of Stewie&#39s teddy bear?',
			a: [
				['Rupert', true],
				['Bernard', false],
				['Ronald', false],
				['Spot', false]
			],
			i: './assets/images/df75199e-7262-4887-9758-40584c2c3deb.jpg'
		}
	]
});

quiz.push({
	n: "Dexter",
	q: [
		{
			q: 'What is in Dexter&#39s syringes?',
			a: [
				['Muscle relaxant', false],
				['Animal tranquilizer', true],
				['Hospital-grade sedative', false],
				['Opiates', false]
			],
			i: './assets/images/792909a8-1075-466d-bdad-024ca52c6b9f.jpg'
		},
		{
			q: 'Where did Brian Moser attempt to kill Debra?',
			a: [
				['At his childhood home', true],
				['In a hospital', false],
				['In Debra&#39s apartment', false],
				['In an ice truck', false]
			],
			i: './assets/images/1a121da2-958a-45b5-9bdf-ee0bd9473d85.jpg'
		},
		{
			q: 'Who was Dexter&#39s first human kill?',
			a: [
				['Mike Donovan, a church choir leader', false],
				['James Jaworski, a hotel valet', false],
				['Mary, Harry Morgan&#39s nurse', true],
				['Cindy Landon, a widow', false]
			],
			i: './assets/images/33e3331c-be88-442a-82da-13c2c067c8b8.jpg'
		},
		{
			q: 'Before becoming a detective, Quinn was a:',
			a: [
				['Marine', false],
				['Narcotics cop', true],
				['Mechanic', false],
				['Male stripper', false]
			],
			i: './assets/images/5a076722-6d28-4217-9642-f48fd7e7a2b8.jpg'
		},
		{
			q: 'What were Harrison&#39s first words?',
			a: [
				['Daddy', false],
				['Bang bang', false],
				['Mama', false],
				['Die die', true]
			],
			i: './assets/images/5fdbf718-01d0-4837-8082-caf458f22cf6.jpg'
		},
		{
			q: 'Where was Hannah from originally?',
			a: [
				['Alabama', true],
				['Idaho', false],
				['Colorado', false],
				['Manitoba', false]
			],
			i: './assets/images/f9ec51c4-4539-4197-89d2-8080288e520b.jpg'
		},
		{
			q: 'Which one of these Dexter victims was a mercy killing?',
			a: [
				['Camilla Figg', true],
				['Teo Famosa', false],
				['Fred Bowman', false],
				['Zoey Kruger', false]
			],
			i: './assets/images/a8ed8448-d10b-4625-8dcb-5744de3c5567.jpg'
		},
		{
			q: 'How did Dexter meet Lumen?',
			a: [
				['Dexter saved her from a sinking barrel', false],
				['They were both after the same killer', false],
				['They met at a garden party', false],
				['She saw him perform a kill', true]
			],
			i: './assets/images/06f62cca-928b-441c-8d9d-533014e96412.jpg'
		},
		{
			q: 'Who is Astor and Cody&#39s father?',
			a: [
				['Brian Moser', false],
				['Paul Bennett', true],
				['Dexter Morgan', false],
				['Oliver Saxon', false]
			],
			i: './assets/images/7d14fb19-de80-4ee2-8312-b932c52c1457.jpg'
		},
		{
			q: 'How did Harry Morgan die?',
			a: [
				['Murdered by a serial killer', false],
				['Committed suicide', true],
				['Heart attack', false],
				['Dexter killed him accidentally', false]
			],
			i: './assets/images/583299f0-2865-4663-9ab4-5ceba63a016f.jpg'
		},
		{
			q: 'What were LaGuerta&#39s last words?',
			a: [
				['"Do it, Debra, shoot him!"', false],
				['"This is not who you are!"', false],
				['"You&#39re under arrest!"', false],
				['"Put him down!"', true]
			],
			i: './assets/images/384f9731-5bad-43a1-ae93-4123e176c140.jpg'
		},
		{
			q: 'Whose handiwork is this?',
			a: [
				['Trinity', false],
				['Miguel Prado', false],
				['Ice Truck Killer', true],
				['Doomsday Killer', false]
			],
			i: './assets/images/b36db15b-88fb-4a1b-855e-815bf6d94fa6.jpg'
		},
		{
			q: 'Why did Batista once plan to quit the force?',
			a: [
				['Complications from a sex scandal', false],
				['To raise his niece and nephew', false],
				['To buy and run a restaurant', true],
				['To let LaGuerta&#39s career flourish', false]
			],
			i: './assets/images/3a257f04-28ee-4e76-8e89-0aeebe438d5c.jpg'
		},
		{
			q: 'What did Deb&#39s bravery earn her?',
			a: [
				['A promotion to Lieutenant', true],
				['The Miami Metro Bravery Award', false],
				['Acceptance and respect from LaGuerta', false],
				['A commendation from the mayor of Miami', false]
			],
			i: './assets/images/aed7d6fc-ad53-4108-87fd-22f603b91398.jpg'
		},
		{
			q: 'What happened to Dexter&#39s blood slides?',
			a: [
				['They went down with the Slice of Life', false],
				['They&#39re in a storage unit', false],
				['Dexter burned them', true],
				['Hannah has them', false]
			],
			i: './assets/images/52314be4-9332-4b53-a02c-68a5967cce59.jpg'
		}
	]
});

quiz.push({
	n: "Breaking Bad",
	q: [
		{
			q: 'Which substance did Walt use to poison Brock?',
			a: [
				['Ricin', false],
				['Lily of the Valley', true]
			],
			i: './assets/images/2b8d3ab1-0db4-4fa3-8b4b-469e9d33b8f1.png'
		},
		{
			q: 'How much did Walt sell his share of G. Matter for?',
			a: [
				['50,000$', false],
				['5,000$', true]
			],
			i: './assets/images/7b7a719e-b611-41b3-9885-ce0d71f75f0b.png'
		},
		{
			q: 'Which object fell from the crashed plane?',
			a: [
				['A briefcase', false],
				['A teddy bear', true]
			],
			i: './assets/images/03926986-ba64-42d5-8465-e71bf1f297c3.png'
		},
		{
			q: 'Where did Gus Fring set his headquarters?',
			a: [
				['Madrigal Electromotive offices', false],
				['Los Pollos Hermanos restaurant', true]
			],
			i: './assets/images/13749029-ca49-4d5d-8570-af5e1a4c0c3d.jpg'
		},
		{
			q: 'Who is Mr. Lambert?',
			a: [
				['Walt&#39s alias', true],
				['Gus&#39s alias', false]
			],
			i: './assets/images/c7f2320e-560f-479e-8f14-b3f51651da5a.jpg'
		},
		{
			q: 'For whom did Mike Armentrouts save his money?',
			a: [
				['His little granddaughter', true],
				['His estranged son', false]
			],
			i: './assets/images/658ae9a6-7a76-493e-8c4c-eb7f0df805ce.jpg'
		},
		{
			q: 'How come Hank and Marie didn&#39t have any children?',
			a: [
				['Hank is barren', false],
				['It was never explained', true]
			],
			i: './assets/images/54780b51-d141-4130-8f1a-f1c0133ae7e9.jpg'
		},
		{
			q: 'Jessy refers to himself as a...',
			a: [
				['Rabid dog', false],
				['Problem dog', true]
			],
			i: './assets/images/19fee845-5aa1-4291-8ec2-cb629ac43bac.jpg'
		},
		{
			q: 'What was the name of Gus&#39s partner in the 80s?',
			a: [
				['Hector Salamanca', false],
				['Maximino Arciniega', true]
			],
			i: './assets/images/4bd1cffc-d60d-47d9-8443-b459d21b1cbe.jpg'
		},
		{
			q: 'Who came to kill hank?',
			a: [
				['The Cousins', true],
				['The one who knocks', false]
			],
			i: './assets/images/e06784d6-989a-451f-a78c-a2fce4fc9970.jpg'
		},
		{
			q: 'How much did Walter White sell his shares in Grey Matter Technologies for?',
			a: [
				['$5000', true],
				['$10,000', false],
				['$15,000', false],
				['$1250', false]
			],
			i: './assets/images/0306fb12-731b-4414-b22e-dacea5c8dc91.jpg'
		},
		{
			q: 'What is the name of Jesse Pinkman&#39s younger brother?',
			a: [
				['Jake', true],
				['Josh', false],
				['Jason ', false],
				['Jeffery', false]
			],
			i: './assets/images/35243008-f2d0-4731-b00d-332ee7f93158.jpg'
		},
		{
			q: 'In the very first episode of the series Walter White was diagnosed with what form of cancer?',
			a: [
				['Lung Cancer', true],
				['Liver Cancer', false],
				['Brain Cancer', false],
				['Prostate Cancer', false]
			],
			i: './assets/images/396e92e0-5f32-4563-bee5-a24e3696bb24.jpg'
		},
		{
			q: 'The car wash which Walter White worked at and then later bought was called:',
			a: [
				['A1A Car Wash', true],
				['Scrubby&#39s Car Wash', false],
				['Les Sourcils Car Wash', false],
				['Spiffy Clean Car Wash', false]
			],
			i: './assets/images/f73104f4-08c4-4722-8b78-5db75cd76909.jpg'
		},
		{
			q: 'Hank Schrader works for which government agency?',
			a: [
				['DEA', true],
				['FBI', false],
				['ONRR', false],
				['IRS', false]
			],
			i: './assets/images/64abcef5-d9bb-4a2f-afe6-969d4e3c0b41.jpg'
		},
		{
			q: 'What type of acid do Walter and Jessie use to dissolve the body of Emilio Koyama?',
			a: [
				['Hydrofluoric acid', true],
				['Sulfuric acid ', false],
				['Hydrochloric acid', false],
				['Xenomorph acid', false]
			],
			i: './assets/images/9ef8957f-9a93-4de0-a358-064a9f1e4e75.jpg'
		},
		{
			q: 'After drifting away from his father, breakfast lover Walter Jr. briefly changes his name to:',
			a: [
				['Flynn', true],
				['Kane', false],
				['Liam', false],
				['Jesse', false]
			],
			i: './assets/images/8f241c40-7446-4be4-8147-ebadfe4bff74.jpg'
		},
		{
			q: 'Ed, the man who gives Walter White his new identity and helps him to disappear, runs a store which sells and services:',
			a: [
				['Vacuums', true],
				['Computers', false],
				['Lawnmowers', false],
				['Fanny packs', false]
			],
			i: './assets/images/f8ab1b62-3edd-4e84-8bc1-01281690a05a.jpg'
		},
		{
			q: 'In the second season, how much money does Walter calculate that he needs to earn in order to provide for his family after he&#39s gone?',
			a: [
				['$737,000', true],
				['$847,000', false],
				['$650,000', false],
				['$969,000', false]
			],
			i: './assets/images/7a42f8a8-2917-46a0-8dd4-591ce1533555.jpg'
		},
		{
			q: 'Skinny Pete is surprisingly good at playing which instrument?',
			a: [
				['Piano', true],
				['Guitar', false],
				['Drums', false],
				['Flute', false]
			],
			i: './assets/images/f24ae4e7-0aa7-4b95-ab76-df6fdf159788.jpg'
		}
	]
});

quiz.push({
	n: "Dragonball Z - Minor Characters",
	q: [
		{
			q: 'What&#39s this young lady&#39s name?',
			a: [
				['Gine', true],
				['Fasha', false],
				['Erasa', false],
				['Amira', false]
			],
			i: './assets/images/d4ac0a05-4786-46be-a585-58089c71d3af.png'
		},
		{
			q: 'How &#39bout this guy?',
			a: [
				['Diaz', false],
				['Amond', true],
				['Cocoa', false],
				['Gero', false]
			],
			i: './assets/images/53091b5d-381d-433d-80dc-9169cfd5e0a8.jpg'
		},
		{
			q: 'And him',
			a: [
				['Tagoma', false],
				['Shishami', true],
				['Sorbet', false]
			],
			i: './assets/images/a35f972e-b223-40e6-90a9-5f5bb411d8e1.jpg'
		},
		{
			q: 'How bout him?',
			a: [
				['Bido', false],
				['Bujin', true],
				['kogu', false]
			],
			i: './assets/images/b842e2f1-f31c-48d7-8828-1969333fedb3.jpg'
		},
		{
			q: 'Lets see if you know who this is',
			a: [
				['Dore', true],
				['Neiz', false],
				['Spice', false],
				['Riachi', false]
			],
			i: './assets/images/d14538ba-872f-4881-8f02-293cfd59d7b3.jpg'
		},
		{
			q: 'How about him',
			a: [
				['Olibu', false],
				['Chapuchai', true],
				['Borgos', false]
			],
			i: './assets/images/411ac015-6938-49cb-af10-c1b6d269d807.png'
		},
		{
			q: 'And him',
			a: [
				['Caterpy', false],
				['Torbie', true],
				['Papoi', false],
				['Mijorin', false]
			],
			i: './assets/images/c28e0bae-afe6-4409-8479-a10bc40ca259.jpg'
		},
		{
			q: 'And how &#39bout this kid',
			a: [
				['Scarface', false],
				['Shorty', false],
				['Sarta', true],
				['Tapkar', false]
			],
			i: './assets/images/59b00b43-4204-4d31-8062-c72724ab46c1.png'
		},
		{
			q: 'And him',
			a: [
				['Maraikoh', true],
				['Arqua', false],
				['Tom', false]
			],
			i: './assets/images/26c26f45-ae21-4ada-891c-62ddec4bd65d.jpg'
		},
		{
			q: 'What about this red dude?',
			a: [
				['Dabura', true],
				['Daburra', false],
				['Daberua', false],
				['Daburaa', false]
			],
			i: './assets/images/7a9a5edf-deb4-48b9-ade1-f2c95ff8b31c.png'
		},
		{
			q: 'Let&#39s see if you know this guy&#39s name.',
			a: [
				['Gregor', false],
				['Alta', true],
				['Lesoy', false],
				['Yetti', false]
			],
			i: './assets/images/e5c3ef39-fc2a-4726-8560-2de3e6ac992a.jpg'
		},
		{
			q: 'And this guy',
			a: [
				['Arbee', false],
				['Kinkarn', false],
				['Skud', true],
				['Ponkarn', false]
			],
			i: './assets/images/7cf8b56c-0920-4c33-8cd5-599e49d1ad4f.jpg'
		},
		{
			q: 'Let me give you an easy one now. ',
			a: [
				['Bude', false],
				['Ebifurya', true],
				['Hoi', false],
				['Hacchi', false]
			],
			i: './assets/images/2da430f8-a69e-402b-86bd-bdfd7a32c1d7.jpg'
		},
		{
			q: 'And last, what&#39s this guy&#39s name?',
			a: [
				['Tsumusri', false],
				['Piccilo, duh', false],
				['Kishime', true],
				['Nail', false]
			],
			i: './assets/images/e4c7fcab-1e66-4023-bd6e-b202c66d3f80.PNG'
		}
	]
});

/*console.log(quiz[0].n);
console.log("question: " + quiz[0].q[0].q);
console.log("(a): " + quiz[0].q[0].a[0][0]);
console.log("(b): " + quiz[0].q[0].a[1][0]);
console.log("(c): " + quiz[0].q[0].a[2][0]);
console.log("(d): " + quiz[0].q[0].a[3][0]);
console.log("image: " + quiz[0].q[0].i);*/



