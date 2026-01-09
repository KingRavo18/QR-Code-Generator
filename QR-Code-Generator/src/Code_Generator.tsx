import { useRef, useState, type JSX } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator(): JSX.Element{
    const [url, setUrl] = useState<string>("");
    const [isGenerated, setIsGenerated] = useState<boolean>(false);
    const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
    const qrCode = useRef<HTMLDivElement | null>(null);

    function handleUrlInput(event: React.ChangeEvent<HTMLInputElement>){
        setUrl(event.target.value);
        setIsGenerated(false);
    }

    function generateCode(): void{
        const link = url.trim().replace(/\s/g, "");
        try{
            new URL(link);
            setIsErrorMessage(false);
            setIsGenerated(true);
        }
        catch(_){
            setIsGenerated(false);
            setIsErrorMessage(true);
        }
    }

    function downloadCode(): void{
        if(!isGenerated){
            return;
        }
        const qrCodeSvg = qrCode.current?.querySelector("svg");
        if(!qrCodeSvg){
            return;
        }
        const svgString = new XMLSerializer().serializeToString(qrCodeSvg);
        const blob = new Blob([svgString], {
            type: "image/svg+xml;charset=utf-8"
        });
        const qrCodeUrl = URL.createObjectURL(blob);
        console.log(qrCodeUrl);
        const link = document.createElement("a");
        link.href = qrCodeUrl;
        link.download = "qr-code.svg";
        link.click();
        URL.revokeObjectURL(qrCodeUrl);
    }

    return(
        <main>
            <h1>URL to QR Code Generator</h1>
            <div className="url-input-container">
                <input type="url"
                       placeholder="Input url..."
                       title="Input the url you want a QR code for"
                       aria-label="Input the url you want a QR code for"
                       onChange={handleUrlInput}
                />
                <button onClick={generateCode}
                        title="Generate your QR code"
                        aria-label="Generate your QR code"
                >
                    Generate
                </button>
            </div>

            {!isGenerated && !isErrorMessage &&
                <p className="message">
                    Please generate a QR code.
                </p>
            }

            {!isGenerated && isErrorMessage &&
                <p className="message error-message">
                    Please input a valid url.
                </p>
            }

            {isGenerated && !isErrorMessage &&
                <div className="generated-code-container">
                    <div ref={qrCode}>
                        <QRCode 
                            size={200}
                            bgColor="white"
                            fgColor="black"
                            value={url} 
                        />
                    </div>
                    <button onClick={downloadCode}
                            title="Download your QR code"
                            aria-label="Download your QR code"
                            disabled={!isGenerated}
                    >
                        Download QR Code
                    </button>
                </div>
            }
        </main>
    )
}