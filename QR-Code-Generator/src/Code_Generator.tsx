import { useState, type JSX } from "react";

export default function QrCodeGenerator(): JSX.Element{
    const [link, setLink] = useState<string>("");
    const [isGenerated, setIsGenerated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function generateCode(): void{

    }

    function downloadCode(): void{

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

            {!isGenerated && !isLoading &&
                <p className="loading-message">
                    Please generate a QR code.
                </p>
            }

            {isLoading &&
                <p className="loading-message">Loading...</p>
            }

            {isGenerated &&
                <div className="generated-code-container">
                    <img />
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