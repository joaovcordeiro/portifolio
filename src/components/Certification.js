import Image from 'next/image'

const Certification = ({ title, date, institution, badge, link }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full md:w-[48%] p-4 flex flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            <img src={badge} alt={`${title} badge`} className="w-20 h-20 mb-4" />
            <h3 className="capitalize font-bold text-lg sm:text-xl text-center">{title}</h3>
            <span className="capitalize font-medium text-colors-dark/75 dark:text-colors-light/75 text-sm text-center">
                {date} | {institution}
            </span>
        </a>
    );
};




export default function Certifications() {
    return (
        <div className='my-24 w-full flex flex-col items-center'>
            <h2 className="mb-16 text-4xl font-bold uppercase text-colors-dark/75 text-center dark:text-colors-light/75">
                Certificações
            </h2>

            <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[90%] m:w-full">
                <Certification 
                    title="Google Cloud Engineer – Associate" 
                    date="Jul 2024" 
                    institution="Google Cloud" 
                    badge="images/certifications/google_associate_engineer.png" 
                    link="https://www.credly.com/badges/980c4ad9-0954-4fb2-bd29-d62a338e953c/public_url"
                />
                
            </div>
        </div>
    );
}