const overViewData = {
    honorData: {
        recentRecord: {
            'illustrate': '最近30天匹配赛和排位赛的场次，胜率，总击杀数，KDA计算公式：（K + A  / D * 3 ',
            'data': [
                { 'type' : 'text' , 'name' : 'KDA' , 'num' : '1.2'},
                { 'type' : 'text' , 'name' : '胜率' , 'num' : '0 %'},
                { 'type' : 'text' , 'name' : '总击杀' , 'num' : '3'},
                { 'type' : 'text' , 'name' : '场次' , 'num' : '1'},
            ]
        },
        honorData: {
            'illustrate': '个人荣誉统计数据从2016年1月1日开始累积，且只记录匹配赛和排位赛',
            'data': [
                { 'type' : 'img' , 'url' : 'MVP.png' , 'num' : '128'},
                { 'type' : 'img' , 'url' : 'SVP.png' , 'num' : '123'},
                { 'type' : 'img' , 'url' : 'lecendary.png' , 'num' : '247'},
                { 'type' : 'img' , 'url' : 'pentaKill.png' , 'num' : '5'},
            ]
        }
    },
    tableData: {
        'tableTitle': [
            { 'prop' : 'type' , 'label' : '类型' },
            { 'prop' : 'session' , 'label' : '总场次' },
            { 'prop' : 'winrate' , 'label' : '胜率' },
            { 'prop' : 'winfield' , 'label' : '胜场' },
            { 'prop' : 'negativefield' , 'label' : '负场' },
            { 'prop' : 'rank' , 'label' : '段位' },
            { 'prop' : 'victorypoint' , 'label' : '胜点' },
         ],
        'data': [
            {
                'type': '经典对战',
                'session': '1480',
                'winrate': '49%',
                'winfield': '719',
                'negativefield': '761',
                'rank': '--',
                'victorypoint': '--',
            },
            {
                'type': '极地大乱斗',
                'session': '493',
                'winrate': '47%',
                'winfield': '227',
                'negativefield': '266',
                'rank': '--',
                'victorypoint': '--',
            },
            {
                'type': 'S11单双排',
                'session': '1',
                'winrate': '100%',
                'winfield': '1',
                'negativefield': '0',
                'rank': '黑铁 I',
                'victorypoint': '56',
            },
            {
                'type': 'S11灵活排位',
                'session': '34',
                'winrate': '50%',
                'winfield': '17',
                'negativefield': '17',
                'rank': '青铜 I',
                'victorypoint': '59',
            },
            {
                'type': 'S11季前赛单双排',
                'session': '0',
                'winrate': '0%',
                'winfield': '0',
                'negativefield': '0',
                'rank': '黑铁 IV',
                'victorypoint': '--',
            },
            {
                'type': 'S11季前赛灵活排位',
                'session': '0',
                'winrate': '0%',
                'winfield': '0',
                'negativefield': '0',
                'rank': '黑铁 I',
                'victorypoint': '--',
            },
            {
                'type': 'S10单双排',
                'session': '2',
                'winrate': '50%',
                'winfield': '1',
                'negativefield': '1',
                'rank': '黑铁 IV',
                'victorypoint': '64',
            },
            {
                'type': 'S10灵活排位',
                'session': '24',
                'winrate': '42%',
                'winfield': '10',
                'negativefield': '14',
                'rank': '青铜 IV',
                'victorypoint': '--',
            },
            {
                'type': 'S9单双排',
                'session': '0',
                'winrate': '0%',
                'winfield': '0',
                'negativefield': '0',
                'rank': '--',
                'victorypoint': '--',
            },
            {
                'type': 'S9灵活排位',
                'session': '3',
                'winrate': '33%',
                'winfield': '1',
                'negativefield': '2',
                'rank': '青铜 IV',
                'victorypoint': '51',
            },
            {
                'type': 'S9季前赛单双排',
                'session': '0',
                'winrate': '0%',
                'winfield': '0',
                'negativefield': '0',
                'rank': '--',
                'victorypoint': '--',
            },
            {
                'type': 'S9季前赛灵活排位',
                'session': '0',
                'winrate': '0%',
                'winfield': '0',
                'negativefield': '0',
                'rank': '--',
                'victorypoint': '--',
            },
            {
                'type': 'S8单双排',
                'session': '3',
                'winrate': '33%',
                'winfield': '1',
                'negativefield': '2',
                'rank': '白银 IV',
                'victorypoint': '0',
            },
        ]
    },
    playerData: {
        'avatar': 'avatar4.png',
        'playerName': '丶火影灬',
        'region': '均衡教派',
        'accountData': '1786赞 220黑',
        'rankData': [
            { 'icon': "rank-blackiron.png" , 'rank': '黑铁 I' , 'model': '单双排' },
            { 'icon': "rank-blackiron.png" , 'rank': '青铜 I' , 'model': '灵活组排' }
        ]
    },
    ListData: [
        {
            'id': 1,
            'url': 'avatar3.png',
            'result': '胜利',
            'model': '大乱斗',
            'date': '09-03',
            'performance': '碾压局'
        },
        {
            'id': 2,
            'url': 'avatar3.png',
            'result': '胜利',
            'model': '大乱斗',
            'date': '09-03',
            'performance': 'carry局'
        },
        {
            'id': 3,
            'url': 'avatar3.png',
            'result': '失败',
            'model': '大乱斗',
            'date': '09-03',
            'performance': '尽力局'
        },
        {
            'id': 4,
            'url': 'avatar3.png',
            'result': '胜利',
            'model': '大乱斗',
            'date': '09-03',
            'performance': '碾压局'
        },
        {
            'id': 5,
            'url': 'avatar3.png',
            'result': '失败',
            'model': '大乱斗',
            'date': '09-03',
            'performance': '碾压局'
        },
        {
            'id': 6,
            'url': 'avatar3.png',
            'result': '胜利',
            'model': '大乱斗',
            'date': '09-03',
            'performance': '碾压局'
        },
        {
            'id': 7,
            'url': 'avatar3.png',
            'result': '失败',
            'model': '大乱斗',
            'date': '09-03',
            'performance': '甩锅局'
        }
    ]
}

