import React from 'react';
import useFirestore from '../hooks/useFirestore';
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {

    const { docs } = useFirestore('images');

    return (
        <div className="imgGrid">
            { docs && docs.map(doc => (
                <motion.div className="imgWrap" onClick={() => setSelectedImg(doc.url)} key={doc.id}
                    layout
                    whileHover={ {opacity: 0.8} }
                >
                    <LazyLoad height={200} offset={0} once={true}>
                        <motion.img
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ delay: 1 }}
                            src={doc.url} alt="uploaded pic" />
                    </LazyLoad>
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;