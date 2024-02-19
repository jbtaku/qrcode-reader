"use client";

import { useState } from "react";
import { useZxing } from "react-zxing";

function QrCodeReader() {
  const [data, setData] = useState<string>();
  const { ref } = useZxing({
    onDecodeResult(result) {
      setData(result.getText());
    },
  });
  return (
    <div>
      <video ref={ref} />
      <p>result:{data}</p>
    </div>
  );
}

export default QrCodeReader;

