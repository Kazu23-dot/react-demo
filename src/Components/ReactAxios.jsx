import React from 'react';
import axios from "axios";

/**axisoライブラリを使用してWebAPIとデータのやり取りを実施**/
export const ReactAxios = () => {
    const [data, setData] = React.useState();
    const url = "http://127.0.0.1:8000/SqlResult";

    const GetData = () => {
        axios.get(url).then((res) => {
            /**HTTP通信でGETしたDBデータを配列の状態で取得**/
            setData(res.data); 
            /**配列をコンソールに表示**/
            console.log(res.data);

            res.data.map((name) => console.log(name));
            console.log(res.data);
        });
    };

    return (
        <>
            <div>
                <div>ここに処理を記載します</div>
                <button onClick={GetData}>データ取得</button>
            </div>
        </>
      );
};

//{data ? <div>{data}</div> : <button onClick={GetData}>データ取得</button>}