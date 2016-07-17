# AKBGroup_SongList_Flask
AKBGroup_SongList_Flask ( AKB48Group點歌單 ) 
AKB48  SKE48  HKT48  NMB48  SDN48  乃木坂46  欅坂46 公演(stage)  Solo  子團 點歌單
* [Demo](http://pythontt-twtrubikscode.rhcloud.com/)  

原版為[AKBGroup_SongList](https://github.com/twtrubiks/AKBGroup_SongList)，因為小弟最近摸了一點[Flask](http://flask.pocoo.org/) ，所以就動手下去把後端

從原本PHP改成PYTHON，順便把玩了一下[Jinja2](http://jinja.pocoo.org/docs/dev/)這個template。

## 特色
* 點歌單AKB48  SKE48  HKT48  NMB48  SDN48  乃木坂46   欅坂46 公演(stage)  Solo  子團，可供開電台使用
* 後台可簡單管理歌單狀態

## 執行說明
請先確定電腦有安裝[Python](https://www.python.org/)

使用下列指令安裝套件
``` 
pip install -r requirements.txt
```

接著使用下列指令即可運行
``` 
python AKBGroup_SongList_flask.py
```
如下圖
![alt tag](http://i.imgur.com/yaAFOTg.jpg)

接著用你的瀏覽器瀏覽 [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

## 使用說明
* [http://127.0.0.1:5000/](http://127.0.0.1:5000/) 為首頁 ， [http://127.0.0.1:5000/](http://127.0.0.1:5000/index_old)為舊首頁
* [http://127.0.0.1:5000/list](http://127.0.0.1:5000/list) 為 聽眾點播的歌曲
* [http://127.0.0.1:5000/modify](http://127.0.0.1:5000/modify) 為 管理介面，滑鼠雙擊condition欄位可修改狀態

## 執行畫面
首頁 [http://127.0.0.1:5000/](http://127.0.0.1:5000/)
![alt tag](http://i.imgur.com/WfgbFCu.jpg)

點歌單
![alt tag](http://i.imgur.com/JOvnwi9.jpg)
![alt tag](http://i.imgur.com/pkiDA6Q.jpg)
![alt tag](http://i.imgur.com/iANf6Rc.jpg)

聽眾點播的歌曲 [http://127.0.0.1:5000/list](http://127.0.0.1:5000/list)
![alt tag](http://i.imgur.com/9TQhgcg.jpg)

管理介面 [http://127.0.0.1:5000/modify](http://127.0.0.1:5000/modify)
Delete可刪除資料，雙擊condition欄位可修改狀態
![alt tag](http://i.imgur.com/S5iz6x4.jpg)

## External JS
* [sweetalert](https://github.com/t4t5/sweetalert) 
* [X-editable](https://vitalets.github.io/x-editable/) 
* [moment](https://github.com/moment/moment/) 

## 執行環境
* Python 3.5.2

## License
MIT license
