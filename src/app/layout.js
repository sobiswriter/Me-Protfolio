import './globals.css';

export const metadata = {
    title: 'Portfolio | Creative Developer',
    description: 'Professional portfolio showcasing creative development and design.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="bg-dots"></div>
                <div className="bg-gradient"></div>
                {children}
            </body>
        </html>
    );
}
