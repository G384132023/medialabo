let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう


console.log("番組開始時刻" + data.list.g1[0].start_time);
console.log("番組終了時刻" + data.list.g1[0].end_time);
console.log("チャンネル" + data.list.g1[0].service.name);
console.log("番組名" + data.list.g1[0].title);
console.log("番組サブタイトル" + data.list.g1[0].subtitle);
console.log("番組説明分" + data.list.g1[0].content);
console.log("出演者" + data.list.g1[0].act);

console.log("番組開始時刻" + data.list.g1[1].start_time);
console.log("番組終了時刻" + data.list.g1[1].end_time);
console.log("チャンネル" + data.list.g1[1].service.name);
console.log("番組名" + data.list.g1[1].title);
console.log("番組サブタイトル" + data.list.g1[1].subtitle);
console.log("番組説明分" + data.list.g1[1].content);
console.log("出演者" + data.list.g1[1].act);



let resultDiv = document.getElementById('result');
function appendProgramInfo(program) {
    let programContainer = document.createElement('div');
    programContainer.classList.add('program');

    let startTime = document.createElement('li');
    startTime.textContent = "番組開始時刻: " + program.start_time;

    let endTime = document.createElement('li');
    endTime.textContent = "番組終了時刻: " + program.end_time;

    let channel = document.createElement('li');
    channel.textContent = "チャンネル: " + program.service.name;

    let title = document.createElement('li');
    title.textContent = "番組名: " + program.title;

    let subtitle = document.createElement('li');
    subtitle.textContent = "番組サブタイトル: " + program.subtitle;

    let content = document.createElement('li');
    content.textContent = "番組説明分: " + program.content;

    let act = document.createElement('li');
    act.textContent = "出演者: " + program.act;

    programContainer.appendChild(startTime);
    programContainer.appendChild(endTime);
    programContainer.appendChild(channel);
    programContainer.appendChild(title);
    programContainer.appendChild(subtitle);
    programContainer.appendChild(content);
    programContainer.appendChild(act);

    resultDiv.appendChild(programContainer);
}

for (const program of data.list.g1) {
  appendProgramInfo(program);
}
