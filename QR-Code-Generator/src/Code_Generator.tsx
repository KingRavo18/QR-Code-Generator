import { useState, type JSX } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator(): JSX.Element{
    const [url, setUrl] = useState<string>("");
    const [isGenerated, setIsGenerated] = useState<boolean>(false);

    function generateCode(): void{
        if(url.trim() === ""){
            return;
        }
        setIsGenerated(true);
    }

    function downloadCode(): void{

    }

    return(
        <main>
            <h1>QR Code Generator</h1>
            <div className="url-input-container">
                <input type="url"
                       placeholder="Input url..."
                       title="Input the url you want a QR code for"
                       aria-label="Input the url you want a QR code for"
                       onChange={event => setUrl(event.target.value)}
                />
                <button onClick={generateCode}
                        title="Generate your QR code"
                        aria-label="Generate your QR code"
                >
                    Generate
                </button>
            </div>

            {!isGenerated &&
                <p className="message">
                    Please generate a QR code.
                </p>
            }

            {isGenerated &&
                <div className="generated-code-container">
                    <QRCode 
                        size={200}
                        bgColor="white"
                        fgColor="black"
                        value={url}
                    />
                    <button onClick={downloadCode}
                            title="Download your QR code"
                            aria-label="Download your QR code"
                    >
                        Download QR Code
                    </button>
                </div>
            }

        </main>
    )
}