import Image from 'next/image'

const Certification = ({ title, date, institution, badge, link }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full flex flex-col items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative w-20 h-20 mb-4">
                <Image 
                    src={badge} 
                    alt={`${title} badge`}
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </div>
            <h3 className="capitalize font-bold text-base sm:text-lg lg:text-xl text-center mb-2">
                {title}
            </h3>
            <span className="capitalize font-medium text-colors-dark/75 dark:text-colors-light/75 text-xs sm:text-sm text-center">
                {date} | {institution}
            </span>
        </a>
    );
};

export default function Certifications() {
    return (
        <div className='my-12 sm:my-16 md:my-24 w-full flex flex-col items-center px-4 sm:px-8'>
            <h2 className="mb-8 sm:mb-12 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-colors-dark/75 text-center dark:text-colors-light/75">
                Certificações
            </h2>

            <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6 md:gap-8">
                <Certification 
                    title="Google Cloud Engineer – Associate" 
                    date="Jul 2024" 
                    institution="Google Cloud" 
                    badge="/images/certifications/google_associate_engineer.png" 
                    link="https://www.credly.com/badges/980c4ad9-0954-4fb2-bd29-d62a338e953c/public_url"
                />

            </div>
            
        </div>
    );
}