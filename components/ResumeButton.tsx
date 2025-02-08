import Link from 'next/link';

const ResumeButton = () => {
  return (
    <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#0070f3',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: 1000, // Ensure it stays on top of other content
      }}>
      <Link
        href="/resume.pdf"
        target="_blank"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        My Resume
      </Link>
    </div>
  );
};

export default ResumeButton;
