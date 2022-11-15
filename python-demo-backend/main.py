from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2 import Error, connect
from psycopg2.extras import DictCursor 

#FastAPIのインスタンス生成
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##リクエスト毎に処理##
## @app.post()
## @app.put()
## @app.delete()
@app.get("/")
def Hello():
    return {"Hello":"##World!##","TEST":"Test-Message"}

@app.get("/test/")
def Test():
    return {"Test":"##++World!++##","TEST":"Test-Message"},{"Test2":"##++!++##","TEST2":"######"},{"Test3":"##++!++##","TEST3":"######"}

@app.get("/SqlResult/")
def SqlResult():
    return get_db_data()
    
### DB接続処理 ###
def get_db_data():
    try:
     connection = psycopg2.connect(host="localhost",user="portfoliouser",password="portfoliouser",dbname="postgres",port="5499")
     #cursor = connection.cursor()
     cursor = connection.cursor(cursor_factory=DictCursor)
     cursor.execute("select to_json(test_table) from test_table;")
     #cursor.execute("select to_json(test_table) from test_table limit 1;")
     records = cursor.fetchall()
     #カラム名を表示#
     print(cursor.description)
     #レコード内容を表示#
     print(records)
     for record in records:
        print(record)
    except ZeroDivisionError as e:
        print('catch ZeroDivisionError', e)
    finally:
        cursor.close()
        connection.close()
        print('all finish')
        return records

