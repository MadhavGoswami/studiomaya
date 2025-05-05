import React from 'react';
import { InView } from 'react-intersection-observer';

type Publication = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type Props = {
  publication: Publication;
};

export const PublicationCard: React.FC<Props> = ({ publication }) => {
  return (
    <InView triggerOnce threshold={0.2}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full h-auto md:h-[500px] transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-[500px] h-[300px] md:h-[500px] overflow-hidden bg-white flex items-center justify-center md:justify-start">
            <img
              src={publication.imageUrl}
              alt={publication.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-start md:flex-1 h-full overflow-hidden md:pl-[50px] space-y-4">
            {/* Title */}
            <div
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-[200ms]`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center md:text-left">
                {publication.title}
              </h2>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-[400ms]`}
            >
              <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed text-center md:text-left">
                {publication.description.length > 120 ? (
                  <>
                    <span className="block md:hidden">
                      {publication.description.slice(0, 100)}...
                    </span>
                    <span className="hidden md:block">{publication.description}</span>
                  </>
                ) : (
                  publication.description
                )}
              </p>
            </div>

            {/* Button */}
            <div
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } delay-[600ms] flex justify-center md:justify-start`}
            >
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group relative overflow-hidden rounded-full border border-black px-6 py-3 text-base sm:text-lg font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
                style={{ width: '200px', textAlign: 'center' }}
              >
                <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-black transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Read More →</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};
