export  const serverData = [
	{
		key: 'TC1',
		label: 'Торговый Центр 1',
		tcCategory: 'Хлеб и Пироги',
		week: '40',
		sold: 30,
		forecast: 40,
		variance: -10,
		wape: '25',
		children: [
			{
				key: 'TC1-1',
				label: 'Хлеб',
				sold: 15,
				tcCategory: 'Хлеб',
				week: '40',
				forecast: 20,
				variance: -5,
				wape: '25',
				children: [
					{
						key: 'TC1-1-1',
						label: 'Хлеб мелкий',
						sold: 15,
						tcCategory: 'Хлеб мелкий',
						week: '40',
						forecast: 20,
						variance: -5,
						wape: '25',
						children: [
							{
								key: 'TC1-1-1-1',
								label: 'Булочка с маком',
								sold: 15,
								tcCategory: 'Булочка',
								week: '40',
								forecast: 20,
								variance: -5,
								wape: '25',
								salesData: [
									{
										date: "2023-09-01",
										sold: 12,
										forecast: 15
									},
									{
										date: "2023-09-02",
										sold: 13,
										forecast: 16
									},
									{
										date: "2023-09-03",
										sold: 14,
										forecast: 17
									},
									{
										date: "2023-09-04",
										sold: 15,
										forecast: 18
									},
									{
										date: "2023-09-05",
										sold: 16,
										forecast: 19
									},
									{
										date: "2023-09-06",
										sold: 17,
										forecast: 20
									},
									{
										date: "2023-09-07",
										sold: 18,
										forecast: 21
									},
									{
										date: "2023-09-08",
										sold: 19,
										forecast: 22
									},
									{
										date: "2023-09-09",
										sold: 20,
										forecast: 23
									},
									{
										date: "2023-09-10",
										sold: 21,
										forecast: 24
									},
									{
										date: "2023-09-11",
										sold: 22,
										forecast: 25
									},
									{
										date: "2023-09-12",
										sold: 23,
										forecast: 26
									},
									{
										date: "2023-09-13",
										sold: 24,
										forecast: 27
									},
									{
										date: "2023-09-14",
										sold: 25,
										forecast: 28
									},
									{
										date: "2023-09-15",
										sold: 26,
										forecast: 29
									},
									{
										date: "2023-09-16",
										sold: 23,
										forecast: 30
									},
									{
										date: "2023-09-17",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-18",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-19",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-20",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-21",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-22",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-23",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-24",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-25",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-26",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-27",
										sold: 60,
										forecast: 60
									},
									{
										date: "2023-09-28",
										sold: 59,
										forecast: 60
									},
									{
										date: "2023-09-29",
										sold: 58,
										forecast: 60
									},
									{
										date: "2023-09-30",
										sold: 58,
										forecast: 60
									}
								]
							},
							{
								key: 'TC1-1-1-2',
								label: 'Булочка с изюмом',
								sold: 15,
								tcCategory: 'Булочка',
								week: '40',
								forecast: 20,
								variance: -5,
								wape: '25',
							},
							{
								key: 'TC1-1-1-3',
								label: 'Булочка с повидлом',
								sold: 15,
								tcCategory: 'Булочка',
								week: '40',
								forecast: 20,
								variance: -5,
								wape: '25',
							}
						]
					}
				]
			},
			{
				key: 'TC1-2',
				label: 'Пироги',
				sold: 40,
				tcCategory: 'Пироги',
				week: '40',
				forecast: 50,
				variance: -10,
				wape: '20',
				children: [
					{
						key: 'TC1-2-1',
						label: 'Пироги Сладкие',
						sold: 40,
						tcCategory: 'Пироги сладкие',
						week: '40',
						forecast: 50,
						variance: -10,
						wape: '20',
						children: [
							{
								key: 'TC1-2-1-1',
								label: 'Пирог c абрикосом',
								sold: 40,
								tcCategory: 'Фруктовые пироги',
								week: '40',
								forecast: 50,
								variance: -10,
								wape: '20',
							},
							{
								key: 'TC1-2-1-2',
								label: 'Пирог c яблоком',
								sold: 40,
								tcCategory: 'Фруктовые пироги',
								week: '40',
								forecast: 50,
								variance: -10,
								wape: '20',
							}
						]
					}
				]
			}
		]
	},
	{
		key: 'TC2',
		tcCategory: 'Торговый Центр 2',
		label: 'Торговый Центр 2',
		week: 41,
		sold: 40,
		forecast: 45,
		variance: -5,
		wape: "11.1",
		children: [
			{
				key: 'TC2-1',
				tcCategory: 'Хлеб',
				label: 'Хлеб',
				week: 41,
				sold: 33,
				forecast: 36,
				variance: -3,
				wape: "8.3",
				children: [
					{
						key: 'TC2-1-1',
						tcCategory: 'Хлеб мелкий',
						label: 'Хлеб мелкий',
						week: 41,
						sold: 23,
						forecast: 26,
						variance: -3,
						wape: "11.5",
						children: [
							{
								key: 'TC2-1-1-1',
								tcCategory: 'Булочка с маком',
								label: 'Булочка с маком',
								week: 41,
								sold: 15,
								forecast: 17,
								variance: -2,
								wape: "11.7",
								salesData: [
									{
										date: "2023-09-01",
										sold: 1,
										forecast: 2
									},
									{
										date: "2023-09-02",
										sold: 2,
										forecast: 3
									},
									{
										date: "2023-09-03",
										sold: 4,
										forecast: 5
									},
									{
										date: "2023-09-04",
										sold: 6,
										forecast: 7
									},
									{
										date: "2023-09-05",
										sold: 8,
										forecast: 9
									},
									{
										date: "2023-09-06",
										sold: 10,
										forecast: 11
									},
									{
										date: "2023-09-07",
										sold: 12,
										forecast: 13
									},
									{
										date: "2023-09-08",
										sold: 14,
										forecast: 14
									},
									{
										date: "2023-09-09",
										sold: 15,
										forecast: 15
									},
									{
										date: "2023-09-10",
										sold: 16,
										forecast: 16
									},
									{
										date: "2023-09-11",
										sold: 17,
										forecast: 17
									},
									{
										date: "2023-09-12",
										sold: 18,
										forecast: 19
									},
									{
										date: "2023-09-13",
										sold: 20,
										forecast: 20
									},
									{
										date: "2023-09-14",
										sold: 21,
										forecast: 22
									},
									{
										date: "2023-09-15",
										sold: 25,
										forecast: 27
									},
									{
										date: "2023-09-16",
										sold: 23,
										forecast: 30
									},
									{
										date: "2023-09-17",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-18",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-19",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-20",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-21",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-22",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-23",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-24",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-25",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-26",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-27",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-28",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-29",
										sold: 45,
										forecast: 48
									},
									{
										date: "2023-09-30",
										sold: 40,
										forecast: 45
									}
								]
							},
							{
								key: 'TC2-1-1-2',
								tcCategory: 'Булочка с изюмом',
								label: 'Булочка с изюмом',
								week: 41,
								sold: 20,
								forecast: 22,
								variance: -2,
								wape: "9.1",
							},
							{
								key: 'TC2-1-1-3',
								tcCategory: 'Булочка с повидлом',
								label: 'Булочка с повидлом',
								week: 41,
								sold: 18,
								forecast: 20,
								variance: -2,
								wape: "10",
							},
						],
					},
				],
			},
			{
				key: 'TC2-2',
				tcCategory: 'Пироги',
				label: 'Пироги',
				week: 41,
				sold: 40,
				forecast: 44,
				variance: -4,
				wape: "9.1",
				children: [
					{
						key: 'TC2-2-1',
						tcCategory: 'Пироги Сладкие',
						label: 'Пироги Сладкие',
						week: 41,
						sold: 32,
						forecast: 35,
						variance: -3,
						wape: "8.6",
						children: [
							{
								key: 'TC2-2-1-1',
								tcCategory: 'Пироги Фруктовые',
								label: 'Пироги Фруктовые',
								week: 41,
								sold: 25,
								forecast: 28,
								variance: -3,
								wape: "10.7",
								children: [
									{
										key: 'TC2-2-1-1-1',
										tcCategory: 'Пирог c абрикосом',
										label: 'Пирог c абрикосом',
										week: 41,
										sold: 22,
										forecast: 24,
										variance: -2,
										wape: "8.3",
									},
									{
										key: 'TC2-2-1-1-2',
										tcCategory: 'Пирог c яблоком',
										label: 'Пирог c яблоком',
										week: 41,
										sold: 21,
										forecast: 23,
										variance: -2,
										wape: "8.7",
									},
								],
							},
							{
								key: 'TC2-2-1-2',
								tcCategory: 'Пироги Шоколадные',
								label: 'Пироги Шоколадные',
								week: 41,
								sold: 33,
								forecast: 36,
								variance: -3,
								wape: "8.3",
							},
							{
								key: 'TC2-2-1-3',
								tcCategory: 'Пироги Кремовые',
								label: 'Пироги Кремовые',
								week: 41,
								sold: 35,
								forecast: 38,
								variance: -3,
								wape: "7.9",
							},
						],
					},
					{
						key: 'TC2-2-2',
						tcCategory: 'Пироги Солёные',
						label: 'Пироги Солёные',
						week: 41,
						sold: 38,
						forecast: 42,
						variance: -4,
						wape: "9.5",
						children: [
							{
								key: 'TC2-2-2-1',
								tcCategory: 'Пироги Мясные',
								label: 'Пироги Мясные',
								week: 41,
								sold: 29,
								forecast: 32,
								variance: -3,
								wape: "9.4",
							},
							{
								key: 'TC2-2-2-2',
								tcCategory: 'Пироги Рыбные',
								label: 'Пироги Рыбные',
								week: 41,
								sold: 30,
								forecast: 33,
								variance: -3,
								wape: "9.1",
							},
							{
								key: 'TC2-2-2-3',
								tcCategory: 'Пироги Сырные',
								label: 'Пироги Сырные',
								week: 41,
								sold: 33,
								forecast: 36,
								variance: -3,
								wape: "8.3",
							},
						],
					},
				],
			},
		],
	},
	{
		key: 'TC3',
		tcCategory: 'Торговый Центр 3',
		label: 'Торговый Центр 3',
		week: 41,
		sold: 40,
		forecast: 45,
		variance: -5,
		wape: "11.1",
		children: [
			{
				key: 'TC3-1',
				tcCategory: 'Хлеб',
				label: 'Хлеб',
				week: 41,
				sold: 33,
				forecast: 36,
				variance: -3,
				wape: "8.3",
				children: [
					{
						key: 'TC3-1-1',
						tcCategory: 'Хлеб мелкий',
						label: 'Хлеб мелкий',
						week: 41,
						sold: 23,
						forecast: 26,
						variance: -3,
						wape: "11.5",
						children: [
							{
								key: 'TC3-1-1-1',
								tcCategory: 'Булочка с маком',
								label: 'Булочка с маком',
								week: 41,
								sold: 15,
								forecast: 17,
								variance: -2,
								wape: "11.7",
								salesData: [
									{
										date: "2023-09-01",
										sold: 12,
										forecast: 15
									},
									{
										date: "2023-09-02",
										sold: 13,
										forecast: 16
									},
									{
										date: "2023-09-03",
										sold: 14,
										forecast: 17
									},
									{
										date: "2023-09-04",
										sold: 15,
										forecast: 18
									},
									{
										date: "2023-09-05",
										sold: 16,
										forecast: 19
									},
									{
										date: "2023-09-06",
										sold: 17,
										forecast: 20
									},
									{
										date: "2023-09-07",
										sold: 18,
										forecast: 21
									},
									{
										date: "2023-09-08",
										sold: 19,
										forecast: 22
									},
									{
										date: "2023-09-09",
										sold: 20,
										forecast: 23
									},
									{
										date: "2023-09-10",
										sold: 21,
										forecast: 24
									},
									{
										date: "2023-09-11",
										sold: 22,
										forecast: 25
									},
									{
										date: "2023-09-12",
										sold: 23,
										forecast: 26
									},
									{
										date: "2023-09-13",
										sold: 24,
										forecast: 27
									},
									{
										date: "2023-09-14",
										sold: 25,
										forecast: 28
									},
									{
										date: "2023-09-15",
										sold: 26,
										forecast: 29
									},
									{
										date: "2023-09-16",
										sold: 23,
										forecast: 30
									},
									{
										date: "2023-09-17",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-18",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-19",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-20",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-21",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-22",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-23",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-24",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-25",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-26",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-27",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-28",
										sold: 23,
										forecast: 28
									},
									{
										date: "2023-09-29",
										sold: 45,
										forecast: 48
									},
									{
										date: "2023-09-30",
										sold: 40,
										forecast: 45
									}
								]
								
							},
							{
								key: 'TC3-1-1-2',
								tcCategory: 'Булочка с изюмом',
								label: 'Булочка с изюмом',
								week: 41,
								sold: 20,
								forecast: 22,
								variance: -2,
								wape: "9.1",
							},
							{
								key: 'TC3-1-1-3',
								tcCategory: 'Булочка с повидлом',
								label: 'Булочка с повидлом',
								week: 41,
								sold: 18,
								forecast: 20,
								variance: -2,
								wape: "10",
							},
						],
					},
				],
			},
			{
				key: 'TC3-2',
				tcCategory: 'Пироги',
				label: 'Пироги',
				week: 41,
				sold: 40,
				forecast: 44,
				variance: -4,
				wape: "9.1",
				children: [
					{
						key: 'TC3-2-1',
						tcCategory: 'Пироги Сладкие',
						label: 'Пироги Сладкие',
						week: 41,
						sold: 32,
						forecast: 35,
						variance: -3,
						wape: "8.6",
						children: [
							{
								key: 'TC3-2-1-1',
								tcCategory: 'Пироги Фруктовые',
								label: 'Пироги Фруктовые',
								week: 41,
								sold: 25,
								forecast: 28,
								variance: -3,
								wape: "10.7",
								children: [
									{
										key: 'TC3-2-1-1-1',
										tcCategory: 'Пирог c абрикосом',
										label: 'Пирог c абрикосом',
										week: 41,
										sold: 22,
										forecast: 24,
										variance: -2,
										wape: "8.3",
									},
									{
										key: 'TC3-2-1-1-2',
										tcCategory: 'Пирог c яблоком',
										label: 'Пирог c яблоком',
										week: 41,
										sold: 21,
										forecast: 23,
										variance: -2,
										wape: "8.7",
									},
								],
							},
							{
								key: 'TC3-2-1-2',
								tcCategory: 'Пироги Шоколадные',
								label: 'Пироги Шоколадные',
								week: 41,
								sold: 33,
								forecast: 36,
								variance: -3,
								wape: "8.3",
							},
							{
								key: 'TC3-2-1-3',
								tcCategory: 'Пироги Кремовые',
								label: 'Пироги Кремовые',
								week: 41,
								sold: 35,
								forecast: 38,
								variance: -3,
								wape: "7.9",
							},
						],
					},
					{
						key: 'TC3-2-2',
						tcCategory: 'Пироги Солёные',
						label: 'Пироги Солёные',
						week: 41,
						sold: 38,
						forecast: 42,
						variance: -4,
						wape: "9.5",
						children: [
							{
								key: 'TC3-2-2-1',
								tcCategory: 'Пироги Мясные',
								label: 'Пироги Мясные',
								week: 41,
								sold: 29,
								forecast: 32,
								variance: -3,
								wape: "9.4",
							},
							{
								key: 'TC3-2-2-2',
								tcCategory: 'Пироги Рыбные',
								label: 'Пироги Рыбные',
								week: 41,
								sold: 30,
								forecast: 33,
								variance: -3,
								wape: "9.1",
							},
							{
								key: 'TC3-2-2-3',
								tcCategory: 'Пироги Сырные',
								label: 'Пироги Сырные',
								week: 41,
								sold: 33,
								forecast: 36,
								variance: -3,
								wape: "8.3",
							},
						],
					},
				],
			},
		],
	},

];
