 
import FadeInText from './FadeInText';


const Biography = ({
  name = "Glenn Coco",
  location = "Tampa",
  title = "Digital Creator & Videographer",
  intro = "shines a spotlight on the people, places, and flavors that deserve more love.",
  background = "With a background in mixology and over a decade in hospitality, Glenn has a natural eye for capturing the vibe of a place, whether it's a quiet neighborhood bar, a vibrant food vendor, or a local artist making waves.",
  approach = "His content bridges the gap between high quality visuals and real community storytelling. Known for his cinematic editing style and streetwise approach, Glenn's work brings attention to hidden gems that don't always have a spotlight but should.",
  journey = "From bartending to behind the camera, Glenn's journey has always been about connection, culture, and creativity. He has collaborated with small businesses, musicians, and event organizers across Tampa and beyond, helping them tell their stories, build their brand, and reach new audiences.",
  philosophy = "At the heart of it all, Glenn creates to celebrate what's real, what's local, and what moves people.",
  imageSrc = "/images/videographer.jpg",
  imageAlt = "Portrait of Glenn Coco"
}) => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 animate-fade-in">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-2xl shadow-2xl w-72 h-72 object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className=" flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
             <FadeInText>name</FadeInText> <h3 className='font-bold '>connection, culture, creativity</h3>
          </h2>
          <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-4">
            {location} based {title}
          </p>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {name} {intro}
            </p>
            <p>{background}</p>
            <p>{approach}</p>
            <p className=''>{journey}</p>
            <p className="italic">{philosophy}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