const historicalData = {
    ListData: [
    {
        'id': 1,
        'url': 'avatar3.png',
        'result': '胜利',
        'model': '大乱斗',
        'date': '09-03',
        'performance': '碾压局'
    },
    {
        'id': 2,
        'url': 'avatar3.png',
        'result': '胜利',
        'model': '大乱斗',
        'date': '09-03',
    },
    {
        'id': 3,
        'url': 'avatar3.png',
        'result': '失败',
        'model': '大乱斗',
        'date': '09-03',
        'performance': '尽力局'
    },
    {
        'id': 4,
        'url': 'avatar3.png',
        'result': '胜利',
        'model': '大乱斗',
        'date': '09-03',
        'performance': '碾压局'
    },
    {
        'id': 5,
        'url': 'avatar3.png',
        'result': '失败',
        'model': '大乱斗',
        'date': '09-03',
    },
    {
        'id': 6,
        'url': 'avatar3.png',
        'result': '胜利',
        'model': '大乱斗',
        'date': '09-03',
    },
    {
        'id': 7,
        'url': 'avatar3.png',
        'result': '失败',
        'model': '大乱斗',
        'date': '09-03',
        'performance': '甩锅局'
    }
    ],
}

const recordDetails = {
    histData: [
        {
            'id': 1,
            'date': '09-08',
            'model': '大乱斗',
            'start': '23:38',
            'victoryTeamHeadNum': '76',
            'failTeamHeadNum': '63',
            'victoryTeamMoney': '106.0k',
            'failTeamMoney': '103.0k',
            'time': '32分钟',
            'player': [
                {
                    'name': 'spycua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': '2',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'dasdasd',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spfdfdsycua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spysadcua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spycsadua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spyqwewqecua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spxczxcycua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'sfdsapycua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spyqwescua',
                    'url': 'avatar5.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
            ]
        },
        {
            'id': 2,
            'date': '09-07',
            'model': '大乱斗',
            'start': '23:38',
            'victoryTeamHeadNum': '76',
            'failTeamHeadNum': '63',
            'victoryTeamMoney': '106.0k',
            'failTeamMoney': '103.0k',
            'time': '32分钟',
            'player': [
                {
                    'name': 'spycua',
                    'url': 'avatar1.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': '2',
                    'url': 'avatar7.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'dasdasd',
                    'url': 'avatar6.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spfdfdsycua',
                    'url': 'avatar4.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spysadcua',
                    'url': 'avatar8.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spycsadua',
                    'url': 'avatar7.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spyqwewqecua',
                    'url': 'avatar9.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spxczxcycua',
                    'url': 'avatar4.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'sfdsapycua',
                    'url': 'avatar10.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
                {
                    'name': 'spyqwescua',
                    'url': 'avatar2.png',
                    'rank': '--',
                    'evaluation': '14.5',
                    'money': '23.7k',
                    'KDA': '20/10/43',
                    'equipment': 'equipment.png',
                },
            ]
        }
    ]
}


export default {
    overViewData,
    historicalData,
    recordDetails
}
