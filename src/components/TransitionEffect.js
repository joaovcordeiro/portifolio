import { motion } from 'framer-motion';

export default function TransitionEffect() {




    return (

        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-colors-primary'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-colors-light'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />

            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-colors-dark'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
        </>
    );
}
