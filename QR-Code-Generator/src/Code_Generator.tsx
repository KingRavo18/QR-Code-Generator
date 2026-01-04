import { useState, type JSX } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator(): JSX.Element{
    const [url, setUrl] = useState<string>("");
    const [isGenerated, setIsGenerated] = useState<boolean>(false);
    const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

    function handleUrlInput(event: React.ChangeEvent<HTMLInputElement>){
        setUrl(event.target.value);
        setIsGenerated(false);
    }

    function generateCode(): void{
        const link = url.trim().replace(/\s/g, "");
        setIsGenerated(new URL(link) ? true : false);
        setIsErrorMessage(new URL(link) ? false : true);
    }

    function downloadCode(): void{

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
                    Please make sure you have inputted a valid url.
                </p>
            }

            {isGenerated && !isErrorMessage &&
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