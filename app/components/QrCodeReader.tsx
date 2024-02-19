"use client";

import { useState } from "react";
import { useZxing } from "react-zxing";

function QrCodeReader() {
  const [path, setPath] = useState<string>();
  const { ref } = useZxing({
    onDecodeResult(result) {
      setPath(result.getText());
    },
  });
  return (
    <div>
      <video ref={ref} />
      <p>URL:{path}</p>
    </div>
  );
}

export default QrCodeReader;
