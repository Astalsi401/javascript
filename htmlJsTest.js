const agenda = [{
    date: '日期',
    time: '時間',
    name: '活動名稱',
    room: '會議室',
    org: '主辦單位'
}, {
    date: '12/4-12/5',
    time: '08:00-18:00',
    name: '臺灣整形外科醫學會第20屆第2次會員大會暨學術研討會',
    room: '500<br>504<br>505<br>506<br>507',
    org: '臺灣整形外科醫學會'
}, {
    date: '12/2',
    time: '09:30-16:00',
    name: '2021大健康產業-農業生技與農產機能應用研討會',
    room: '402',
    org: '財團法人農業科技研究院'
}, {
    date: '12/2',
    time: '09:30-16:00',
    name: '2021後疫情時代關鍵防疫科技與創新醫材趨勢研討會',
    room: '403',
    org: '經濟部工業局'
}, {
    date: '12/2',
    time: '13:00-17:30',
    name: '全球再生醫學與精準醫療趨勢',
    room: '501<br>502',
    org: '台灣日立亞太股份有限公司'
}, {
    date: '12/2',
    time: '15:00-16:30',
    name: 'MetaLite 個人化數位病理產品發佈暨創新應用研討會',
    room: '404',
    org: '捷絡生技股份有限公司'
}, {
    date: '12/3',
    time: '08:30-12:00',
    name: '國際智慧醫院交流高峰會－接軌國際醫院!',
    room: '401',
    org: '財團法人工業技術研究院'
}, {
    date: '12/3',
    time: '09:50-16:30',
    name: '「智慧醫療器材創新技術應用發展趨勢」研討會',
    room: '503',
    org: '塑膠工業技術發展中心'
}, {
    date: '12/3',
    time: '13:00-17:00',
    name: 'Roadshow(詳細議程另外提供)',
    room: '404',
    org: '財團法人生技醫療科技政策研究中心'
}, {
    date: '12/3',
    time: '13:30-16:30',
    name: '台新證券2021生技投資高峰論壇',
    room: '401',
    org: '台新綜合證券股份有限公司<br>社團法人國家生技醫療產業策進會'
}, {
    date: '12/3',
    time: '13:30-16:30',
    name: '2021智慧骨科手術輔助系統暨科技專案技術成果發表會',
    room: '403',
    org: '經濟部工業局'
}, {
    date: '12/3',
    time: '13:30-16:30',
    name: '經濟部工業局 2021優勢與利基醫材整合加值計畫 成果發表會',
    room: '501',
    org: '經濟部工業局'
}, {
    date: '12/4',
    time: '08:30-16:10',
    name: '台灣臨床病理暨檢驗醫學會110年學術研討會暨第十一屆第四次會員大會',
    room: '402AB',
    org: '台灣臨床病理暨檢驗醫學會'
}, {
    date: '12/4',
    time: '09:00-17:00',
    name: '台灣微生物學會 學術研討會',
    room: '402C',
    org: '台灣微生物學會'
}, {
    date: '12/4',
    time: '09:10-12:00',
    name: '邁向2030年智慧醫療前瞻論壇',
    room: '403',
    org: '國立陽明交通大學'
}, {
    date: '12/4',
    time: '10:30-11:30',
    name: '男人40+ 決勝關鍵睪固酮',
    room: '501',
    org: '友華生技醫藥股份有限公司'
}, {
    date: '12/4',
    time: '14:00-15:00',
    name: '自體膝關節軟骨細胞治療成果發表會',
    room: '404',
    org: '義大醫療財團法人 義大醫院'
}, {
    date: '12/4',
    time: '14:00-16:00',
    name: '台灣臨床病理暨檢驗醫學會第十二理監事會選舉',
    room: '402AB',
    org: '台灣臨床病理暨檢驗醫學會'
}, {
    date: '12/4',
    time: '14:00-16:30',
    name: '智慧顯示跨域醫療應用研討會',
    room: '401',
    org: '財團法人資訊工業策進會<br>財團法人醫院評鑑暨醫療品質策進會<br>台灣智慧醫療創新整合平台'
}, {
    date: '12/5',
    time: '08:30-17:00',
    name: '台灣微生物學會 第二十三屆第三次會員大會暨學術研討會',
    room: '402',
    org: '台灣微生物學會'
}];

function dataSort() {
    return agenda.slice(0, agenda.length).sort((a, b) => a === b ? 0 : a > b ? -1 : 1)
}

