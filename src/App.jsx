import { useEffect, useState } from "react";
import QRCode from "qrcode";
function App() {
  const [imageurl, setimageurl] = useState("");

  useEffect(() => {
    try {
      (async () => {
        const res = await QRCode.toDataURL(
          "https://goo.gl/maps/uPLLnkbEc1J8AuPj8"
        );
        setimageurl(res);
        console.log(res);
      })();
    } catch (error) {}

    return () => {};
  }, []);

  return (
    <>
      <img style={{width:200}} src={imageurl} alt="" />
    </>
  );
}

export default App;
