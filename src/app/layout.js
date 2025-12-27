import './globals.css';

export const metadata = {
    title: 'Souradip Biswas | AI/ML Developer & Researcher',
    description: 'AI-focused developer building applied systems in ML, NLP, and generative AI. Specializing in document intelligence, persona-based systems, and creative AI tooling.',
    keywords: 'AI Developer, Machine Learning, NLP, Applied AI, AI Systems, Software Engineer',
    authors: [{ name: 'Souradip Biswas' }],
    openGraph: {
        title: 'Souradip Biswas | AI/ML Developer',
        description: 'Building applied AI systems, not toy demos.',
        type: 'website',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
