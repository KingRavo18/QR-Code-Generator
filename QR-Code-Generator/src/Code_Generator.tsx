import { useState, type JSX } from "react";

export default function QrCodeGenerator(): JSX.Element{
    const [link, setLink] = useState<string>("");

    function generateCode(): void{

    }

    return(
        <main>
            <h1>QR Code Generator</h1>
            <div className="url-input-container">
                <input type="url"
                       placeholder="Enter link..."
                       title="Enter the link you want a QR code for"
                       aria-label="Enter the link you want a QR code for"
                       onChange={event => setLink(event.target.value)}
                />
                <button onClick={generateCode}
                        title="Generate your QR code"
                        aria-label="Generate your QR code"
                >
                    Generate
                </button>
            </div>
            <div>

            </div>
            <button className="qr-code-download-btn"
                    title="Download your QR code"
                    aria-label="Download your QR code"
            >
                Download QR Code
            </button>
        </main>
    )
}