function makeTable() {
    let myData = dataSort()
    let agendaTable = ''
    var agendaTable1202 = ''
    var agendaTable1203 = ''
    var agendaTable1204 = ''
    var agendaTable1205 = ''
    var agendaTable1204_05 = ''
    agendaTable += '<thead><tr><th class="large">' + myData[0].time + '</th>'
    agendaTable += '<th class="mibile">' + myData[0].name + '</th>'
    agendaTable += '<th class="mibile">' + myData[0].room + '</th></tr></thead>'
    agendaTable += '<tbody>'
    for (let i = 1; i < myData.length; i++) {
        if (myData[i] === '12/2') {
            agendaTable1202 += '<tr><td class="large" data-title="' + myData[0].time + '">' + myData[i].date + '<br>' + myData[i].time + '</th>'
            agendaTable1202 += '<td class="large" data-title="' + myData[0].name + '">' + myData[i].name + '</th>'
            agendaTable1202 += '<td class="large" data-title="' + myData[0].room + '">' + myData[i].room + '</th>'
            agendaTable1202 += '<td class="large" data-title="' + myData[0].org + '">' + myData[i].org + '</th>'
            agendaTable1202 += '<td class="mobile" data-title=""><div class="round"><span class="bt"><b>報名</b></span></div></td>'
            agendaTable1202 += '</tr>'
        } else if (myData[i] === '12/3') {
            agendaTable1203 += '<tr><td class="large" data-title="' + myData[0].time + '">' + myData[i].date + '<br>' + myData[i].time + '</th>'
            agendaTable1203 += '<td class="large" data-title="' + myData[0].name + '">' + myData[i].name + '</th>'
            agendaTable1203 += '<td class="large" data-title="' + myData[0].room + '">' + myData[i].room + '</th>'
            agendaTable1203 += '<td class="large" data-title="' + myData[0].org + '">' + myData[i].org + '</th>'
            agendaTable1203 += '<td class="mobile" data-title=""><div class="round"><span class="bt"><b>報名</b></span></div></td>'
            agendaTable1203 += '</tr>'
        } else if (myData[i] === '12/4') {
            agendaTable1204 += '<tr><td class="large" data-title="' + myData[0].time + '">' + myData[i].date + '<br>' + myData[i].time + '</th>'
            agendaTable1204 += '<td class="large" data-title="' + myData[0].name + '">' + myData[i].name + '</th>'
            agendaTable1204 += '<td class="large" data-title="' + myData[0].room + '">' + myData[i].room + '</th>'
            agendaTable1204 += '<td class="large" data-title="' + myData[0].org + '">' + myData[i].org + '</th>'
            agendaTable1204 += '<td class="mobile" data-title=""><div class="round"><span class="bt"><b>報名</b></span></div></td>'
            agendaTable1204 += '</tr>'
        } else if (myData[i] === '12/5') {
            agendaTable1205 += '<tr><td class="large" data-title="' + myData[0].time + '">' + myData[i].date + '<br>' + myData[i].time + '</th>'
            agendaTable1205 += '<td class="large" data-title="' + myData[0].name + '">' + myData[i].name + '</th>'
            agendaTable1205 += '<td class="large" data-title="' + myData[0].room + '">' + myData[i].room + '</th>'
            agendaTable1205 += '<td class="large" data-title="' + myData[0].org + '">' + myData[i].org + '</th>'
            agendaTable1205 += '<td class="mobile" data-title=""><div class="round"><span class="bt"><b>報名</b></span></div></td>'
            agendaTable1205 += '</tr>'
        } else {
            agendaTable1204_05 += '<tr><td class="large" data-title="' + myData[0].time + '">' + myData[i].date + '<br>' + myData[i].time + '</th>'
            agendaTable1204_05 += '<td class="large" data-title="' + myData[0].name + '">' + myData[i].name + '</th>'
            agendaTable1204_05 += '<td class="large" data-title="' + myData[0].room + '">' + myData[i].room + '</th>'
            agendaTable1204_05 += '<td class="large" data-title="' + myData[0].org + '">' + myData[i].org + '</th>'
            agendaTable1204_05 += '<td class="mobile" data-title=""><div class="round"><span class="bt"><b>報名</b></span></div></td>'
            agendaTable1204_05 += '</tr>'
        }
    }
    agendaTable += '<tr><th class="date" colspan="5">12月2日</th></tr>' + agendaTable1202
    agendaTable += '<tr><th class="date" colspan="5">12月3日</th></tr>' + agendaTable1203
    agendaTable += '<tr><th class="date" colspan="5">12月4日</th></tr>' + agendaTable1204
    agendaTable += '<tr><th class="date" colspan="5">12月4日-12月5日</th></tr>' + agendaTable1204_05
    agendaTable += '<tr><th class="date" colspan="5">12月5日</th></tr>' + agendaTable1205
    agendaTable += '</tbody>'
    return agendaTable
}

console.log(makeTable())