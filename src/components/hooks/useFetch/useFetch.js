import { useState ,useEffect} from "react";
import axios from "axios";

function useFetch(url) {
    const [data , setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data : responseData} = await axios.get(url);
                setData(responseData);
                setLoading(false); // Veriler çekildikten sonra loading'i false yap
            } catch (error) {
              console.log(error);
                setError(error); // Hata yakalandığında error state'ini set et
                setLoading(false); // Hata durumunda da loading'i false yap
            }
        };
        fetchData();
    }, [url]); // url değiştiğinde yeniden fetch yap

    return {data, loading, error}; // loading ve error durumlarını da döndür
}

export default useFetch;