import Header from '../../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem',
      }}>
        {/* Photo on the left */}
        <div style={{ flex: 1 , transform: 'scale(0.5)'}}>
          <Image
            src="/photo.png" // Path to your photo in the public folder
            alt="My Photo"
            width={467}      // Adjust as needed
            height={608}     // Adjust as needed
            style={{ borderRadius: '8px' }} // Optional: Add rounded corners
          />
        </div>

        {/* Title and description on the right */}
        <div style={{
          flex: 2,
          fontSize: '1.2rem',
          lineHeight: '1.6'
        }}>
          <p>
          &emsp; Hello! My name is Dylan, I am from Hong Kong. I am currently a softmore studying computer science at New York University. 
          </p>

          <p>
            &emsp; Ouside of school, I like to do Brazillian Ju Jitsu, lift weights, and learn languages. 

          </p>
        </div>
    </div>
  );
}
